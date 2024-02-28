import LOGO from 'assets/img/FIGK.png'
import styled from 'styled-components'
import { mediaQuery } from 'theme/mediaQuery'
const HeaderContainer = styled.header`
    --errorIconsSize: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 100;
    height: ${(p) => p.theme.layout.headerHeight};
    background-color: ${(p) => p.theme.bgColor.bg1};
    border-bottom: 1px solid ${(p) => p.theme.lineColor.line4};
    padding: ${(p) => `0 calc(${p.theme.layout.pcSidePadding} - var(--errorIconsSize))`};
    .fakeDom {
        position: absolute;
        top: -500px;
        font-size: 1.5rem;
    }
    .center {
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 40px;
        .logo {
            display: block;
            width: 70px;
            aspect-ratio: 70/18;
            background-image: url(${LOGO});
            background-size: contain;
        }

        .menu {
            display: flex;
            gap: 3rem;
        }

        .search {
            flex: 1;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            .input_wrapper {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                position: relative;
                max-width: calc(100vw - 200px);
                input {
                    width: 100%;
                    max-width: 100%;
                    text-align: center;
                    font-size: 1.5rem;
                    background-color: ${(p) => p.theme.bgColor.bg1};
                    outline: none;
                    &::placeholder {
                        color: ${(p) => p.theme.textColor.textColor10};
                    }
                    caret-color: #000;
                    > div {
                        display: inline-block;
                    }
                }
                .fakeDom {
                    position: absolute;
                    top: -500px;
                    font-size: 1.5rem;
                }
            }
        }
    }
    ${mediaQuery('mobile')} {
        .center {
            margin: 0;
        }
    }
`
const HeaderMenu = styled.a`
    display: block;
    position: relative;
    font-size: 1.5rem;
    font-weight: 500;
    color: ${(props) => props.theme.textColor.textColor90};
    transition: 0.5s ease;
    transform-origin: top;
    transform-style: preserve-3d;
    transform: perspective(3000px);
    user-select: none;
    &:hover {
        transform: rotateX(90deg);
        span {
            color: ${(props) => props.theme.textColor.textColor90};
        }
    }
    span {
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        font-size: 1.5rem;
        font-weight: 500;
        font-family: inherit;
        transform: rotateX(-90deg) translateZ(20px);
        transform-origin: top;
    }
`

export const S = {
    HeaderContainer,
    HeaderMenu,
}
