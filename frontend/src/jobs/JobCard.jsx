import React, { useEffect, useState, useContext } from "react";
import UserContext from "../auth/UserContext";

function JobCard({ id, title, salary, equity }) {
    const { hasAppliedToJob, applyToJob } = useContext(UserContext);
    const [applied, setApplied] = useState();

    useEffect(
        function updateAppied() {
            setApplied(hasAppliedToJob(id));
        },
        [id, hasAppliedToJob]
    );

    async function handleApply() {
        if (hasAppliedToJob(id)) return;
        applyToJob(id);
        setApplied(true);
    }
    return (
        <div className="JobCard">
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <div className="card-body">
                    <p>Salary:{salary}</p>

                    <p>Equity:{equity}</p>
                </div>
                <button
                    className="card-button"
                    onClick={handleApply}
                    disabled={applied}
                >
                    {applied ? "Applied" : "Apply"}
                </button>
            </div>
        </div>
    );
}

export default JobCard;
