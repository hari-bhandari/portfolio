import styled from 'styled-components'
import tw from "tailwind.macro";

export const Wrapper = styled.div`
  ${tw`relative block font-title h-0 pin-t pin-x z-999`};
  transform: translate3D(0, 0, 0);
`

export const MenuContainer = styled.div`
  ${tw`flex absolute w-full h-16 flex-wrap items-center justify-between p-4`};
  top: 0.5rem;
  box-sizing: border-box;
`

export const Menu = styled.ul`
  ${tw`flex relative w-full font-title text-right list-reset m-0 md:mr-4 lg:mr-8`};
  background: transparent;
  z-index: 999999;
`

export const MenuItem = styled.li`
  ${tw`inline-block text-xl cursor-pointer py-0 px-3`};
  z-index: 999999;
  a {
    ${tw`no-underline border-none`}
  }
  &:last-child {
    ${tw`pr-0`}
  }
  &.external {
    padding-right: 0.75rem;
    &::after {
      ${tw`absolute opacity-0`};
      content: '*';
      color: #63666b;
      transition: opacity 300ms ease-in-out;
    }
    &:hover {
      &::after {
        opacity: 1;
      }
    }
  }
`

export const Navbar = styled.div`
  ${tw`absolute`};
  right: 2.5rem;
  @media (max-width: 420px) {
    right: 0;
  }
`

export const MenuPanel = styled.div`
  ${tw`fixed text-left pin-t pin-r p-10`};
  background: ${colors.menu};
  width: 100vw;
  height: 100vh;
  top: 0;
  box-shadow: 0 0 10px rgba(0,0,0,0.7);
  transform: translatey(-100vh);
  transition: all 450ms ease, transform 0ms ease;
  opacity: 0;
  z-index: -1;
  &::before {
    ${tw`absolute w-full h-full pin-t pin-l`};
    background: ${colors.menu};
    content: '';
    filter: blur(0);
    transition: filter 350ms ease 250ms;
    z-index: -1;
  }
  &.active {
    transform: translateY(0);
    opacity: 0.975;
    &::before {
      filter: blur(1rem);
    }
  }
  li {
    ${tw`relative block font-bold my-0 ml-0 mr-auto px-0 py-3 z-999`};
    font-size: 12vw;
    width: max-content;
    &:first-child {
      margin-top: 2rem;
    }
    a {
      color: rgba(255,255,255,0.95);
      &::before {
        ${tw`absolute w-0`};
        background: ${accent};
        content: '';
        height: 8px;
        top: 50%;
        left: -10%;
        transition: width 500ms cubic-bezier(0.77, 0, 0.175, 1);
      }
      &:hover, &:active {
        color: rgba(255, 255, 255, 0.95);
        &::before {
          width: 120%;
          transition: width 500ms cubic-bezier(0.77, 0, 0.175, 1);
        }
      }
    }
  }
`

export const Button = styled.span`
  ${tw`absolute flex flex-col justify-between cursor-pointer z-9999`};
  color: rgba(255,255,255,0.75);
  width: 30px;
  height: 25px;
  top: 0.75rem;
  right: 1rem;
  transition: all 350ms ease-in-out;
  &.active {
    width: 25px;
    transform: rotate(-45deg);
    transition: all 200ms ease-out;
    .half {
      ${tw`w-1/2`}
    }
    .start {
      transform: rotate(-90deg) translateX(2px);
      transition: width 300ms ease-out 25ms, transform 300ms cubic-bezier(0.54, -0.81, 0.57, 0.57) 25ms;
      transform-origin: right;
    }
    .end {
      transform: rotate(-90deg) translateX(-2px);
      transition: width 300ms ease-out 25ms, transform 300ms cubic-bezier(0.54, -0.81, 0.57, 0.57) 25ms;
      transform-origin: left;
    }
  }
`

export const Line = styled.div`
  ${tw`w-full`};
  background: rgba(255,255,255,0.75);
  border-radius: 5px;
  height: 3px;
  transition: transform 350ms ease-out;
  &.half {
    ${tw`w-3/5`}
  }
  &.start {
    transition: width 300ms ease-out, transform 250ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
    transform-origin: right;
  }
  &.end {
    align-self: flex-end;
    transition: width 300ms ease-out, transform 250ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
    transform-origin: left;
  }
`
