import { S } from "components/PlayerSlide/index.styled";
import { ComponentPropsWithoutRef, useRef } from "react";

interface PlayerSlideTypes extends ComponentPropsWithoutRef<"input"> {
  progress: number;
}

const PlayerSlide = ({ progress, ...rest }: PlayerSlideTypes) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <S.Container>
      <input ref={inputRef} type="range" {...rest} />
      <S.Track className="track">
        <S.Progress value={progress}>
          <S.Thumb value={progress} />
        </S.Progress>
      </S.Track>
    </S.Container>
  );
};

export default PlayerSlide;
