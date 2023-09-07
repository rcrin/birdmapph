"use client";

import React, { useEffect, useState } from "react";
import { ObjectId } from "mongoose";
import BirdListItems from "./BirdListItems";

const BirdListCard: React.FC = () => {
  const [species, setSpecies] = useState<any>([]);

  type Species = {
    description?: string;
    genusId?: genus;
    images?: string[];
    speciesName?: string;
    _id?: ObjectId;
    location?: string[];
  };

  type genus = {
    genusName: string;
    _id: string;
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/species/`);
      const data = await response.json();
      console.log(data);
      setSpecies(data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="flex h-auto w-auto justify-center items-center">
      <div className="bg-slate-300 h-[95%] w-4/5 sketchy">
        <div className="text-center">
          <h1 className="list_head_text ">
            <span className="blue_gradient">Bird List</span>
          </h1>
        </div>
        <hr className="bar" />
        <div className="w-auto h-auto bg-gray-400 z-1 relative">
          {species.map((item: Species) => {
            return <BirdListItems key={Math.random()} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default BirdListCard;
