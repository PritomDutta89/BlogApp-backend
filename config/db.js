import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://duttapritom777:VEU4ZBWdol1SrDhx@cluster0.b8uuj.mongodb.net/blog-app");
    console.log("MongoDB connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

// mongodb+srv://duttapritom777:VEU4ZBWdol1SrDhx@cluster0.b8uuj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// pass - VEU4ZBWdol1SrDhx
