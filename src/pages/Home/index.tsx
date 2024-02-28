import API from 'api'
import GridLineBox from 'components/GridLineBox'
import HomeCommonList from 'components/HomeCommonList'
import { getGridLineBoxType, getHomeLayoutArray, getLayoutTypeByWidth } from 'function/home'
import useGetQuery from 'hook/useQuery'
import useWidth from 'hook/useWidth'
import { Grid } from 'layout/Grid/index'
import PageTitle from 'layout/PageTitle'
import { HomeLayoutItemModel } from 'model/home'
import { useEffect, useState } from 'react'
import { returnHomeOption } from 'shared/queryOption/home'

const Home = () => {
    const [list, setList] = useState<Array<HomeLayoutItemModel>>([])
    const [layoutType, setLayoutType] = useState<number>(0)
    const { width } = useWidth()

    const { isLoading, data: home } = useGetQuery(['@getHomeList'], API.Home.getHomeList, returnHomeOption)

    const detectHomeList = (type: number) => {
        if (layoutType !== type) {
            setLayoutType(type)
            setList(getHomeLayoutArray(type, home))
        }
    }

    useEffect(() => {
        if (!isLoading) {
            setList(getHomeLayoutArray(layoutType, home))
        }
    }, [isLoading])

    useEffect(() => {
        const type = getLayoutTypeByWidth(width)
        detectHomeList(type)
    }, [width])

    return (
        <>
            <PageTitle title='FIGK OF THE WEEK' />
            {list && (
                <Grid.Common.Container>
                    {list.map((item: HomeLayoutItemModel, idx: number) => {
                        return (
                            <GridLineBox
                                column={getGridLineBoxType(item.type)}
                                key={idx}>
                                <HomeCommonList data={item} />
                            </GridLineBox>
                        )
                    })}
                </Grid.Common.Container>
            )}
        </>
    )
}

export default Home
