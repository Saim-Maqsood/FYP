import mongoose, { Schema, Document } from 'mongoose';
export interface Cart extends Document {
    userID: string;
    product: string;
    quantity: number;
}
const cartSchema: Schema = new Schema({
    userID: { type: String, required: true },
    product: { type: String, required: true },
    quantity: { type: Number, required: true },
});
const cartModel = (mongoose.models.carts as mongoose.Model<Cart>) || mongoose.model<Cart>('cart', cartSchema);
export default cartModel;