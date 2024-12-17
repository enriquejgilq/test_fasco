import React, { useState } from 'react'
import Image from "next/image"
import img1 from '../../components/assets/imgs/new-arrivals-images/Images_1.png'
import img2 from '../../components/assets/imgs/new-arrivals-images/Images_2.png'
import img3 from '../../components/assets/imgs/new-arrivals-images/Images_3.png'
import img4 from '../../components/assets/imgs/new-arrivals-images/Images_4.png'
import img5 from '../../components/assets/imgs/new-arrivals-images/Images_5.png'
import img6 from '../../components/assets/imgs/new-arrivals-images/Images_6.png'

import StarOutlineIcon from '@mui/icons-material/StarOutline';

function NewArrivals() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const items = [
        "Men’s Fashion",
        "Women’s Fashion",
        "Women Accessories",
        "Men Accessories",
        "Discount Deals",
    ];

    const arrivals = [
        { description: 'Shiny Dress', oterDescription: 'Al Karam', numberStar: 5, reviews: '(4.1k) Customer Reviews', img: img1, price: '$95.50', sold: 'Almost Sold Out' },
        { description: 'Long Dress', oterDescription: 'Al Karam', numberStar: 5, reviews: '(4.1k) Customer Reviews', img: img2, price: '$95.50', sold: 'Almost Sold Out' },
        { description: 'Full Sweater', oterDescription: 'Al Karam', numberStar: 5, reviews: '(4.1k) Customer Reviews', img: img3, price: '$95.50', sold: 'Almost Sold Out' },
        { description: 'White Dress', oterDescription: 'Al Karam', numberStar: 5, reviews: '(4.1k) Customer Reviews', img: img4, price: '$95.50', sold: 'Almost Sold Out' },
        { description: 'Colorful Dress', oterDescription: 'Al Karam', numberStar: 5, reviews: '(4.1k) Customer Reviews', img: img5, price: '$95.50', sold: 'Almost Sold Out' },
        { description: 'White Shirt', oterDescription: 'Al Karam', numberStar: 5, reviews: '(4.1k) Customer Reviews', img: img6, price: '$95.50', sold: 'Almost Sold Out' },
    ]
    return (
        <section id="new-arrivals" className="page flex justify-center items-center flex-col">
           <p className="text-[46px] font-volkhov">Deals Of The Month</p>
           <div className='w-[614px] font-poppins text-center p-4'>  
           <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
           </div>
            <div className="flex justify-center gap-4 p-4  border-b">
                {items.map((item, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 rounded-lg text-sm text-base transition-colors duration-300
            ${activeIndex === index ? "bg-black text-white" : "bg-transparent text-black hover:bg-gray-200 font-poppins "}`}
                        onClick={() => setActiveIndex(index)}
                    >
                        {item}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {arrivals.map((item, index) => (
                    <div key={index} className="max-w-sm overflow-hidden bg-white border rounded-lg shadow-md">
                        <div className="relative">
                            <Image
                                src={item.img.src}
                                alt={item.description}
                                width={300}
                                height={224}
                                className="w-full object-cover aspect-[4/5]"
                            />
                        </div>
                        <div className="p-4 space-y-2">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="font-semibold text-lg">{item.description}</h3>
                                    <p className="text-sm text-gray-500">{item.oterDescription}</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <StarOutlineIcon
                                            key={i}
                                            className={`h-5 w-5 ${i < item.numberStar ? "text-yellow-500" : "text-gray-300"
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="text-sm text-gray-500">{item.reviews}</div>
                            <div className="flex items-center justify-between pt-2">
                                <span className="text-2xl font-bold">{item.price}</span>
                                <span className="text-sm text-red-500">{item.sold}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="px-4 py-2 rounded-lg text-sm text-base  bg-black text-white font-bold font-poppins" >View More
            </button>
        </section>
    )
}

export default NewArrivals