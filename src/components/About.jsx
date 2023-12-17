import React from 'react';

const About = () => {
  return (
    <div name='about' className=' bg-radial-at-r from-sky-400 to-indigo-900 w-full h-screen bg-[#0a192f] text-gray-300 snap-start'>
      <div className='flex flex-col justify-center items-center w-full h-screen'>

          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Gihan sudeepa, nice to meet you.</p>
            </div>
            <div>
              <p>
I'm a self-motivated Software Engineering undergraduate with a passion for learning and trying new technologies. I'm interested
in both Full Stack and Backend Development and can quickly adapt to changes.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;