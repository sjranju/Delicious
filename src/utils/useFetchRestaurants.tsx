import axios, { AxiosResponse } from 'axios'
import * as TYPES from '../utils/interfaces'
import { RESTAURANT_API } from './constants'

const useFetchRestaurants = async (): Promise<TYPES.MainContent> => {
    const response: AxiosResponse = await axios
        .get(RESTAURANT_API)
        .then(response => {
            return response.data
        })
        .catch(err => console.log(err))

    return response
}
export default useFetchRestaurants