import '../../setupTests'
import { render, renderHook, screen, waitFor } from "@testing-library/react"
import React from "react"
import { default as restaurantListMock } from '../mocks/bodyMockData.json'
import { QueryClient, QueryClientProvider, useInfiniteQuery } from '@tanstack/react-query'
import useFetchRestaurants from '../../utils/useFetchRestaurants'
import "@testing-library/jest-dom"
import '../../setupTests'
import { jsonObj } from '../mocks/allRestaurantsMock'
import RestaurantList from '../RestaurantList'
import { act } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import nock from 'nock'
import { page1, page2, allPage } from '../mocks/topRatedRestaurants'
import useFetchRestaurantsInfinite from '../../utils/useFetchRestaurantsInfinite'
import * as TYPES from "../../utils/interfaces"
import { isError } from 'react-query'

type propsType = {
    children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

const queryClient = new QueryClient()
const wrapper = (props: propsType) => (
    <QueryClientProvider client={queryClient}>
        {props.children}
    </QueryClientProvider>
)

// jest.mock('../../utils/useFetchRestaurantsInfinite')

// const mockedUseFetchRestaurantsInfinite = useFetchRestaurantsInfinite('topRated') as unknown as jest.Mock<any>

global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve({ data: { cards: [{ card: { card: { gridElements: { infoWithStyle: { restaurants: page1 } } } } }] } })
    // json: () => Promise.resolve({
    //     data: {
    //         pages: { cards: [{ card: { card: { gridElements: { infoWithStyle: { restaurants: { pages: [...page1] } } } } } }] },
    //         pageParams: page2
    //     }
    // })
} as Response))

describe('Check sorting', () => {

    // nock('https://corsproxy.io/?https://www.swiggy.com')
    //     .persist()
    //     .get('/dapi/restaurants/list/update')
    //     .reply(200, {
    //         data: {
    //             pages: { cards: [{ card: { card: { gridElements: { infoWithStyle: { restaurants: { pages: [...page1] } } } } } }] },
    //             pageParams: page2
    //         }
    //     })
    // { data: { cards: [{ card: { card: { gridElements: { infoWithStyle: { restaurants: page1 } } } } }] } }

    jest.mock('@tanstack/react-query', () => {
        const originalModule = jest.requireActual('@tanstack/react-query')
        return {
            ...originalModule,
            useInfiniteQuery: jest.fn()
        }
    })

    it('should sort by top rated restaurants', async () => {

        // mockedUseFetchRestaurantsInfinite.mockImplementation(() => ({ data: { cards: [{ card: { card: { gridElements: { infoWithStyle: { restaurants: { pages: [...page1], pageParam: page2 } } } } } }] } }))

        const { result } = renderHook((initialProps: 'topRated') => useFetchRestaurantsInfinite('topRated'), { wrapper })

        await waitFor(() => result.current.isSuccess)

        // await waitFor(() => expect(response).toBe(true))

        await act(async () =>
            render(
                <BrowserRouter>
                    <RestaurantList card={jsonObj.card} />
                </BrowserRouter>,
                { wrapper })
        )
        const topRestaurant = screen.getAllByTestId('restaurantCard')
        expect(topRestaurant.length).toEqual(39)
        expect(result.current.data?.pages.length).toEqual(1)
    })
})