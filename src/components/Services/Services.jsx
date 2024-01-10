import img1 from '../../assets/services (1).png';
import img2 from '../../assets/services (2).png';

const Services = () => {
    return (
        <div className='lg:flex md:flex lg:w-3/4 w-full mx-auto mt-20 gap-5 lg:px-0 px-5'>
            <div className='lg:w-1/2 md:w-1/2'>
                <img className='h-full w-full' src={img1} alt="" />
            </div>
            <div className='lg:w-1/2 md:w-1/2 items-center'>
                <h3 className='text-xl font-semibold lg:mt-0 md:mt-0 mt-5 mb-3'>Electro  Gastrology Therapy</h3>
                <p className='text-justify mb-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <img className='mb-5' src={img2} alt="" />
                <div className="divider">OR</div>
                <img className='mb-5' src={img2} alt="" />
                <h3 className='text-xl font-semibold mb-3'>Electro  Gastrology Therapy</h3>
                <p className='text-justify mb-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
            </div>
        </div>
    );
};

export default Services;