import { Schema, FilterQuery, Model, QueryOptions, UpdateQuery, ObjectId } from "mongoose";
import { IUser } from "./user.interface";
import userModel from "./user.model";

// export class UserService {
//     private model: Model<IUser>;
//     constructor() {
//         this.model = userModel;
//     }

//     async save(item: any): Promise<IUser> {
//         return await this.model.create(item);
//     }

//     async find(
//         query: FilterQuery<IUser>,
//         projection: any = {},
//         options: QueryOptions = { lean: true }
//     ) {
//         return await this.model.find(query, projection, options).lean();
//     }

//     async findOne(
//         query: FilterQuery<IUser>,
//         projection: any = {},
//         options: QueryOptions = { lean: true }
//     ): Promise<any> {
//         return this.model.findOne(query, projection, options);
//     }

//     async findOneAndUpdate(
//         query: FilterQuery<IUser>,
//         updateData: UpdateQuery<IUser>,
//         options: QueryOptions = { lean: true }
//     ) {
//         return await this.model.findOneAndUpdate(query, updateData, options);
//     }

//     async findByIdAndUpdate(
//         query: FilterQuery<IUser>,
//         updateData: UpdateQuery<IUser>,
//         options: QueryOptions = { lean: true }
//     ) {
//         return await this.model.findByIdAndUpdate(query, updateData, options);
//     }

//     async aggregate(pipeLine:any[]) : Promise<any> {
//         try {
//           return await this.model.aggregate(pipeLine);
//         } catch (err) {
//           return err;
//         }
//     }
    
//     async findByIdAndDelete(
//         query: FilterQuery<IUser>,
//         options: QueryOptions = { lean: true }
//     ) {
//         return await this.model.findByIdAndDelete(query, options);
//     }

//     async updateLastLogin(user: Schema.Types.ObjectId){
//         return await this.model.updateOne({ _id: user },{ $set: { last_login: new Date() } })
//     }
// }

export const UserService = {
    async find(
        query: FilterQuery<IUser>,
        projection: any = {},
        options: QueryOptions = { lean: true }
    ) {
        return await userModel.find(query, projection, options).lean();
    }
}



