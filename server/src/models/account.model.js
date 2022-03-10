import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  first_name: { type: String, default: '' },
  last_name: { type: String, default: '' },
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
  role: { type: String },
});

export default mongoose.model("user", userSchema);