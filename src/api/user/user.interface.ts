import { Document } from "mongoose";
export interface IUser extends Document {
    name: string,
    first_name: string,
    last_name: string,
    password: string,
    email: string,
}