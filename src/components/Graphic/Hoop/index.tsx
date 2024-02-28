import styled from 'styled-components'

const Container = styled.div`
    --size: 24px;
    --width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    .circleBox {
        position: relative;
        width: 100px;

        .circle {
            position: absolute;
            top: 50%;
            left: 0;
            width: var(--size);
            height: var(--size);
            border-radius: 50%;
            animation: moving 1s infinite ease-in-out alternate;
            &.first {
                border: 1px solid ${(p) => p.theme.palette.black10};
                z-index: 3;
            }
            &.second {
                animation-delay: 0.1s;
                border: 1px solid ${(p) => p.theme.palette.gray70};
                z-index: 2;
            }
            &.third {
                animation-delay: 0.2s;
                border: 1px solid ${(p) => p.theme.palette.gray30};
                z-index: 1;
            }
        }
    }
    @keyframes moving {
        0% {
            transform: translate3d(0%, -50%, 0);
        }

        100% {
            transform: translate3d(calc(var(--width) - var(--size)), -50%, 0);
        }
    }
`
export const Hoop = () => {
    return (
        <Container>
            <div className='circleBox'>
                <div className='circle first' />
                <div className='circle second' />
                <div className='circle third' />
            </div>
        </Container>
    )
}
