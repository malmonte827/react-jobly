import React, { useState, useContext } from "react";
import JoblyApi from "../api"
import UserContext from "../auth/UserContext"

function ProfileForm() {

    const {currentUser, setCurrentUser} = useContext(UserContext)

    const [formData, setFormData] = useState({
        username: currentUser.username,
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email
    });

    const [formErrors, setFormErrors] = useState([])

    console.debug(
        "ProfileForm",
        "currentUser=", currentUser,
        "formData=", formData,
        "formErrors=", formErrors,
      );

    async  function handleSubmit(evt){
        evt.preventDefault();

        let profileData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email
        }

        let username = formData.username
        let updatedUser

        try{
            updatedUser = await JoblyApi.updateProfile(username, profileData)
        } catch(errors){
            setFormErrors(errors)
            return
        }

        setFormData(fData => ({...fData}))
        setFormErrors([])
        setCurrentUser(currentUser =>({
            ...currentUser,
            data: updatedUser
        }))

    }

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData((fData) => ({
            ...fData,
            [name]: value,
        }));
    };


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
                disabled
                type="text"
                name="username"
                value={formData.username}
            />
            <label htmlFor="firstName">First Name</label>
            <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
            />
            <label htmlFor="username">Last Name</label>
            <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
            />
            <label htmlFor="username">Email</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />

            <button>Save Changes</button>
        </form>
    );
}

export default ProfileForm;
