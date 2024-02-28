import API from 'api'
import Align from 'components/Icon/Align'
import VideoBlock from 'components/VideoBlock'
import useCursor from 'hook/useCursor'
import useGetQuery from 'hook/useQuery'
import useWidth from 'hook/useWidth'

import PageTitle from 'layout/PageTitle'
import VideoSlider from 'layout/VideoSlider'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { returnArtFigkOption } from 'shared/queryOption/artFigk'

const ArtFiGk = () => {
    const { width } = useWidth()
    const { enter, leave } = useCursor()
    const [searchParams, setSearchParams] = useSearchParams()
    const [listForm, setListForm] = useState<boolean>(searchParams.get('view') === 'block' ? false : true)
    const HideCondition = width <= 1200

    const changeFormHandler = () => {
        setListForm(!listForm)
    }

    const { isLoading, data: list } = useGetQuery(['@getArtFigkList'], () => API.artFiGk.getArtFigkList({ page: 1, per: 9999 }), returnArtFigkOption)

    useEffect(() => {
        if (HideCondition) {
            setListForm(false)
        }
    }, [HideCondition])

    return (
        <>
            {list && (
                <>
                    <PageTitle title='ART FIGK'>
                        {!HideCondition && (
                            <Align
                                action={listForm}
                                onClick={changeFormHandler}
                                onMouseEnter={() => enter('action')}
                                onMouseLeave={leave}
                            />
                        )}
                    </PageTitle>
                    {/* inline 형 */} {listForm && !HideCondition && <VideoSlider list={list.list} />}
                    {/* block 형 */}
                    {!listForm && <VideoBlock list={list.list} />}
                </>
            )}
        </>
    )
}

export default ArtFiGk
