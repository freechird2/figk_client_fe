import styled from 'styled-components'
import { mediaQuery } from 'theme/mediaQuery'
import { mixin } from 'theme/mixin'

export const StyledFooter = styled.footer`
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${(p) => p.theme.layout.footerheight};
    ${mixin.PCPadding()}
    outline: 1px solid ${(p) => p.theme.lineColor.line4};
    background-color: ${(p) => p.theme.bgColor.bg1};
    margin-top: -1px;
    > span {
        font-size: 1.3rem;
        color: ${(p) => p.theme.textColor.textColor30};
    }
    > div {
        display: flex;
        gap: 3rem;
        span,
        a {
            font-size: 1.3rem;
            color: ${(p) => p.theme.textColor.textColor80};
            text-decoration: none;
        }
    }

    ${mediaQuery('tabletH')} {
        flex-wrap: wrap-reverse;
        justify-content: center;
        height: initial;
        ${mixin.TabletPadding('30px')}
        gap: 12px;
        > span {
            width: 100%;
            text-align: center;
        }
        > div {
            gap: 16px;
            span,
            a {
                font-size: 1.4rem;
            }
        }
    }
`
