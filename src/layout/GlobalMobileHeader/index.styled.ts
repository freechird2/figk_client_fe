import LOGO from 'assets/img/FIGK.png'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { mediaQuery } from 'theme/mediaQuery'
const HeaderContainerWrapper = styled.div`
    position: sticky;
    top: 0;
    height: ${(p) => p.theme.layout.mobileHeaderHeight};
    z-index: 100;
`

const HeaderContainerWrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
`

const HeaderContainer = styled.header<{ isMenu: boolean }>`
    --errorIconSize: 8px; //아이콘 양쪽 흰색 여백 사이즈
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${(p) => p.theme.layout.mobileHeaderHeight};
    background-color: ${(p) => p.theme.bgColor.bg1};
    padding: ${(p) => `0 calc(${p.theme.layout.tabletSidePadding})`};
    border-bottom: 1px solid ${(p) => p.theme.lineColor.line4};
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
                max-width: 200px;
                input {
                    width: 100%;
                    text-align: center;
                    font-size: 1.6rem;
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
    ${mediaQuery('tabletH')} {
        padding: ${(p) => `0 calc(${p.theme.layout.tabletSidePadding} - var(--errorIconSize))`};
    }
    ${mediaQuery('mobile')} {
        padding: ${(p) => `0 calc(${p.theme.layout.mobileSidePadding} - var(--errorIconSize))`};
    }
`
const HeaderMenu = styled(motion.a)`
    display: block;
    position: relative;
    font-size: 1.6rem;
    font-weight: 500;
    color: ${(props) => props.theme.textColor.textColor90};
    transition: 0.5s ease;
    user-select: none;
    line-height: 1.5;
`

const MobileMenuBox = styled(motion.div)`
    width: 100%;
    background-color: ${(p) => p.theme.bgColor.bg1};
    border-bottom: 1px solid ${(p) => p.theme.lineColor.line4};
    overflow: hidden;
    transform: translate3d(0, -1px, 0);
    > div {
        padding: 30px 0 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 26px;
    }
`
export const S = {
    HeaderContainerWrapper,
    HeaderContainerWrap,
    HeaderContainer,
    HeaderMenu,
    MobileMenuBox,
}
