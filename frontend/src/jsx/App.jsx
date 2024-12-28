import React, { useState, useEffect } from "react";
import NavBar from "../navigation/NavBar";
import RoutesList from "../navigation/RoutesList";
import JoblyApi from "../api";
import useLocalStorage from "../hooks/useLocalStorage";
import LoadingSpinner from "../shared/LoadingSpinner";
import UserContext from "../auth/UserContext";
import { jwtDecode } from "jwt-decode";

export const TOKEN_ID_STORAGE = "jobly-token";

function App() {
    const [currentUser, setCurrentUser] = useState({
        data: null,
        infoLoaded: false,
    });

    const [applicationIds, setApplicationIds] = useState(new Set([]));

    const [token, setToken] = useLocalStorage(TOKEN_ID_STORAGE);

    useEffect(
        function loadUserInfo() {
            async function getCurrentUser() {
                if (token) {
                    try {
                        let { username } = jwtDecode(token);
                        JoblyApi.token = token;
                        let currentUser = await JoblyApi.getCurrentUser(
                            username
                        );

                        setCurrentUser({
                            data: currentUser,
                            infoLoaded: true,
                        });

                        setApplicationIds(new Set(currentUser.applications));
                    } catch (err) {
                        setCurrentUser({
                            data: null,
                            infoLoaded: true,
                        });
                    }
                } else {
                    setCurrentUser({
                        infoLoaded: true,
                        data: null,
                    });
                }
            }
            getCurrentUser();
        },
        [token]
    );

    async function login(loginData) {
        let token = await JoblyApi.login(loginData);
        setToken(token);
    }

    async function signup(signupData) {
        let token = await JoblyApi.signup(signupData);
        setToken(token);
    }

    function logout() {
        setApplicationIds(new Set([]));
        setCurrentUser({
            data: null,
            infoLoaded: true,
        });
        setToken(null);
    }

    function hasAppliedToJob(id) {
        return applicationIds.has(id);
    }

    function applyToJob(id) {
        if (hasAppliedToJob(id)) return;
        JoblyApi.applyToJob(currentUser.data.username, id);
        setApplicationIds(new Set([...applicationIds, id]));
    }
    if (!currentUser.infoLoaded) return <LoadingSpinner />;

    return (
        <UserContext.Provider
            value={{
                currentUser: currentUser.data,
                setCurrentUser,
                hasAppliedToJob,
                applyToJob,
            }}
        >
            <div>
                <NavBar logout={logout} />
                <RoutesList
                    currentUser={currentUser.data}
                    login={login}
                    signup={signup}
                />
            </div>
        </UserContext.Provider>
    );
}

export default App;
