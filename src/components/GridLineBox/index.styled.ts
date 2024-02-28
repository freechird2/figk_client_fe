import { motion } from "framer-motion";
import styled from "styled-components";
import { mediaQuery } from "theme/mediaQuery";

export type ColumnType = {
  column?: "initial" | "span 1" | "span 2";
  linecolor?: "line2" | "line4";
};

export const StyledGridLineBox = styled(motion.div)<ColumnType>`
  aspect-ratio: ${(p) => (p.column === "span 1" ? 480 / 600 : "initial")};
  position: relative;
  background-color: ${(p) => p.theme.bgColor.bg1};
  height: 100%;
  /* max-height: ${(p) => (p.column === "initial" ? "initial" : "600px")}; */
  max-height: initial;
  grid-column: ${(p) => p.column ?? "initial"};
  //전체박스 왼쪽 라인 그려줌
  box-shadow: -1px 0 0 0 ${(p) => p.theme.lineColor.line4};
  z-index: ${(p) => (p.column === "span 2" ? 10 : "initial")};
  width: ${(p) =>
    p.column === "span 2" ? "960px" : p.column === "initial" ? "" : "480px"};
  > div {
    height: 100%;
    > div {
      height: 100%;
    }
  }
  --lineWidth: 1px;
  // 하단 라인 그려줌
  &:after {
    content: "";
    display: block;
    position: absolute;
    bottom: var(--lineWidth);
    left: 50%;
    height: var(--lineWidth);
    /* transform: translate3d(0, var(--lineWidth), 0); */
    width: 200vw;
    transform: translate3d(-50%, var(--lineWidth), 0);
    background-color: ${(p) => p.theme.lineColor.line4};
    z-index: 10;
  }
  // 오른쪽 라인 그려줌

  &:before {
    content: "";
    display: block;
    position: absolute;
    right: var(--lineWidth);
    top: 0;
    height: 200vh;
    width: var(--lineWidth);
    transform: translate3d(var(--lineWidth), 0, 0);
    background-color: ${(p) => p.theme.lineColor.line4};
    z-index: 10;
  }

  @media screen and (max-width: 960px) {
    grid-column: initial;
    width: 100%;
    max-height: initial;

    &:after,
    &:before {
      background-color: ${(p) =>
        p.linecolor === "line2"
          ? `${p.theme.lineColor.line4}`
          : `${p.theme.lineColor.line4}`};
    }
  }
  ${mediaQuery("mobile")} {
    aspect-ratio: initial;
    //아트픽 영상 콜룸 1개로 줄이는 스타일
    &[gridcolumn="span 2"] {
      grid-column: initial;
    }

    &:after {
      width: 100vw;
    }
    &:before {
      display: none;
    }
  }
`;
