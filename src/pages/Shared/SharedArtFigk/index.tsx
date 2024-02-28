import API from 'api'
import sampleImg from 'assets/img/player_cover_sample.png'
import { AxiosError } from 'axios'
import FigkPlayer from 'components/FigkPlayer'
import { AWS_BUCKET_URL } from 'constant/common'
import useCursor from 'hook/useCursor'
import useGetQuery from 'hook/useQuery'
import PageTitle from 'layout/PageTitle'
import PlayerBundle from 'layout/PlayerBundle'
import { GenericResponse } from 'model/common'
import { PS } from 'pages/Shared/SharedArtFigk/index.page'
import { useEffect } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { ROUTER_PATH } from 'router'
import { returnArtFigkSharedOption } from 'shared/queryOption/shared'

const SharedArtFigk = () => {
    const { enter, leave } = useCursor()
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const artFigkId = parseInt(searchParams.get('id') || '0')

    const { error, data: detail } = useGetQuery(
        ['@getArtFigkList', String(artFigkId)],
        () => API.artFiGk.getArtFigkList({ id: artFigkId }),
        returnArtFigkSharedOption()
    )

    useEffect(() => {
        if (!artFigkId) {
            alert('잘못된 접근입니다.')
            navigate(-1)
        }
    }, [artFigkId])

    useEffect(() => {
        if (error) {
            const err = error as AxiosError<GenericResponse>

            alert(err.response?.data.message)
            navigate(-1)
        }
    }, [error])

    return (
        <>
            {detail && (
                <>
                    <PageTitle title='ART FIGK' />
                    <PS.Container>
                        <div className='empty' />
                        <div className='player'>
                            {detail && (
                                <PlayerBundle data={detail}>
                                    <FigkPlayer
                                        artFigkId={detail.id}
                                        videoUrl={AWS_BUCKET_URL + detail.jacketUrl}
                                        jacketUrl={detail.jacketUrl ? AWS_BUCKET_URL + detail.jacketUrl : sampleImg}
                                        jacketAlt={detail.title}
                                    />{' '}
                                </PlayerBundle>
                            )}
                        </div>
                        <div className='empty more'>
                            <Link
                                to={`/${ROUTER_PATH.ART_FIGK}?view=block`}
                                className='font_work'
                                onMouseEnter={() => enter('action2')}
                                onMouseLeave={leave}>
                                MORE ART FIGK
                            </Link>
                        </div>
                    </PS.Container>
                </>
            )}
        </>
    )
}

export default SharedArtFigk
