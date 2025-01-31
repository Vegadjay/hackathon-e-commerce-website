import mongoose, { Schema, Document, model, models } from "mongoose";

interface IWishlist extends Document {
	userId: string;
	products: string[];
	createdAt: Date;
	updatedAt: Date;
}

const WishlistSchema: Schema = new Schema(
	{
		userId: {
			type: Schema.Types.ObjectId,
			ref: "Users",
			required: true,
			unique: true,
		},
		products: [
			{
				type: Schema.Types.ObjectId,
				ref: "Products",
				unqiue: true,
			},
		],
		createdAt: {
			type: Date,
			default: Date.now,
		},
		updatedAt: {
			type: Date,
			default: Date.now,
		},
	},
	{
		timestamps: true,
	}
);

export default models.Wishlist as mongoose.Model<IWishlist> || model<IWishlist>("Wishlist", WishlistSchema);
