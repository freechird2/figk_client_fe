import sampleImg, { default as defaultImg } from 'assets/img/player_cover_sample.png'
import FigkPlayer from 'components/FigkPlayer'
import MoreTitle from 'components/MoreTitle'
import { AWS_BUCKET_URL } from 'constant/common'
import { getWeekPad } from 'function/common'
import { FigkDetailMoreFigkModel } from 'model/figk'
import { ArtFigkModel } from 'model/home'
import { PS } from 'pages/Shared/index.page'
import { useNavigate } from 'react-router-dom'
import { ROUTER_PATH } from 'router'
interface Props {
    authorName: string
    authorId: number
    moreFigk: FigkDetailMoreFigkModel[]
    artFigk: Omit<ArtFigkModel, 'videoUrl' | 'tags'>[]
}

const SharedRelatedViewCard = ({ authorName, authorId, moreFigk, artFigk }: Props) => {
    const navigate = useNavigate()
    const onMoveWriter = (authorId: number) => {
        if (!authorId) return
        navigate(`/${ROUTER_PATH.WRITER}?id=${authorId}`)
    }
    const onMoveArt = () => {
        navigate(`/${ROUTER_PATH.ART_FIGK}`)
    }
    const onMoveShared = (figkId: number) => {
        if (!figkId) return
        navigate(`/${ROUTER_PATH.SHARED}/${ROUTER_PATH.TEXT_FIGK}?id=${figkId}`)
    }

    const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = defaultImg
    }
    return (
        <PS.RelatedlViewCard className='other'>
            <div>
                <MoreTitle
                    onClickMore={() => {
                        onMoveWriter(authorId)
                    }}>
                    <strong>{authorName}</strong> 핔커의 다른글 보기
                </MoreTitle>
                <PS.OtherTextFigkUl>
                    {moreFigk.map((figk: FigkDetailMoreFigkModel) => {
                        return (
                            <PS.OtherTextFigkLi
                                key={figk.id}
                                vol={`${getWeekPad(figk.week)}`}
                                onClick={() => onMoveShared(figk.id)}>
                                <span className='ellipsis'>{figk.title}</span>
                            </PS.OtherTextFigkLi>
                        )
                    })}
                </PS.OtherTextFigkUl>
            </div>
            <div>
                <MoreTitle onClickMore={onMoveArt}>
                    최신 <strong>ART FIGK</strong>
                </MoreTitle>
                <FigkPlayer
                    artFigkId={artFigk[0].id}
                    videoUrl={AWS_BUCKET_URL + artFigk[0].jacketUrl}
                    jacketUrl={artFigk[0].jacketUrl ? AWS_BUCKET_URL + artFigk[0].jacketUrl : sampleImg}
                    jacketAlt={artFigk[0].title}
                />
                <PS.Figure>
                    <PS.FigCaption
                        vol={`${getWeekPad(artFigk[0].week)}`}
                        className='font_work '>
                        <span className='ellipsis'>{artFigk[0].title}</span>
                    </PS.FigCaption>
                </PS.Figure>
            </div>
        </PS.RelatedlViewCard>
    )
}

export default SharedRelatedViewCard
