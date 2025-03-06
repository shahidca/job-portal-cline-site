import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import JobsCard from './JobsCard';

const HotJobs = () => {
    const [jobs, setJobs]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/Jobs')
        .then(res=>res.json())
        .then(data=>{
            setJobs(data)
        })
    },[])
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                jobs.map(job=><JobsCard key={job._id} job={job}></JobsCard>)
            }
            </div>
        </div>
    );
};

export default HotJobs;