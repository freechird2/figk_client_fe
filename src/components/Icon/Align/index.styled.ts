import styled from "styled-components";

export const IconAlign = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 2.4rem;
  height: 1.6rem;
  cursor: pointer;
  transform-origin: center;
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    height: 100%;
    transition: 0.2s;
    &.inline {
      width: 1.6rem;
      &:hover {
        width: 1.8rem;
      }
    }
    &.block {
      width: 1.6rem;
    }
    &.overflow {
      overflow: hidden;
    }
  }
  &.inline {
    .wrapper.inline .inlineBox {
      z-index: 11;
    }
    .wrapper.block .blockBox {
      z-index: 0;
      transform: scale(10);
    }
  }
  &.block {
    .wrapper.inline {
      z-index: 0;
      .inlineBox {
        transform: scaleY(0);
        transform-origin: center;
      }
    }
    .wrapper.block {
      z-index: 11;
      .blockBox {
        transform: scale(1);
      }
    }
    .wrapper.block {
      .blockBox:hover {
        transform: scale(2.5);
      }
    }
  }
  .blockBox {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 0.2rem;
    transition: 0.2s;

    span {
      display: block;
      width: calc(50% - 0.1rem);
      aspect-ratio: 1/1;
      background-color: black;
    }
  }
  .inlineBox {
    width: 100%;
    height: 1.6rem;
    display: flex;
    justify-content: space-between;

    transition: 0.2s;
    span {
      width: 0.3rem;
      height: 100%;
      background-color: black;
    }
  }
`;
