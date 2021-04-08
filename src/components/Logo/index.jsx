import React from 'react'
import { Link } from '@reach/router'
import { Svg, SvgWrapper } from './styles'

const Logo = (props) => {
  return (
    <SvgWrapper>
      <Link to='/'>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="25.056 11.11 449.888 127.78"
          style={{
            background: '#000'
          }}
          preserveAspectRatio="xMidYMid"
          {...props}
        >
          <defs>
            <linearGradient
              id="prefix__editing-shadow-gradient1"
              x1={0}
              x2={0}
              y1={0}
              y2={1}
            >
              <stop offset={0} stopOpacity={0} />
              <stop offset={0.2} stopOpacity={0} />
              <stop offset={1} />
            </linearGradient>
            <linearGradient
              id="prefix__editing-shadow-gradient2"
              x1={-0.255}
              x2={1.255}
              y1={-0.156}
              y2={1.156}
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={1} stopColor="#fff" />
            </linearGradient>
            <filter
              id="prefix__editing-shadow"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feGaussianBlur stdDeviation={2} />
              <feComposite operator="in" in2="SourceGraphic" />
              <feGaussianBlur stdDeviation={1} />
            </filter>
          </defs>
          <g
            filter="url(#prefix__editing-shadow)"
            transform="matrix(1 0 1 1 229.6 73.8)"
          >
            <path
              d="M26.13-41.16v37.07q0 2.4-1.27 3.5Q23.59.5 21 .5q-2.62 0-3.87-1.09-1.25-1.1-1.25-3.5v-37.38q0-1.72-2.38-1.72-1.72 0-3.48.52-1.77.51-3.19 1.4-1.42.89-2.33 2.13-.91 1.23-.91 2.67 0 1 .27 1.59.27.6.61.9.34.29.7.37.36.08.52.08.78 0 1.28-.27.5-.26.91-.56.4-.3.76-.56.36-.27.83-.27.37 0 .8.17.42.18.78.55.36.38.61.99.25.6.25 1.48 0 1.25-.49 2.16-.48.9-1.25 1.51-.76.61-1.75.91-.98.29-1.95.29-1.5 0-2.7-.51-1.21-.52-2.05-1.42-.84-.91-1.28-2.13Q0-32.41 0-33.78q0-2.6.97-4.58t2.73-3.42q1.77-1.44 4.24-2.39 2.47-.96 5.47-1.52 3-.56 6.42-.79 3.42-.24 7.11-.24 8.94 0 13.53 3.42t4.59 9.83q0 3.13-.83 5.53-.82 2.41-2.21 4.14-1.39 1.74-3.21 2.82-1.81 1.07-3.75 1.54-1.93.47-3.89.38-1.95-.1-3.64-.72l.44-1.35q2.34.72 3.86.05 1.51-.67 2.37-2.39.86-1.72 1.19-4.34.33-2.63.33-5.78 0-2.38-.5-4.33-.5-1.96-1.36-3.33-.86-1.38-2-2.14-1.14-.77-2.42-.77-1 0-1.64.3-.64.3-1 .75t-.5.97q-.14.51-.17.98zm42.59 19.53l-12.34 7.29q0 1 .29 2.17.3 1.17.86 2.36.56 1.18 1.39 2.26.83 1.08 1.91 1.92 1.08.85 2.39 1.35 1.31.5 2.87.5 1.1 0 2.04-.25.93-.25 1.75-.69.81-.44 1.56-1.01.75-.58 1.5-1.24l.78.75q-.72.97-1.84 2.13-1.13 1.15-2.72 2.17-1.6 1.01-3.72 1.69-2.13.67-4.85.67-2.71 0-5.29-.99-2.58-.98-4.58-2.95-2-1.97-3.2-4.91-1.21-2.93-1.21-6.87 0-2.85.72-5.22.72-2.38 1.95-4.28 1.24-1.91 2.88-3.35 1.64-1.43 3.45-2.39 1.82-.95 3.71-1.43 1.89-.49 3.64-.49 2.31 0 4.03.5 1.72.5 2.86 1.35 1.14.84 1.7 1.95.56 1.11.56 2.33 0 1.47-.84 2.64-.84 1.17-2.25 2.04zm-12.66 4.72l6.6-3.78q.4-.25.67-.48.26-.24.42-.56.16-.33.23-.82.08-.48.08-1.2 0-.78-.17-1.73-.17-.96-.58-1.8-.4-.85-1.03-1.41-.62-.56-1.5-.56-1.12 0-1.92.67-.8.67-1.31 1.74-.52 1.06-.82 2.42-.29 1.36-.45 2.73-.15 1.38-.19 2.64-.03 1.27-.03 2.14zm36.85-12.84h-4.85v23.09q0 1.66.63 2.3.62.64 1.72.64.84 0 1.5-.47.65-.47 1.12-1.06.56-.66.97-1.53l.97.44q-.47 1-1.11 2.18-.64 1.19-1.7 2.21-1.07 1.01-2.68 1.7-1.6.69-4.04.69-1.38 0-2.64-.41-1.27-.41-2.25-1.28-.99-.88-1.58-2.19-.59-1.31-.59-3.15v-23.16h-3.5V-32q.87 0 2.43-.45 1.57-.46 3.21-1.52t3.04-2.84q1.41-1.78 2-4.41h2.5V-32h5.1q2.5 0 2.5-.84 0-.32-.32-.43-.31-.11-.7-.28-.39-.17-.7-.48-.31-.31-.31-1.03 0-.88.54-1.38.55-.5 1.42-.5.57 0 .99.24.42.23.7.62.28.39.42.89.14.5.14 1 0 2.03-1.17 3.24-1.17 1.2-3.76 1.2zm4.62 10.09q0-3.18 1.11-5.57 1.11-2.4 2.99-4 1.87-1.61 4.34-2.41 2.47-.8 5.19-.8t5.15.72q2.44.72 4.32 2.22.59-.91.96-1.91.38-1 .38-2 0-1.31-.7-2.09-.71-.78-1.8-.78v-.91l1.22-.39q.53-.17.97-.26.43-.1.87-.14.44-.05.97-.05 1.47 0 2.25.9.78.91.78 2.5 0 .94-.44 1.86-.43.93-1.09 1.77-.66.84-1.45 1.59-.8.75-1.52 1.32 1.31 1.5 2.03 3.5.72 2 .72 4.56 0 3.22-1.11 5.69-1.11 2.46-2.98 4.15-1.88 1.69-4.35 2.55-2.46.86-5.18.86-1.6 0-3.13-.28-1.53-.28-2.87-.82-.5.38-.86.94-.36.56-.36 1.25 0 1.16 1 1.72t2.65.81q1.66.25 3.75.32 2.1.06 4.3.2 2.2.14 4.3.53 2.09.39 3.75 1.28 1.65.89 2.65 2.42 1 1.54 1 3.97 0 1.78-.75 3.21-.75 1.42-2.01 2.5-1.27 1.07-2.94 1.84t-3.53 1.25q-1.86.48-3.78.7-1.92.22-3.67.22-3.19 0-5.74-.33-2.54-.32-4.33-1.01-1.78-.69-2.75-1.78-.96-1.1-.96-2.63 0-1.09.5-2.01.5-.93 1.32-1.69.83-.77 1.86-1.38 1.03-.61 2.1-1.14-1.57-.65-2.61-1.98Q99 0 99-2.19q0-1.15.41-2.14.4-.98 1.04-1.81.64-.83 1.41-1.5.77-.67 1.48-1.14-1.28-.75-2.36-1.83-1.07-1.08-1.84-2.44-.76-1.36-1.19-3.01-.42-1.66-.42-3.6zm17.85-.25q0-1.81-.19-3.53-.19-1.72-.66-3.06-.47-1.34-1.28-2.17-.81-.83-2.09-.83-1.28 0-2.1.86-.81.86-1.28 2.25-.47 1.39-.65 3.16-.19 1.76-.19 3.57 0 1.85.19 3.63.18 1.78.65 3.19.47 1.4 1.28 2.26.82.86 2.1.86 1.28 0 2.09-.91.81-.9 1.28-2.35.47-1.46.66-3.27.19-1.81.19-3.66zm4.75 27.97q0-1-.79-1.64-.78-.64-2.04-1.03-1.27-.39-2.88-.59-1.61-.21-3.26-.32-1.66-.1-3.22-.2-1.56-.09-2.72-.25-.66.47-1.27 1.02-.61.54-1.06 1.15-.45.61-.73 1.28-.28.68-.28 1.36 0 1.19.68 1.99.69.8 1.86 1.26 1.17.47 2.72.66 1.55.19 3.27.19 2.28 0 4.09-.39t3.06-1.07q1.25-.67 1.91-1.54.66-.88.66-1.88zm21.34-33.9q1.19-1.82 2.53-3.29.56-.62 1.22-1.21.66-.6 1.36-1.07.7-.47 1.45-.75t1.5-.28q1.6 0 2.5.96.91.95.91 2.67 0 1.06-.17 2.04-.18.99-.68 2.39h-.87q-.19-.96-.88-1.6-.68-.65-2-.65-.96 0-1.9.36t-1.83.89q-.89.54-1.69 1.16-.79.63-1.45 1.19v20.28q0 .41-.13.97-.12.56-.61 1.06-.48.5-1.43.86-.96.36-2.61.36-1.66 0-2.61-.39t-1.45-.92q-.5-.53-.63-1.1-.12-.56-.12-.9v-24.13q0-.9-.43-1.58-.42-.67-1.42-.67-.53 0-.9.19-.38.19-.82.53l-.65-.78q.72-.59 1.61-1.17.89-.58 1.92-1.02 1.03-.44 2.22-.72 1.18-.28 2.5-.28 1.34 0 2.29.36.96.36 1.57.94.61.58.95 1.3.34.71.51 1.45.18.73.21 1.41.03.67.03 1.14zm28.87 17.28v-7.63q0-.78-.5-1.19-.5-.4-1.28-.4-1.09 0-2.08.5-.98.5-1.73 1.47t-1.19 2.39q-.43 1.42-.43 3.29 0 1.82.26 3 .27 1.19.72 1.9.45.7 1.05.98.59.28 1.25.28.81 0 1.53-.42t1.25-1.08q.53-.66.84-1.47.31-.81.31-1.62zm-4.96-21.32q-1.07 0-1.97.25-.91.25-1.57.63-.65.37-1.03.83-.37.45-.37.86 0 .47.48.67.49.2 1.08.47.59.26 1.08.75.48.48.48 1.48 0 .66-.26 1.21-.27.54-.72.96-.45.43-1.06.66-.61.23-1.27.23-1.75 0-2.83-1.18-1.08-1.19-1.08-3.16 0-1.91 1-3.26 1-1.36 2.61-2.24 1.61-.87 3.64-1.3 2.04-.42 4.07-.42 2.43 0 4.65.53t3.92 1.69q1.71 1.16 2.72 2.94 1.02 1.78 1.02 4.31v17.66q0 .28.03.62.03.35.16.63.12.28.37.47.25.18.72.18.56 0 1.05-.42.48-.42.86-.86l.78.66q-.47.65-1.13 1.44-.65.78-1.59 1.46-.94.69-2.19 1.16t-2.84.47q-1.97 0-3.5-1.17t-2-3.61q-1 1.34-2.08 2.25-1.08.9-2.2 1.47-1.13.56-2.27.81-1.14.25-2.3.25-1.5 0-2.9-.47-1.41-.47-2.52-1.48-1.11-1.02-1.78-2.64-.67-1.63-.67-3.97 0-2.85 1.12-4.66 1.13-1.81 2.96-3.05 1.83-1.23 4.15-2.11 2.33-.87 4.77-1.84 1.81-.72 2.64-2.14.83-1.42.83-2.92 0-2.31-1.36-3.7-1.36-1.4-3.7-1.4zm49.46 6.19v20.94q0 .41-.12.97-.13.56-.61 1.06t-1.45.86q-.97.36-2.63.36-1.65 0-2.61-.39-.95-.39-1.44-.92-.48-.53-.6-1.1-.13-.56-.13-.9v-22.1q0-.43-.12-.89-.13-.45-.38-.83-.25-.37-.62-.6-.38-.24-.88-.24-.84 0-1.66.49-.81.48-1.51 1.1-.7.63-1.22 1.25-.52.63-.73.94v20.94q0 .41-.13.97-.12.56-.61 1.06-.48.5-1.44.86-.95.36-2.61.36-1.65 0-2.61-.39-.95-.39-1.45-.92t-.62-1.1q-.13-.56-.13-.9v-24.13q0-.9-.42-1.58-.42-.67-1.42-.67-.53 0-.91.19-.37.19-.81.53l-.66-.78q.72-.59 1.61-1.17.89-.58 1.92-1.02 1.04-.44 2.22-.72 1.19-.28 2.5-.28 2.03 0 3.16.67 1.12.68 1.66 1.61.53.94.64 1.96.11 1.01.11 1.7 1.46-1.66 3.15-2.97.69-.56 1.52-1.09.83-.53 1.7-.96.88-.42 1.81-.67.94-.25 1.88-.25 1.81 0 3.09.66 1.28.65 2.06 1.58.79.92 1.14 1.93.36 1.02.36 1.77 1.5-1.66 3.16-2.97.69-.56 1.5-1.09t1.7-.96q.89-.42 1.82-.67.92-.25 1.86-.25 1.81 0 3.09.67 1.28.68 2.06 1.77.78 1.09 1.14 2.47.36 1.37.36 2.75v19.34q0 .28.03.61.03.33.16.63.12.29.39.48t.7.19q.6 0 1.07-.42.46-.43.87-.86l.75.65q-.44.66-1.16 1.46-.71.79-1.7 1.51-.98.72-2.28 1.21-1.3.48-2.92.48-1.38 0-2.39-.36-1.02-.36-1.72-.97t-1.05-1.44q-.34-.82-.34-1.76v-20.88q0-.43-.13-.89-.12-.45-.36-.83-.23-.37-.61-.6-.37-.24-.87-.24-.84 0-1.67.49-.83.48-1.53 1.1-.71.63-1.21 1.25-.5.63-.72.94z"
              fill="url(#prefix__editing-shadow-gradient1)"
              transform="translate(-117.969 31)"
            />
          </g>
          <path
            d="M26.13-41.16v37.07q0 2.4-1.27 3.5Q23.59.5 21 .5q-2.62 0-3.87-1.09-1.25-1.1-1.25-3.5v-37.38q0-1.72-2.38-1.72-1.72 0-3.48.52-1.77.51-3.19 1.4-1.42.89-2.33 2.13-.91 1.23-.91 2.67 0 1 .27 1.59.27.6.61.9.34.29.7.37.36.08.52.08.78 0 1.28-.27.5-.26.91-.56.4-.3.76-.56.36-.27.83-.27.37 0 .8.17.42.18.78.55.36.38.61.99.25.6.25 1.48 0 1.25-.49 2.16-.48.9-1.25 1.51-.76.61-1.75.91-.98.29-1.95.29-1.5 0-2.7-.51-1.21-.52-2.05-1.42-.84-.91-1.28-2.13Q0-32.41 0-33.78q0-2.6.97-4.58t2.73-3.42q1.77-1.44 4.24-2.39 2.47-.96 5.47-1.52 3-.56 6.42-.79 3.42-.24 7.11-.24 8.94 0 13.53 3.42t4.59 9.83q0 3.13-.83 5.53-.82 2.41-2.21 4.14-1.39 1.74-3.21 2.82-1.81 1.07-3.75 1.54-1.93.47-3.89.38-1.95-.1-3.64-.72l.44-1.35q2.34.72 3.86.05 1.51-.67 2.37-2.39.86-1.72 1.19-4.34.33-2.63.33-5.78 0-2.38-.5-4.33-.5-1.96-1.36-3.33-.86-1.38-2-2.14-1.14-.77-2.42-.77-1 0-1.64.3-.64.3-1 .75t-.5.97q-.14.51-.17.98zm42.59 19.53l-12.34 7.29q0 1 .29 2.17.3 1.17.86 2.36.56 1.18 1.39 2.26.83 1.08 1.91 1.92 1.08.85 2.39 1.35 1.31.5 2.87.5 1.1 0 2.04-.25.93-.25 1.75-.69.81-.44 1.56-1.01.75-.58 1.5-1.24l.78.75q-.72.97-1.84 2.13-1.13 1.15-2.72 2.17-1.6 1.01-3.72 1.69-2.13.67-4.85.67-2.71 0-5.29-.99-2.58-.98-4.58-2.95-2-1.97-3.2-4.91-1.21-2.93-1.21-6.87 0-2.85.72-5.22.72-2.38 1.95-4.28 1.24-1.91 2.88-3.35 1.64-1.43 3.45-2.39 1.82-.95 3.71-1.43 1.89-.49 3.64-.49 2.31 0 4.03.5 1.72.5 2.86 1.35 1.14.84 1.7 1.95.56 1.11.56 2.33 0 1.47-.84 2.64-.84 1.17-2.25 2.04zm-12.66 4.72l6.6-3.78q.4-.25.67-.48.26-.24.42-.56.16-.33.23-.82.08-.48.08-1.2 0-.78-.17-1.73-.17-.96-.58-1.8-.4-.85-1.03-1.41-.62-.56-1.5-.56-1.12 0-1.92.67-.8.67-1.31 1.74-.52 1.06-.82 2.42-.29 1.36-.45 2.73-.15 1.38-.19 2.64-.03 1.27-.03 2.14zm36.85-12.84h-4.85v23.09q0 1.66.63 2.3.62.64 1.72.64.84 0 1.5-.47.65-.47 1.12-1.06.56-.66.97-1.53l.97.44q-.47 1-1.11 2.18-.64 1.19-1.7 2.21-1.07 1.01-2.68 1.7-1.6.69-4.04.69-1.38 0-2.64-.41-1.27-.41-2.25-1.28-.99-.88-1.58-2.19-.59-1.31-.59-3.15v-23.16h-3.5V-32q.87 0 2.43-.45 1.57-.46 3.21-1.52t3.04-2.84q1.41-1.78 2-4.41h2.5V-32h5.1q2.5 0 2.5-.84 0-.32-.32-.43-.31-.11-.7-.28-.39-.17-.7-.48-.31-.31-.31-1.03 0-.88.54-1.38.55-.5 1.42-.5.57 0 .99.24.42.23.7.62.28.39.42.89.14.5.14 1 0 2.03-1.17 3.24-1.17 1.2-3.76 1.2zm4.62 10.09q0-3.18 1.11-5.57 1.11-2.4 2.99-4 1.87-1.61 4.34-2.41 2.47-.8 5.19-.8t5.15.72q2.44.72 4.32 2.22.59-.91.96-1.91.38-1 .38-2 0-1.31-.7-2.09-.71-.78-1.8-.78v-.91l1.22-.39q.53-.17.97-.26.43-.1.87-.14.44-.05.97-.05 1.47 0 2.25.9.78.91.78 2.5 0 .94-.44 1.86-.43.93-1.09 1.77-.66.84-1.45 1.59-.8.75-1.52 1.32 1.31 1.5 2.03 3.5.72 2 .72 4.56 0 3.22-1.11 5.69-1.11 2.46-2.98 4.15-1.88 1.69-4.35 2.55-2.46.86-5.18.86-1.6 0-3.13-.28-1.53-.28-2.87-.82-.5.38-.86.94-.36.56-.36 1.25 0 1.16 1 1.72t2.65.81q1.66.25 3.75.32 2.1.06 4.3.2 2.2.14 4.3.53 2.09.39 3.75 1.28 1.65.89 2.65 2.42 1 1.54 1 3.97 0 1.78-.75 3.21-.75 1.42-2.01 2.5-1.27 1.07-2.94 1.84t-3.53 1.25q-1.86.48-3.78.7-1.92.22-3.67.22-3.19 0-5.74-.33-2.54-.32-4.33-1.01-1.78-.69-2.75-1.78-.96-1.1-.96-2.63 0-1.09.5-2.01.5-.93 1.32-1.69.83-.77 1.86-1.38 1.03-.61 2.1-1.14-1.57-.65-2.61-1.98Q99 0 99-2.19q0-1.15.41-2.14.4-.98 1.04-1.81.64-.83 1.41-1.5.77-.67 1.48-1.14-1.28-.75-2.36-1.83-1.07-1.08-1.84-2.44-.76-1.36-1.19-3.01-.42-1.66-.42-3.6zm17.85-.25q0-1.81-.19-3.53-.19-1.72-.66-3.06-.47-1.34-1.28-2.17-.81-.83-2.09-.83-1.28 0-2.1.86-.81.86-1.28 2.25-.47 1.39-.65 3.16-.19 1.76-.19 3.57 0 1.85.19 3.63.18 1.78.65 3.19.47 1.4 1.28 2.26.82.86 2.1.86 1.28 0 2.09-.91.81-.9 1.28-2.35.47-1.46.66-3.27.19-1.81.19-3.66zm4.75 27.97q0-1-.79-1.64-.78-.64-2.04-1.03-1.27-.39-2.88-.59-1.61-.21-3.26-.32-1.66-.1-3.22-.2-1.56-.09-2.72-.25-.66.47-1.27 1.02-.61.54-1.06 1.15-.45.61-.73 1.28-.28.68-.28 1.36 0 1.19.68 1.99.69.8 1.86 1.26 1.17.47 2.72.66 1.55.19 3.27.19 2.28 0 4.09-.39t3.06-1.07q1.25-.67 1.91-1.54.66-.88.66-1.88zm21.34-33.9q1.19-1.82 2.53-3.29.56-.62 1.22-1.21.66-.6 1.36-1.07.7-.47 1.45-.75t1.5-.28q1.6 0 2.5.96.91.95.91 2.67 0 1.06-.17 2.04-.18.99-.68 2.39h-.87q-.19-.96-.88-1.6-.68-.65-2-.65-.96 0-1.9.36t-1.83.89q-.89.54-1.69 1.16-.79.63-1.45 1.19v20.28q0 .41-.13.97-.12.56-.61 1.06-.48.5-1.43.86-.96.36-2.61.36-1.66 0-2.61-.39t-1.45-.92q-.5-.53-.63-1.1-.12-.56-.12-.9v-24.13q0-.9-.43-1.58-.42-.67-1.42-.67-.53 0-.9.19-.38.19-.82.53l-.65-.78q.72-.59 1.61-1.17.89-.58 1.92-1.02 1.03-.44 2.22-.72 1.18-.28 2.5-.28 1.34 0 2.29.36.96.36 1.57.94.61.58.95 1.3.34.71.51 1.45.18.73.21 1.41.03.67.03 1.14zm28.87 17.28v-7.63q0-.78-.5-1.19-.5-.4-1.28-.4-1.09 0-2.08.5-.98.5-1.73 1.47t-1.19 2.39q-.43 1.42-.43 3.29 0 1.82.26 3 .27 1.19.72 1.9.45.7 1.05.98.59.28 1.25.28.81 0 1.53-.42t1.25-1.08q.53-.66.84-1.47.31-.81.31-1.62zm-4.96-21.32q-1.07 0-1.97.25-.91.25-1.57.63-.65.37-1.03.83-.37.45-.37.86 0 .47.48.67.49.2 1.08.47.59.26 1.08.75.48.48.48 1.48 0 .66-.26 1.21-.27.54-.72.96-.45.43-1.06.66-.61.23-1.27.23-1.75 0-2.83-1.18-1.08-1.19-1.08-3.16 0-1.91 1-3.26 1-1.36 2.61-2.24 1.61-.87 3.64-1.3 2.04-.42 4.07-.42 2.43 0 4.65.53t3.92 1.69q1.71 1.16 2.72 2.94 1.02 1.78 1.02 4.31v17.66q0 .28.03.62.03.35.16.63.12.28.37.47.25.18.72.18.56 0 1.05-.42.48-.42.86-.86l.78.66q-.47.65-1.13 1.44-.65.78-1.59 1.46-.94.69-2.19 1.16t-2.84.47q-1.97 0-3.5-1.17t-2-3.61q-1 1.34-2.08 2.25-1.08.9-2.2 1.47-1.13.56-2.27.81-1.14.25-2.3.25-1.5 0-2.9-.47-1.41-.47-2.52-1.48-1.11-1.02-1.78-2.64-.67-1.63-.67-3.97 0-2.85 1.12-4.66 1.13-1.81 2.96-3.05 1.83-1.23 4.15-2.11 2.33-.87 4.77-1.84 1.81-.72 2.64-2.14.83-1.42.83-2.92 0-2.31-1.36-3.7-1.36-1.4-3.7-1.4zm49.46 6.19v20.94q0 .41-.12.97-.13.56-.61 1.06t-1.45.86q-.97.36-2.63.36-1.65 0-2.61-.39-.95-.39-1.44-.92-.48-.53-.6-1.1-.13-.56-.13-.9v-22.1q0-.43-.12-.89-.13-.45-.38-.83-.25-.37-.62-.6-.38-.24-.88-.24-.84 0-1.66.49-.81.48-1.51 1.1-.7.63-1.22 1.25-.52.63-.73.94v20.94q0 .41-.13.97-.12.56-.61 1.06-.48.5-1.44.86-.95.36-2.61.36-1.65 0-2.61-.39-.95-.39-1.45-.92t-.62-1.1q-.13-.56-.13-.9v-24.13q0-.9-.42-1.58-.42-.67-1.42-.67-.53 0-.91.19-.37.19-.81.53l-.66-.78q.72-.59 1.61-1.17.89-.58 1.92-1.02 1.04-.44 2.22-.72 1.19-.28 2.5-.28 2.03 0 3.16.67 1.12.68 1.66 1.61.53.94.64 1.96.11 1.01.11 1.7 1.46-1.66 3.15-2.97.69-.56 1.52-1.09.83-.53 1.7-.96.88-.42 1.81-.67.94-.25 1.88-.25 1.81 0 3.09.66 1.28.65 2.06 1.58.79.92 1.14 1.93.36 1.02.36 1.77 1.5-1.66 3.16-2.97.69-.56 1.5-1.09t1.7-.96q.89-.42 1.82-.67.92-.25 1.86-.25 1.81 0 3.09.67 1.28.68 2.06 1.77.78 1.09 1.14 2.47.36 1.37.36 2.75v19.34q0 .28.03.61.03.33.16.63.12.29.39.48t.7.19q.6 0 1.07-.42.46-.43.87-.86l.75.65q-.44.66-1.16 1.46-.71.79-1.7 1.51-.98.72-2.28 1.21-1.3.48-2.92.48-1.38 0-2.39-.36-1.02-.36-1.72-.97t-1.05-1.44q-.34-.82-.34-1.76v-20.88q0-.43-.13-.89-.12-.45-.36-.83-.23-.37-.61-.6-.37-.24-.87-.24-.84 0-1.67.49-.83.48-1.53 1.1-.71.63-1.21 1.25-.5.63-.72.94z"
            fill="url(#prefix__editing-shadow-gradient2)"
            transform="translate(131.96 106)"
          />
          <style />
        </Svg>
      </Link>
    </SvgWrapper>
  )
}

export default Logo
