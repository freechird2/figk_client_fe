import styled from 'styled-components'
import { mediaQuery } from 'theme/mediaQuery'
import { mixin } from 'theme/mixin'

const Container = styled.div`
    display: flex;
    align-items: center;
    padding-inline: ${(p) => `${p.theme.layout.pcSidePadding}`};
    height: ${(p) => p.theme.layout.pageTitle};
    border-bottom: 1px solid ${(p) => p.theme.lineColor.line4};
    .contents {
        display: flex;
        align-items: center;
        gap: 1.4rem;
        width: min(960px, 100%);
        margin: 0 auto;
        .title {
            font-size: 1.6rem;
            font-weight: 400;
            user-select: none;
        }
        .search_result {
            font-size: 1.6rem;
            font-weight: 400;
            user-select: none;
            strong {
                font-size: inherit;
                font-weight: 700;
            }
        }
    }

    ${mediaQuery('tabletH')} {
        padding-inline: ${(p) => `${p.theme.layout.tabletSidePadding}`};
        height: ${(p) => p.theme.layout.tabltePageTitle};
    }
    ${mediaQuery('mobile')} {
        height: ${(p) => p.theme.layout.mobilePageTitle};
    }
    ${mixin.MobilePadding('30px')}
`
export const S = {
    Container,
}
