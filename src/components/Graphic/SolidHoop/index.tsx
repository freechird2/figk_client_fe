import styled from "styled-components";

const Container = styled.div`
  --size: 14px;
  --width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  .circleBox {
    position: relative;
    width: 100px;

    .circle {
      position: absolute;
      top: 50%;
      left: 25%;
      width: var(--size);
      height: var(--size);
      border-radius: 50%;
      animation: moving 3s infinite ease-in-out;
      &.first {
        /* border: 1px solid #fff; */
        background-color: #fff;
        z-index: 3;
      }
      &.second {
        animation-delay: 0.15s;
        /* border: 1px solid rgba(255, 255, 255, 0.7); */
        background-color: rgba(255, 255, 255, 0.6);
        z-index: 2;
      }
      &.third {
        animation-delay: 0.3s;
        /* border: 1px solid rgba(255, 255, 255, 0.3); */
        background-color: rgba(255, 255, 255, 0.2);
        z-index: 1;
      }
    }
  }
  @keyframes moving {
    0% {
      transform: translate3d(
        0%,
        calc(calc(var(--width) - var(--size)) * -0.5),
        0
      );
    }

    25% {
      transform: translate3d(
        calc(var(--width) - var(--size)),
        calc(calc(var(--width) - var(--size)) * 0.5),
        0
      );
    }

    50% {
      transform: translate3d(
        0,
        calc(calc(var(--width) - var(--size)) * -0.5),
        0
      );
    }
    75% {
      transform: translate3d(
        calc(var(--width) - var(--size)),
        calc(calc(var(--width) - var(--size)) * 0.5),
        0
      );
    }
    100% {
      transform: translate3d(
        0%,
        calc(calc(var(--width) - var(--size)) * -0.5),
        0
      );
    }
  }
`;
export const SolidHoop = () => {
  return (
    <Container>
      <div className="circleBox">
        <div className="circle first" />
        <div className="circle second" />
        <div className="circle third" />
      </div>
    </Container>
  );
};
