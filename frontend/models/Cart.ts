import mongoose,{Schema,Document} from 'mongoose';

interface IProduct {
	productId: string;
	quantity: number;
	size: string;
	color: string;
}

interface ICart extends Document {
	userId: string;
	products: IProduct[];
	totalPrice: number;
	createdAt: Date;
	updatedAt: Date;
}

const ProductSchema: Schema = new Schema({
	productId: { type: Schema.Types.ObjectId, ref: 'Products', required: true },
	quantity: { type: Number, required: true },
	size: { type: String, required: true },
	color: { type: String, required: true }
});

const CartSchema: Schema = new Schema({
	userId: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
	products: { type: [ProductSchema], required: true },
	totalPrice: { type: Number, required: true },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
});

export default (mongoose.models.carts) || mongoose.model<ICart>('Carts', CartSchema);
