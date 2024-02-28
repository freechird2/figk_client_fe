import { motion } from 'framer-motion'
import styled from 'styled-components'
import theme from 'theme'
import { mediaQuery } from 'theme/mediaQuery'
import { mixin } from 'theme/mixin'

export type PlayerBundleThemeType = 'dark' | 'light'
interface PlayerBundleThemeContainer {
    type: PlayerBundleThemeType | string
}

const Category = styled.div`
    padding-bottom: 1.2rem;
    span {
        color: #fff;
        font-size: 1.4rem;
        line-height: 1.2;
        font-family: 'WorkSans';
        &:first-child {
            font-weight: 500;
            margin-right: 0.6rem;
        }
        &:last-child {
            font-weight: 300;
        }
    }
    ${mediaQuery('mobile')} {
        span {
            font-size: 1.4rem;
        }
    }
`

const Container = styled(motion.div)`
    /* display: flex !important; */
    /* flex-direction: column; */
    /* justify-content: center; */
    /* gap: 1.2rem; */
    /*jsh*/
    width: 100%;
    height: 100%;
    /* aspect-ratio: 16/9; */
    /*jsh*/
    /* height: 100%; */
    ${mixin.PCPadding('35px')}
    ${mixin.TabletPadding('32px')}
    @media screen and (max-width:959px) {
        padding-top: 32px;
        padding-bottom: 32px;
    }
    ${mixin.MobilePadding('24px')}
    mark {
        font-weight: inherit;
        background-color: initial;
        color: #ff4d00;
    }
    ${mediaQuery('mobile')} {
        padding-block: 30px;
    }
`

const Wrapper = styled(motion.div)<PlayerBundleThemeContainer>`
    /* display: flex; */
    /* align-items: center; */

    height: 100%;
    background-color: ${(p) => (p.type === 'dark' ? p.theme.palette.black20 : p.theme.bgColor.bg1)};
    ${Container} {
        ${Category} {
            span {
                color: ${(p) => (p.type === 'dark' ? '#Fff' : theme.textColor.textColor80)};
            }
        }
    }

    //0731_진세운 주석함 왜있느지 모르겠음
    /* ${mediaQuery('mobile')} {
        padding-bottom: 0.8rem;
    } */
`
const HashtagBox = styled.div``

const PlayerFooter = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 4rem;
    padding-top: 1.2rem;
    @media screen and (max-width: 960px) {
        flex-direction: column;
        gap: 1.2rem;
    }
`
const Shared = styled.button`
    display: flex;
    align-items: center;
    margin-left: auto;
    gap: 1px;
    font-size: 1.3rem;
    transition: 0.2s;
    &.dark {
        color: ${(p) => p.theme.textColor.textColor20};
    }
    &.light {
        color: ${(p) => p.theme.textColor.textColor60};
    }
    svg {
        transform: translate3d(0, -0.5px, 0);
    }
    @media (hover: hover) {
        &:hover {
            &.light,
            &.dark {
                color: ${(p) => p.theme.palette.point2};
                svg {
                    path {
                        fill: ${(p) => p.theme.palette.point2};
                    }
                }
            }
        }
    }
`

export const S = {
    Shared,
    PlayerFooter,
    HashtagBox,
    Container,
    Category,
    Wrapper,
}
