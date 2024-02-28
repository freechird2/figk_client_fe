import styled from 'styled-components'
import { mediaQuery } from 'theme/mediaQuery'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    /* height: 100%; */
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.1);
    background: rgb(0, 0, 0);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.85) 100%);
    z-index: 10;
    .controllBox {
        display: flex;
        align-items: center;
        justify-content: space-between;

        > div {
            display: flex;
            align-items: center;
            gap: 12px;
        }
    }
    ${mediaQuery('mobile')} {
        padding: 8px 12px;
        .controllBox {
            > div {
                gap: 4px;
            }
        }
    }
`
const Track = styled.div`
    display: block;
    position: relative;
    width: 100%;
    margin-bottom: 10px;
`

const Sound = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    padding: 0 10px;
    gap: 12px;

    .slideBox {
        display: flex;
        align-items: center;
        position: relative;
        z-index: 1;
        width: 40px;
        height: 12px;
        overflow: hidden;
        > div {
            transition: transform 0.3s ease;
            transform: translate3d(100%, 0, 0);
        }
    }
    > svg {
        position: relative;
        z-index: 1;
        flex-shrink: 0;
    }
    &:after {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 100px;
        z-index: 0;
        background-color: rgba(0, 0, 0, 0.3);
        transform: translate3d(-50%, -50%, 0) scale(0);
        transition: transform 0.3s 0.2s ease;
        width: calc(100% + 8px);
        height: calc(100% + 16px);
        /* padding: 8px 0; */
    }
    &:hover {
        .slideBox {
            /* width: 0px; */
            > div {
                transition: transform 0.3s 0.2s ease;
                transform: translate3d(0, 0, 0);
            }
        }
        @media (hover: hover) {
            &:after {
                transition: transform 0.3s ease;
                transform: translate3d(-50%, -50%, 0) scale(1);
            }
        }
    }
`
const Time = styled.div`
    font-size: 1.2rem;
    white-space: nowrap;
    color: #fff;
    user-select: none;
`

const IconHoverBox = styled.div<{ width?: number }>`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 31px;
    aspect-ratio: 1/1;
    > * {
        position: relative;
        z-index: 1;
    }
    &:after {
        content: '';
        display: block;
        position: absolute;
        inset: 0;
        border-radius: 50%;
        z-index: 0;
        background-color: rgba(0, 0, 0, 0.3);
        transform: scale(0);
        transition: transform 0.3s ease;
    }
    &:hover {
        @media (hover: hover) {
            &:after {
                transform: scale(1);
            }
        }
    }
`

export const S = {
    Container,
    Track,
    Sound,
    Time,
    IconHoverBox,
}
