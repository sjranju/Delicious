import '@testing-library/jest-dom'
import { cleanup, render, screen, waitFor, act, fireEvent } from "@testing-library/react"
import React, { JSXElementConstructor, ReactElement } from "react"
import RestaurantList from "../RestaurantList"
import { mockJson, mockPageOffsetForRestaurantList } from "../mocks/topRatedRestaurants"
import { jsonObj } from "../mocks/allRestaurantsMock"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, MemoryRouter } from "react-router-dom"
import MockAdapter = require("axios-mock-adapter")
import axios from "axios"
import { GET_MORE_RESTAURANTS, RESTAURANT_API, RESTAURANT_ITEM } from "../../utils/constants"
import { restaurantInfoMockJson, restaurantMenuMockJson } from '../mocks/restaurantInfoMock'
import RestaurantMenu from '../RestaurantMenu'
import { Provider } from 'react-redux'
import { appStore } from '../../store/appStore'
import Header from '../Header'
import Cart from '../Cart'
import LoginOrSignup from '../../context/LoginOrSignup'
import UserContext from '../../context/UserContext'
import Login from '../Login'
import Signup from '../Signup'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../utils/firebaseConfig'
import RestaurantContext from '../../context/RestaurantContext'
import { useGetCartItemsQuery } from '../../RTKQuery/cartQuery'

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

const userMock = {
    "user": {
        "uid": "1234",
        "email": "test@gmail.com",
        "emailVerified": false,
        "displayName": "TestUser",
        "isAnonymous": false,
        "providerData": [
            {
                "providerId": "password",
                "uid": "test@gmail.com",
                "displayName": "TestUser",
                "email": "test@gmail.com",
                "phoneNumber": null,
                "photoURL": null
            }
        ],
        "stsTokenManager": {
            "refreshToken": "AMf-vBxGFUGbOTvDe03WdnEeV9ELOL78N7K6wM-OpWIrFPNAHKj5T_kH74P8I0V0_SewPjv-94gb57x7RdgypCKw2ymOgXuIDrZHpkpMUbo6M-UtveEYAJ2XthbIo8CgInra6wd0md_AdaFNJC2SL5F0EvsE-7cRDnWe4SpsDHWwqFvmF1IuFZI7gU7sIkkEQyDhGSgPpzRleVlcbpskBKL9tuO8CwMdTg",
            "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjBiYmQyOTllODU2MmU3MmYyZThkN2YwMTliYTdiZjAxMWFlZjU1Y2EiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZGVsaWNpb3VzLWFmZGEzIiwiYXVkIjoiZGVsaWNpb3VzLWFmZGEzIiwiYXV0aF90aW1lIjoxNzAwNzcwOTYxLCJ1c2VyX2lkIjoiWXRoUEJEekpOOGNEcW1ZV2s4ZE1ESjNoMm9wMiIsInN1YiI6Ill0aFBCRHpKTjhjRHFtWVdrOGRNREozaDJvcDIiLCJpYXQiOjE3MDA3NzA5NjEsImV4cCI6MTcwMDc3NDU2MSwiZW1haWwiOiJybXVqdW1AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInJtdWp1bUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.GNO3hEcxFhR3h248HTHUrpOZS4Hq7Iv-o3AiWitMRjdgiFa6jy-Ml4Xu3bLQOdhqv8OQVZdeUzZuOU-xliX82onbLttHxY4WcY2jIrXBBFQePNXdLITpG5_6Uhe8Hb99PQ_Q1xT05l0fNUdZ2fBUJEVqwQf_isDMRpvFPZq11hkHNm9HvktnED4AXY3SJXC5V8QFz_7VKR3Byf4KFcgOU1gmxxuT_vRrj616sk9yJt_ANrAg73BepnVOBkre7L2EJvik8NMbK2LLCOe6SmONA0rb3rQGWqVgwUWJ-aGJwMmPoQX-0fRAEk1sZFXed_s9agJm2Xc9EkZwvytz0QLN5A",
            "expirationTime": 1700774562140
        },
        "createdAt": "1700770961657",
        "lastLoginAt": "1700770961657",
        "apiKey": "testKey",
        "appName": "DeliciousTest"
    },
    "providerId": null,
    "_tokenResponse": {
        "kind": "identitytoolkit#SignupNewUserResponse",
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjBiYmQyOTllODU2MmU3MmYyZThkN2YwMTliYTdiZjAxMWFlZjU1Y2EiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZGVsaWNpb3VzLWFmZGEzIiwiYXVkIjoiZGVsaWNpb3VzLWFmZGEzIiwiYXV0aF90aW1lIjoxNzAwNzcwOTYxLCJ1c2VyX2lkIjoiWXRoUEJEekpOOGNEcW1ZV2s4ZE1ESjNoMm9wMiIsInN1YiI6Ill0aFBCRHpKTjhjRHFtWVdrOGRNREozaDJvcDIiLCJpYXQiOjE3MDA3NzA5NjEsImV4cCI6MTcwMDc3NDU2MSwiZW1haWwiOiJybXVqdW1AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInJtdWp1bUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.GNO3hEcxFhR3h248HTHUrpOZS4Hq7Iv-o3AiWitMRjdgiFa6jy-Ml4Xu3bLQOdhqv8OQVZdeUzZuOU-xliX82onbLttHxY4WcY2jIrXBBFQePNXdLITpG5_6Uhe8Hb99PQ_Q1xT05l0fNUdZ2fBUJEVqwQf_isDMRpvFPZq11hkHNm9HvktnED4AXY3SJXC5V8QFz_7VKR3Byf4KFcgOU1gmxxuT_vRrj616sk9yJt_ANrAg73BepnVOBkre7L2EJvik8NMbK2LLCOe6SmONA0rb3rQGWqVgwUWJ-aGJwMmPoQX-0fRAEk1sZFXed_s9agJm2Xc9EkZwvytz0QLN5A",
        "email": "test@gmail.com",
        "refreshToken": "AMf-vBxGFUGbOTvDe03WdnEeV9ELOL78N7K6wM-OpWIrFPNAHKj5T_kH74P8I0V0_SewPjv-94gb57x7RdgypCKw2ymOgXuIDrZHpkpMUbo6M-UtveEYAJ2XthbIo8CgInra6wd0md_AdaFNJC2SL5F0EvsE-7cRDnWe4SpsDHWwqFvmF1IuFZI7gU7sIkkEQyDhGSgPpzRleVlcbpskBKL9tuO8CwMdTg",
        "expiresIn": "3600",
        "localId": "YthPBDzJN8cDqmYWk8dMDJ3h2op2"
    },
    "operationType": "signIn"
}

jest.mock('firebase/auth', () => ({
    ...jest.requireActual('firebase/auth'),
    createUserWithEmailAndPassword: jest.fn(() => Promise.resolve(userMock)),
    updateProfile: jest.fn(),
    auth: {
        ...jest.requireActual('firebase/auth').auth,
        "apiKey": "testKey",
        "appName": "DeliciousTest",
        "authDomain": "delicious-afda3.firebaseapp.com",
        "currentUser": null
    }
}));

jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useParams: jest.fn().mockReturnValue({ resId: '737440' })
}))

jest.mock('../../RTKQuery/cartQuery', () => ({
    ...jest.requireActual('../../RTKQuery/cartQuery'),
    useGetCartItemsQuery: jest.fn(() => ({
        data: {
            itemWithQuantity: {
                itemId: 127533210
            },
            restaurantId: '737440'
        }
    })),
    useUpdateCartMutation: jest.fn(() => ({ data: 'updated' })),
    useDeleteCartItemMutation: jest.fn(() => ({ data: 'delete success' }))
}))

describe('Add to Cart', () => {
    beforeAll(() => {
        jest.clearAllMocks()

        mockAdapter.onGet(RESTAURANT_ITEM + '737440').reply(200, restaurantInfoMockJson)
    })

    afterEach(() => {
        jest.clearAllMocks()
        mockAdapter.restore()
        cleanup()
    })

    it('should add one item to cart', async () => {

        const password = 'abcd123456'

        // await act(async () =>
        //     render(<Signup />))

        await act(async () =>
            render(
                <MemoryRouter initialEntries={['/restaurant/737440']}>
                    <UserContext>
                        <LoginOrSignup>
                            <RestaurantContext>
                                <Provider store={appStore}>
                                    <Signup />
                                    <Header />
                                    <RestaurantMenu />
                                    <Cart />
                                </Provider>
                            </RestaurantContext>
                        </LoginOrSignup>
                    </UserContext>
                </MemoryRouter>
                , { wrapper })
        )

        fireEvent.change(screen.getByPlaceholderText('Enter your name'), { target: { value: userMock.user.displayName } })
        fireEvent.change(screen.getByPlaceholderText('Enter your email address'), { target: { value: userMock.user.email } })
        fireEvent.change(screen.getByPlaceholderText('Enter your password'), { target: { value: password } })
        await act(async () => fireEvent.click(screen.getByRole('button', { name: 'SIGN UP' })))

        expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(auth, userMock.user.email, password)

        expect(updateProfile).toHaveBeenCalledWith(userMock.user, { displayName: userMock.user.displayName })

        await waitFor(() => expect(screen.getAllByTestId('restaurantMenu').length).toEqual(1))
        await waitFor(() => expect(screen.getByRole('button', { name: 'Sweet (31)' })).toBeInTheDocument())

        const recommedButton = screen.getByRole('button', { name: 'Sweet (31)' })
        fireEvent.click(recommedButton)

        const menuItems = screen.getAllByTestId('menuItem')
        expect(menuItems.length).toEqual(31)

        fireEvent.click(menuItems[0])
    })
})