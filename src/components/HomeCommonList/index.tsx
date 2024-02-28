import sampleImg from 'assets/img/player_cover_sample.png'
import FigkPlayer from 'components/FigkPlayer'
import { Graphic } from 'components/Graphic'
import TextFigkCard from 'components/TextFigkCard'
import { AWS_BUCKET_URL } from 'constant/common'
import { HOME_LAYOUT_TYPE } from 'function/home'
import PlayerBundle from 'layout/PlayerBundle'
import { HomeLayoutItemModel } from 'model/home'
import { Link } from 'react-router-dom'
import { ROUTER_PATH } from 'router'
import HomeDoubleCardComponent from 'template/HomeDoubleCardComponent'
import HomeSingleCardComponent from 'template/HomeSingleCardComponent'
interface Props {
    data: HomeLayoutItemModel
}

const HomeCommonList = ({ data }: Props) => {
    return (
        <>
            {data.type === HOME_LAYOUT_TYPE.TEXT && <TextFigkCard data={data.textFigk} />}
            {data.type === HOME_LAYOUT_TYPE.ART && data.artFigk && (
                <PlayerBundle
                    type='dark'
                    data={data.artFigk}>
                    <FigkPlayer
                        artFigkId={data.artFigk.id}
                        videoUrl={AWS_BUCKET_URL + data.artFigk.videoUrl}
                        jacketUrl={data.artFigk.jacketUrl ? AWS_BUCKET_URL + data.artFigk.jacketUrl : sampleImg}
                        jacketAlt={data.artFigk.title}
                    />
                </PlayerBundle>
            )}
            {data.type === HOME_LAYOUT_TYPE.EMPTY && (
                <HomeSingleCardComponent type={data.type}>{data.value}</HomeSingleCardComponent>
            )}
            {data.type === HOME_LAYOUT_TYPE.WEEK && (
                <HomeSingleCardComponent
                    type={data.type}
                    className='more noHover'>
                    {data.value}
                </HomeSingleCardComponent>
            )}
            {data.type === HOME_LAYOUT_TYPE.MORE_FIKG && (
                <HomeSingleCardComponent
                    type={data.type}
                    className='more'>
                    <Link
                        to={ROUTER_PATH.TEXT_FIGK}
                        className='font_work'>
                        MORE FIGK
                    </Link>
                </HomeSingleCardComponent>
            )}
            {data.type === HOME_LAYOUT_TYPE.MORE_ART && (
                <HomeSingleCardComponent
                    type={data.type}
                    className='more'>
                    <Link
                        to={ROUTER_PATH.ART_FIGK}
                        className='font_work'>
                        MORE ART FIGK
                    </Link>
                </HomeSingleCardComponent>
            )}
            {data.type === HOME_LAYOUT_TYPE.TOP && (
                <HomeSingleCardComponent
                    type={data.type}
                    className='more'>
                    <button
                        type='button'
                        className='font_work'>
                        TOP
                    </button>
                </HomeSingleCardComponent>
            )}
            {data.type === HOME_LAYOUT_TYPE.SINGLE_1 && (
                <HomeSingleCardComponent type={data.type}>
                    <Graphic.SquareFlashing />
                </HomeSingleCardComponent>
            )}
            {data.type === HOME_LAYOUT_TYPE.SINGLE_2 && (
                <HomeSingleCardComponent type={data.type}>
                    <Graphic.Gooey />
                </HomeSingleCardComponent>
            )}
            {data.type === HOME_LAYOUT_TYPE.SINGLE_3 && (
                <HomeSingleCardComponent type={data.type}>
                    <Graphic.Hoop />
                </HomeSingleCardComponent>
            )}

            {/* 두칸짜리 */}
            {data.type === HOME_LAYOUT_TYPE.DOUBLE_1 && (
                <HomeDoubleCardComponent>
                    <Graphic.Face />
                </HomeDoubleCardComponent>
            )}
            {data.type === HOME_LAYOUT_TYPE.DOUBLE_2 && (
                <HomeDoubleCardComponent>
                    <Graphic.FigkWave />
                </HomeDoubleCardComponent>
            )}
        </>
    )
}

export default HomeCommonList
