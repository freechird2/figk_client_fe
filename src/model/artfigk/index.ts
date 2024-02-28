import { PagenationModel } from 'model/common'
import { ArtFigkModel } from 'model/home'

export interface ArtFigkListDataModel {
    data: ArtFigkListModel
}

export interface ArtFigkListModel {
    isLast: boolean
    totalCount: number
    list: ArtFigkModel[]
}

export interface ArtFigkParamModel extends PagenationModel {
    id?: number
    word?: string
}
