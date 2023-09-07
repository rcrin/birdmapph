"use client";
import { setBirdState } from "@/redux/features/bird-slice";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { ObjectId } from "mongoose";
import Species from "@/models/species";

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

const BirdListItems: React.FC<Species> = ({ ...species }) => {
  const dispatch = useDispatch<AppDispatch>();

  const clickHandler = () => {
    console.log("clicked");
    dispatch(setBirdState(species));
  };

  return (
    <div
      className="overflow-hidden"
      onClick={clickHandler}
    >{`${species.genusId?.genusName} ${species.speciesName}`}</div>
  );
};

export default BirdListItems;
