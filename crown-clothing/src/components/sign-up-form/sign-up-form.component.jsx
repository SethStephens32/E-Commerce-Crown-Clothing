import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserProfileDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/form-input.component"

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)    
    const {displayName, email, password, confirmPassword} = formFields

    console.log(formFields)

    const resetForm = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords don't match")
            return;
        }
        try {
           const {user} = await createAuthUserWithEmailAndPassword(email, password
        );

        await createUserProfileDocumentFromAuth(user, {displayName});
        resetForm();
    }
        catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("Email already in use")
            }
            else{
                console.log(error)
            }
        } 
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }



    return (
        <div className="sign-up">
            <h1>Sign up with your email and password</h1>
            <form className="sign-up-form" onSubmit={handleSubmit}>
               <FormInput
                type="text"
                name="displayName"
                value={displayName}
                onChange={handleChange}
                label="Display Name"
                required
                />

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

                <FormInput
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                label="Confirm Password"
                required
                />
            
                <button type="submit" onChange={handleChange}>Sign Up</button>
                </form>
        </div>
    )
}

export default SignUpForm