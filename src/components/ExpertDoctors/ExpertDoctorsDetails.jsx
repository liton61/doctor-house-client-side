/* eslint-disable react/no-unknown-property */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExpertDoctorsDetailsCard from "./ExpertDoctorsDetailsCard";


const ExpertDoctorsDetails = () => {
    const [doctorDetails, setDoctorDetails] = useState({});
    const { id } = useParams();
    useEffect(() => {
        fetch('/expertDoctors.json')
            .then(res => res.json())
            .then(data => {
                const selectedDoctor = data.find(doctor => doctor._id === id);
                setDoctorDetails(selectedDoctor);
            })
    }, [id])
    return (
        <div className="lg:w-3/4 mx-auto my-28 lg:px-0 px-5">
            <ExpertDoctorsDetailsCard doctorDetails={doctorDetails}></ExpertDoctorsDetailsCard>
        </div>
    );
};

export default ExpertDoctorsDetails;