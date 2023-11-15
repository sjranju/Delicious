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
import { act } from 'react-dom/test-utils'
import { BrowserRouter } from 'react-router-dom'
import nock from 'nock'
import { page1 } from '../mocks/topRatedRestaurants'
import useFetchRestaurantsInfinite from '../../utils/useFetchRestaurantsInfinite'

jest.mock('../../utils/useFetchRestaurantsInfinite')

type propsType = {
    children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve({ data: { cards: restaurantListMock } }) } as Response))

const mockedUseFetchRestaurantsInfinite = useFetchRestaurantsInfinite as jest.Mock<any>

const queryClient = new QueryClient()
const wrapper = (props: propsType) => (
    <QueryClientProvider client={queryClient}>
        {props.children}
    </QueryClientProvider>
)

describe('Render Body component', () => {

    it('should render all 13 cards', async () => {

        const { result } = renderHook(() => useFetchRestaurants(), { wrapper })

        const res = await waitFor(async () => {
            return result.current.then(response => {
                return response
            })
        })

        expect(res.length).toEqual(13)

    })

    it('should render restaurant cards', async () => {

        await act(async () =>
            render(
                <QueryClientProvider client={queryClient}>
                    <BrowserRouter>
                        <RestaurantList card={jsonObj.card} />
                    </BrowserRouter>
                </QueryClientProvider>
            )
        )

        expect(screen.getAllByTestId('restaurantCard').length).toBe(9)
    })

})

describe('Check sorting', () => {

    nock('https://corsproxy.io/?https://www.swiggy.com')
        .get('/dapi/restaurants/list/update')
        .reply(200, page1)

    jest.mock('@tanstack/react-query', () => ({
        ...jest.requireActual('@tanstack/react-query'),
        useInfiniteQuery: jest.fn()
    }))

    it('should sort by top rated restaurants', async () => {
        console.log('mockedUseFetchRestaurantsInfinite', mockedUseFetchRestaurantsInfinite)
        mockedUseFetchRestaurantsInfinite.mockResolvedValue({
            status: 'Success',
            data: {
                pages: [{ result: page1.restaurants, next: 1 }]
            },
            lastPage: page1.restaurants.length + 1,
            allPages: 2
        })

        await act(async () =>
            render(
                <BrowserRouter>
                    <RestaurantList card={jsonObj.card} />
                </BrowserRouter>
                , { wrapper })
        )
    })
})
