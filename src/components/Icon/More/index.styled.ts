import styled from 'styled-components'

export const StyledMore = styled.span`
    --size: 3px;
    --distans: -6px;
    --hoverDistans: -7px;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    aspect-ratio: 1/1;

    &:before {
        display: none;
    }

    &:hover {
        @media (hover: hover) {
            i {
                &:before {
                    left: var(--hoverDistans);
                }
                &:after {
                    right: var(--hoverDistans);
                }
            }
        }
    }

    i {
        display: block;
        position: relative;
        width: var(--size);
        height: var(--size);
        background-color: ${(p) => p.theme.palette.gray90};

        &:before,
        &:after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            width: var(--size);
            height: var(--size);
            background-color: ${(p) => p.theme.palette.gray90};
        }

        &:before {
            left: var(--distans);
        }
        &:after {
            right: var(--distans);
        }
    }
`
