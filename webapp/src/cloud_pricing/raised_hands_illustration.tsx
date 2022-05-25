import * as React from 'react';
import styled from 'styled-components';

import Icon from 'src/components/icons/svg';

const Svg = styled(Icon)`
    width: 110px;
    height: 100px;
`;

const RaisedHandsIllustration = (props: {className?: string}) => (
    <Svg
        className={props.className}
        fill='none'
        viewBox='0 0 110 100'
        xmlns='http://www.w3.org/2000/svg'
    >
        <g clipPath='url(#clip0_138_82933)'>
            <path
                d='M52.01 64.4c-2.21-2.96-3.96-3.55-7.24-2.47-1.27 1.09-2.96 1.62-4.02 2.98-.13.13-.26.25-.39.38-.68 1.21-1.89 2.04-2.46 3.31-1.03 2.32-2.84 3.05-5.3 3.4-3.82.54-7.39 1.94-9.73 5.37-.22.24-.29.59-.6.76.24-.28.42-.6.65-.89 3.05-4.4 7.27-6.86 12.55-7.58 1.38-.19 2.73-.48 2.67-2.34-.55-.47-.36-1.12-.43-1.7-1-8.95-.25-17.92-.37-26.88-.03-2.68-.63-5.01-3.45-6.1-2.57-.08-3.75 1.49-4.34 3.71-.13.5-.22 1-.28 1.51.09-1.52.08-3.05-.2-4.58-.71-.81-.34-1.83-.49-2.74-.42-2.56-1.68-4.11-4.44-4.1-3.12.8-3.99 3.26-4.09 6.01-.14 3.58-.43 7.16-.49 10.74-.09 5.46-.41 10.98 2.19 16.2-.89-.41-2.72 1.69-2.56-.87.47-7.6-.07-15.21.49-22.81.14-1.95.14-4.03-.97-5.85-.87-.33-1.72-.86-2.68-.27-3.89 2.17-4.38 5.82-4.05 9.71.2 2.3.07 4.51-.29 6.78a34.11 34.11 0 00-.4 4.14c.05-1.58.07-3.17.01-4.75-.09-2.53.46-5.3-1.34-7.58-.91-.01-1.72-.98-2.7-.25-1.22 1.4-2.39 2.92-2.65 4.76-.73 5.29-2.27 10.45-2.55 15.8-.47 9.24.4 18.29 3.09 27.24 1.57 5.23 4.51 8.71 9.4 10.46 6.13 2.2 12.38 3.36 18.37-.62 2.73-6.59 6.69-12.37 11.5-17.59 1.25-1.36 2.27-2.86 3.02-4.55.89-2.51 1.79-5.01 3.71-6.99.47-.46 1.06-.94.86-1.75zM28.89 41.86c.11-1.02.23-2.04.32-3.07-.02.75.02 1.5.12 2.25.19 1.49.39 3 .07 4.45-1.07 4.91-.42 9.7.92 14.55-1.67.03-2.62-.26-2.16-2.23.42-1.79.44-3.68.32-5.5-.24-3.5.02-6.96.41-10.45zM10.02 62.3c-.18.08-.31.15-.44.08.98-.77 1.18-1.87 1.23-3 .14-2.9.37-5.81.47-8.72-.04 2.4.22 4.79.86 7.15.89 3.23.96 3.21-2.12 4.49z'
                fill='#FFBC1F'
            />
            <path
                d='M33.9 32.64c-3.33 1.43-4.59 4.08-3.87 8.37.4 2.37.01 4.64-.25 6.99-.43 4.05-.35 8.15 1.65 11.93.19.37.29.79.55 1.5-2.09-.53-3.9-.98-5.58-1.41 2.04-3.26 1.26-6.78 1.28-10.16.05-5.57.56-11.09 1.39-16.59 1.47-1.27 3.08-1.48 4.83-.63z'
                fill='#CC8F00'
            />
            <path
                d='M47.46 73.15c-.21-3.82 2.09-6.33 4.55-8.75 1.13.96.46 1.91-.11 2.73-1.43 2.04-2.96 4.02-4.44 6.02z'
                fill='#FFC847'
            />
            <path
                d='M44.77 61.93c.32.14 1.07.18.23.66-1.4.81-2.83 1.55-4.25 2.32.74-1.8 2.26-2.55 4.02-2.98z'
                fill='#F7B527'
            />
            <path
                d='M38.63 66.54c-.2.22-.37.47-.48.77-.42 1.27-1.4 1.5-2.62 1.68-5.55.84-10.36 2.93-13.01 8.33-.64.57-1.16 1.19-.96 2.39.57-.72 1.02-1.28 1.46-1.84 2.76-3.39 6.44-4.88 10.68-5.37 1.16-.13 2.8.09 3.29-1.1 0 0 5.44-7.9 10.24-9.96-.01-.01-4.81-.68-8.6 5.1z'
                fill='#CC8F00'
            />
            <path
                d='M32.31 95.01c-6.03 3.48-12.11 2.31-18.08 0-3.13-1.22-6.05-3.09-7.26-6.45-4.68-13.03-5.64-26.34-2.71-39.9.71-3.28.84-6.73 2.5-9.74.46-.64 1.4-1.39 3.2-1.02 0 0-2.47-1.71-4.74.93-.05.04-.1.11-.15.17l-.02.02c-.75.91-1.15 2.09-1.54 3.24C1.76 47.44 1.27 52.87.96 58.27.55 65.34.4 72.48 2.63 79.32c1.08 3.36 2.01 6.69 2.02 10.22.01 2.39 1.01 4.18 2.97 5.51 5 3.38 10.53 5.16 16.54 4.93 3.55-.14 6.95-1.07 8.77-4.69-.2-.1-.5-.35-.62-.28z'
                fill='#CC8F00'
            />
            <path
                d='M18.72 29.85s-2.8-2.19-6.33 1.13c-.89.78-1.4 1.91-1.73 3.6-.22 1.11-.46 2.21-.69 3.31 1.02 5.64.68 11.32.29 16.97-.21 3.08 1.02 6.69-2.85 8.76 2.23-.52 4.19-1.21 6.17-1.82.8-.25 1.39-.49.68-1.38-2.32-2.89-2-6.37-2.2-9.74-.18-3 1.19-5.91.83-8.83-.46-3.65-.44-7.06 1.37-10.04.4-.6 2.02-2.72 4.46-1.96zM27.1 27.38s-2.07-2.1-5.15-.85c-.21.07-.41.17-.59.28-.01.01-.03.01-.04.02-1.09.66-1.84 1.85-2.6 3.02.45 4.62.13 9.23-.02 13.84-.07 2.35-.33 4.69-.12 7.06.29 3.36.71 6.78-1.4 10.26 2.23-1.05 4.44-.09 6.42-1.41-1.64-1.62-2.46-3.36-2.82-5.56-1.12-6.85-.07-13.67-.1-20.5-.01-2.37.54-4.42 2.08-5.99.62-.57 2.08-1.46 4.34-.17z'
                fill='#CC8F00'
            />
            <path
                d='M58.84 66.16c1.92 1.98 2.82 4.48 3.71 6.99.74 1.69 1.76 3.19 3.02 4.55 4.82 5.22 8.77 11.01 11.5 17.59 5.99 3.98 12.24 2.82 18.37.62 4.89-1.75 7.83-5.23 9.4-10.46 2.69-8.96 3.56-18 3.09-27.24-.27-5.35-1.82-10.51-2.55-15.8-.25-1.85-1.43-3.36-2.65-4.76-.97-.73-1.79.24-2.7.25-1.8 2.28-1.25 5.05-1.34 7.58-.06 1.58-.04 3.16.01 4.75-.04-1.38-.18-2.76-.4-4.14-.36-2.27-.49-4.49-.29-6.78.33-3.89-.16-7.54-4.05-9.71-.96-.59-1.81-.06-2.68.27-1.11 1.82-1.11 3.9-.97 5.85.56 7.6.02 15.21.49 22.81.16 2.56-1.68.46-2.56.87 2.6-5.22 2.28-10.74 2.19-16.2-.06-3.58-.35-7.16-.49-10.74-.1-2.75-.97-5.21-4.09-6.01-2.75-.01-4.01 1.54-4.44 4.1-.15.91.23 1.93-.49 2.74-.28 1.53-.29 3.06-.2 4.58-.06-.51-.14-1.01-.28-1.51-.59-2.22-1.77-3.79-4.34-3.71-2.82 1.09-3.41 3.42-3.45 6.1-.11 8.96.63 17.93-.38 26.87-.07.59.12 1.24-.43 1.7-.06 1.86 1.29 2.15 2.67 2.34 5.28.72 9.5 3.18 12.55 7.58.22.29.4.62.65.89-.3-.17-.38-.51-.6-.76-2.34-3.42-5.91-4.83-9.73-5.37-2.46-.35-4.26-1.08-5.3-3.4-.57-1.28-1.78-2.1-2.46-3.31-.13-.13-.26-.25-.39-.38-1.06-1.37-2.75-1.89-4.02-2.98-3.27-1.09-5.03-.49-7.24 2.47-.18.81.41 1.29.87 1.76zm22.68-13.84c-.12 1.82-.1 3.71.32 5.5.46 1.96-.49 2.26-2.16 2.23 1.34-4.85 1.99-9.64.92-14.55-.32-1.45-.12-2.97.07-4.45.09-.75.14-1.5.12-2.25.09 1.03.21 2.05.32 3.07.39 3.48.65 6.94.41 10.45zm16.33 5.49c.64-2.36.9-4.75.86-7.15.11 2.91.33 5.81.47 8.72.06 1.13.26 2.24 1.23 3-.12.07-.25 0-.44-.08-3.07-1.28-3-1.26-2.12-4.49z'
                fill='#FFBC1F'
            />
            <path
                d='M76.11 32.64c3.33 1.43 4.59 4.08 3.87 8.37-.4 2.37-.01 4.64.25 6.99.43 4.05.35 8.15-1.65 11.93-.19.37-.29.79-.55 1.5 2.09-.53 3.9-.98 5.58-1.41-2.04-3.26-1.26-6.78-1.28-10.16-.05-5.57-.56-11.09-1.39-16.59-1.48-1.27-3.09-1.48-4.83-.63z'
                fill='#CC8F00'
            />
            <path
                d='M62.54 73.15c.21-3.82-2.09-6.33-4.55-8.75-1.13.96-.46 1.91.11 2.73 1.44 2.04 2.96 4.02 4.44 6.02z'
                fill='#FFC847'
            />
            <path
                d='M65.23 61.93c-.32.14-1.07.18-.23.66 1.4.81 2.83 1.55 4.25 2.32-.74-1.8-2.26-2.55-4.02-2.98z'
                fill='#F7B527'
            />
            <path
                d='M71.37 66.54c.2.22.37.47.48.77.42 1.27 1.4 1.5 2.62 1.68 5.55.84 10.36 2.93 13.01 8.33.64.57 1.16 1.19.96 2.39-.57-.72-1.02-1.28-1.46-1.84-2.76-3.39-6.44-4.88-10.68-5.37-1.16-.13-2.8.09-3.29-1.1 0 0-5.44-7.9-10.24-9.96.01-.01 4.81-.68 8.6 5.1z'
                fill='#CC8F00'
            />
            <path
                d='M77.69 95.01c6.03 3.48 12.11 2.31 18.08 0 3.13-1.22 6.05-3.09 7.26-6.45 4.68-13.03 5.64-26.34 2.71-39.9-.71-3.28-.84-6.73-2.5-9.74-.46-.64-1.4-1.39-3.2-1.02 0 0 2.47-1.71 4.74.93.06.06.11.12.17.19l.02.02c.75.91 1.15 2.09 1.54 3.24 1.75 5.18 2.24 10.61 2.55 16.01.41 7.07.56 14.21-1.67 21.05-1.09 3.36-2.02 6.69-2.03 10.22-.01 2.39-1.01 4.18-2.97 5.51-5 3.38-10.53 5.16-16.54 4.93-3.55-.14-6.95-1.07-8.77-4.69.19-.12.49-.37.61-.3z'
                fill='#CC8F00'
            />
            <path
                d='M91.28 29.85s2.8-2.19 6.33 1.13c.89.78 1.4 1.91 1.73 3.6.22 1.11.46 2.21.69 3.31-1.02 5.64-.68 11.32-.29 16.97.21 3.08-1.02 6.69 2.85 8.76-2.23-.52-4.19-1.21-6.17-1.82-.8-.25-1.39-.49-.68-1.38 2.32-2.89 2-6.37 2.2-9.74.18-3-1.19-5.91-.83-8.83.46-3.65.44-7.06-1.37-10.04-.4-.6-2.02-2.72-4.46-1.96z'
                fill='#CC8F00'
            />
            <path
                d='M82.9 27.38s2.07-2.1 5.15-.85c.21.07.41.17.59.28.01.01.03.01.04.02 1.09.66 1.84 1.85 2.6 3.02-.45 4.62-.13 9.23.02 13.84.07 2.35.33 4.69.12 7.06-.29 3.36-.71 6.78 1.4 10.26-2.23-1.05-4.44-.09-6.42-1.41 1.64-1.62 2.46-3.36 2.82-5.56 1.12-6.85.07-13.67.1-20.5.01-2.37-.54-4.42-2.08-5.99-.62-.57-2.08-1.46-4.34-.17z'
                fill='#CC8F00'
            />
            <path
                d='M32.35 12.07l-1.12 2.39c-.67 1.42-.49 3.09.45 4.35L42.7 33.49c.24.32.74.09.65-.3-.82-3.69-3.4-13.17-9.55-21.29a.858.858 0 00-1.45.17zM45.99 16.98s-1.56-1.1-2.33.51c-.54 1.13 1.6 5.23 2.9 7.55.25.44.91.25.89-.25-.1-2.66-.44-7.27-1.46-7.81zM53.89.1l-.84.12a2.179 2.179 0 00-1.84 2.47l3.75 26.19c.05.33.52.33.57 0l3.75-26.19C59.45 1.5 58.63.4 57.44.22L56.59.1c-.89-.13-1.8-.13-2.7 0zM78.14 12.07l1.12 2.39c.67 1.42.49 3.09-.45 4.35L67.79 33.49c-.24.32-.74.09-.65-.3.82-3.69 3.4-13.17 9.55-21.29.38-.5 1.18-.41 1.45.17zM64.49 16.98s1.56-1.1 2.33.51c.54 1.13-1.6 5.23-2.9 7.55-.25.44-.91.25-.89-.25.11-2.66.45-7.27 1.46-7.81z'
                fill='var(--center-channel-color)'
            />
        </g>
        <defs>
            <clipPath id='clip0_138_82933'>
                <path
                    fill='var(--center-channel-bg)'
                    transform='translate(.71)'
                    d='M0 0H108.58V100H0z'
                />
            </clipPath>
        </defs>
    </Svg>
);

export default RaisedHandsIllustration;