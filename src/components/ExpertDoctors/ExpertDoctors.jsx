
import { useEffect, useState } from "react";


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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:px-0 md:px-8 px-5">
                {doctors.map((doctors, index) => (
                    <div
                        key={index}
                        className="bg-[#F7A582] text-white py-7 rounded transition-transform transform hover:scale-110 duration-500" data-aos="zoom-in" data-aos-duration="2000">
                        <div className="flex justify-center">
                            <img
                                src={doctors.img}
                                alt=""
                                className="h-20 w-20 rounded-full" />
                        </div>
                        <h3 className="text-center text-xl mt-7">{doctors.name}</h3>
                        <p className="text-center text-sm">{doctors.schedule}</p>
                        <div className="flex justify-center">
                            <button className="bg-[#07332F] text-white border-none py-3 px-4 rounded font-medium mt-7">Book Appointment <i className="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExpertDoctors;