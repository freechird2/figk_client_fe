import longArrow from 'assets/icons/long_arrow.png'
import styled from 'styled-components'
import { mediaQuery } from 'theme/mediaQuery'
import { mixin } from 'theme/mixin'
const Container = styled.div`
    display: flex;
    gap: 1px;

    .empty {
        width: 20%;
        outline: 1px solid ${(p) => p.theme.lineColor.line4};
        &.more {
            display: flex;
            align-items: center;
            justify-content: center;

            &:hover {
                @media (hover: hover) {
                    background-color: ${(p) => p.theme.bgColor.bg2};
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
    }
    .player {
        flex: 1;
        outline: 1px solid ${(p) => p.theme.lineColor.line4};
    }

    ${mediaQuery('tabletH')} {
        flex-direction: column;

        .empty {
            display: none;
            &.more {
                display: flex;
                width: 100%;
                padding: 70px 0;

                background-color: ${(p) => p.theme.bgColor.bg2};
                a {
                    flex-direction: row;
                    align-items: center;
                    &:after {
                    }
                }
            }
        }
        .player {
            /* display: flex; */
            /* align-items: center; */
        }
    }

    ${mediaQuery('mobile')} {
        .player {
            /* display: flex; */
            /* align-items: center; */
            flex: initial;
            /* min-height: ${(p) => `calc(${mixin.fullVh} - ${p.theme.layout.mobilePageTitle} - ${p.theme.layout.mobileHeaderHeight} )`}; */
            > div {
                /* margin: calc(var(--vh, 1vh) * 10) 0; */
            }
        }
    }
`

export const PS = {
    Container,
}
