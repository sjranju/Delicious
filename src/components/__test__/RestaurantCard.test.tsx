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
import { mockPageOffsetForRestaurantList } from '../mocks/topRatedRestaurants'

type propsType = {
    children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

const queryClient = new QueryClient()
const wrapper = (props: propsType) => (
    <QueryClientProvider client={queryClient}>
        {props.children}
    </QueryClientProvider>
)
global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve({ data: { cards: restaurantListMock } }) } as Response))

nock('https://corsproxy.io/?https://www.swiggy.com')
    .get('/dapi/restaurants/list/v5?lat=12.979568962372062&lng=77.50290893018244&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&__fetch_req__=true')
    .reply(200, { data: { cards: restaurantListMock } });

describe('Render Body component', () => {
    afterEach(() => jest.clearAllMocks())
    beforeAll(() => jest.clearAllMocks())
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
                        <RestaurantList card={jsonObj.card} offset={mockPageOffsetForRestaurantList} />
                    </BrowserRouter>
                </QueryClientProvider>
            )
        )

        expect(screen.getAllByTestId('restaurantCard').length).toBe(9)
    })

})


