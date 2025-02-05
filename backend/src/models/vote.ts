import { ObjectId } from "mongodb";
import { InferSchemaType, Schema, model } from "mongoose";

const voteSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  favoriteClass: {
    type: String,
    required: true
  }
});

export type Vote = InferSchemaType<typeof voteSchema>;

export default model<Vote>("Vote", voteSchema);
