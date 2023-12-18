import img from '../../assets/banner (1).png';

const About = () => {
    return (
        <div>
            <div className="lg:w-3/4 mx-auto lg:flex items-center justify-center my-8 lg:px-0 md:px-8 px-5">
                <div className="w-full lg:w-1/2 lg:mr-3">
                    <h2 className="text-2xl font-bold mb-4">About Us</h2>
                    <p className="mb-4 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida odio vitae massa consequat, vel bibendum nisi lobortis. Integer a metus ac odio consequat vehicula.</p>
                    <p className="mb-4 text-justify">Fusce hendrerit odio sit amet turpis tempor, vel consectetur lectus blandit. Proin consequat, quam eget aliquet faucibus, lorem eros lobortis purus, et bibendum libero metus in ex.</p>
                    <p className="mb-4 text-justify">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer auctor, ex a dignissim bibendum, massa orci feugiat libero, eget dapibus mauris elit ut lectus.</p>
                </div>
                <div className="lg:w-1/2 w-full lg:ml-3">
                    <img src={img} className="w-full h-auto" />
                </div>
            </div>

        </div>
    );
};

export default About;