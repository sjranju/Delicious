import axios, { AxiosResponse } from 'axios'
import * as TYPES from '../utils/interfaces'
import { GET_RESTAURANTS_URL } from './constants'
import { useEffect } from 'react'

const useFetchRestaurants = async (): Promise<TYPES.MainContent> => {

    console.log(window.location.hostname)

    const response: AxiosResponse = await axios
        .get(GET_RESTAURANTS_URL)
        .then(response => {
            return response.data
        })
        .catch(err => console.log(err))

    return response
}
export default useFetchRestaurants