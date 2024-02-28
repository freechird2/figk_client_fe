import { GenericResponse } from 'model/common'
import { SearchFigkResponseModel } from 'model/search'

export const returnSearchOption = {
    select(res: GenericResponse): SearchFigkResponseModel {
        return res.data
    },
    refetchOnWindowFocus: false,
}
