import { configureStore, createStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";
import { api } from "../RTKQuery/cartQuery";
import { setupListeners } from "@reduxjs/toolkit/query";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const appStore = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(api.middleware),
})

// setupListeners(appStore.dispatch);
export const store = appStore

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

// export default appStore
// export type UseDispatch = typeof appStore.dispatch
// export type RootState = ReturnType<typeof appStore.getState>