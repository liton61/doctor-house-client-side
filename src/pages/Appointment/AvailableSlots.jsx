// import { useEffect, useState } from "react";


const AvailableSlots = () => {
    // const [services, setServices] = useState([]);
    // useEffect(() => {
    //     fetch('availableSlots.json')
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [])
    return (
        <div>
            {/* <section className="py-16 px-5 lg:px-0 md:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-10">
                        <h2 className="text-center text-[#F7A582]">Available Services on April 30, 2022</h2>
                        <h3 className="text-center text-3xl font-medium">Available slots for Teeth Orthodontics.</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-[#F7A582] text-white py-7 rounded transition-transform transform hover:scale-110 duration-500" data-aos="zoom-in" data-aos-duration="2000">
                                <div className="flex justify-center">
                                    <img
                                        src={service.logo}
                                        alt=""
                                        className="h-20 w-20 rounded-full" />
                                </div>
                                <h3 className="text-center text-xl mt-7">{service.name}</h3>
                                <p className="text-center text-sm">{service.schedule}</p>
                                <div className="flex justify-center">
                                    <button className="bg-[#07332F] text-white border-none py-3 px-4 rounded font-medium mt-7">Book Appointment <i className="fa-solid fa-arrow-right"></i></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default AvailableSlots;