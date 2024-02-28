import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(auto-fill, 480px);
  justify-content: center;
  grid-auto-flow: row dense;
  margin: 0 auto;

  //2560px 이상일때 4개 유지 스타일
  @media screen and (min-width: 1920px) {
    grid-template-columns: repeat(4, 480px);
  }

  @media screen and (max-width: 480px) {
    display: block;
    width: 100%;
    overflow: initial;
  }
`;

export const Common = {
  Container,
};
