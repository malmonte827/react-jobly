import React, {useContext} from "react"
import UserContext from '../auth/UserContext'
import {Link} from 'react-router-dom'

function Homepage(){

    const {currentUser} = useContext(UserContext)

    return(
        <div className="Homepage">
            <h1>Jobly</h1>
            <p>All the jobs in one, convenient place</p>
            {currentUser
            ? <h2>
                Welcome Back, {currentUser.firstName || currentUser.username}
                </h2>
                : (
                    <div>
                        <Link 
                            to="/login">
                            Log In
                        </Link>
                        <Link
                            to="/signup">
                            Signup
                        </Link>
                    </div>
                )
                }
        </div>
    )
}

export default Homepage