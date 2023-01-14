import { useState } from "react"

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)    

    return (
        <div className="sign-up">
            <h1>Sign up with your email and password</h1>
            <form className="sign-up-form" onSubmit={() => {}}>
                <label>Display Name</label>
                <input required type="text"></input>

                <label>Email</label>
                <input required type="email"></input>

                <label>Password</label>
                <input required type="password"></input>

                <label>Confirm Password</label>
                <input required type="password"></input>

                <button type="submit">Sign Up</button>
                </form>
        </div>
    )
}

export default SignUpForm