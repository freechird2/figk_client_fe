import { motion } from "framer-motion";
import styled from "styled-components";
import { mediaQuery } from "theme/mediaQuery";
import { mixin } from "theme/mixin";
const Container = styled(motion.div)`
  ${mixin.CardContainer}
  height: 100%;
  small {
    font-size: 1.2rem;
    font-weight: 300;
    color: ${(props) => props.theme.textColor.textColor70};
    margin-bottom: 18px;
  }
  h1 {
    font-weight: 600;
    line-height: 1.4;
    font-size: 1.8rem; //=> 모바일 16
    color: ${(props) => props.theme.textColor.textColor80};
    margin-bottom: 1.2rem;
  }
  h2 {
    font-size: 1.3rem;
    line-height: 1.4;
    color: ${(props) => props.theme.textColor.textColor40};
    margin-bottom: 2.4rem;
  }
  p {
    font-size: 1.4rem;
    color: ${(props) => props.theme.textColor.textColor90};
    text-align: justify;
    word-break: break-all;
    line-height: 1.65;
    margin-bottom: 1.2rem;
  }
  mark {
    font-weight: inherit;
    background-color: initial;
    color: #ff4d00;
  }
  ${mediaQuery("mobile")} {
    padding-block: 40px;
    small {
      font-size: 1.4rem;
    }
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.4rem;
    }
    p {
      font-size: 1.6rem;
    }
  }
`;

const HashtagBox = styled.ul`
  padding: 2rem 0 3rem;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 40px;
  > span {
    font-size: 1.4rem;
    font-weight: 400;
    color: ${(props) => props.theme.textColor.textColor70};
    &:before {
      content: "by";
      font-family: "WorkSans";
      font-weight: 300;
      font-size: inherit;
      color: ${(props) => props.theme.textColor.textColor40};
      margin-right: 0.6rem;
    }
  }
  .wiget {
    display: flex;
    align-items: center;
    gap: 16px;
    .dotdotdot {
      position: relative;
    }
    .heart {
      &:hover {
      }
    }
  }

  ${mediaQuery("mobile")} {
    > span {
      font-size: 1.6rem;
      &:before {
        margin-right: 0.4rem;
      }
    }
  }
`;

const Util = styled.div`
  position: absolute;
  bottom: 100%;
  right: 0;
  padding: 14px;
  border: 1px solid ${(p) => p.theme.lineColor.line4};
  background-color: #fff;
  .util_Item {
    display: flex;
    align-items: center;
    gap: 6px;
    white-space: nowrap;
    font-size: 1.3rem;
    font-weight: 300;
    fill: ${(p) => p.theme.textColor.textColor80} !important;
    transition: color 0.3s ease;
    padding-right: 30px;
    svg {
      transition: initial !important;
      fill: inherit !important;
    }
    &:not(:last-of-type) {
      padding-bottom: 8px;
      border-bottom: 1px solid ${(p) => p.theme.lineColor.line2};
    }
    &:not(:first-of-type) {
      padding-top: 8px;
    }
    @media (hover: hover) {
      &:hover {
        svg {
          fill: ${(p) => p.theme.palette.point1} !important;
        }
        color: ${(p) => p.theme.palette.point1};
      }
    }
  }

  ${mediaQuery("mobile")} {
    padding: 18px;
    .util_Item {
      font-size: 1.5rem;
      padding-right: 50px;
      &:not(:last-of-type) {
        padding-bottom: 14px;
        border-bottom: 1px solid ${(p) => p.theme.lineColor.line2};
      }
      &:not(:first-of-type) {
        padding-top: 14px;
      }
    }
  }
`;

const Cover = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "WorkSans";
  font-size: 1.5rem;
  color: ${(p) => p.theme.palette.black10};
  background-color: ${(p) => p.theme.bgColor.bg2};
  ${mediaQuery("mobile")} {
    height: 155px;
  }
`;

const End = styled.div`
  /* width: 100%;
    height: 100%;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center; */
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  /* aspect-ratio: 480/600; */
  font-size: 1.4rem;
  background-color: ${(p) => p.theme.palette.black20};
  height: 100%;
  ${mediaQuery("mobile")} {
    width: 100%;
    height: 100svh;
  }
`;

export const S = {
  Container,
  HashtagBox,
  Footer,
  Util,
  Cover,
  End,
};
