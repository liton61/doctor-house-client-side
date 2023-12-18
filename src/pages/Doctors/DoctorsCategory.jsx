/* eslint-disable react/prop-types */
// import DoctorsCard from "./DoctorsCard";


const DoctorsCategory = ({ doctor }) => {
    return (
        <div className="lg:w-3/4 mx-auto lg:px-0 md:px-8 px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {doctor.map((doctor, index) => (
                    <div
                        key={index}
                        className="bg-[#F7A582] text-white py-7 rounded transition-transform transform hover:scale-110 duration-500" data-aos="zoom-in" data-aos-duration="2000">
                        <div className="flex justify-center">
                            <img
                                src={doctor.img}
                                alt=""
                                className="h-20 w-20 rounded-full" />
                        </div>
                        <h3 className="text-center text-xl mt-7">{doctor.name}</h3>
                        <p className="text-center text-sm">{doctor.schedule}</p>
                        <div className="flex justify-center">
                            <button className="bg-[#07332F] text-white border-none py-3 px-4 rounded font-medium mt-7">Book Appointment <i className="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DoctorsCategory;