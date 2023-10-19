import mongoose, { Schema } from "mongoose";

const cultureSchema: Schema = new Schema({
  name: { type: String, required: true },
});

export default mongoose.models.Culture || mongoose.model("Culture", cultureSchema);
