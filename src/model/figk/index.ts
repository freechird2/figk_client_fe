import { PagenationModel } from 'model/common'
import { ArtFigkModel, TextFigkModel } from 'model/home'

export interface FigkListDataModel {
    data: FigkListModel
}

export interface FigkListModel {
    isLast: boolean
    totalCount: number
    list: TextFigkModel[]
}

export interface FigkParamModel extends PagenationModel {
    id?: number
    authorId?: number
    word?: string
}

export interface FigkDetailDataModel {
    data: FigkDetailModel
}

export interface FigkDetailModel extends TextFigkModel {
    textFigk: TextFigkModel
    artFigk: Omit<ArtFigkModel, 'videoUrl' | 'tags'>[]
    moreFigk: FigkDetailMoreFigkModel[]
}

export interface FigkDetailMoreFigkModel {
    id: number
    publishedAt: string
    title: string
    week: number
}
