import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-[#07332F] text-white p-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Appointment</a></li>
                            <li><a>Reviews</a></li>
                            <li><a>Contact Us </a></li>
                        </ul>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img src={logo} alt="" />
                        <h3 className='font-medium ml-2'><span className='text-[#F7A582]'>Doctor</span> House</h3>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Appointment</a></li>
                        <li><a>Reviews</a></li>
                        <li><a>Contact Us </a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="bg-[#F7A582] text-white border-none py-3 px-4 rounded font-medium">Login</button>
                    {/* <i className="fa-solid fa-right-to-bracket"></i> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;