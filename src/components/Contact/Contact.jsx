

const Contact = () => {
    return (
        <div className="lg:px-0 md:px-5 px-5">
            <div className="bg-[#07332F] lg:flex justify-between lg:w-3/4 mx-auto px-10 mt-20 rounded">
            <div className="lg:w-1/2 text-white pt-10">
                <div>
                    <h1 className="text-2xl font-semibold mb-5">Contact With Us</h1>
                    <div>
                        <h2 className="text-xl font-semibold my-2"><i className="fa-regular fa-clock"></i> Opening Hours</h2>
                        <p>Open 9.00 am to 5.00pm, Everyday</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold my-2"><i className="fa-solid fa-location-dot"></i> Our Locations</h2>
                        <p>Dhanmondi 17, Dhaka -1200, Bangladesh</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold my-2"><i className="fa-solid fa-phone-volume"></i> Contact Us</h2>
                        <p>+88 01750 00 00 00, +88 01750 00 00 00</p>
                    </div>
                </div>
            </div>
            <div>
                <form className="py-10">
                    <div className="lg:flex">
                        <div className="p-2">
                            <input type="text" placeholder="Name" className="input w-full" />
                        </div>
                        <div className="p-2">
                            <input type="email" placeholder="Email" className="input w-full" />
                        </div>
                    </div>
                    <div className="lg:flex">
                        <div className="p-2">
                            <input type="text" placeholder="Mobile Number" className="input w-full" />
                        </div>
                        <div className="p-2">
                            <input type="text" placeholder="Doctor Name" className="input w-full" />
                        </div>
                    </div>
                    <div className="lg:flex">
                        <div className="p-2">
                            <input type="text" placeholder="Date" className="input w-full" />
                        </div>
                        <div className="p-2">
                            <input type="text" placeholder="Time" className="input w-full" />
                        </div>
                    </div>
                    <div className="p-2">
                        <button className="btn w-full bg-[#F7A582] border-none text-white">Booked</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Contact;