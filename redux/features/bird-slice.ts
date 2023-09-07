import { createSlice } from "@reduxjs/toolkit";
import { ObjectId } from "mongoose";

type initialState = {
  value: birdState;
};

type birdState = {
  description: string;
  genusId: genus;
  images: string[];
  speciesName: string;
  _id: string;
  location?: string[];
};

type genus = {
  genusName: string;
  _id: string;
};

const initialState = {
  value: {
    description: "Description",
    genusId: { genusName: "", _id: "" },
    images: ["/assets/images/kf.jpg"],
    speciesName: "Name",
    _id: "",
    loccation: [],
  } as birdState,
} as initialState;

export const bird = createSlice({
  name: "bird",
  initialState,
  reducers: {
    abort: () => {
      return initialState;
    },
    setBirdState: (state, action) => {
      return {
        value: action.payload,
      };
    },
  },
});

export const { abort, setBirdState } = bird.actions;
export default bird.reducer;
