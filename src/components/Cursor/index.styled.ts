import next from "assets/icons/next.svg";
import prev from "assets/icons/prev.svg";
import styled from "styled-components";
const Container = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100px;
  height: 100px;
  display: flex;
  align-content: center;
  justify-content: center;
  color: #fff;
  pointer-events: none;
  mix-blend-mode: difference;
  z-index: 1000;
  &.next,
  &.prev {
    mix-blend-mode: initial;
  }
  &.hide {
  }
  @media (pointer: coarse) and (hover: none) {
    display: none;
  }
`;

const Cursor = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  aspect-ratio: 1/1;
  border: 1px solid #fff;
  color: #fff;
  border-radius: 50%;
  transition: 0.3s;
  &.default {
    width: 20px;
    background-color: #fff;
  }
  &.action {
    width: 40px;
  }
  &.action2 {
    width: 140px;
    background-color: #fff;
  }
  &.prev {
    width: 94px;
    background-image: url(${prev});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 32px;
    background-color: ${(p) => p.theme.dim.dim5};
    border: none;
  }
  &.next {
    width: 94px;
    background-image: url(${next});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 32px;
    background-color: ${(p) => p.theme.dim.dim5};
    border: none;
  }

  &.hide {
    width: 4px;
    background-color: #000;
  }
`;

export const S = {
  Container,
  Cursor,
};
