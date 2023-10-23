import mongoose, { Schema } from "mongoose";

const beerSchema: Schema = new Schema({
  name: { type: String, required: true },
});

export default mongoose.models.Kinds || mongoose.model("Kinds", beerSchema);
