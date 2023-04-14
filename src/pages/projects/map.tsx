import React, {
  useState,
  useEffect,
  useMemo,
  SyntheticEvent,
} from 'react';
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindow,
} from '@react-google-maps/api';

type Point = {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  category: string;
  description: string;
};
interface MapProps {
  points: Point[];
}

export default function Home() {
  const points: Point[] = require('../../data/data.json');
  const [markerPoints, setMarkerPoints] = useState<Point[]>(points);
  const catagories = Array.from(
    new Set(points.map((point: Point) => point.category))
  );
  const { isLoaded } = useLoadScript({
    googleMapsApiKey:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
        <h2 className='text-3xl font-bold text-center text-gray-800 dark:text-white'>
          My Favorite Places
        </h2>
        <p className='mt-2 text-center text-gray-600 dark:text-gray-400'>
          Select All or a specific category of activities to show
          locations of my favorite spots. Click the marker to find out
          more details about the location.
        </p>
        <div className='mt-8'>
          <div className='flex flex-wrap justify-center'>
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
                className='capitalize px-4 py-2 mx-2 text-sm font-medium text-gray-800 transition-colors duration-200 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700'
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

const MyMap: React.FC<MapProps> = ({ points }) => {
  const mapCenter = useMemo(
    () => ({
      lat: 38.573315,
      lng: -109.549843,
    }),
    []
  );

  const [selectedPoint, setSelectedPoint] = useState<Point>();

  return (
    <GoogleMap
      zoom={10}
      center={mapCenter}
      mapContainerStyle={{ height: '500px', width: '100%' }}
    >
      {points.map((point) => (
        <MarkerF
          key={point.id}
          position={{
            lat: point.latitude,
            lng: point.longitude,
          }}
          onClick={() => setSelectedPoint(point)}
        />
      ))}
      {selectedPoint && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedPoint(undefined);
          }}
          position={{
            lat: selectedPoint.latitude,
            lng: selectedPoint.longitude,
          }}
        >
          <div>
            <h2 className='text-xl'>{selectedPoint.name}</h2>
            <p>{selectedPoint.description}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};
