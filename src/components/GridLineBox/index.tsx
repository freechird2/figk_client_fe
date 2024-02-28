import { motion } from 'framer-motion'
import { MotionVariants } from 'pages/ArtFigk/motion'
import styled from 'styled-components'
import { ColumnType, StyledGridLineBox } from './index.styled'

interface GridLineBoxProps extends ColumnType {
    children: React.ReactNode
}
const Box = styled(motion.div)`
    /* position: relative; */
    /* z-index: 10; */
`

const GridLineBox = ({ children, column, linecolor = 'line4' }: GridLineBoxProps) => {
    return (
        <>
            <StyledGridLineBox
                column={column}
                linecolor={linecolor}>
                <Box>
                    <motion.div variants={MotionVariants.list}>{children}</motion.div>
                </Box>
            </StyledGridLineBox>
        </>
    )
}

export default GridLineBox
