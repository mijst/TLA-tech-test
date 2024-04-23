'use client';
import React, { useState } from 'react'
import { iData } from "@/types"
import CarDetailsForm from '../CarDetailsForm';

const Tile: React.FC<{ data: iData }> = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`w-full ${expanded ? 'col-span-4' : 'col-span-1 order-1'} p-4`}
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-md" >
        <div className={`relative cursor-pointer overflow-hidden ${expanded ? 'h-[500px]' : 'h-64'}`} onClick={toggleExpand}>
          <img
            src={expanded ? data.mainImage : data.thumbnailImage}
            alt="Thumbnail"
            className="w-full h-full object-cover"
          />

        </div>
        <div className="p-4 flex flex-row justify-between">
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-2">{data.manufacturer}</h2>
            <p className="text-lg mb-2">{data.name}</p>
            <p className="text-2xl">Cost: £{data.cost}</p>
          </div>
          {expanded && (
            <>
              <div className=" flex flex-col">
                <p className="text-lg">Battery Capacity: {data.batterycapacityKwh} kWh</p>
                <p className="text-lg">Range: {data.rangeMiles} miles</p>
                <p className="text-lg">Charge Time: {data.chargetimeMinutes} minutes</p>
                <p className="text-lg">Seats: {data.seats}</p>
                <p className="text-lg">Available Colors: {data.colors.join(', ')}</p>
              </div>
              <div className=" flex flex-col">
                <p>Enquire for more details: </p>
                <CarDetailsForm vehicleID={data.id} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tile;
