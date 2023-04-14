import React, { useState, useMemo } from 'react';
import {
  GoogleMap,
  MarkerF,
  InfoWindow,
  useLoadScript,
} from '@react-google-maps/api';
import { Point } from '../types/types';
interface MapProps {
  points: Point[];
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
  const { isLoaded } = useLoadScript({
    googleMapsApiKey:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
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

export default MyMap;
