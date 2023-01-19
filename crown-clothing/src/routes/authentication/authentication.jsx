import React from 'react'
import { signInWithGooglePopup, createUserProfileDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import SignInForm from '../../components/sign-in-form copy/sign-in-form.component'

const Authentication = () => {

   const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup()
        const userDocRef = await createUserProfileDocumentFromAuth(user)
    }
        


  return (
    <div>
        <h1>Sign In Page</h1>
        <SignInForm />
        <SignUpForm />
    </div>

  )
}

export default Authentication