import React from 'react'
import {signInWithGooglePopup, createUserDocumentWithAuth} from "../../../utils/firebase/firebase.utils"

const SignIn = () => {
    const logUser = async () => {
        const {user} = await signInWithGooglePopup()
        const docRef = await createUserDocumentWithAuth(user)
    }
  return (
    <div>
        <h1>Sign in page</h1>
        <button onClick={logUser}>
            Sign in with google
        </button>
    </div>
  )
}

export default SignIn