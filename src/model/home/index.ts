import { TagType } from 'model/common'

export interface HomeListResponse {
    artFigk: ArtFigkModel[]
    textFigk: TextFigkModel[]
}

export interface ArtFigkModel {
    id: number
    week: number
    title: string
    videoUrl: string
    jacketUrl: string
    tag: TagType[]
}

export interface TextFigkModel {
    id: number
    title: string
    subTitle: string
    content: string
    authorName: string
    isPublished: string
    publishStatus: string
    link: string
    week: number
    authorId: number
    tag: TagType[]
}

export interface HomeLayoutItemModel {
    type: number
    textFigk?: TextFigkModel
    artFigk?: ArtFigkModel
    value?: string
}
