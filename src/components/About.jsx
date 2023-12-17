import React from "react";
import image2 from "../assets/image2.png";
import image1 from "../assets/image1.png"
import { Link } from "react-scroll";

const About = () => {
  return (
    <div>
      <div name='about' className='bg-radial-at-r from-sky-400 to-indigo-900 w-full  bg-white text-gray-300 snap-start'>
        <div className='flex flex-col justify-center items-center w-full mt-40'>

          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <img src={image2} alt="logo image" style={{ width: "100%" }} />
            </div>
            <div className='flex flex-col'>
              <h1 className='text-[27px] sm:text-left text-center font-bold text-[#6B3CC9] '>Web and Mobile App Development</h1>
              <div>
                <p className='text-center sm:text-left text-black'>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
              </div>
              <div className='flex justify-center sm:justify-start'>
                <button className="rounded-lg font-semibold text-l mt-7 text-white group border-2 px-6 py-3 my-2 bg-[#F28D35]">
                  <Link to="targetSection">
                    Learn More
                  </Link>
                  <span className="group-hover:rotate-90 duration-300"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div name='about' className='bg-radial-at-r from-sky-400 to-indigo-900 w-full  bg-white text-gray-300 snap-start mb-40'>

        <div className='flex flex-col justify-center items-center w-full  mt-40 '>

          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>

            <div className='sm:text-right order-2 sm:order-1'>
            <h1 className='text-[27px] sm:text-left text-center font-bold text-[#6B3CC9] '>Digital Strategy Consulting</h1>
              <div>
                <p className='text-center sm:text-left text-black'>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
              </div>
              <div className='flex justify-center sm:justify-start'>
                <button className="rounded-lg font-semibold text-l mt-7 text-white group border-2 px-6 py-3 my-2 bg-[#F28D35]">
                  <Link to="targetSection">
                    Learn More
                  </Link>
                  <span className="group-hover:rotate-90 duration-300"></span>
                </button>
              </div>
             
            </div>

            <div className='flex flex-col order-1 sm:order-2'>
            <img src={image1} alt="logo image" style={{ width: "100%" }} />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
