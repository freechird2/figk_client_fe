import { motion } from "framer-motion";
import styled from "styled-components";
import { mediaQuery } from "theme/mediaQuery";

const Container = styled(motion.div)`
  --height: 40px;
  --mobileHeight: 60px;
  position: fixed;
  top: ${(p) => p.theme.layout.headerHeight};
  left: 0;
  width: 100%;
  background-color: ${(p) => p.theme.palette.black20};
  z-index: 1000;
  overflow: hidden;
  ${mediaQuery("tabletH")} {
    top: initial;
    bottom: 0;
  }
`;

const ToastMessageBox = styled(motion.div)`
  --height: 40px;
  --mobileHeight: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: var(--height);
  overflow: hidden;
  span {
    color: #fff;
    font-size: 1.3rem;
  }
  ${mediaQuery("tabletH")} {
    height: var(--mobileHeight);
  }
`;

export const S = {
  Container,
  ToastMessageBox,
};
