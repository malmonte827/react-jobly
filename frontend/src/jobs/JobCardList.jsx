import React from "react"
import JobCard from "../jobs/JobCard"

function JobCardList({jobs}){

console.log(jobs)
    return(
        <div className="CompanyList">
            <div className="CompanyList-list">
                {jobs.map(j =>(
                    <JobCard
                    key={j.id}
                    id={j.id}
                    title={j.title}
                    salary={j.salary}
                    equity={j.equity}
                    company_handle={j.company_handle}
                    />
                ))}
                
            </div>
        
        </div>
    )
}

export default JobCardList