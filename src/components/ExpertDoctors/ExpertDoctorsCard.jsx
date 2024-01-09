/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ExpertDoctorsCard = ({ doctor }) => {
    const { name, img, designation, fee } = doctor;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl rounded">
                <img className="rounded-t" src={img} alt="" />
                <div className="card-body">
                    <h2 className="text-xl font-semibold">{name}!</h2>
                    <p className="font-medium text-gray-600">{designation}</p>
                    <p className="font-medium text-gray-600">Fee : {fee}</p>
                    <div className="card-actions">
                        <Link to={`expertDoctorsDetails/${doctor._id}`} style={{ width: '100%' }}>
                            <button className="w-full bg-[#F7A582] text-white border-none py-3 rounded font-medium">View Profile <i className="fa-solid fa-arrow-right"></i></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpertDoctorsCard;