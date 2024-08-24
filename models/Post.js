import mongoose from "mongoose";

export const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  cardSummary: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const postModel = mongoose.models.post || mongoose.model("post", PostSchema);

export default postModel;
