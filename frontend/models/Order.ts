import mongoose, { Schema, Document } from 'mongoose';

interface IProduct {
	productId: string;
	quantity: number;
	size: string;
	color: string;
}

interface IShippingAddress {
	street: string;
	city: string;
	state: string;
	zipCode: string;
	country: string;
}

interface IOrder extends Document {
	userId: string;
	products: IProduct[];
	totalPrice: number;
	shippingAddress: IShippingAddress;
	status: string;
	orderedAt: Date;
	updatedAt: Date;
}

const ProductSchema: Schema = new Schema({
	productId: { type: Schema.Types.ObjectId, ref: 'Products', required: true },
	quantity: { type: Number, required: true },
	size: { type: String, required: true },
	color: { type: String, required: true }
});

const OrderSchema: Schema = new Schema({
	userId: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
	products: { type: [ProductSchema], required: true },
	totalPrice: { type: Number, required: true },
	shippingAddress: {
		street: { type: String, required: true },
		city: { type: String, required: true },
		state: { type: String, required: true },
		zipCode: { type: String, required: true },
		country: { type: String, required: true }
	},
	status: {
		type: String,
		enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
		default: 'pending'
	},
	orderedAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
});

export default (mongoose.models.orders) || mongoose.model<IOrder>('Orders', OrderSchema);
