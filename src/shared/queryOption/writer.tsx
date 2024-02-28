import { GenericResponse } from 'model/common'
import { FigkListDataModel } from 'model/figk'
import { AuthorModel } from 'model/writer'
import { InfiniteData } from 'react-query'

export const returnWriterInfoOption = {
    select(res: GenericResponse): AuthorModel {
        return res.data
    },
    refetchOnWindowFocus: false,
    retry: 0,
}

export const returnWriterFigklistOption = {
    select: (res: InfiniteData<FigkListDataModel>) => {
        return {
            pages: res.pages.map((p) => p.data),
            pageParams: res.pageParams,
        }
    },
    getNextPageParam: (lastPage: FigkListDataModel, allPage: FigkListDataModel[]) => {
        return !lastPage.data.isLast ? allPage.length + 1 : undefined
    },
    refetchOnWindowFocus: false,
    retry: 0,
}
