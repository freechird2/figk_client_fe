import styled from "styled-components";

export const IconHamburger = styled.i`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* background-color: red; */
  width: 3.6rem;
  aspect-ratio: 1/1;
  cursor: pointer;
  &::before,
  &:after {
    content: "";
    display: block;
    width: 2.8rem;
    height: 1px;
    background-color: ${(p) => p.theme.palette.black20};
    transition: 0.2s;
  }

  &:before {
    transform: rotate(-45deg) translate3d(calc(50% + 0.05rem), -50%, 0);
    transform-origin: center right;
  }
  &:after {
    transform: rotate(45deg) translate3d(calc(-50% - 0.05rem), -50%, 0);
    transform-origin: center left;
  }

  @media (hover: hover) {
    &:hover {
      &:before {
        transform: rotate(-0deg) translate3d(calc(50% + 0.05rem), -50%, 0);
        transform-origin: center right;
      }
      &:after {
        transform: rotate(0deg) translate3d(calc(-50% - 0.05rem), -50%, 0);
        transform-origin: center left;
      }
    }
  }

  &.default {
    &:before {
      transform: translate3d(50%, calc(-50% - 3px), 0) scaleX(0.6);
      transform-origin: center left;
    }
    &:after {
      transform: translate3d(-50%, calc(-50% + 3px), 0);
      transform-origin: center center;
    }

    &:hover {
      &:before {
        transform: translate3d(50%, calc(-50% - 3px), 0) scaleX(1);
      }
    }
  }
`;
