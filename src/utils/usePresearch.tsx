import axios from 'axios'
import React from 'react'
import { PRE_SEARCH } from './constants'
import { useQuery } from '@tanstack/react-query'
import { PreSearch } from './interfaces'

const usePresearch = () => {

    const fetchPreSearch = async (): Promise<PreSearch> => {

        const response: PreSearch = await axios.get(PRE_SEARCH)
            .then(res => res.data)
            .catch(error => console.log(error))

        return response

    }

    const { data, isLoading } = useQuery(['presearch'], () => fetchPreSearch())

    return ({ data, isLoading })
}

export default usePresearch
