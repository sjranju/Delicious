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
    resetCart: boolean
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

        addToCart: build.mutation<string, AddItemArg>({
            async queryFn({ restaurantId, itemId, quantity, user, resetCart }, api: BaseQueryApi) {
                try {
                    const cartDocRef = doc(db, `cart/${user}`)
                    if (resetCart) {
                        await updateDoc(cartDocRef, { itemWithQuantity: deleteField(), restaurantId: deleteField() })
                    }
                    let cartData: GetCartItemsReturn
                    if (quantity === 0) {
                        cartData = (await getDoc(cartDocRef)).data() as GetCartItemsReturn
                        delete cartData.itemWithQuantity[itemId];
                        await setDoc(cartDocRef, cartData)
                    }
                    else {
                        cartData = {
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

        // updateCartRestaurant: build.mutation<string, string>({
        //     query: async (user) => {
        //         try {
        //             const cartDocRef = doc(db, `cart/${user}`)
        //             deleteDoc(cartDocRef)
        //         } catch (err) {
        //             console.log(err)
        //             return { error: err }
        //         }
        //     }
        // })
    })
});

export const { useAddToCartMutation, useGetCartItemsQuery } = api