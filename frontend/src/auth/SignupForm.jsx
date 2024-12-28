import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupForm({signup}) {
    let navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
    });

    const [formErrors, setFormErrors] = useState([]);

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            await signup(formData);
            navigate('/')
        } catch (errors) {
            setFormErrors([errors]);
        }
    }

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData((fData) => ({
            ...fData,
            [name]: value,
        }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />

            <label htmlFor="firstName">First name</label>
            <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
            />
            <label htmlFor="lastName">Last name</label>
            <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />

            <button> Submit</button>
        </form>
    );
}

export default SignupForm;
