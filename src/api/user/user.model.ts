import * as mongoose from "mongoose";
import { IUser } from "./user.interface";


const userSchema: mongoose.Schema<IUser> = new mongoose.Schema({
    name: String,
    first_name: String,
    last_name: String,
    password: String,
    email: { type: String, required: true }
},{ timestamps: true });
  
const userModel = mongoose.model<IUser>("users", userSchema);
  
export default userModel;