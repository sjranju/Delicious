import { render, renderHook, screen, waitFor } from "@testing-library/react";
import React from "react";
import { jsonObj } from '../mocks/allRestaurantsMock';
import RestaurantList from '../RestaurantList';
import { act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import nock from 'nock';
import { page1, page2 } from '../mocks/topRatedRestaurants';
import useFetchRestaurantsInfinite from '../../utils/useFetchRestaurantsInfinite';

describe('Check sorting', () => {

    beforeAll(() => {
        console.log('Before all clearing mocks');
        jest.clearAllMocks();
    });

    beforeEach(() => console.log('describe testing'));

    global.fetch = jest.fn(() => {
        console.log('global.fetch called', page1.length);
        return Promise.resolve(
            {
                json: () => Promise.resolve({ data: { cards: [{ card: { card: { gridElements: { infoWithStyle: { restaurants: page1 } } } } }] } })
            } as Response);
    });

    nock('https://corsproxy.io/?https://www.swiggy.com')
        .persist()
        .get('/dapi/restaurants/list/update')
        .reply(200, {
            data: {
                pages: [page1],
                pageParams: [page1, page2]
            }
        });
    // .reply(200, { data: { cards: [{ card: { card: { gridElements: { infoWithStyle: { restaurants: page1 } } } } }] } })
    jest.mock('@tanstack/react-query', () => {
        const originalModule = jest.requireActual('@tanstack/react-query');
        return {
            ...originalModule,
            useInfiniteQuery: jest.fn()
        };
    });

    it('should sort by top rated restaurants', async () => {

        console.log('in test before renderHook');

        const query = renderHook((initialProps: 'topRated') => useFetchRestaurantsInfinite('topRated'), { wrapper });

        console.log('after renderHook');

        await waitFor(() => query.result.current.isSuccess);

        await waitFor(() => expect(query.result.current.isSuccess).toBe(true));

        console.log('query.current.data', query.result.current.data?.pages);

        await act(async () => render(
            <BrowserRouter>
                <RestaurantList card={jsonObj.card} />
            </BrowserRouter>,
            { wrapper }
        )
        );
        const topRestaurant = screen.getAllByTestId('restaurantCard');
        expect(topRestaurant.length).toEqual(24);
        // expect(query.current.data?.pages.length).toEqual(1)
    });

    afterEach(() => { jest.clearAllMocks(); });
});
