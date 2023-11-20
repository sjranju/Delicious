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
import nock from 'nock';
import { mockJson, mockPage, mockPageOffset, mockPageOffsetForRestaurantList } from '../mocks/topRatedRestaurants';
import useFetchRestaurantsInfinite from '../../utils/useFetchRestaurantsInfinite';

type propsType = {
    children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

const queryClient = new QueryClient({
    logger: {
        log: console.log,
        warn: console.warn,
        // ✅ no more errors on the console for tests
        error: process.env.NODE_ENV === 'test' ? () => { } : console.error,
    },
    defaultOptions: {
        queries: { retry: false }
    },
})
const wrapper = (props: propsType) => (
    <QueryClientProvider client={queryClient}>
        {props.children}
    </QueryClientProvider>
)

describe('Check sorting', () => {

    beforeAll(() => {
        console.log('Before all clearing mocks');
        jest.clearAllMocks();
    });

    beforeEach(() => {
        console.log('describe testing')
    });

    // global.fetch = jest.fn(() => {
    //     console.log('global.fetch called')
    //     return Promise.resolve(
    //         {
    //             json: () => Promise.resolve(mockJson)
    //         } as Response);
    // });

    jest.mock('../../utils/useFetchRestaurantsInfinite', () => ({
        __esModule: true,
        default: jest.fn(() => Promise.resolve(mockJson))
    }))

    // jest.mock('@tanstack/react-query', () => {
    //     const originalModule = jest.requireActual('@tanstack/react-query');
    //     return {
    //         ...originalModule,
    //         useInfiniteQuery: jest.fn()
    //     };
    // });

    it('should sort by top rated restaurants', async () => {

        console.log('in test before renderHook');
        // nock('https://corsproxy.io/?https://www.swiggy.com')
        //     .persist()
        //     .post('/dapi/restaurants/list/update')
        //     .reply(200, mockPage)
        const query = renderHook(() => useFetchRestaurantsInfinite('topRated', mockPageOffset), { wrapper });

        console.log('after renderHook');
        console.log('query.current.data before wait', query.result.current);

        await waitFor(() => expect(query.result.current.isSuccess).toBe(true));

        console.log('query.current.data after wait', query.result.current);

        await act(async () => render(
            <BrowserRouter>
                <RestaurantList card={jsonObj.card} offset={mockPageOffsetForRestaurantList} />
            </BrowserRouter>,
            { wrapper }
        )
        );
        const topRestaurant = screen.getAllByTestId('restaurantCard');
        expect(topRestaurant.length).toEqual(39);
        // expect(query.current.data?.pages.length).toEqual(1)
    });

    afterEach(() => { jest.clearAllMocks(); });
})
