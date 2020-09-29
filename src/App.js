import React, {useState} from "react";
import "./index.css";

export default function App() {
    //declare our constants here
    const [values, setValues] = useState({
            firstName: "",
            lastName: "",
            email: ""

        }
    );


    //create state var to check if form submitted or not
    const [submitted, setSubmitted] = useState(false)
    const [valid, setValid] = useState(false)


    //create onchange handler for each of the fields
    const handleFirstNameInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            firstName: event.target.value,
        }));    }

    const handleLastNameInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            lastName: event.target.value,
        }));    }


    const handleEmailInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            email: event.target.value,
        }));    }


    //handler to prevent page refresh after form submission
    const handleFormSubmit = (event) => {
        //stop page refresh
        event.preventDefault();

        //check if fields are set
        if (values.firstName && values.lastName && values.email){
            //set valid to true
            setValid(true);
        }
        setSubmitted(true);

    }
    return (

        <div className="form-container">
            <form className="register-form" onSubmit={handleFormSubmit}>
                {/*conditional logic*/}
                {submitted && valid ? <div className="success-message">Success! Thank you for registering</div>
                    : ''}


                <input
                    id="first-name"
                    className="form-field"
                    value={values.firstName}
                    onChange={handleFirstNameInputChange}
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                />
                {/*conditional logic*/}
                {!submitted && !valid ? <span id="first-name-error">Please enter a first name</span>
                    : ''}

                <input
                    id="last-name"
                    className="form-field"
                    value={values.lastName}
                    onChange={handleLastNameInputChange}
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                />
                {/*conditional logic*/}
                {!submitted && !valid? <span id="last-name-error">Please enter a last name</span>
                    : ''} <input
                id="email"
                className="form-field"
                value={values.email}
                onChange={handleEmailInputChange}

                type="text"
                placeholder="Email"
                name="email"
            />
                {/*conditional logic*/}
                {!submitted && !valid ? <span id="email-error">Please enter an email</span>
                    : ''}
                <button className="form-field" type="submit">
                    Register
                </button>
            </form>
        </div>
    );
}
