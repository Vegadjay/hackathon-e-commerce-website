import mongoose,{Schema,Document} from 'mongoose';

interface IProduct {
	productId: string;
	quantity: number;
	size: string;
	price: string;
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
	price: { type: String, required: true }
});

const CartSchema: Schema = new Schema({
	userId: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
	products: { type: [ProductSchema], required: true },
	totalPrice: { type: Number, default: 0 },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
});

const Cart = mongoose.models.Carts || mongoose.model<ICart>('Carts', CartSchema);
export { Cart };
export type { IProduct };
