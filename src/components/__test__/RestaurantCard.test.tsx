import '../../setupTests'
import { act, render, renderHook, waitFor } from "@testing-library/react"
import BodyRQ from "../BodyRQ"
import React, { JSXElementConstructor, ReactElement } from "react"
import LoginOrSignup from "../../context/LoginOrSignup"
import * as restaurantCard from '../mocks/restaurantCardMock.json'
import * as TYPES from "../../utils/interfaces"
import nock from 'nock'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { fetchRestaurants } from '../../utils/fetchRestaurantDetails'

type propsType = {
    children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

it('should render Body component', async () => {
    const queryClient = new QueryClient()
    const wrapper = (props: propsType) => (
        <QueryClientProvider client={queryClient}>
            {props.children}
        </QueryClientProvider>
    )

    const expectaion = nock('https://corsproxy.io/?https://www.swiggy.com')
        .get('/dapi/restaurants/list/')
        .query(true)
        .reply(200, restaurantCard)

    // render(
    //     <QueryClientProvider client={queryClient}>
    //         <LoginOrSignup>
    //             <BodyRQ />
    //         </LoginOrSignup>
    //     </QueryClientProvider>
    // )

    // render(<BodyRQ/> , { wrapper })
    await http.get('https://corsproxy.io/?https://www.swiggy.com')
    // await waitFor(async () => { return result.current.then(res => res) })
    expectaion.done()
    // expect((await result.current).length).toBeGreaterThan(4)

})