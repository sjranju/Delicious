import '@testing-library/jest-dom'
import { cleanup, render, screen, waitFor, act, fireEvent } from "@testing-library/react"
import React, { JSXElementConstructor, ReactElement } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { MemoryRouter } from "react-router-dom"
import MockAdapter = require("axios-mock-adapter")
import axios from "axios"
import { RESTAURANT_ITEM } from "../../utils/constants"
import { restaurantInfoMockJson } from '../mocks/restaurantInfoMock'
import RestaurantMenu from '../RestaurantMenu'
import { Provider } from 'react-redux'
import { appStore } from '../../store/appStore'
import Header from '../Header'
import Cart from '../Cart'
import LoginOrSignup from '../../context/LoginOrSignup'
import UserContext from '../../context/UserContext'
import RestaurantContext from '../../context/RestaurantContext'
import { useGetCartItemsQuery, useUpdateCartMutation, useDeleteCartItemMutation, api, GetCartItemsReturn } from '../../RTKQuery/cartQuery'
import { configureStore } from '@reduxjs/toolkit'
import { Mock } from 'jest-mock'
import { UseQueryHookResult } from '@reduxjs/toolkit/dist/query/react/buildHooks'
import { QueryDefinition, BaseQueryFn } from '@reduxjs/toolkit/query'

type wrapperProps = {
    children: ReactElement<any, string | JSXElementConstructor<any>>
}

let mockAdapter = new MockAdapter(axios)

const queryClient = new QueryClient({
    defaultOptions: {
        queries: { retry: false }
    }
})

const wrapper = (props: wrapperProps) => {
    return (
        <QueryClientProvider client={queryClient}>
            {props.children}
        </QueryClientProvider>
    )
}

jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useParams: jest.fn().mockReturnValue({ resId: '737440' })
}))

const mockStore = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        }).concat(api.middleware);
    },
});

const mockCartItems = {
    restaurantId: '737440',
    itemWithQuantity: {
        127533210: 1
    }
};


const mockGetCartItemsQuery = {
    queryFn: jest.fn().mockResolvedValue(mockCartItems),
} as UseQueryHookResult<QueryDefinition<string, BaseQueryFn, "GetCartItems", GetCartItemsReturn | "notExists", "api">, any>;

jest.mock('../../RTKQuery/cartQuery', () => {
    return {
        useGetCartItemsQuery: jest.fn(() => mockGetCartItemsQuery),
    };
});

describe('Add to Cart', () => {
    beforeAll(() => {
        jest.clearAllMocks()
        mockAdapter.onGet(RESTAURANT_ITEM + '737440').reply(200, restaurantInfoMockJson)
    })

    beforeEach(() => {
        jest.clearAllMocks()
    })

    afterEach(() => {
        jest.clearAllMocks()
        mockAdapter.restore()
        cleanup()
    })

    it('should add one item to cart', async () => {

        await act(async () =>
            render(
                <MemoryRouter initialEntries={['/restaurant/737440']}>
                    <UserContext>
                        <LoginOrSignup>
                            <RestaurantContext>
                                <Provider store={mockStore}>
                                    <Header />
                                    <RestaurantMenu />
                                    {/* <Cart /> */}
                                </Provider>
                            </RestaurantContext>
                        </LoginOrSignup>
                    </UserContext>
                </MemoryRouter>
                , { wrapper })
        )

        await waitFor(() => expect(screen.getAllByTestId('restaurantMenu').length).toEqual(1))
        await waitFor(() => expect(screen.getByRole('button', { name: 'Sweet (31)' })).toBeInTheDocument())

        const recommedButton = screen.getByRole('button', { name: 'Sweet (31)' })
        fireEvent.click(recommedButton)

        const menuItems = screen.getAllByTestId('menuItem')
        expect(menuItems.length).toEqual(31)

        fireEvent.click(menuItems[0])

        const cartInHeader = screen.getByTestId('cart0')
        expect(cartInHeader).toHaveTextContent('0')
    })
})