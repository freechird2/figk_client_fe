import styled from "styled-components";

export const StyledHeart = styled.svg`
  cursor: pointer;
  user-select: none;
  path {
    &:hover {
      stroke: ${(p) => p.theme.palette.point1};
    }
  }
`;
