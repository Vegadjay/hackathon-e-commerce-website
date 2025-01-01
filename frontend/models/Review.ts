import mongoose, { Document, Schema } from "mongoose";

interface IReview extends Document {
	productId: string;
	userId: string;
	rating: number;
	comment: string;
	createdAt: Date;
	updatedAt: Date;
}

const ReviewSchema: Schema = new Schema({
	productId: { type: Schema.Types.ObjectId, ref: 'Products', required: true },
	userId: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
	rating: { type: Number, min: 1, max: 5, required: true },
	comment: { type: String, required: false },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
});

export default (mongoose.models.reviews) || mongoose.model<IReview>('Reviews', ReviewSchema);