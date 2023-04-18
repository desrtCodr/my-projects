import React from 'react';

type HeroProps = {
  heading: string;
  about: string;
  projects: string;
};

const Hero = ({ heading, about, projects }: HeroProps) => {
  return (
    <section
      id='home'
      className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img'
    >
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-10rem]'>
        <h2 className='text-5xl font-bold break-word'>{heading}</h2>
        <p className='py-5 text-xl'>{about}</p>
        <button className='py-3 text-xl border p-4'>
          {projects}
        </button>
      </div>
    </section>
  );
};

export default Hero;
