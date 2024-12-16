import React, { useState } from 'react';
import Image from 'next/image';
import img1 from '../assets/imgs/galery-images/image1.png'
import img2 from '../assets/imgs/galery-images/image2.png'
import img3 from '../assets/imgs/galery-images/image3.png'
import img4 from '../assets/imgs/galery-images/text.png'
function GaleryImages() {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    const images = [
        { url: img1 },
        { url: img2 },
        { url: img3 },
    ];
    return (
        <div className="flex flex-col items-center w-full relative">
            <div className="absolute bottom-40 left-0 mb-4 ml-4 text-white z-10">
                <Image
                    src={img4}
                    alt={`Image`}
                    width={220}
                    height={220}
                />
            </div>

           
            <div className="flex flex-row w-full justify-center">
                {images.map((image, index) => (
                    <div key={index} className="mr-2 relative">
                        <Image
                            src={image.url}
                            alt={`Image ${index + 1}`}
                            width={selectedIndex === index ? 450 : 350}
                            height={selectedIndex === index ? 450 : 350}
                            className="transition-all duration-300 object-cover"
                            onClick={() => setSelectedIndex(index)}
                        />
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-4">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 mx-2 rounded-full cursor-pointer ${selectedIndex === index ? 'bg-black' : 'bg-gray-400'}`}
                        onClick={() => setSelectedIndex(index)}
                    ></div>
                ))}
            </div>
        </div>
    );

}

export default GaleryImages