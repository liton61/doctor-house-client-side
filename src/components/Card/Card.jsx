

const Card = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-3/4 mx-auto my-20">
            <div className="card w-72 mx-auto">
                <div className="card-body bg-[#07332F] text-white rounded">
                    <h2 className="card-title"><i className="fa-regular fa-clock"></i> Opening Hours</h2>
                    <p>Open 9.00 am to 5.00pm <br /> Everyday</p>
                </div>
            </div>
            <div className="card w-72 mx-auto">
                <div className="card-body bg-[#F7A582] text-white rounded">
                    <h2 className="card-title"><i className="fa-solid fa-location-dot"></i> Our Locations</h2>
                    <p>Dhanmondi 17, Dhaka -1200, <br /> Bangladesh</p>
                </div>
            </div>
            <div className="card w-72 mx-auto">
                <div className="card-body bg-[#07332F] text-white rounded">
                    <h2 className="card-title"><i className="fa-solid fa-phone-volume"></i> Contact Us</h2>
                    <p>+88 01750 00 00 00 <br />
                        +88 01750 00 00 00</p>
                </div>
            </div>
        </div>
    );
};

export default Card;