/* eslint-disable react/prop-types */


const ExpertDoctorsCard = ({ doctor }) => {
    const { name, img, fee, rating, location, designation, available_time } = doctor;
    return (
        <div>
            <div className="card card-compact lg:w-80 md:w-80 w-full bg-base-100 shadow-xl mx-auto lg:mb-5 md:mb-10 mb-10">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}
                        <div className="badge badge-secondary">{rating}</div>
                    </h2>
                    <p>{designation}</p>
                    <p>{location}</p>
                    <p>{available_time}</p>
                    <p>{fee}</p>
                    <div className="card-actions">
                        <button className="bg-[#F7A582] text-white border-none py-3 px-4 rounded font-medium w-full">View Profile <i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpertDoctorsCard;