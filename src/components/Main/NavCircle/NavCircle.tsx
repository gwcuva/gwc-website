import React from 'react';
import styled from 'styled-components';


const StyledLinkOne = styled.a`
  position: absolute;
    top: 20%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)

`
const StyledLinkTwo = styled.a`
position: absolute;
    top: 30%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
`

const StyledLinkThree = styled.a`
position: absolute;
    top: 40%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
`
const StyledLinkFour = styled.div`
position: absolute;
    top: 60%;
    left: 40%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
`

const StyledLinkFive = styled.div`
position: absolute;
    top: 60%;
    left: 60%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
`
// TODO: Add circle background (done)
// TODO: Add three links 
// TODO: Add social media links (done)
// TODO: (if needed in a future PR) depending on scroll position, change the color of circle border
// TODO: Make absolute on the page so it follows the screen (done)

const Insta = () => {
  return(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={48}
      height={48}
    >
    <a href="https://www.instagram.com/gwcuva/?hl=en" target="_blank"><img src="#" alt="Instagram" />
      <path
        d="M16 6C10.477 6 6 10.477 6 16v16c0 5.523 4.477 10 10 10h16c5.523 0 10-4.477 10-10V16c0-5.523-4.477-10-10-10zm20 4a1.999 1.999 0 110 4 1.999 1.999 0 110-4zm-12 4c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10zm0 4c-3.313 0-6 2.688-6 6 0 3.313 2.688 6 6 6 3.313 0 6-2.688 6-6 0-3.313-2.688-6-6-6zm0 0"
        fill="#0c3b4f"
      />
      </a>
    </svg>
  )
}

const Discord = () => {
  return(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 48 48"
      width={48}
      height={48}
    >
    <a href="https://discord.gg/PmER5Fvp" target="_blank"><img src="#" alt="Discord" />
      <defs>
        <image
          id="prefix__b"
          width={48}
          height={48}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACRUlEQVRoge3XT4hPURTA8c+YP5oRk0GUGaKRkqY0MkopmpVsiJqFMoo0SytrSgzFhshiQmwsWMjSRsqfQklCYkhJ/izIYPwZi/t+9Uwzv373/WaSut96dd8795x77j3nvnsuiUQikUgkEonEv6J2Au10YCNm4/kYfbqxHjV4h98TMXBNlfpzsBPTcA8j6MM5tKARQ/iI7Tie6a3Kvp/G+2ocqGYCfWjDMWwWVvgZrgsR+CA43oJZWIy1aMc1XMIevMLJok4UncAmfMUjIW1uCRGolE6sxhUsx1RcLuhLNDXoz9rNVdoq6R8paqDIJu7GCyFNvhcdOKOkXyek42CV9irigOo3/2hqcLCI4pTI/g3C32OkyGBlGMEPTI9VjE2hdUL6vIwdqEKW4XGMQmwE1uDmOLKVOJo9nRGyEjeyfpPKvjKyw7l2f4Qsz/5Yh2Ii0IDhMvIvufZQhCzPMOojfIqawFI8KSNvyrUbI2R5nmJJhE/qIvouUH7zXhRyHC5EyPIMYqFwwk84uzA/994sbgHGos7fp3mrUBxWTOweyJfAn9Aj1EWxE6kXCsCezE6JXwqcBZUyQyiHW0d934q7GMBudGERZmbymdl7VyYfyPpvGWWnDSeycSomtiRoxF68xRmhIiXcB3ZgA05hnrCSdfiJz3gjlOBXM93Sn6lJuCvMxSF8m8wJlGhHb+bcbdwXyuLWzLnx6MVrPMQKISq1OCvcJaKptiirF25XHcIqn69AZ5sQnQe4I9RAiUQikUgkEonEf8gfvm9n+aIlxx0AAAAASUVORK5CYII="
        />
        <image
          id="prefix__d"
          width={48}
          height={48}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACQ0lEQVRoge3XP0iVURjH8Y+lhAqJYGR/oUEKqiEtxSULDLKhMJJsaKglqMCsWZIaa6/JtbH/EBHNZUWUDWEODhkWWBG0VTacc+FqevPV+zqdL1zu+57feZ77vO89z/OcQyKRSCQSiUQiUUTVPOMrlzWKDDSgH/cwgS+onTWnNo5P4AEuYs0yxjgnjbiJrxjCUXRjFJP4hun4PRnHD8fPULS7gbVLCWLFIu32YgS/sBXPcQKt6EMHmoRl0xTv+9COkxjGNvyJfjoW/QSLYBXGcBCbcRbNGX204Fy0PxT9rSpjjCU5jYfxum6Jvgr2j3Bqib4WzEscKLPPLrwus885acd7VJTZb4WQ5G1ZDbMm8XHcFqpLOZnGHSEfcuWDUIHyYL9QzXJjA76bv9PuFqrJmFBlFqoVqBJ6RsOSI52HHtwtoQ8LS6wXzzJoxdwXGmIuXMFgCf0nqlETrxeqFXMVl7MEVZlh7nbcKqG/wxGhMLzNoBUzgmMZYsrEC+wpobcIST7q33VeSiumVY6JPCEkcoE62f7Buag0s5tvxMcsDrL0gdXC5qvADyEpu2V/kCohWXujnwK/4+/kwiDeCG+pmB68ErbIZ4RuugX1Ua+P921RH4rzZ6/1TUJ+ZErirFzCZ2EnWV00XosLmIr6uJnngfE4PiVsq4sPPDU4H/X+PIMv0IwnwgnrmrARa0QnPmH9PHbrhDzqjPO7cD36eYxduUY9BzsxgKfC25vEvv/YdMR5k9FuADtyjDGRSCQSiUQikciRv6Y4dfPHq9cYAAAAAElFTkSuQmCC"
        />
        <mask id="prefix__c">
          <g filter="url(#prefix__a)">
            <path fillOpacity={0.07} d="M0 0h48v48H0z" />
          </g>
        </mask>
        <mask id="prefix__e">
          <g filter="url(#prefix__a)">
            <path fillOpacity={0.05} d="M0 0h48v48H0z" />
          </g>
        </mask>
        <filter
          id="prefix__a"
          filterUnits="objectBoundingBox"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
        >
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />
        </filter>
      </defs>
      <path
        d="M42 45.477a.5.5 0 01-.809.394L33 39l.781 2.344a.5.5 0 01-.476.656H10a5 5 0 01-5-5V11a5 5 0 015-5h27a5 5 0 015 5zm0 0"
        fill="#0c3b4f"
      />
      <path
        d="M32.629 17.297a.358.358 0 00-.09-.098c-.383-.281-2.805-1.988-5.629-2.199l-.27.55c2.782.669 4.051 1.641 5.38 2.829C29.73 17.21 27.46 16 23.5 16s-6.23 1.21-8.52 2.379c1.329-1.188 2.848-2.27 5.38-2.828L20.09 15c-2.957.285-5.262 1.926-5.63 2.2a.324.324 0 00-.085.093c-.336.512-2.867 4.61-3.363 12.145a.426.426 0 00.11.316c2.554 2.805 6.16 3.187 7.058 3.238a.386.386 0 00.336-.16l.797-1.062c-1.57-.54-3.364-1.508-4.903-3.27 1.84 1.379 4.61 2.5 9.09 2.5 4.48 0 7.25-1.121 9.09-2.5-1.54 1.762-3.328 2.73-4.899 3.27l.793 1.062a.395.395 0 00.336.16c.903-.05 4.504-.433 7.063-3.238a.44.44 0 00.105-.317c-.496-7.53-3.027-11.628-3.36-12.14zM20 28c-1.102 0-2-1.121-2-2.5s.898-2.5 2-2.5c1.102 0 2 1.121 2 2.5s-.898 2.5-2 2.5zm7 0c-1.102 0-2-1.121-2-2.5s.898-2.5 2-2.5c1.102 0 2 1.121 2 2.5s-.898 2.5-2 2.5zm0 0"
        fill="#fff"
      />
      <use xlinkHref="#prefix__b" mask="url(#prefix__c)" />
      <use xlinkHref="#prefix__d" mask="url(#prefix__e)" />
      </a>
    </svg>
  )
}

const Circle = () => {
  return (
<svg  
      xmlns="http://www.w3.org/2000/svg"
      width={303}
      height={303}
      viewBox="0 0 303 303"
      overflow="visible"
    >
      <circle
        cx={151.5}
        cy={151.5}
        r={150}
        fill="none"
        stroke="#43d6b9"
        strokeWidth={3}
        strokeMiterlimit={10}
      />
    </svg>

  )
}


      


function NavCircle() {
  return (
    <div id = "navCircle" className = "card sticky-top float-right text-center " >
      <Circle />
      <StyledLinkOne href="#" target="_blank">the gap</StyledLinkOne>
      <StyledLinkTwo href="#" target="_blank">the mission</StyledLinkTwo>
      <StyledLinkThree href="#" target="_blank">the team</StyledLinkThree>
      <StyledLinkFour>
        <Insta />
      </StyledLinkFour>
      <StyledLinkFive >
      <Discord />
      </StyledLinkFive>
    </div>
  );
}

export default NavCircle;
