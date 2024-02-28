import styled from 'styled-components'
import { mediaQuery } from 'theme/mediaQuery'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    h1 {
        font-weight: 300;
        font-size: 1.6rem;
        color: ${(p) => p.theme.textColor.textColor90};
        strong {
            font-size: inherit;
            font-weight: 600;
            color: inherit;
        }
    }
    button {
        font-size: 1.3rem;
        font-weight: 200;
        color: ${(p) => p.theme.textColor.textColor20};
    }
    ${mediaQuery('mobile')} {
        h1 {
            font-size: 1.8rem;
        }
        button {
            font-size: 1.4rem;
        }
    }
`
export const S = {
    Container,
}
