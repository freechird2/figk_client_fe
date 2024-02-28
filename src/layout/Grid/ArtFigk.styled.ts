import { motion } from 'framer-motion'
import styled from 'styled-components'
import { mediaQuery } from 'theme/mediaQuery'

export const Container = styled(motion.div)`
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* justify-content: center; */
    /* grid-auto-flow: row dense; */
    margin: 0 auto;

    //2560px 이상일때 4개 유지 스타일
    @media screen and (min-width: 1920px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }

    ${mediaQuery('mobile')} {
        > div {
            outline: 1px solid ${(p) => p.theme.lineColor.line2};
        }
    }
`

export const ArtFigk = {
    Container,
}
