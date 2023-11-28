import { act, fireEvent, render, screen } from '@testing-library/react'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React from "react";
import LoginOrSignup from "../../context/LoginOrSignup";
import { auth } from "../../utils/firebaseConfig";
import Signup from "../Signup";
import '@testing-library/jest-dom'

const userMock = {
    "user": {
        "uid": "1234",
        "email": "test@gmail.com",
        "emailVerified": false,
        "displayName": "TestUser",
        "isAnonymous": false,
        "providerData": [
            {
                "providerId": "password",
                "uid": "test@gmail.com",
                "displayName": "TestUser",
                "email": "test@gmail.com",
                "phoneNumber": null,
                "photoURL": null
            }
        ],
        "stsTokenManager": {
            "refreshToken": "AMf-vBxGFUGbOTvDe03WdnEeV9ELOL78N7K6wM-OpWIrFPNAHKj5T_kH74P8I0V0_SewPjv-94gb57x7RdgypCKw2ymOgXuIDrZHpkpMUbo6M-UtveEYAJ2XthbIo8CgInra6wd0md_AdaFNJC2SL5F0EvsE-7cRDnWe4SpsDHWwqFvmF1IuFZI7gU7sIkkEQyDhGSgPpzRleVlcbpskBKL9tuO8CwMdTg",
            "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjBiYmQyOTllODU2MmU3MmYyZThkN2YwMTliYTdiZjAxMWFlZjU1Y2EiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZGVsaWNpb3VzLWFmZGEzIiwiYXVkIjoiZGVsaWNpb3VzLWFmZGEzIiwiYXV0aF90aW1lIjoxNzAwNzcwOTYxLCJ1c2VyX2lkIjoiWXRoUEJEekpOOGNEcW1ZV2s4ZE1ESjNoMm9wMiIsInN1YiI6Ill0aFBCRHpKTjhjRHFtWVdrOGRNREozaDJvcDIiLCJpYXQiOjE3MDA3NzA5NjEsImV4cCI6MTcwMDc3NDU2MSwiZW1haWwiOiJybXVqdW1AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInJtdWp1bUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.GNO3hEcxFhR3h248HTHUrpOZS4Hq7Iv-o3AiWitMRjdgiFa6jy-Ml4Xu3bLQOdhqv8OQVZdeUzZuOU-xliX82onbLttHxY4WcY2jIrXBBFQePNXdLITpG5_6Uhe8Hb99PQ_Q1xT05l0fNUdZ2fBUJEVqwQf_isDMRpvFPZq11hkHNm9HvktnED4AXY3SJXC5V8QFz_7VKR3Byf4KFcgOU1gmxxuT_vRrj616sk9yJt_ANrAg73BepnVOBkre7L2EJvik8NMbK2LLCOe6SmONA0rb3rQGWqVgwUWJ-aGJwMmPoQX-0fRAEk1sZFXed_s9agJm2Xc9EkZwvytz0QLN5A",
            "expirationTime": 1700774562140
        },
        "createdAt": "1700770961657",
        "lastLoginAt": "1700770961657",
        "apiKey": "testKey",
        "appName": "DeliciousTest"
    },
    "providerId": null,
    "_tokenResponse": {
        "kind": "identitytoolkit#SignupNewUserResponse",
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjBiYmQyOTllODU2MmU3MmYyZThkN2YwMTliYTdiZjAxMWFlZjU1Y2EiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZGVsaWNpb3VzLWFmZGEzIiwiYXVkIjoiZGVsaWNpb3VzLWFmZGEzIiwiYXV0aF90aW1lIjoxNzAwNzcwOTYxLCJ1c2VyX2lkIjoiWXRoUEJEekpOOGNEcW1ZV2s4ZE1ESjNoMm9wMiIsInN1YiI6Ill0aFBCRHpKTjhjRHFtWVdrOGRNREozaDJvcDIiLCJpYXQiOjE3MDA3NzA5NjEsImV4cCI6MTcwMDc3NDU2MSwiZW1haWwiOiJybXVqdW1AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInJtdWp1bUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.GNO3hEcxFhR3h248HTHUrpOZS4Hq7Iv-o3AiWitMRjdgiFa6jy-Ml4Xu3bLQOdhqv8OQVZdeUzZuOU-xliX82onbLttHxY4WcY2jIrXBBFQePNXdLITpG5_6Uhe8Hb99PQ_Q1xT05l0fNUdZ2fBUJEVqwQf_isDMRpvFPZq11hkHNm9HvktnED4AXY3SJXC5V8QFz_7VKR3Byf4KFcgOU1gmxxuT_vRrj616sk9yJt_ANrAg73BepnVOBkre7L2EJvik8NMbK2LLCOe6SmONA0rb3rQGWqVgwUWJ-aGJwMmPoQX-0fRAEk1sZFXed_s9agJm2Xc9EkZwvytz0QLN5A",
        "email": "test@gmail.com",
        "refreshToken": "AMf-vBxGFUGbOTvDe03WdnEeV9ELOL78N7K6wM-OpWIrFPNAHKj5T_kH74P8I0V0_SewPjv-94gb57x7RdgypCKw2ymOgXuIDrZHpkpMUbo6M-UtveEYAJ2XthbIo8CgInra6wd0md_AdaFNJC2SL5F0EvsE-7cRDnWe4SpsDHWwqFvmF1IuFZI7gU7sIkkEQyDhGSgPpzRleVlcbpskBKL9tuO8CwMdTg",
        "expiresIn": "3600",
        "localId": "YthPBDzJN8cDqmYWk8dMDJ3h2op2"
    },
    "operationType": "signIn"
}

jest.mock('firebase/auth', () => ({
    ...jest.requireActual('firebase/auth'),
    createUserWithEmailAndPassword: jest.fn(() => Promise.resolve(userMock)),
    updateProfile: jest.fn(),
    auth: {
        ...jest.requireActual('firebase/auth').auth,
        "apiKey": "testKey",
        "appName": "DeliciousTest",
        "authDomain": "delicious-afda3.firebaseapp.com",
        "currentUser": null
    }
}));

describe('Testing Signup', () => {

    beforeAll(() => {
        jest.clearAllMocks()
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('should signup with TestUser', async () => {
        const password = 'abcd123456'

        await act(async () =>
            render(
                <LoginOrSignup>
                    <Signup />
                </LoginOrSignup>))

        fireEvent.change(screen.getByPlaceholderText('Enter your name'), { target: { value: userMock.user.displayName } })
        fireEvent.change(screen.getByPlaceholderText('Enter your email address'), { target: { value: userMock.user.email } })
        fireEvent.change(screen.getByPlaceholderText('Enter your password'), { target: { value: password } })
        await act(async () => fireEvent.click(screen.getByRole('button', { name: 'SIGN UP' })))

        expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(auth, userMock.user.email, password)

        expect(updateProfile).toHaveBeenCalledWith(userMock.user, { displayName: userMock.user.displayName })
    })
})