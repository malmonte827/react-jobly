import React from "react"
import { Link } from "react-router-dom"

/** Show brief description about company
 * Rendered by Company list to sow a card for every company
*/


function CompanyCard({name, description, handle}){
    return(
        <Link className="CompanyCard" to={`/companies/${handle}`}>
            <div className="card-body">
                <h3 className="card-title">
                    {name}
                </h3>
                <p>{description}</p>
            </div>
        </Link>

    )
}

export default CompanyCard