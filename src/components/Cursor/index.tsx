import { S } from "components/Cursor/index.styled";
import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { CursorState, CursorStateTypes } from "Recoil/Atom/cursor";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorForm = useRecoilValue<CursorStateTypes>(CursorState);

  useEffect(() => {
    const mouseOver = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const mouseX =
        cursorRef.current !== null
          ? clientX - cursorRef.current.clientWidth / 2
          : 0;
      const mouseY =
        cursorRef.current !== null
          ? clientY - cursorRef.current.clientHeight / 2
          : 0;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };
    window.addEventListener("mousemove", (e) => {
      return mouseOver(e);
    });
    return () => {
      window.removeEventListener("mousemove", (e) => {
        mouseOver(e);
      });
    };
  }, []);

  return (
    <S.Container ref={cursorRef} className={cursorForm}>
      <S.Cursor className={cursorForm} />
    </S.Container>
  );
};

export default Cursor;
