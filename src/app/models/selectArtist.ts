import mongoose, { Schema } from "mongoose";

const artistSchema: Schema = new Schema({
  name: { type: String, required: true },
});

export default mongoose.models.Artist || mongoose.model("Artist", artistSchema);
