import * as TYPES from '../utils/interfaces'
import { RESTAURANT_API } from './constants'

const useFetchRestaurants = (): Promise<TYPES.MainContent[]> => fetch(RESTAURANT_API)
    .then(response => {
        let res = response.json()
        return res
    })
    .catch(err => console.log(err))
    .then(jsonData => jsonData?.data?.cards || [])

export default useFetchRestaurants