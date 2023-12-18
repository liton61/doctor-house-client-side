import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { Navigation } from "swiper/modules";

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="lg:px-0 md:px-8 px-5">
            <section className="my-20 lg:w-3/4 mx-auto bg-[#07332F] text-white pt-10 rounded">
                <div className='w-64 mx-auto'>
                    <p className='text-white text-center mb-2'>---What Our Clients Say---</p>
                    <h3 className='text-xl font-semibold border-y-4 text-center py-3'>TESTIMONIALS</h3>
                </div>

                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className="flex flex-col items-center mx-24 my-16">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p className="py-8 text-justify">{review.details}</p>
                                <h3 className="text-2xl">{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </section>
        </div>
    );
};

export default Review;