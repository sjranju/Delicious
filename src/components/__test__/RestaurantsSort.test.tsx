import '../../setupTests'
import React from "react"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import "@testing-library/jest-dom"
import '../../setupTests'
import { render, renderHook, screen, waitFor } from "@testing-library/react";
import { jsonObj } from '../mocks/allRestaurantsMock';
import RestaurantList from '../RestaurantList';
import { act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { mockJson, mockPage, mockPageOffset, mockPageOffsetForRestaurantList } from '../mocks/topRatedRestaurants';
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import { GET_MORE_RESTAURANTS } from '../../utils/constants'
import useFetchRestaurantsInfinite from '../../utils/useFetchRestaurantsInfinite'

type propsType = {
    children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

const queryClient = new QueryClient({
    defaultOptions: {
        queries: { retry: false }
    },
})

const wrapper = (props: propsType) => (
    <QueryClientProvider client={queryClient}>
        {props.children}
    </QueryClientProvider>
)

let mock = new MockAdapter(axios)

describe('Check sorting', () => {

    beforeAll(() => {
        jest.clearAllMocks();
        mock.onPost(GET_MORE_RESTAURANTS).reply(200, mockJson)
    });

    afterEach(() => jest.clearAllMocks())

    it('should sort by top rated restaurants', async () => {

        const query = renderHook(() => useFetchRestaurantsInfinite('topRated', mockPageOffset), { wrapper });

        console.log('query.current.data before wait', query.result.current.data);

        await waitFor(() => expect(query.result.current.isSuccess).toBe(true));

        console.log('query.current.data after wait', query.result.current.data?.pages[0].data.cards[0].card.card.gridElements.infoWithStyle.restaurants);

        // expect(query.result.current.data?.pages[0].data.cards[0].card.card.gridElements.infoWithStyle.restaurants.length).toEqual(1)

        await act(async () => render(
            <BrowserRouter>
                <RestaurantList card={jsonObj.card} offset={mockPageOffsetForRestaurantList} />
            </BrowserRouter>,
            { wrapper }
        )
        );
        const topRestaurant = screen.getAllByTestId('restaurantCard')
        expect(topRestaurant.length).toEqual(38);
    });

})
