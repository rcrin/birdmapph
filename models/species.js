import mongoose, { Schema, model, models } from "mongoose";

const SpeciesSchema = new Schema({
  _id: {
    type: mongoose.Schema.ObjectId,
  },
  speciesName: {
    type: String,
    unique: [true, "Name already exists!"],
    required: [true, "Name is required!"],
  },
  genusId: {
    type: mongoose.Schema.ObjectId,
    ref: "genera",
  },
  description: {
    type: String,
  },
  images: {
    type: Array,
    required: [true, "Image(s) is required"],
  },
  location: {
    type: Array,
    required: [true, "ILocation(s) is required"],
  },
});

const Species = models.species || model("species", SpeciesSchema, "species");
export default Species;
