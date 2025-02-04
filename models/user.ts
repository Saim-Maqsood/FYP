import mongoose, { Schema, Document } from 'mongoose';
export interface User extends Document {
    name: string;
    email: string;
    password: string;
    role: string;
    gender: string;
}
const userSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: [true,"Email is required"] },
    password: { type: String, required: [true,"Password is required"] },
    role: { type: String, required: true },
});
const userModel = (mongoose.models.users as mongoose.Model<User>) || mongoose.model<User>('users', userSchema);
export default userModel;