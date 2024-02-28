import styled from 'styled-components'
import { mediaQuery } from 'theme/mediaQuery'

export const SearchTabContainer = styled.div`
    background-color: ${(p) => p.theme.palette.black10};
    padding: 20px 50px;
    .contents {
        display: flex;
        width: min(960px, 100%);
        margin: 0 auto;
        gap: 40px;
    }

    ${mediaQuery('mobile')} {
        /* width: ; */
        padding: 24px 30px;
    }
`

export const StyledSearchTab = styled.div`
    display: flex;
    gap: 2px;
    user-select: none;
    .label {
        font-size: 1.6rem;
        font-weight: 500;
        color: ${(p) => p.theme.textColor.textColor10};
        transition: color 0.3s ease;
        &.active {
            color: ${(p) => p.theme.palette.point2};
        }
    }
    .totalCount {
        font-size: 1.4rem;
        color: ${(p) => p.theme.textColor.textColor30};
    }
`
