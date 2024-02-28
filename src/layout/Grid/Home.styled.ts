import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(auto-fill, 480px);
  justify-content: center;
  grid-auto-flow: row dense;
  margin: 0 auto;
  /* grid-gap: 1px; */
  > div {
    aspect-ratio: 480/600;
    outline: 1px solid ${(p) => p.theme.lineColor.line4};
    position: relative;
    /* background-color: initial; */
    &:after {
      content: "";
      display: block;
      position: absolute;
      bottom: -0.5px;
      left: 0;
      width: 100%;
      height: 1px;
      transform: translate3d(0, 100%, 0);
      background-color: ${(p) => p.theme.lineColor.line4};
    }
    &:before {
      content: "";
      display: block;
      position: absolute;
      right: -1px;
      top: 0%;
      height: 100%;
      width: 1px;
      transform: translate3d(0, 100%, 0);
      background-color: ${(p) => p.theme.lineColor.line4};
    }
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    > div {
      aspect-ratio: initial;
      //아트픽 영상 콜룸 1개로 줄이는 스타일
      &[gridcolumn="span 2"] {
        grid-column: initial;
      }
    }
  }
`;

export const Home = {
  Container,
};
