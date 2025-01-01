import mongoose, {Schema, Document} from "mongoose";

interface IWhishlist extends Document {
	userId: string;
	products: string[];
	createdAt: Date;
	updatedAt: Date;
}

const WhishlistSchema: Schema = new Schema({
	userId: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
	products: [{ type: Schema.Types.ObjectId, ref: 'Products' }],
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
});

export default (mongoose.models.whishlists) || mongoose.model<IWhishlist>('Whishlist', WhishlistSchema);