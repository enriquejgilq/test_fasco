import React from 'react'
import Image from "next/image"
import img1 from '../../components/assets/imgs/collections/img_peacky1.png'
import bg1 from '../../components/assets/imgs/collections/bg_1.png'

function Collections() {
    return (
        <section id="collections" className="page flex justify-center items-center flex-row">
            <div className="bg-gray-100 h-[570px] py-12">
                <div className="container mx-auto flex flex-col lg:flex-row items-center px-4">
                    <div className="relative flex flex-col items-center justify-center w-full lg:w-1/2 space-y-4">
                        <img
                            src={img1.src}
                            alt="Product"
                            width={500} height={500}
                            className="object-cover w-full max-w-xs md:max-w-md lg:max-w-lg"
                        />
                    </div>
 
                    <div className="flex flex-col justify-between items-center">
                        <p> Women Collection</p>
                        <h2 className="text-4xl font-semibold text-gray-900 mb-4">Peaky Blinders</h2>
                        <p className="text-sm text-gray-600 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem.
                        </p>
                        <div className="text-lg font-semibold text-gray-900">$100.00</div>
                        <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Collections