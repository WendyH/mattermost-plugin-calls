// Copyright (c) 2022-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

package main

import (
	"testing"

	"github.com/mattermost/mattermost/server/public/model"
	"github.com/stretchr/testify/require"
)

func TestConfigurationIsValid(t *testing.T) {
	var defaultConfig configuration
	defaultConfig.SetDefaults()

	tcs := []struct {
		name  string
		input configuration
		err   string
	}{
		{
			name:  "empty",
			input: configuration{},
			err:   "UDPServerPort should not be nil",
		},
		{
			name: "invalid UDPServerAddress",
			input: func() configuration {
				var cfg configuration
				cfg.SetDefaults()
				cfg.UDPServerAddress = "invalid"
				return cfg
			}(),
			err: "UDPServerAddress parsing failed",
		},
		{
			name: "missing UDPServerPort",
			input: func() configuration {
				var cfg configuration
				cfg.SetDefaults()
				cfg.UDPServerPort = nil
				return cfg
			}(),
			err: "UDPServerPort should not be nil",
		},
		{
			name: "UDPServerPort not in range",
			input: func() configuration {
				var cfg configuration
				cfg.SetDefaults()
				cfg.UDPServerPort = model.NewInt(45)
				return cfg
			}(),
			err: "UDPServerPort is not valid: 45 is not in allowed range [80, 49151]",
		},
		{
			name: "udp port in range",
			input: func() configuration {
				var cfg configuration
				cfg.SetDefaults()
				cfg.UDPServerPort = model.NewInt(443)
				return cfg
			}(),
		},
		{
			name: "invalid MaxCallParticipants",
			input: func() configuration {
				var cfg configuration
				cfg.SetDefaults()
				cfg.MaxCallParticipants = model.NewInt(-1)
				return cfg
			}(),
			err: "MaxCallParticipants is not valid",
		},
		{
			name: "invalid TURNCredentialsExpirationMinutes",
			input: func() configuration {
				var cfg configuration
				cfg.SetDefaults()
				cfg.TURNCredentialsExpirationMinutes = model.NewInt(-1)
				return cfg
			}(),
			err: "TURNCredentialsExpirationMinutes is not valid",
		},
		{
			name: "MaxRecordingDuration not in range",
			input: func() configuration {
				var cfg configuration
				cfg.SetDefaults()
				cfg.MaxRecordingDuration = model.NewInt(1)
				return cfg
			}(),
			err: "MaxRecordingDuration is not valid: range should be [15, 180]",
		},
		{
			name: "invalid RecordingQuality",
			input: func() configuration {
				var cfg configuration
				cfg.SetDefaults()
				cfg.RecordingQuality = "invalid"
				return cfg
			}(),
			err: "RecordingQuality is not valid",
		},
		{
			name:  "defaults",
			input: defaultConfig,
		},
	}

	for _, tc := range tcs {
		t.Run(tc.name, func(t *testing.T) {
			err := tc.input.IsValid()
			if tc.err == "" {
				require.NoError(t, err)
			} else {
				require.EqualError(t, err, tc.err)
			}
		})
	}
}

func TestGetClientConfig(t *testing.T) {
	cfg := &configuration{}
	cfg.SetDefaults()
	clientCfg := cfg.getClientConfig()

	// defaults
	require.Equal(t, model.NewBool(true), clientCfg.AllowEnableCalls)
	require.Equal(t, cfg.AllowEnableCalls, clientCfg.AllowEnableCalls)
	require.Equal(t, model.NewBool(false), clientCfg.DefaultEnabled)
	require.Equal(t, cfg.DefaultEnabled, clientCfg.DefaultEnabled)

	*cfg.AllowEnableCalls = false
	*cfg.DefaultEnabled = true
	clientCfg = cfg.getClientConfig()
	require.Equal(t, true, *clientCfg.AllowEnableCalls)
	require.Equal(t, cfg.DefaultEnabled, clientCfg.DefaultEnabled)
}
