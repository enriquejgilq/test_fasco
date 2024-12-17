import React from 'react'

function Footer() {
    return (
        <section id="customers" className="page flex flex-col pt-8">
        <div className="flex justify-between mx-20 my-10">
            <div className="flex w-full text-[32px] font-volkhov ">
                <p>FASCO</p>
            </div>
            
            <div className="flex justify-around w-full">
                <p className='cursor-pointer font-poppins'>Support Center</p>
                <p className='cursor-pointer font-poppins'>Invoicing</p>
                <p className='cursor-pointer font-poppins'>Contract</p>
                <p className='cursor-pointer font-poppins'>Careers</p>
                <p className='cursor-pointer font-poppins'>Blog</p>
                <p className='cursor-pointer font-poppins'>FAQ,s</p>
            </div>
        </div>
        
        <div className="flex justify-center w-full text-[12px] cursor-pointer font-poppins">
            <p>Copyright © 2022 Xpro . All Rights Reserved.</p>
        </div>
    </section>
    
    )
}

export default Footer