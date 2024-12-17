import React from 'react'
import Image from 'next/image'
import img from '../../components/assets/imgs/instagram/image.png'

function InstagramPanel() {
    return (
        <section id="instagram-panel" className="page flex justify-center">
            <div className="flex flex-col items-center text-center">
                <p className="text-[46px] font-volkhov">Follow Us On Instagram</p>
                <p className="max-w-xl font-poppins" style={{ color: "#8A8A8A" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis
                    ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin.
                </p>
                <Image src={img} alt="description" width={1280} height={36} />
            </div>

        </section>
    )
}

export default InstagramPanel