import { BaseQueryApi, createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { db } from '../utils/firebaseConfig'
import { userContext } from '../context/UserContext'
import { useContext } from 'react'
import { User } from 'firebase/auth'

type ResultType = {
    itemIds: string
    restuarantId: string
    user: string
}

export const api = createApi({
    baseQuery: fakeBaseQuery(),
    endpoints: (build) => ({
        addToCart: build.query<string, ResultType>({
            async queryFn({ restuarantId, itemIds, user }, api: BaseQueryApi) {
                console.log('addtocart');
                try {
                    const cartDocRef = doc(db, `cart/${user}`)
                    await setDoc(cartDocRef, { restuarantId, itemIds: arrayUnion(itemIds) }, { merge: true })
                    return { data: 'updated' }

                } catch (err) {
                    console.log(err)
                    return { error: err };
                }
            }
        })
    })
});

export const { useAddToCartQuery } = api