import { render } from "@testing-library/react"
import BodyRQ from "../BodyRQ"
import React from "react"
import LoginOrSignup from "../../context/LoginOrSignup"
import 'react-loading-skeleton/dist/skeleton.css'

it('should render restaurant card', () => {
    render(<LoginOrSignup>
        <BodyRQ />
    </LoginOrSignup>)
})