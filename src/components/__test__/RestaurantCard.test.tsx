import '../../setupTests'
import { act, render } from "@testing-library/react"
import BodyRQ from "../BodyRQ"
import React from "react"
import LoginOrSignup from "../../context/LoginOrSignup"
import * as restaurantCard from '../mocks/restaurantCardMock.json'
import * as TYPES from "../../utils/interfaces"

global.fetch = jest.fn(() => {
    const response: Response = {
        json: () => { return Promise.resolve(restaurantCard) },
        headers: new Headers(),
        ok: true,
        redirected: false,
        status: 200,
        statusText: 'OK',
        type: 'default',
        url: '',
        clone: function (): Response {
            throw new Error('Function not implemented.')
        },
        body: null,
        bodyUsed: false,
        arrayBuffer: function (): Promise<ArrayBuffer> {
            throw new Error('Function not implemented.')
        },
        blob: function (): Promise<Blob> {
            throw new Error('Function not implemented.')
        },
        formData: function (): Promise<FormData> {
            throw new Error('Function not implemented.')
        },
        text: function (): Promise<string> {
            throw new Error('Function not implemented.')
        }
    }
    return Promise.resolve(response)
})

it('should render restaurant card', () => {
    render(
        <LoginOrSignup>
            <BodyRQ />
        </LoginOrSignup>)

    const name = screen
})