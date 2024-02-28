// import { ReactComponent as FIGK } from 'assets/graphic/FIGK_path.svg'
import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    .path {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        z-index: 2;
    }

    span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        z-index: 2;
        font-size: 4rem;
        font-weight: 900;
        color: #fff;
        letter-spacing: 4px;
        &:first-child {
            color: transparent;
            -webkit-text-stroke: 1px ${(p) => p.theme.palette.black20};
        }
        &:last-child {
            color: ${(p) => p.theme.palette.black20};
            animation: animate 4s ease-in-out infinite;
        }
    }
    @keyframes animate {
        0%,
        100% {
            clip-path: polygon(
                100% 100%,
                0% 100%,
                0% 59.67%,
                2% 59.56%,
                4% 59.23%,
                6% 58.69%,
                8% 57.96%,
                10% 57.05%,
                12% 55.97%,
                14% 54.76%,
                16% 53.45%,
                18% 52.05%,
                20% 50.61%,
                22% 49.15%,
                24% 47.71%,
                26% 46.33%,
                28% 45.03%,
                30% 43.84%,
                32% 42.79%,
                34% 41.9%,
                36% 41.2%,
                38% 40.7%,
                40% 40.41%,
                42% 40.34%,
                44% 40.48%,
                46% 40.84%,
                48% 41.41%,
                50% 42.18%,
                52% 43.12%,
                54% 44.22%,
                56% 45.45%,
                58% 46.78%,
                60% 48.19%,
                62% 49.64%,
                64% 51.09%,
                66% 52.52%,
                68% 53.89%,
                70% 55.18%,
                72% 56.35%,
                74% 57.37%,
                76% 58.23%,
                78% 58.9%,
                80% 59.36%,
                82% 59.62%,
                84% 59.65%,
                86% 59.47%,
                88% 59.07%,
                90% 58.47%,
                92% 57.68%,
                94% 56.71%,
                96% 55.58%,
                98% 54.33%,
                100% 52.99%
            );
        }
        50% {
            clip-path: polygon(
                100% 100%,
                0% 100%,
                0% 40.66%,
                2% 40.39%,
                4% 40.34%,
                6% 40.51%,
                8% 40.89%,
                10% 41.48%,
                12% 42.26%,
                14% 43.22%,
                16% 44.33%,
                18% 45.58%,
                20% 46.92%,
                22% 48.33%,
                24% 49.78%,
                26% 51.23%,
                28% 52.66%,
                30% 54.02%,
                32% 55.3%,
                34% 56.45%,
                36% 57.46%,
                38% 58.3%,
                40% 58.95%,
                42% 59.4%,
                44% 59.63%,
                46% 59.65%,
                48% 59.44%,
                50% 59.02%,
                52% 58.4%,
                54% 57.59%,
                56% 56.6%,
                58% 55.47%,
                60% 54.21%,
                62% 52.85%,
                64% 51.43%,
                66% 49.98%,
                68% 48.53%,
                70% 47.11%,
                72% 45.76%,
                74% 44.5%,
                76% 43.37%,
                78% 42.39%,
                80% 41.58%,
                82% 40.96%,
                84% 40.55%,
                86% 40.35%,
                88% 40.37%,
                90% 40.61%,
                92% 41.07%,
                94% 41.72%,
                96% 42.56%,
                98% 43.58%,
                100% 44.74%
            );
        }
    }
`
const FigkWave = () => {
    return (
        <Container>
            <span className='font_work'>FIGK</span>
            <span className='font_work'>FIGK</span>
            {/* <FIGK className='path' /> */}
        </Container>
    )
}
export default FigkWave
