import React, { Suspense, lazy } from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header"
import { RouterProvider, Outlet, createHashRouter } from "react-router-dom"
import Error from "./src/components/Error"
import RestaurantMenu from "./src/components/RestaurantMenu"
import './index.css'
import { Provider } from "react-redux"
import { store } from './src/store/appStore'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import BodyRQ from "./src/components/BodyRQ"
import { SkeletonTheme } from "react-loading-skeleton"
import RestaurantContext from "./src/context/RestaurantContext"
import UserContext from "./src/context/UserContext"
import ResetCartContext from "./src/context/ResetCartContext"
import Footer from "./src/components/Footer"
import LoginOrSignup from "./src/context/LoginOrSignup"
import FilterRestaurantsContext from "./src/context/FilterRestaurantsContext"

const Help = lazy(() => import('./src/components/Help'))
const Login = lazy(() => import('./src/components/Login'))
const Cart = lazy(() => import('./src/components/Cart'))
const Search = lazy(() => import('./src/components/Search'))
const queryClient = new QueryClient()

const App = () => {
    return (
        <UserContext>
            <LoginOrSignup>
                <RestaurantContext>
                    <ResetCartContext>
                        <Provider store={store}>
                            <FilterRestaurantsContext>
                                <QueryClientProvider client={queryClient}>
                                    <SkeletonTheme baseColor="#ebebeb" highlightColor="#f5f5f5">
                                        <div className="app">
                                            <Header />
                                            <Outlet />
                                        </div>
                                    </SkeletonTheme>
                                </QueryClientProvider>
                            </FilterRestaurantsContext>
                        </Provider>
                    </ResetCartContext>
                </RestaurantContext>
            </LoginOrSignup>
        </UserContext>
    )
}

const appRouter = createHashRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <><BodyRQ /><Footer /></>
            },
            {
                path: '/contact',
                element:
                    <Suspense>
                        <Help />
                    </Suspense>
            },
            {
                path: 'restaurant/:resId',
                element: <RestaurantMenu />
            },
            {
                path: '/cart',
                element:
                    <Suspense>
                        <Cart />
                    </Suspense>
            },
            {
                path: '/login',
                element:
                    <Suspense>
                        <Login />
                    </Suspense>
            },
            {
                path: '/search',
                element:
                    <Suspense>
                        <Search />
                    </Suspense>
            }
        ],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<RouterProvider router={appRouter} />)