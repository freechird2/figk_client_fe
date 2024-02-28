import { baseApi } from 'api/constant'
import { GenericResponse } from 'model/common'

const Home = {
    getHomeList: async () => {
        const response = await baseApi.get<GenericResponse>(`figk/home`)
        return response.data
    },
}

export default Home
