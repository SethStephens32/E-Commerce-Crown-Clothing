import { useState } from "react"

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

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }



    return (
        <div className="sign-up">
            <h1>Sign up with your email and password</h1>
            <form className="sign-up-form" onSubmit={() => {}}>
                <label>Display Name</label>
                <input required type="text" onChange={handleChange} name="displayName" value={displayName}></input>

                <label>Email</label>
                <input required type="email" onChange={handleChange} name="email" value={email}></input>

                <label>Password</label>
                <input required type="password" onChange={handleChange} name="password" value={password}></input>

                <label>Confirm Password</label>
                <input required type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword}></input>

                <button type="submit" onChange={handleChange}>Sign Up</button>
                </form>
        </div>
    )
}

export default SignUpForm