import { BaseQueryApi, createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import { DocumentData, FieldValue, SnapshotOptions, arrayRemove, arrayUnion, deleteDoc, deleteField, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { db } from '../utils/firebaseConfig'
import { userContext } from '../context/UserContext'
import { useContext } from 'react'
import { User } from 'firebase/auth'

type AddItemArg = {
    itemId: string
    restaurantId: string
    user: string
    quantity: number
}

type ItemWithQuantity = {
    [itemId: string | number]: number;
};

type updateQuantity = {
    user: string,
    itemId: string,
    increamentQuantity: boolean
}

export type GetCartItemsReturn = {
    itemWithQuantity: ItemWithQuantity
    restaurantId: string
}

export const api = createApi({
    baseQuery: fakeBaseQuery(),
    tagTypes: ['GetCartItems'],
    endpoints: (build) => ({
        getCartItems: build.query<"notExists" | GetCartItemsReturn, string>({
            async queryFn(user, api: BaseQueryApi) {
                try {
                    const cartDocRef = doc(db, `cart/${user}`)
                    const getDocResult = await getDoc(cartDocRef)
                    if (getDocResult.exists()) {
                        const result: GetCartItemsReturn = getDocResult.data() as GetCartItemsReturn
                        return { data: result }
                    } else {
                        return { data: 'notExists' }
                    }
                } catch (err) {
                    return { error: err }
                }
            },
            providesTags: ['GetCartItems']
        }),

        updateCart: build.mutation<string, AddItemArg>({
            async queryFn({ restaurantId, itemId, quantity, user }, api: BaseQueryApi) {
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

        updateQuantity: build.mutation<string, updateQuantity>({
            async queryFn({ user, itemId, increamentQuantity }, api: BaseQueryApi) {
                try {
                    const cartDocRef = doc(db, `cart/${user}`)
                    const getDocResult = await getDoc(cartDocRef)
                    if (getDocResult.exists()) {
                        const cartData = getDocResult.data() as GetCartItemsReturn
                        const foundCartItem = Object.entries(cartData.itemWithQuantity).find(item => item[0] === itemId)
                        const cartDataObj = {
                            restaurantId: cartData.restaurantId,
                            itemWithQuantity: {
                                [itemId]: increamentQuantity ? foundCartItem && foundCartItem?.[1] + 1 : foundCartItem && foundCartItem?.[1] - 1,
                            }
                        }
                        await setDoc(cartDocRef, cartDataObj, { merge: true })
                    }
                    return { data: 'updated' }

                    // const cartDocRef = doc(db, `cart/${user}`)
                    // const getDocResult = await getDoc(cartDocRef)
                    // if (getDocResult.exists()) {
                    //     const cartData = getDocResult.data() as GetCartItemsReturn
                    //     const foundCartItem = Object.entries(cartData.itemWithQuantity).find(item => item[0] === itemId)
                    //     if (foundCartItem) {
                    //         if (foundCartItem[1] === 1 && increamentQuantity === false) {
                    //             if (Object.entries(cartData.itemWithQuantity).length > 1) {
                    //                 let updatedCart = {
                    //                     restaurantId: cartData.restaurantId,
                    //                     itemWithQuantity: {
                    //                         [itemId]: foundCartItem?.[1] + 1,
                    //                     }
                    //                 }
                    //                 await setDoc(cartDocRef, updatedCart, { merge: true })
                    //             } else {

                    //             }
                    //         }

                    //     }
                    // }
                } catch (err) {
                    return { error: err }
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

export const { useUpdateCartMutation, useGetCartItemsQuery, useDeleteCartItemMutation, useUpdateQuantityMutation } = api