import { AxiosError } from 'axios'
import { getFigkCookie } from 'function/home'
import { GenericResponse } from 'model/common'
import { FigkDetailModel } from 'model/figk'
import { ArtFigkModel } from 'model/home'
import { UseMutateFunction } from 'react-query'

export const returnTextFigkSharedOption = (
    id: number,
    callback: UseMutateFunction<unknown, unknown, number, [string, string]>
) => {
    return {
        select(res: GenericResponse): FigkDetailModel {
            return res.data
        },
        onSuccess() {
            if (!getFigkCookie({ target: 'text', type: 'view', id })) callback(id)
        },
        onError(error: AxiosError<GenericResponse>) {
            return error
        },
        refetchOnWindowFocus: false,
        retry: 0,
    }
}

export const returnArtFigkSharedOption = () => {
    return {
        select(res: GenericResponse): ArtFigkModel {
            return res.data
        },
        onError(error: AxiosError<GenericResponse>) {
            return error
        },
        refetchOnWindowFocus: false,
        retry: 0,
    }
}
