import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../utility/localStorage';
import { Helmet } from 'react-helmet-async';

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job=>job.id === idInt)
    const { job_title, company_name, remote_or_onsite, location, job_type, salary, } = job;
    console.log(id, job)
    const handleApplyJob = () =>{
        saveJobApplication(idInt);
        toast('You have appiled succesfully')
    }
    return (
        <div>
            <Helmet>
                <title>CarrierHub | Job: {job_title}</title>
            </Helmet>
            <h2>Job Details of: </h2>
            <div className='grid md:grid-cols-4 '>
            <div className='border min-h-1 md:col-span-3'>
                <h2 className="text-4xl">Details Comming here</h2>
                <h2 className="text-xl">{job_title}</h2>
            </div>
            <div className='border'>
                <h2>side thing</h2>
                <button onClick={handleApplyJob} className='btn bg-primary'>Apply Now</button>
            </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;