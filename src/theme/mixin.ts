import { css } from 'styled-components'
import { mediaQuery } from './mediaQuery'

const MobilePadding = (tb?: string) => css`
    ${mediaQuery('mobile')} {
        padding: ${(p) => `${tb ?? 0} ${p.theme.layout.mobileSidePadding}`};
    }
`

const TabletPadding = (tb?: string) => css`
    ${mediaQuery('tabletH')} {
        padding: ${(p) => `${tb ?? 0} ${p.theme.layout.tabletSidePadding}`};
    }
`

const PCPadding = (tb?: string) => css`
    @media screen and (min-width: 1025px) {
        padding: ${(p) => `${tb ?? 0} ${p.theme.layout.pcSidePadding}`};
    }
`

const fullVh = `calc(var(--vh, 1vh) * 100)`

//텍스트 카드 공통 스타일
const CardContainer = css`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: ${(p) => `50px ${p.theme.layout.pcSidePadding}`};
    background-color: #fff;
    ${TabletPadding('50px')}
    ${MobilePadding('30px')}
`

export const mixin = {
    CardContainer,
    MobilePadding,
    TabletPadding,
    PCPadding,
    fullVh,
}
