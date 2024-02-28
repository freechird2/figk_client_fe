import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`
const SquareBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 27px;
    height: 27px;
    position: relative;
    transform: rotate(45deg);
    animation: stepRotate 8s infinite ease;
    @keyframes stepRotate {
        0% {
            transform: rotate(45deg);
        }
        25% {
            transform: rotate(135deg);
        }
        50% {
            transform: rotate(225deg);
        }
        75% {
            transform: rotate(315deg);
        }
        100% {
            transform: rotate(405deg);
        }
    }
`

const Square = styled.div`
    display: block;
    width: 9px;
    height: 9px;
    border: 1px solid;
    opacity: 0;
    &:nth-child(2) {
        opacity: 1;
        animation: square2 1s infinite alternate 0.1s;
    }
    &:nth-child(4) {
        opacity: 1;
        animation: square4 1s infinite alternate 0.2s;
    }
    &:nth-child(6) {
        opacity: 1;
        animation: square6 1s infinite alternate 0.3s;
    }
    &:nth-child(8) {
        opacity: 1;
        animation: square8 1s infinite alternate 0.4s;
    }

    @keyframes square2 {
        0% {
            background-color: transparent;
            transform: translate3d(0, 0, 0) scale(1);
        }
        100% {
            background-color: #000;
            transform: translate3d(0, -3px, 0) scale(0.9);
        }
    }
    @keyframes square4 {
        0% {
            background-color: transparent;
            transform: translate3d(0, 0, 0) scale(1);
        }
        100% {
            background-color: #000;
            transform: translate3d(-3px, 0, 0) scale(0.9);
        }
    }
    @keyframes square6 {
        0% {
            background-color: transparent;
            transform: translate3d(0, 0, 0) scale(1);
        }
        100% {
            background-color: #000;
            transform: translate3d(3px, 0, 0) scale(0.9);
        }
    }
    @keyframes square8 {
        0% {
            background-color: transparent;
            transform: translate3d(0, 0, 0) scale(1);
        }
        100% {
            background-color: #000;
            transform: translate3d(0, 3px, 0) scale(0.9);
        }
    }
`

export const SquareFlashing = () => {
    return (
        <Container>
            <SquareBox>
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
            </SquareBox>
        </Container>
    )
}
