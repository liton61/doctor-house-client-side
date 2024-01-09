

const Contact = () => {
    return (
        <div className="lg:px-0 md:px-8 px-5">
            <div className="bg-[#07332F] lg:w-3/4 mx-auto px-10 mt-20 rounded">
                <div>
                    <form className="py-10">
                        <div className="lg:flex">
                            <div className="p-2 w-full">
                                <input type="text" placeholder="Your Name" className="input w-full" />
                            </div>
                            <div className="p-2 w-full">
                                <input type="email" placeholder="Your Email" className="input w-full" />
                            </div>
                        </div>
                        <div className="lg:flex">
                            <div className="p-2 w-full">
                                <input type="text" placeholder="Mobile Number" className="input w-full" />
                            </div>
                            <div className="p-2 w-full">
                                <input type="text" placeholder="Doctor Name" className="input w-full" />
                            </div>
                        </div>
                        <div className="lg:flex">
                            <div className="p-2 w-full">
                                <input type="date" placeholder="Date" className="input w-full" />
                            </div>
                            <div className="p-2 w-full">
                                <input type="time" placeholder="Time" className="input w-full" />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button className="w-full bg-[#F7A582] text-white border-none py-3 px-4 rounded font-medium mt-7">Book Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;