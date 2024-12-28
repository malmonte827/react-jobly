import { useEffect, useState } from "react"
import JoblyApi from "../api"
import JobCardList from "./JobCardList"
import LoadingSpinner from '../shared/LoadingSpinner'
import SearchForm from '../shared/SearchForm'

function JobList(){
    const [jobs, setjobs] = useState(null)

    useEffect(function getJobsOnMount(){
        searchJobs()

    }, [])

    async function searchJobs(title){
        let jobs = await JoblyApi.getJobs(title)
        setjobs(jobs)
    }

if(!jobs) return <LoadingSpinner/>

    return(
        <div className="JobList">
            <SearchForm searchFor={searchJobs}/>
            {jobs.length
             ? <JobCardList jobs={jobs}/>
             : <p>No results found!</p>
            }
        </div>
    
    )
}

export default JobList