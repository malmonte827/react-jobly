import { Routes, Route } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import Companies from "../companies/CompanyList";
import Jobs from "../jobs/JobList";
import ProfileForm from "../profile/ProfileForm";
import CompanyDetail from "../companies/CompanyDetail";
import SignupForm from "../auth/SignupForm";
import LoginForm from "../auth/LoginForm";

function RoutesList({ login, signup, currentUser }) {
    return (
        <div>
            <Routes>
                {!currentUser && (
                    <>
                        <Route path="/signup" element={<SignupForm signup={signup} />} />
                        <Route path="/login" element={<LoginForm login={login} />} />
                    </>
                )}

                <Route path="/" element={<Homepage />} />

                {currentUser && (
                    <>
                        <Route path="/companies" element={<Companies />} />
                        <Route
                            path="/companies/:handle"
                            element={<CompanyDetail />}
                        />
                        <Route path="/jobs" element={<Jobs />} />
                        <Route path="/profile" element={<ProfileForm />} />
                    </>
                )}

                <Route path="*" element={<Homepage />} />
            </Routes>
        </div>
    );
}

export default RoutesList;
