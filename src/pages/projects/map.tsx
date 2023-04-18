import React, { useState, SyntheticEvent } from 'react';
import MyMap from '../../components/MyMap';
import { Point } from '../../types/types';

export default function Home() {
  const points: Point[] = require('../../data/data.json');
  const [markerPoints, setMarkerPoints] = useState<Point[]>(points);
  const catagories = Array.from(
    new Set(points.map((point: Point) => point.category))
  );

  return (
    <section className='flex justify-center bg-center bg-cover topo-img'>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md z-[2]'>
        <h2 className='text-3xl font-bold text-center text-slate-200'>
          My Favorite Places
        </h2>
        <p className='mt-2 text-center text-slate-300'>
          Select All or a specific category of activities to show
          locations of my favorite spots. Click the marker to find out
          more details about the location.
        </p>
        <div className='mt-8'>
          <div className='flex gap-5 flex-wrap justify-center p-5'>
            <button
              className='px-4 py-2 mx-2 text-sm font-medium text-gray-800 transition-colors duration-200 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700'
              onClick={(e: SyntheticEvent) => {
                e.preventDefault();
                setMarkerPoints(points);
              }}
            >
              All
            </button>
            {catagories.map((category: string, index) => (
              <button
                key={index}
                className='capitalize px-4 py-2 mx-2 text-sm font-medium text-gray-800 transition-colors duration-200 transform bg-slate-300 rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700'
                onClick={(e: SyntheticEvent) => {
                  e.preventDefault();
                  setMarkerPoints(
                    points.filter(
                      (point: Point) =>
                        point.category === `${category}`
                    )
                  );
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <MyMap points={markerPoints} />;
      </div>
    </section>
  );
}
