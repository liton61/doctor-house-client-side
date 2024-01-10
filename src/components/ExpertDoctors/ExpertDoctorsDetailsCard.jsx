/* eslint-disable react/prop-types */


const ExpertDoctorsDetailsCard = ({ doctorDetails }) => {
    const { name, img, designation, location, available_time, description } = doctorDetails;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 rounded shadow-xl">
                <figure><img className="w-full h-full" src={img} alt="Album" /></figure>
                <div className="card-body lg:w-1/2">
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <p className="text-xl font-medium text-gray-600">{designation}</p>
                    <div>
                        <i className="fa-solid fa-star text-yellow-500"></i>
                        <i className="fa-solid fa-star text-yellow-500"></i>
                        <i className="fa-solid fa-star text-yellow-500"></i>
                        <i className="fa-solid fa-star text-yellow-500"></i>
                        <i className="fa-regular fa-star-half-stroke text-yellow-500"></i>
                    </div>
                    <p className="font-medium text-sm text-gray-600"><i className="fa-solid fa-location-dot text-xl mr-2"></i> {location}</p>
                    <p className="font-medium text-sm text-gray-600"><i className="fa-solid fa-clock text-lg mr-2"></i> {available_time}</p>

                    <div className="grid grid-cols-5 gap-3 my-5">
                        <img className="rounded" src={img} alt="" />
                        <img className="rounded" src={img} alt="" />
                        <img className="rounded" src={img} alt="" />
                        <img className="rounded" src={img} alt="" />
                        <img className="rounded" src={img} alt="" />
                    </div>
                    <div className="card-actions">
                        <button className="w-full bg-[#F7A582] text-white border-none py-3 rounded font-medium">Book Now</button>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 rounded mt-20 p-8">
                <h1 className="text-center text-3xl font-bold">About Me</h1>
                <p className="text-justify lg:w-1/2 mx-auto mt-3">{description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                    <div>
                        <div className="my-5">
                            <h1 className="text-xl font-medium">Education</h1>
                            <p>University : American Dental Medical University</p>
                            <p>Degree : BDS</p>
                            <p>Passing Yser : 1998 - 2003</p>
                        </div>
                        <div className="my-5">
                            <h1 className="text-xl font-medium">Work & Experience</h1>
                            <p>Work Place :  Glowing Smiles Family Dental Clinic</p>
                            <p>Duration : 1998 - 2003</p>
                        </div>
                        <div className="my-5">
                            <h1 className="text-xl font-medium">Services</h1>
                            <li>Tooth cleaning</li>
                            <li>Root Canal Therapy</li>
                            <li>Implants</li>
                            <li>Composite Bonding</li>
                            <li>Fissure Sealants</li>
                            <li>Surgical Extractions</li>
                        </div>
                    </div>
                    <div>
                        <div className="my-5">
                            <h1 className="text-xl font-medium">Awards</h1>
                            <p>Award Title : The Dental Professional of The Year Award</p>
                            <p>Year : July 2019</p>
                        </div>
                        <div className="my-5">
                            <h1 className="text-xl font-medium">Specializations</h1>
                            <li>Tooth cleaning</li>
                            <li>Root Canal Therapy</li>
                            <li>Implants</li>
                            <li>Composite Bonding</li>
                            <li>Fissure Sealants</li>
                            <li>Surgical Extractions</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpertDoctorsDetailsCard;