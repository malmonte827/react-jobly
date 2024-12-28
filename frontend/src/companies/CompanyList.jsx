import {React, useState, useEffect} from "react"
import JoblyApi from "../api"
import CompanyCard from "../companies/CompanyCard"
import SearchForm from "../shared/SearchForm"
import LoadingSpinner from '../shared/LoadingSpinner'

function Companies(){
const [companies, setCompanies] = useState(null)

useEffect(function getCompaniesOnMount(){
    searchCompanies()
}, [])

async function searchCompanies(name){
    let companies = await JoblyApi.getCompanies(name)
    setCompanies(companies)
}

if(!companies) return <p>Loading</p>

    return(
        <div className="CompanyList">
            <SearchForm searchFor={searchCompanies}/>
            {companies.length
            ?(      
          <div className="CompanyList-list">
                {companies.map(c =>(
                    <CompanyCard
                    key={c.handle}
                    name={c.name}
                    description ={c.description}
                    handle= {c.handle}

                    />
                ))}
                
            </div>)
            :(
                <p>Results not found!</p>
            )}

        
        </div>
    )
}

export default Companies