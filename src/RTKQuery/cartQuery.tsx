import { BaseQueryApi, createApi } from '@reduxjs/toolkit/query/react'
import { fakeBaseQuery } from '@reduxjs/toolkit/query'
import { deleteField, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { db } from '../utils/firebaseConfig'

type UpdateCartArg = {
    itemId: string
    restaurantId: string
    user: string
    quantity: number
}

type ItemWithQuantity = {
    [itemId: string | number]: number;
};

export type GetCartItemsReturn = {
    itemWithQuantity: ItemWithQuantity
    restaurantId: string
}

export const api = createApi({
    baseQuery: fakeBaseQuery(),
    reducerPath: 'api',
    tagTypes: ['GetCartItems'],
    endpoints: (build) => ({
        getCartItems: build.query<"notExists" | GetCartItemsReturn, string>({
            async queryFn(user) {
                try {
                    const cartDocRef = doc(db, `cart/${user}`)
                    const getDocResult = await getDoc(cartDocRef)
                    if (getDocResult.exists()) {
                        let temp = getDocResult.data()
                        if (temp !== undefined) {
                            const result: GetCartItemsReturn = getDocResult.data() as GetCartItemsReturn
                            return { data: result }
                        } else {
                            return { data: 'notExists' }
                        }
                    } else {
                        await setDoc(cartDocRef, {
                            restaurantId: "",
                            itemWithQuantity: {},
                        });

                        return { data: 'notExists' }
                    }
                } catch (err) {
                    return { error: err }
                }
            },
            providesTags: ['GetCartItems']
        }),

        updateCart: build.mutation<string, UpdateCartArg>({
            async queryFn({ restaurantId, itemId, quantity, user }) {
                try {
                    const cartDocRef = doc(db, `cart/${user}`)
                    let cartData: GetCartItemsReturn
                    if (quantity === 0) {
                        const getDocResult = await getDoc(cartDocRef)
                        if (getDocResult.exists()) {
                            cartData = getDocResult.data() as GetCartItemsReturn
                            if (cartData.itemWithQuantity[itemId]) {
                                delete cartData.itemWithQuantity[itemId];
                                await setDoc(cartDocRef, cartData)
                            } else if (cartData.itemWithQuantity.length === 1) {
                                await setDoc(cartDocRef, {})
                            }
                        }
                    } else {
                        const cartData = {
                            restaurantId,
                            itemWithQuantity: {
                                [itemId]: quantity,
                            }
                        }
                        await setDoc(cartDocRef, cartData, { merge: true })
                    }
                    return { data: 'updated' }
                } catch (err) {
                    console.log(err)
                    return { error: err };
                }
            },
            invalidatesTags: ['GetCartItems'],
        }),

        deleteCartItem: build.mutation<string, string>({
            async queryFn(user) {
                try {
                    const cartDocRef = doc(db, `cart/${user}`)
                    await updateDoc(cartDocRef, { itemWithQuantity: deleteField(), restaurantId: deleteField() })
                    return { data: 'delete success' }
                } catch (err) {
                    console.log(err)
                    return { error: err }
                }
            },
            invalidatesTags: ['GetCartItems'],
        })
    })
});

export const { useUpdateCartMutation, useGetCartItemsQuery, useDeleteCartItemMutation } = api