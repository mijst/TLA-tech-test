import { iData } from '@/types';
import React from 'react'
import Tile from '@/app/components/Tile'

const Main: React.FC<{ data: iData[] }> = ({ data }) => {
  return (
    <div className="grid grid-cols-4 grid-flow-row gap-1 mx-20">
      {data.map((item, index) => (
        <Tile key={index} data={item} />
      ))}
    </div>
  );
};

export default Main;
