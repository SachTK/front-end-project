import React from 'react';
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className='bg-[#6B3CC9] '>
      <div className="grid grid-cols-4 gap-4 bg-[#6B3CC9] pt-10 pr-10 pl-10 pb-8">
        <div className='col-span-2'>
          <div>
            <img src={logo} alt="logo image" style={{ width: "150px" }} />
          </div>
          <div><p>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p></div>

        </div>



        <div>
          <h1 className='text-xl font-bold '>Our Technologies</h1>
          <div className='pt-2'>ReactJS</div>
          <div className='pt-2'>ReactJS</div>
          <div className='pt-2'>ReactJS</div>
          <div className='pt-2'>ReactJS</div>
          <div className='pt-2'>ReactJS</div>
          <div className='pt-2'>ReactJS</div>
        </div>


        <div>
          <h1>Our Services</h1>
          <p>hhhhh</p>
          <p>hghg</p>

        </div>




      </div>
      <div className='flex items-center justify-center pt-5 '>
        <div className='border-t-4 border-white h-6 w-[800px]'></div>
      </div>

      <div className='flex items-center justify-center  pb-5'>

        <div className='pr-9'>Privacy Policy</div>
        <div >|</div>
        <div className='pl-9'>Terms & Conditions</div>


      </div>
    </div>
  )
}

export default Footer