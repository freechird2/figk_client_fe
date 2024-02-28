import styled from 'styled-components'

export const StyledDelete = styled.i`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: ${(p) => p.theme.palette.light50};
    &::before,
    &:after {
        content: '';
        display: block;
        width: 1.4rem;
        height: 1px;
        background-color: black;
        transition: 0.2s;
    }

    &:before {
        transform: rotate(-45deg) translate3d(calc(50% + 0.05rem), -50%, 0);
        transform-origin: center right;
    }
    &:after {
        transform: rotate(45deg) translate3d(calc(-50% - 0.05rem), -50%, 0);
        transform-origin: center left;
    }
`
