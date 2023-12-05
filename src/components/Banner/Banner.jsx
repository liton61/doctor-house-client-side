/* eslint-disable react/no-unescaped-entities */
import img from '../../assets/01.png'


const Banner = () => {
    return (
        <div>
            <div className="hero lg:h-[80vh]" style={{ backgroundImage: 'url(https://i.postimg.cc/RFtX2PGJ/04.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-5xl font-bold">Your Best Medical Help Center</h1>
                        <p className="mb-5 text-justify">Hospitals are essential healthcare institutions designed to provide medical care, treatment, and support to individuals suffering from illnesses, injuries, or requiring specialized care. These institutions vary in size and specialization, ranging from small community hospitals to large, comprehensive medical centers.</p>
                        <button className="bg-[#F7A582] text-white border-none py-3 px-4 rounded font-medium">Learn More <i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                    <div>
                        <img className='h-96' src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;