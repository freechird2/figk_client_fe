import { ComponentPropsWithRef } from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
    font-size: 1.4rem;
    aspect-ratio: 16/9;
    background-color: ${(p) => p.theme.bgColor.bg2};
    img {
        height: 100%;
        object-fit: cover;
    }
`

interface Props extends ComponentPropsWithRef<'div'> {}
const HomeDoubleCardComponent = ({ ...rest }: Props) => {
    return <StyledContainer {...rest} />
}

export default HomeDoubleCardComponent
