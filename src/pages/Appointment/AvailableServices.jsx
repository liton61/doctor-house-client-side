import { useEffect } from "react";
import { useState } from "react";


const AvailableServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('availableServices.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <section className="py-16 px-5 lg:px-0 md:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-10">
                        <h2 className="text-center text-[#F7A582]">Available Services on April 30, 2022</h2>
                        <h3 className="text-center text-3xl font-medium">Please select a service</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center bg-[#F7A582] text-white py-7 rounded transition-transform transform hover:scale-110 duration-500" data-aos="zoom-in" data-aos-duration="2000"
                            >
                                <img
                                    src={service.logo}
                                    alt={service.name}
                                    className="h-16 w-16 rounded-full"
                                />
                                <span className="ml-2">{service.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AvailableServices;