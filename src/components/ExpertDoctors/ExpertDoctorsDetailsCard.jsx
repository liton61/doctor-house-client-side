/* eslint-disable react/prop-types */


const ExpertDoctorsDetailsCard = ({ doctorDetails }) => {
    const { name, img, designation, location, available_time, fee, rating, description } = doctorDetails;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className="w-full h-full" src={img} alt="Album" /></figure>
                <div className="card-body lg:w-1/2">
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <p className="text-xl font-medium text-gray-600">{designation}</p>
                    <p className="font-medium text-gray-600"><i className="fa-solid fa-location-dot"></i> {location}</p>
                    <p className="font-medium text-gray-600"><i className="fa-solid fa-clock"></i> {available_time}</p>
                    <p className="font-medium text-gray-600">Fee : {fee}</p>
                    <p className="font-medium text-gray-600">Rating : {rating}</p>
                    <p className="text-justify">{description}</p>
                    <div className="card-actions">
                        <button className="w-full bg-[#F7A582] text-white border-none py-3 rounded font-medium">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpertDoctorsDetailsCard;