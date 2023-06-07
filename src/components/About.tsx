/* eslint-disable @next/next/no-img-element */

import React from 'react';
//import Image from 'next/image';

// const normalizeSrc = (src: string) => {
//   return src.startsWith('/') ? src.slice(1) : src;
// };
// type cloudflareLoaderProps = {
//   src: string;
//   width: number;
//   quality?: number;
// };

// const cloudflareLoader = ({
//   src,
//   width,
//   quality,
// }: cloudflareLoaderProps) => {
//   const params = [`width=${width}`];
//   if (quality) {
//     params.push(`quality=${quality}`);
//   }
//   const paramsString = params.join(',');
//   return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`;
// };

function About() {
  return (
    <section
      id='about'
      className='flex justify-center bg-center bg-cover about-img'
    >
      <div className='pt-[100px] pb-5 text-white z-[2]'>
        <h2 className='text-5xl text-center text-slate-900 font-bold break-word my-10 max-w-lg'>
          Software Developer Industrial Engineer Informatics
          Specialist
        </h2>

        <img
          src='/ianmitchard.jpg'
          alt='Ian Mitchard'
          width={200}
          height={200}
          className='rounded-full p-5 mx-auto'
        />
        <p className='p-5 text-xl my-10 max-w-lg text-center'>
          I am a software developer with a background in industrial
          engineering, clinical informatics and IT support in the
          cloud. I am passionate about creating web applications that
          are intuitive, creative, sophisticated and elegant.
        </p>
      </div>
    </section>
  );
}

export default About;
