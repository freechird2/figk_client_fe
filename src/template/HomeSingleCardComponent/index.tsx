import longArrow from 'assets/icons/long_arrow.png'
import { HOME_LAYOUT_TYPE } from 'function/home'
import { ComponentPropsWithRef } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
interface Props extends ComponentPropsWithRef<'div'> {
    type: number
}

const StyledContainer = styled.div<Props>`
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    aspect-ratio: 480/600;
    font-size: 1.4rem;
    background-color: ${(p) => p.theme.bgColor.bg1};
    &.more {
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'WorkSans';
        height: 100%;

        &:not(.noHover):hover {
            @media (hover: hover) {
                background-color: ${(p) => p.theme.palette.black20};
                color: #fff;
                a,
                button {
                    color: #fff;
                    filter: brightness(10);
                }
            }
        }

        a {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 1.4rem;
            gap: 12px;
            &:after {
                content: '';
                display: block;
                width: 26px;
                aspect-ratio: 26/9;
                background-image: url(${longArrow});
                background-size: 100%;
            }
        }
    }
    @media screen and (max-width: 480px) {
        &.more {
            height: 180px;
            aspect-ratio: initial;
        }
    }
`

const HomeSingleCardComponent = ({ ...rest }: Props) => {
    const movePage = useNavigate()
    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (rest.type === HOME_LAYOUT_TYPE.MORE_FIKG) movePage('/text')
        else if (rest.type === HOME_LAYOUT_TYPE.MORE_ART) movePage('/art')
        else if (rest.type === HOME_LAYOUT_TYPE.TOP) window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return (
        <StyledContainer
            // className={rest.type === HOME_LAYOUT_TYPE.MORE_FIKG || rest.type === HOME_LAYOUT_TYPE.MORE_ART ? 'more' : ''}
            onClick={onClick}
            {...rest}
        />
    )
}

export default HomeSingleCardComponent
