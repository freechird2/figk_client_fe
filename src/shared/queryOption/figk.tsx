import { FigkListDataModel } from 'model/figk'
import { InfiniteData } from 'react-query'

export const returnTextFigkOption = {
    select: (res: InfiniteData<FigkListDataModel>) => {
        return {
            pages: res.pages.map((p) => p.data),
            pageParams: res.pageParams,
        }
    },
    getNextPageParam: (lastPage: FigkListDataModel) => {
        return !lastPage.data.isLast ? lastPage.data.list[0].week - 1 : undefined
    },
    refetchOnWindowFocus: false,
}
