import { createGlobalStyle } from "styled-components";

export const CommonStyle = createGlobalStyle`

:root {
  --vh: 100%;
}

.font_work{
    font-family: 'WorkSans';
}
.font_pretendard{
    font-family: 'Pretendard';
}

.ellipsis{
    overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
}

`;
