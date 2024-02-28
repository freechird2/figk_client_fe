import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 3px;
  input[type="range"] {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    cursor: pointer;
    filter: opacity(0);
  }
`;

const Track = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  pointer-events: none;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
`;

const Progress = styled.div<{ value: number }>`
  display: block;
  position: absolute;
  inset: 0;
  width: ${(p) => `${p.value}%`};
  height: 100%;
  /* transform: ${(p) => `scaleX(${p.value}%)`}; */
  transform-origin: left;
  background-color: #fff;
`;

const Thumb = styled.div<{ value: number }>`
  display: block;
  position: absolute;
  right: 0;
  top: 50%;
  width: 12px;
  height: 12px;
  transform: ${(p) => `translate3d(calc(-${p.value}% + 12px),-50%,0) `};
  background-color: #fff;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
`;

export const S = {
  Container,
  Track,
  Progress,
  Thumb,
};
