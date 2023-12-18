
import { useEffect, useState } from "react";
import ExpertDoctorsCard from "./ExpertDoctorsCard";


const ExpertDoctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('expertDoctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div className="lg:w-3/4 mx-auto">
            <h3 className="text-[#F7A582] text-xl font-semibold text-center my-7">---Our Expert Doctors---</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-0 md:px-0 px-5">
                {
                    doctors.map(doctor => <ExpertDoctorsCard key={doctor._id} doctor={doctor}></ExpertDoctorsCard>)
                }
            </div>
        </div>
    );
};

export default ExpertDoctors;