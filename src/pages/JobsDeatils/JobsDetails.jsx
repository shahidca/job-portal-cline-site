import { div } from 'motion/react-client';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobsDetails = () => {
    const { _id, title, location, jobType, category, applicationDeadline, salaryRange, description, company, requirements, responsibilities, company_logo, status, hr_name, hr_email } = useLoaderData()
   
    return (
        
            <div className="card bg-base-100  w-96 shadow-sm ">
            <figure className="px-10 pt-10">
                <img
                    src={company_logo}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{company}</h2>
                <p>{description}</p>
                <p>{applicationDeadline}</p>
                <div className="card-actions">
                    <Link to={`/jobApply/${_id}`}><button className="btn btn-block">Buy Now</button></Link>
                </div>
            </div>
        </div>
        
    );
};

export default JobsDetails;