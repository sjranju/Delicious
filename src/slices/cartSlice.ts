import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import * as TYPES from '../utils/interfaces'

const initialState: TYPES.MenuItemInfo[] = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<TYPES.MenuItemInfo[]>) => {
            return action.payload
        },
        removeItem: (state, action) => {
            state.pop()
        }
    }
})

export const { addItem } = cartSlice.actions
export default cartSlice.reducer