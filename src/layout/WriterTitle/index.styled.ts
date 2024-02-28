import styled, { css } from 'styled-components'
import { mediaQuery } from 'theme/mediaQuery'

const Container = styled.div<{ height: string }>`
    position: relative;
    height: ${(p) => p.height};
    border-bottom: 1px solid ${(p) => p.theme.lineColor.line4};
    overflow: hidden;
    margin-top: ${(p) => p.theme.layout.headerHeight};

    .contents {
        display: flex;
        align-items: center;
        width: min(calc(960px + 100px), 100%);
        padding: 0 50px;
        margin: 0 auto;
        height: 100%;
        mix-blend-mode: difference;
        &.lastLayer {
            /* mix-blend-mode 안걸리게하기위해 추가한 스타일 */
            position: absolute;
            inset: 0;
            mix-blend-mode: initial;
        }
    }
    ${mediaQuery('tabletH')} {
        height: initial;
        margin-top: 0;

        .contents {
            mix-blend-mode: initial;
            width: min(calc(480px + 32px), 100%);
            padding: 60px 16px;
            &.lastLayer {
                position: static;
            }
        }
    }
`

const CursorBox = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    top: 0px;
    aspect-ratio: 1/1;
`

const Cursor = styled.div`
    /* position: absolute; */
    width: 20px;
    aspect-ratio: 1/1;
    background-color: ${(p) => p.theme.palette.black20};
    /* background-color: #fff; */
    border-radius: 50%;
    transition: width 0.3s ease;
    &.scaleUp {
        /* transform: scale(17.5); */
        width: 300px;
        /* background-color: ${(p) => p.theme.palette.black20}; */
        /* background-color: red; */
    }
`

const Artist = styled.div<{ isSNS: boolean }>`
    --artist_Name: 2rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    h1 {
        color: #fff;
        font-size: var(--artist_Name);
        font-weight: 700;
        ${(p) =>
            p.isSNS &&
            css`
                margin-bottom: calc(var(--artist_Name) + 12px);
            `}
    }
    .sns {
        margin-top: calc(var(--artist_Name) + 12px);
        a {
            display: inline-flex;
            align-items: center;
            font-size: 1.3rem;
            color: ${(p) => p.theme.textColor.textColor20};
            &:not(:last-of-type):after {
                content: '';
                display: inline-block;
                width: 4px;
                aspect-ratio: 1/1;
                margin: 0 8px;
                border-radius: 50%;
                background-color: ${(p) => p.theme.textColor.textColor20};
            }
        }
    }

    ${mediaQuery('tabletH')} {
        flex-direction: column;
        h1 {
            color: ${(p) => p.theme.textColor.textColor70};
            margin-bottom: 12px;
        }
        .sns {
            margin-top: 0;
            margin-bottom: 20px;
            a {
                font-size: 1.4rem;
                color: ${(p) => p.theme.textColor.textColor20};
                &:not(:last-of-type):after {
                    margin: 0 12px;
                }
            }
        }
    }
`

const ArtistDesc = styled.p`
    width: 50%;
    font-size: 1.3rem;
    font-weight: 300;
    color: ${(p) => p.theme.textColor.textColor20};

    line-height: 1.5;
    ${mediaQuery('tabletH')} {
        font-size: 1.4rem;
        width: 100%;
        color: ${(p) => p.theme.textColor.textColor70};
    }
`
export const S = {
    Container,
    CursorBox,
    Cursor,
    Artist,
    ArtistDesc,
}
