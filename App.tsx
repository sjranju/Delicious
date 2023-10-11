import React, { Suspense, lazy } from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header"
import Body from './src/components/Body'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Contact from "./src/components/Contact"
import Error from "./src/components/Error"
import RestaurantMenu from "./src/components/RestaurantMenu"
import './index.css'
import { Provider } from "react-redux"
import { store } from './src/store/appStore'
import Cart from "./src/components/Cart"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import BodyRQ from "./src/components/BodyRQ"
import { SkeletonTheme } from "react-loading-skeleton"
import RestaurantContext from "./src/context/RestaurantContext"
import Login from "./src/components/Login"
import UserContext from "./src/context/UserContext"

const About = lazy(() => import('./src/components/Contact'))
const queryClient = new QueryClient()

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <UserContext>
                <RestaurantContext>
                    <Provider store={store}>
                        <SkeletonTheme baseColor="#ebebeb" highlightColor="#f5f5f5">
                            <div className="app">
                                <Header />
                                <Outlet />
                            </div>
                        </SkeletonTheme>
                    </Provider>
                </RestaurantContext>
            </UserContext>
        </QueryClientProvider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                // element: <Body />
                element: <BodyRQ />
            },
            {
                path: '/about',
                element:
                    <Suspense>
                        <About />
                    </Suspense>
            },
            {
                path: '/contact',
                element:
                    <Suspense>
                        <Contact />
                    </Suspense>
            },
            {
                path: 'restaurant/:resId',
                element: <RestaurantMenu />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/login',
                element: <Login />
            }
        ],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<RouterProvider router={appRouter} />)