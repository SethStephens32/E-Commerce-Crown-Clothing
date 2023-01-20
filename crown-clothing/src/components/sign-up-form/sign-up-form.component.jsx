import { useState, useContext } from "react"
import { createAuthUserWithEmailAndPassword, createUserProfileDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/form-input.component"
import Button from "../button/button.component"
import { UserContext } from "../../contexts/user.context"
import "./sign-up-form.styles.scss"

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)    
    const {displayName, email, password, confirmPassword} = formFields

    const {setCurrentUser} = useContext(UserContext)

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
           const {user} = await createAuthUserWithEmailAndPassword(email, password);
            setCurrentUser(user)


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
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
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
            
                <Button type="submit">Sign Up</Button>
                </form>
        </div>
    )
}

export default SignUpForm