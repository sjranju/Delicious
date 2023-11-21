import '../../setupTests'
import { render, renderHook, screen, waitFor } from "@testing-library/react"
import React from "react"
import { default as restaurantListMock } from '../mocks/bodyMockData.json'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import useFetchRestaurants from '../../utils/useFetchRestaurants'
import "@testing-library/jest-dom"
import '../../setupTests'
import { jsonObj } from '../mocks/allRestaurantsMock'
import RestaurantList from '../RestaurantList'
import { act } from 'react-dom/test-utils'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import { mockPageOffsetForRestaurantList } from '../mocks/topRatedRestaurants'
import MockAdapter from 'axios-mock-adapter'
import { RESTAURANT_API } from '../../utils/constants'

type propsType = {
    children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

const queryClient = new QueryClient()
const wrapper = (props: propsType) => (
    <QueryClientProvider client={queryClient}>
        {props.children}
    </QueryClientProvider>
)

let mock = new MockAdapter(axios)

describe('Render Body component', () => {

    afterEach(() => jest.clearAllMocks())

    it('should render all 13 cards', async () => {

        mock.onGet(RESTAURANT_API).reply(200, {
            data: { cards: restaurantListMock }
        })

        const { result } = renderHook(() => useFetchRestaurants(), { wrapper })

        const res = await waitFor(async () => {
            return result.current.then(response => {
                return response
            })
        })

        expect(res.data.cards.length).toEqual(13)

    })

    it('should render restaurant cards', async () => {

        await act(async () =>
            render(
                <BrowserRouter>
                    <RestaurantList card={jsonObj.card} offset={mockPageOffsetForRestaurantList} />
                </BrowserRouter>
                , { wrapper })
        )

        expect(screen.getAllByTestId('restaurantCard').length).toBe(9)
    })

})


