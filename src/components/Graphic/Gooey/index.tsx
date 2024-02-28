import styled from 'styled-components'
const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #000;
    overflow: hidden;
    .wrap {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        background-color: #000;

        filter: blur(1px) contrast(3);
    }

    .ball {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 12px;
        height: 12px;
        background-color: #fff;
        border-radius: 50%;

        z-index: 1;
        &:first-of-type {
            animation: ani-1 3s infinite;
        }

        &:last-of-type {
            animation: ani-2 3s infinite;
        }
    }

    @keyframes ani-1 {
        0% {
            transform: translate3d(-50%, -50%, 0);
        }
        25% {
            transform: translate3d(-50%, 100%, 0);
        }
        50% {
            transform: translate3d(-50%, -50%, 0);
        }
        75% {
            transform: translate3d(100%, -50%, 0);
        }
        100% {
            transform: translate3d(-50%, -50%, 0);
        }
    }
    @keyframes ani-2 {
        0% {
            transform: translate3d(-50%, -50%, 0);
        }
        25% {
            transform: translate3d(-50%, -150%, 0);
        }
        50% {
            transform: translate3d(-50%, -50%, 0);
        }
        75% {
            transform: translate3d(-150%, -50%, 0);
        }
        100% {
            transform: translate3d(-50%, -50%, 0);
        }
    }
`

export const Gooey = () => {
    return (
        <Container>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                version='1.1'>
                <defs>
                    <filter id='goo'>
                        <feGaussianBlur
                            in='SourceGraphic'
                            stdDeviation='50'
                            result='blur'
                        />
                        <feColorMatrix
                            in='blur'
                            mode='matrix'
                            values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10'
                            result='goo'
                        />
                        <feBlend
                            in='SourceGraphic'
                            in2='goo'
                        />
                    </filter>
                </defs>
            </svg>
            <div className='wrap'>
                <div className='ball' />
                <div className='ball' />
            </div>
        </Container>
    )
}
