import { act, fireEvent, render, screen, waitFor } from "@testing-library/react"
import Search from "../Search"
import React from "react"
import '@testing-library/jest-dom'
import MockAdapter = require("axios-mock-adapter")
import axios from "axios"
import { RESTAURANT_API } from "../../utils/constants"
import { default as bodyMockData } from "../mocks/bodyMockData.json"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter } from "react-router-dom"

const queryClient = new QueryClient()

type ChildrenProps = {
    children: React.ReactElement<any, string | React.JSXElementConstructor<any>>
}

const wrapper = (props: ChildrenProps) =>
    <QueryClientProvider client={queryClient}>
        {props.children}
    </QueryClientProvider>

const mockAdapter = new MockAdapter(axios)

describe('Seach for restaurants that have Pizza in their name', () => {

    beforeAll(() => {
        jest.clearAllMocks()
        mockAdapter.onGet(RESTAURANT_API).reply(200, { data: { cards: bodyMockData } })
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('should return 2 restaurants', async () => {
        await act(async () =>
            render(
                <BrowserRouter>
                    <Search />
                </BrowserRouter>
                , { wrapper })
        )

        const searchInputBox = screen.getByPlaceholderText('Search for restaurants')
        const searchButton = screen.getByTestId('searchButton')

        fireEvent.change(searchInputBox, { target: { value: 'Pizza' } })

        await act(async () => fireEvent.click(searchButton))

        expect(screen.getAllByTestId('restaurantSearch').length).toBe(2)

        const searchCloseButton = screen.getByTestId('searchClose')
        fireEvent.click(searchCloseButton)

        expect(searchInputBox.innerHTML).toEqual('')

    })
})