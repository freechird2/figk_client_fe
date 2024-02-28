import API from 'api'

import { AxiosError } from 'axios'
import SharedRelatedViewCard from 'components/SharedRelatedViewCard'
import TextFigkCard from 'components/TextFigkCard'
import { setFigkCookie } from 'function/home'
import useTMutation from 'hook/useMutation'
import useGetQuery from 'hook/useQuery'
import PageTitle from 'layout/PageTitle'
import { GenericResponse } from 'model/common'
import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { returnTextFigkSharedOption } from 'shared/queryOption/shared'
import { PS } from '../index.page'

const SharedTextFigk = () => {
    const [params] = useSearchParams()
    const navigate = useNavigate()
    const figkId: number = parseInt(params.get('id') || '0')

    const onSuccessIncreaseView = () => {
        setFigkCookie({ target: 'text', type: 'view', id: figkId })
    }

    const { mutate: increaseView } = useTMutation(
        ['@increaseTextFigkView', String(figkId)],
        (id: number) => API.Figk.increaseTextFigkView(id),
        onSuccessIncreaseView
    )

    // 해당 작가의 text Figk api
    const { error, data } = useGetQuery(
        ['@getTextFigkDetail', String(figkId)],
        () => API.Figk.getFigkDetail({ id: figkId }),
        returnTextFigkSharedOption(figkId, increaseView)
    )

    useEffect(() => {
        if (!figkId) {
            alert('잘못된 접근입니다.')
            navigate(-1)
        }
    }, [figkId])

    useEffect(() => {
        if (error) {
            const err = error as AxiosError<GenericResponse>

            alert(err.response?.data.message)
            navigate(-1)
        }
    }, [error])

    return (
        <>
            {data && (
                <>
                    {/* <PageTitle title={`Vol.${getWeekPad(data.textFigk.week)}`} /> */}
                    <PageTitle title='FIGK' />
                    <PS.Container>
                        <div className='empty' />
                        <div className='textfigk'>
                            <TextFigkCard data={data.textFigk} />
                        </div>
                        <div className='empty' />
                        <SharedRelatedViewCard
                            authorName={data.textFigk.authorName}
                            authorId={data.textFigk.authorId}
                            moreFigk={data.moreFigk}
                            artFigk={data.artFigk}
                        />
                    </PS.Container>
                </>
            )}
        </>
    )
}

export default SharedTextFigk
