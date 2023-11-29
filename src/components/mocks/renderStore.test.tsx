import React, { PropsWithChildren } from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { createMemoryHistory } from "history";
import { api } from "../../RTKQuery/cartQuery";
import { setupListeners } from "@reduxjs/toolkit/query";
import { Provider } from "react-redux";
import type { PreloadedState } from '@reduxjs/toolkit'
import { RootState } from "../../store/appStore";

type preloadState = PreloadedState<RootState>;

const initalState = {
    api: {
        restaurantId: '737440',
        itemWithQuantity: {
            127533210: 1
        },
        queries: {}, // Add empty objects for missing properties
        mutations: {},
        provided: {},
        subscriptions: {},
        config: {}
    }
};


function render(
    ui: React.ReactElement,
    {
        store = configureStore({
            reducer: {
                [api.reducerPath]: api.reducer,
            },
            preloadedState: {},
            middleware: (getDefaultMiddleware) =>
                getDefaultMiddleware().concat(api.middleware),
        }),
        ...renderOptions
    } = {}
) {
    setupListeners(store.dispatch);

    function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
        const history = createMemoryHistory();

        return (
            <Provider store={store} >
                {children}
            </Provider>
        )
    }

    store.dispatch(api.util.resetApiState());

    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";
export { render };