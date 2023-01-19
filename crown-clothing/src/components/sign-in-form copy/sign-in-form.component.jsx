import { useState } from "react"
import {  signInAuthWithEmailAndPassword,createUserProfileDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/form-input.component"
import Button from "../button/button.component"
import "./sign-in-form.styles.scss"

const defaultFormFields = {
    email: "",
    password: "",
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)    
    const { email, password } = formFields

    const resetForm = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup()
        await createUserProfileDocumentFromAuth(user)
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
         const response = await signInAuthWithEmailAndPassword(email, password)
            console.log(response)
            resetForm();
    }
        catch (error) {
           switch(error.code) {
                case "auth/user-not-found":
                    alert("User not found")
                    break;
                case "auth/wrong-password":
                    alert("Wrong password")
                    break;
                default:
                    alert("Error signing in")
                    break;
           }
        } 
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }



    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
               
                <FormInput
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                label="Email"
                required
                />

                <FormInput
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                label="Password"
                required
                />
                <div className="buttons-container">
                <Button type="submit">Sign In</Button>
                <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
                </form>
        </div>
    )
}

export default SignInForm