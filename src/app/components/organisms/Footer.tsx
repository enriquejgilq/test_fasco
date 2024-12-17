import React from "react";

function Footer() {
  return (
    <section id="customers" className="page flex flex-col pt-8">
       <div className="flex flex-col md:flex-row justify-between mx-4 md:mx-20 my-10">
        <div className="flex w-full text-[32px] font-volkhov mb-4 md:mb-0">
          <p>FASCO</p>
        </div>

         <div className="flex flex-wrap justify-center md:justify-around w-full space-x-4 md:space-x-6">
          <p className="cursor-pointer font-poppins mb-2 md:mb-0">Support Center</p>
          <p className="cursor-pointer font-poppins mb-2 md:mb-0">Invoicing</p>
          <p className="cursor-pointer font-poppins mb-2 md:mb-0">Contract</p>
          <p className="cursor-pointer font-poppins mb-2 md:mb-0">Careers</p>
          <p className="cursor-pointer font-poppins mb-2 md:mb-0">Blog</p>
          <p className="cursor-pointer font-poppins mb-2 md:mb-0">FAQ,s</p>
        </div>
      </div>

       <div className="flex justify-center w-full text-[12px] cursor-pointer font-poppins py-4">
        <p>Copyright © 2022 Xpro. All Rights Reserved.</p>
      </div>
    </section>
  );
}

export default Footer;
