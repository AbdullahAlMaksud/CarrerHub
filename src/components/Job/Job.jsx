import { MdLocationOn } from "react-icons/md";
import { HiCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";



const Job = ({ job }) => {

    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary, } = job;

    return (
        <div className="card bg-base-100 shadow-xl pt-10">
            {/* <figure className="border flex"></figure> */}
            <div className="card-body">
                <img className="max-w-28 pb-4" src={logo} alt="Shoes" />
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className="flex gap-5">
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
                </div>
                <div className="flex mt-2 gap-2">
                    <h2 className="mr-2 text-xl flex"><MdLocationOn className="text-2xl"></MdLocationOn>{location}</h2>

                    <h2 className="mr-2 text-xl flex"><HiCurrencyDollar className="text-2xl"></HiCurrencyDollar>{salary}</h2>

                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Job;