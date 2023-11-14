import { render } from "@testing-library/react"
import Header from "../Header"
import React from "react"
import { BrowserRouter } from "react-router-dom"

it('should render Login button in Header component', () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
})