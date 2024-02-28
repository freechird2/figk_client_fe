import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(auto-fill, 480px);
  justify-content: center;
  grid-auto-flow: row dense;
  margin: 0 auto;

  // children => component : <GridLineBox/>

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const TextFigk = {
  Container,
};
