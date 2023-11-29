import { act, fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { appStore } from "../../store/appStore"
import UserContext from "../../context/UserContext"
import '@testing-library/jest-dom'
import LoginOrSignup from "../../context/LoginOrSignup"

it('should render Login button onclick of user icon in Header component', async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <UserContext>
                    <LoginOrSignup>
                        <Header />
                    </LoginOrSignup>
                </UserContext>
            </Provider>
        </BrowserRouter>
    ))

    const userIconElement = screen.getByRole('userIcon')
    expect(userIconElement).toBeInTheDocument()
    fireEvent.click(userIconElement)
    const loginButton = screen.getByRole('button', { name: 'LOGIN' })
    expect(loginButton).toBeInTheDocument()
})

it('should render cart in Header component', async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <UserContext>
                    <LoginOrSignup>
                        <Header />
                    </LoginOrSignup>
                </UserContext>
            </Provider>
        </BrowserRouter>
    ))

    const cartElement = screen.getAllByRole('listitem')
    let cartLiElementArr = cartElement.map(item => item.textContent)
    expect(cartLiElementArr).toContain('Cart0')
})