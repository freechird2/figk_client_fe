import { baseApi } from 'api/constant'
import { GenericResponse } from 'model/common'

const Search = {
    getSearchFigk: async (word: string): Promise<any> => {
        const response = await baseApi.get<GenericResponse>(`figk/search`, { params: { word } })
        return response.data
    },
}

export default Search
