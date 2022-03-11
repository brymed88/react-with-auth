import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  first_name: { type: String },
  last_name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
});

export default mongoose.model("user", userSchema);