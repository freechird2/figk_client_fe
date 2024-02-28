import { baseApi } from 'api/constant'
import { ArtFigkParamModel } from 'model/artfigk'
import { GenericResponse } from 'model/common'

const artfigk = {
    getArtFigkList: async (param: ArtFigkParamModel = { page: 1, per: 10 }) => {
        const response = await baseApi.get<GenericResponse>(`figk/art-figk`, { params: param })
        return response.data
    },
    getArtFigkSlide: async (id: number) => {
        const response = await baseApi.get<GenericResponse>(`figk/art-figk/slide`, { params: { id } })
        return response.data
    },
    increaseArtFigkView: async (id: number) => {
        let response = await baseApi.put<GenericResponse>(`figk-common/view`, { id, type: 2 })
        return response.data
    },

    increaseArtFigkShare: async (id: number) => {
        let response = await baseApi.put<GenericResponse>(`figk-common/shared`, { id, type: 2 })
        return response.data
    },
}
export default artfigk
