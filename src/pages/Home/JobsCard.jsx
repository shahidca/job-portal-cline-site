import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const JobsCard = ({ job }) => {
    const {_id, title, location, jobType, category, applicationDeadline, salaryRange, description, company, requirements, responsibilities,company_logo,status,hr_name,hr_email } = job;
    return (
        <div className="card bg-base-100 shadow-sm pl-4">
           <div className='flex pt-6 items-center gap-4'>
           <figure>
                <img className=' w-16'
                    src={company_logo}
                    alt="Shoes" />
            </figure>
            <div><h2 className="card-title text-xl font-bold">{title}</h2><div className='flex items-center gap-2'><IoLocationOutline></IoLocationOutline><p>{location}</p></div></div>
           </div>
            <div className="card-body">
                <p>{description}</p>
                <div>
                    {
                        requirements.map((requirement, index)=><p key={index}>{requirement}</p>)
                    }
                </div>
                <p className='text-2xl'>{category}</p>
                <p className='space-x-2'>{requirements}</p>
                
                <h4 className='font-bold'>{hr_name}</h4>
                <h6 className='font-bold'>{hr_email}</h6>
                
                <p>{applicationDeadline}</p>
                <p>Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                <p>{status}</p>
                <p>{responsibilities}</p>
                <div className="card-actions justify-end">
                <Link className="btn btn-block" to={`jobs/${_id}`}><button >Apply Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default JobsCard;