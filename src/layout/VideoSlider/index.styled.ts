import { motion } from 'framer-motion'
import Slider from 'react-slick'
import styled from 'styled-components'
import { mixin } from 'theme/mixin'

const Container = styled(motion.div)`
    position: relative;
    height: ${(p) => `calc(100% - ${p.theme.layout.pageTitle})`};
`

const StyledSlider = styled(Slider)`
    .slick-prev,
    .slick-next {
        position: static;
        width: initial;
        height: initial;
        transform: initial;
        &:before {
            display: none;
        }
    }

    .slick-list {
        .slick-track {
            width: 100% !important;
            .slick-slide {
                width: 100% !important;
                outline: 1px solid ${(p) => p.theme.lineColor.line4};
                /* border-left: 1px solid; */
                border-right: 1px solid;
                border-bottom: 1px solid;
                /* margin: 0 -1px; */
                > div > div {
                    display: flex;
                    align-items: center;
                    min-height: ${(p) =>
                        `calc(${mixin.fullVh} - ${p.theme.layout.headerHeight}  - ${p.theme.layout.pageTitle}  - ${p.theme.layout.footerheight} )`};
                }
            }
        }
    }
`

const NavArea = styled.div`
    position: absolute;
    width: 20%;
    top: 0;
    bottom: 0;
    z-index: 10;
    &.prev {
        left: 0;
    }
    &.next {
        right: 0;
    }
`

export const S = {
    Container,
    NavArea,
    StyledSlider,
}
