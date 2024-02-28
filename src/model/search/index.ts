import { ArtFigkModel, TextFigkModel } from 'model/home'

interface SearchSummaryModel {
    searchWord: string
    artFigkTotal: number
    textFigkTotal: number
}

export interface SearchFigkResponseModel {
    summary: SearchSummaryModel
    textFigk: TextFigkModel[]
    artFigk: ArtFigkModel[]
}
