import React, { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import img1 from '../../components/assets/imgs/customers/image_1.png'
import img2 from '../../components/assets/imgs/customers/image_2.png'
import img3 from '../../components/assets/imgs/customers/image_3.png'
function Customers() {
    const [current, setCurrent] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "James K.",
            role: "Traveler",
            image: img1,
            rating: 5,
            comment:
                "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
        },
        {
            id: 2,
            name: "Maria S.",
            role: "Entrepreneur",
            image: img2,
            rating: 5,
            comment:
                "Just what I was looking for. Thank you for making it painless, pleasant and most of all hassle free! All products are great.",
        },
        {
            id: 3,
            name: "Megen W.",
            role: "UI Designer",
            image: img3,
            rating: 5,
            comment:
                "Just what I was looking for. Thank you for making it painless, pleasant and most of all hassle free! All products are great."
        },
    ];
    const length = testimonials.length;
    const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

    return (
        <section id="customers" className="page flex-row pt-[2%]">
            <div className='flex flex-col' >
                <div className="flex flex-col items-center text-center">
                    <p className="text-[46px] font-volkhov">This Is What Our Customers Say</p>
                    <p className="max-w-xl font-poppins" style={{ color: "#8A8A8A" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis
                    </p>
                </div>

                <div className="flex justify-center mt-10 overflow-hidden relative h-screen">
                    {testimonials.map((testimonial, index) => {
                        const isActive = index === current;
                        const isPrev = (current - 1 + length) % length === index;
                        const isNext = (current + 1) % length === index;

                        return (
                            <div
                                key={testimonial.id}
                                className={`absolute transition-all duration-500 ease-in-out transform ${isActive
                                    ? "scale-100 opacity-100 z-20"
                                    : isPrev || isNext
                                        ? "scale-90 opacity-60 z-10"
                                        : "scale-75 opacity-0"
                                    }`}
                                style={{
                                    left: isPrev
                                        ? "5%"
                                        : isNext
                                            ? "60%"
                                            : isActive
                                                ? "25%"
                                                : "-100%",
                                    width: isActive ? "50%" : "35%"
                                }}
                            >
                                <div className="bg-white p-6 rounded-lg shadow-lg flex items-center text-center">
                                    <div className="flex flex-row">
                                        <img
                                            src={testimonial.image.src}
                                            alt={testimonial.name}
                                            className="w-[242px] h-[242px] object-cover mb-4"
                                        />
                                        <div className="flex flex-col ml-4">
                                            <p className="text-gray-600 mb-2">{testimonial.comment}</p>
                                            <div className="text-yellow-400 mb-2">
                                                {"★".repeat(testimonial.rating)}
                                                {"☆".repeat(5 - testimonial.rating)}
                                            </div>
                                            <h3 className="text-lg font-bold">{testimonial.name}</h3>
                                            <p className="text-gray-500 text-sm">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    <div className='absolute top-1/2 left-0 right-0 flex pt-[2%] gap-2 flex justify-center'>
                        <ArrowBackIosIcon onClick={prevSlide} />
                        <ArrowForwardIosIcon onClick={nextSlide} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Customers