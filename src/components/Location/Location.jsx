

const Location = () => {
    return (
        <div className="lg:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20 lg:px-0 px-5">
            <div className="card rounded bg-[#07332F] text-white">
                <div className="card-body">
                    <h2 className="card-title"><i className="fa-regular fa-clock"></i> Opening Hours</h2>
                    <p>Open 9.00 am to 5.00pm <br /> Everyday</p>
                </div>
            </div>
            <div className="card rounded bg-[#F7A582] text-white">
                <div className="card-body">
                    <h2 className="card-title"><i className="fa-solid fa-location-dot"></i> Our Locations</h2>
                    <p>Dhanmondi 17, Dhaka -1200, Bangladesh</p>
                </div>
            </div>
            <div className="card rounded bg-[#07332F] text-white">
                <div className="card-body">
                    <h2 className="card-title"><i className="fa-solid fa-phone-volume"></i> Contact Us</h2>
                    <p>+88 01750 00 00 00 <br /> +88 01750 00 00 00</p>
                </div>
            </div>
        </div>
    );
};

export default Location;