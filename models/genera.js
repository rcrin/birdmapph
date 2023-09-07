import mongoose, { Schema, model, models } from "mongoose";

const GeneraSchema = new Schema({
  _id: {
    type: mongoose.Schema.ObjectId,
  },
  genusName: {
    type: String,
  },
  subFamilyId: {
    type: mongoose.Schema.ObjectId,
  },
});

const Genera = models.genera || model("genera", GeneraSchema, "genera");
export default Genera;
