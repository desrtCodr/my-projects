import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
} from 'react-icons/fa';
interface sliderProps {
  slides: { src: string; alt: string; path?: string }[];
}

function Slider({ slides }: sliderProps) {
  const [current, setCurrent] = React.useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section id='projects' className='bg-center bg-cover'>
      <div className='pt-[100px] mb-5'>
        <h1 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 '>
          Project Portfolio
        </h1>
        <div>
          {slides.map((pic, index) => {
            return (
              <div
                key={index}
                className={
                  index === current
                    ? 'opacity-[1] ease-in duration-1000'
                    : 'opacity-0'
                }
              >
                <div className='relative flex justify-center p-4'>
                  <FaArrowCircleLeft
                    className={
                      'absolute top-[50%] left-[30px] text-primary-700/90 cursor-pointer select-none z-[2]'
                    }
                    size={50}
                    onClick={prevSlide}
                  />
                  {index === current && (
                    <Link
                      href={`/projects${pic.path}`}
                      className='relative flex justify-center p-4'
                    >
                      <p className='absolute capitalize p-5 text-4xl tracking-tight font-extrabold text-primary-700 text-center'>
                        {pic.alt}
                      </p>

                      <Image
                        src={pic.src}
                        alt={pic.alt}
                        width={800}
                        height={600}
                        className='rounded-lg'
                        style={{ objectFit: 'cover' }}
                      />
                    </Link>
                  )}
                  <FaArrowCircleRight
                    className={
                      'absolute top-[50%] right-[30px] text-primary-700/90 cursor-pointer select-none z-[2]'
                    }
                    size={50}
                    onClick={nextSlide}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Slider;
