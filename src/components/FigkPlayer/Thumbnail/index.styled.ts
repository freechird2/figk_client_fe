import mobilePlayArrow from 'assets/icons/mobilePlayArrow.png'
import styled from 'styled-components'
import { mediaQuery } from 'theme/mediaQuery'
const Thumbnail = styled.div`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 11;

    &:hover {
        .dim {
            opacity: 1;
        }
    }
    img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    .dim {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        z-index: 20;
        background-color: ${(p) => p.theme.dim.dim6};
        opacity: 0;
        transition: 0.3s;
        .playButton {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            transition: 0.3s;
            cursor: pointer;
            &:hover {
                opacity: 1;

                .circle {
                    transition: 0.5s cubic-bezier(0.6, 0.5, 0, 1);
                    transform: scale(1.5);
                    svg {
                        transition: 0.5s cubic-bezier(0.6, 0.5, 0, 1);
                        transform: rotate(60deg);
                    }
                }
                .playText {
                    transform: translate3d(-50%, -50%, 0) perspective(3000px) rotateX(90deg);
                }
            }
            .circle {
                width: min(30%, 200px);
                aspect-ratio: 1/1;
                /* transform-origin: center; */
                transition: 0.8s cubic-bezier(0.6, 0.5, 0, 1);
                svg {
                    transition: 0.8s cubic-bezier(0.6, 0.5, 0, 1);
                    transform: rotate(0deg);
                }
            }
            .playText {
                position: absolute;
                top: 50%;
                left: 50%;
                color: #fff;
                font-weight: 500;
                font-size: 15px;
                font-family: 'WorkSans';
                user-select: none;
                transition: 0.5s ease;
                transform-origin: top;
                transform-style: preserve-3d;
                transform: translate3d(-50%, -50%, 0) perspective(3000px);

                span {
                    color: #fff;
                    display: block;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    font-size: 15px;
                    font-weight: 500;
                    font-family: inherit;
                    white-space: nowrap;
                    transform: rotateX(-90deg) translateZ(20px);
                    transform-origin: top;
                }
            }
        }
    }

    ${mediaQuery('tabletH')} {
        .dim {
            display: none;
        }
        .mobilePlayButton {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            z-index: 20;
            button {
                position: relative;
                display: block;
                width: 70px;
                height: 70px;
                background-size: 24px 24px;
                background-image: url(${mobilePlayArrow});
                background-repeat: no-repeat;
                background-position: center;
                background-color: ${(p) => p.theme.dim.dim6};
                border-radius: 50%;
                z-index: 21;
            }
        }
    }
`

export const S = {
    Thumbnail,
}
