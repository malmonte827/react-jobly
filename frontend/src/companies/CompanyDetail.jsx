import React, {useState, useEffect} from "react"
import  {useParams} from "react-router-dom"
import JoblyApi from "../api"
import JobCardList from "../jobs/JobCardList"

function CompanyDetail(){
    const {handle} = useParams()

    const [company, setCompany] = useState(null)

    useEffect(function getCompanyandJobs(){
        async function getCompany(){
            const company = await JoblyApi.getCompany(handle)
            setCompany(company);
        }
        getCompany()
    }, [handle])

    if(!company) return <p>Loading</p>

    return(
        <div className="CompanyDetail">
            <h2 className="CompanyDetail-title">{company.name}</h2>
            <p className="CompanyDetail-body">{company.description}</p>
            <JobCardList jobs={company.jobs}/>
        </div>
    )

}

export default CompanyDetail