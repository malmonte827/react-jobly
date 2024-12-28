import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm({login}){

    
      const navigate = useNavigate();
      const [formData, setFormData] = useState({
        username: "",
        password: "",
      });
      const [formErrors, setFormErrors] = useState([]);
    
    
      async function handleSubmit(evt) {
        evt.preventDefault();
        try {
          await login(formData);
          navigate("/")
        } catch (err) {
          setFormErrors(err);
        }
      }
    
      function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(l => ({
             ...l,
             [name]: value }));
      }
    
      return (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
    
    
                    <button>Submit</button>
    
                </form>
             );
    }
    
    


export default LoginForm