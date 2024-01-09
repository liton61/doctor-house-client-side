
import { useEffect, useState } from "react";
import ExpertDoctorsCard from "./ExpertDoctorsCard";


const ExpertDoctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('/expertDoctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div className="lg:w-3/4 mx-auto">
            <h3 className="text-[#F7A582] text-xl font-semibold text-center mb-2">---Our Expert Doctors---</h3>
            <p className="lg:w-1/2 mx-auto md:text-center text-justify mb-7 lg:px-0 px-5">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:px-0 md:px-8 px-5">
                {
                    doctors.map(doctor => <ExpertDoctorsCard key={doctor._id} doctor={doctor}></ExpertDoctorsCard>)
                }
            </div>
        </div>
    );
};

export default ExpertDoctors;