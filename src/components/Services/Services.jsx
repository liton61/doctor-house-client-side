import img1 from '../../assets/services (1).png';
import img2 from '../../assets/services (2).png';

const Services = () => {
    return (
        <div className='lg:flex md:flex lg:w-3/4 w-full mx-auto mt-20 lg:px-0 md:px-8 px-0'>
            <div className='lg:w-1/2 md:w-1/2 lg:mr-2 md:mr-2 lg:px-0 md:px-0 px-5'>
                <img className='lg:h-[123vh] h-full w-full' src={img1} alt="" />
            </div>
            <div className='lg:w-1/2 md:w-1/2 lg:ml-2 md:ml-2 lg:px-0 md:px-0 px-5'>
                <h1 className='text-xl font-semibold mb-5'>Our Services</h1>
                <p className='text-justify mb-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <div role="tablist" className="tabs tabs-bordered mb-5">
                    <a role="tab" className="tab font-medium">Cavity</a>
                    <a role="tab" className="tab tab-active font-medium">Cosmetic</a>
                    <a role="tab" className="tab font-medium">Oral</a>
                </div>
                <img className='mb-5' src={img2} alt="" />
                <h3 className='text-xl font-semibold mb-3'>Electro  Gastrology Therapy</h3>
                <p className='text-justify mb-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
                <button className="bg-[#F7A582] text-white border-none py-3 px-4 rounded font-medium">Learn More <i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    );
};

export default Services;