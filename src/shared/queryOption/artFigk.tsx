import { ArtFigkListModel } from 'model/artfigk'
import { GenericResponse } from 'model/common'
import { ArtFigkModel } from 'model/home'

export const returnArtFigkOption = {
    select(res: GenericResponse): ArtFigkListModel {
        return res.data
    },
    refetchOnWindowFocus: false,
}

export const returnArtFigkSlideOption = {
    select(res: GenericResponse): ArtFigkModel[] {
        return res.data
    },
    refetchOnWindowFocus: false,
}
