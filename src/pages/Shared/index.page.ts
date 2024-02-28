import styled from 'styled-components'
import { mediaQuery } from 'theme/mediaQuery'
import { mixin } from 'theme/mixin'

//shard page container
const MainContainer = styled.main`
    --errorPx: 1px;
    display: flex;
    flex-direction: column;
    flex: 1;
    /* min-height: ${(p) => `calc(${mixin.fullVh} - ${p.theme.layout.headerHeight} - ${p.theme.layout.footerheight} - var(--errorPx))`}; */
    /* margin-bottom: var(--errorPx); */
`

const Container = styled.div`
    position: relative;
    flex: 1;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 480px 1fr 480px;
    grid-gap: 1px;
    > div {
        outline: 1px solid ${(p) => p.theme.lineColor.line4};
    }
    @media screen and (min-width: 1921px) {
        max-width: 1920px;
        /* overflow: hidden; */
        margin-inline: auto;
        &:after {
            content: '';
            position: absolute;
            bottom: -1px;
            left: 50%;
            transform: translate3d(-50%, 0, 0);
            width: 100%;
            padding-inline: calc(calc(100vw - 1920px) / 2);
            height: 1px;
            background-color: ${(p) => p.theme.lineColor.line4};
        }
    }
    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 480px 480px 1fr;
        .empty:nth-of-type(3) {
            order: 4;
        }
        .other {
            order: 3;
        }
    }
    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .empty {
            display: none;
        }
        > div {
            width: min(100%, 480px);
            margin: 0 auto;
        }
        .other {
            position: relative;
            &:before {
                content: '';
                position: absolute;
                top: -1px;
                left: 50%;
                width: 100vw;
                height: 0.05rem;
                transform: translate3d(-50%, 0%, 0);
                border-top: 1px solid ${(p) => p.theme.lineColor.line4};
            }
        }
    }
`

//공유하기 페이지의 공유 내용이 텍스트픽일때 우측에 나타나는 정보카드
const RelatedlViewCard = styled.div`
    ${mixin.CardContainer}
    background-color: ${(p) => p.theme.bgColor.bg2};
    gap: 50px;
    ${mediaQuery('mobile')} {
        padding-block: 50px;
    }
`

//작가의 다른글 보기 리스트
const OtherTextFigkUl = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const OtherTextFigkLi = styled.li<{ vol: string }>`
    display: flex;
    justify-content: space-between;
    gap: 1.8rem;
    padding: 16px 20px;
    background-color: #fff;
    border: 1px solid ${(p) => p.theme.lineColor.line2};
    mix-blend-mode: initial;
    span {
        font-size: 1.3rem;
        font-weight: 500;
        color: ${(p) => p.theme.textColor.textColor70};
        flex: 1;
    }
    &:after {
        content: ${(p) => `"Vol.${p.vol}"`};
        display: block;
        color: ${(p) => p.theme.textColor.textColor20};
        font-size: 1.2rem;
        font-weight: 300;
    }
    &:hover {
        @media (hover: hover) {
            border: 1px solid ${(p) => p.theme.lineColor.line4};
        }
    }
    ${mediaQuery('mobile')} {
        padding-block: 18px;
        span {
            font-size: 1.5rem;
        }
        &:after {
            font-size: 1.3rem;
        }
    }
`

const Figure = styled.figure`
    img {
        width: 100%;
        aspect-ratio: 16/9;
        margin-bottom: 12px;
    }
`

const FigCaption = styled.figcaption<{ vol: string }>`
    display: flex;
    align-items: center;
    gap: 8px;
    padding-top: 12px;
    span {
        font-size: 1.2rem;
        color: ${(p) => p.theme.textColor.textColor80};
        font-weight: 200;
    }
    &:before {
        content: ${(p) => `"Vol.${p.vol}"`};
        display: block;
        font-size: 1.2rem;
        font-weight: 500;
        color: ${(p) => p.theme.textColor.textColor80};
    }
`

export const PS = {
    MainContainer,
    Container,
    RelatedlViewCard,
    OtherTextFigkUl,
    OtherTextFigkLi,
    Figure,
    FigCaption,
}
