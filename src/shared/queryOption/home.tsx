import { suffle } from 'function/home'
import { GenericResponse } from 'model/common'

export const returnHomeOption = {
    select(res: GenericResponse) {
        res.data.textFigk = suffle(res.data.textFigk)
        return res.data
    },
    refetchOnWindowFocus: false,
}
