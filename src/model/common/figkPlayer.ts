import { HashtagModel } from 'model/common'

export interface FigkPlayerModel {
    id: number
    week: number
    title: string
    videoUrl: string
    jacketUrl: string
    tag: HashtagModel[]
}
