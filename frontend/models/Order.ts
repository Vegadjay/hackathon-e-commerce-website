import mongoose, { Schema, Document, model, models } from 'mongoose';

interface IProduct {
	productId: mongoose.Schema.Types.ObjectId;
	name: string;
	quantity: number;
	size: string;
	price: string;
}

interface IShippingAddress {
	street: string;
	city: string;
	state: string;
	zipCode: string;
	country: string;
}

interface IShippingDetails {
	carrier?: string;
	trackingNumber?: string;
	estimatedDeliveryDate?: Date;
	actualDeliveryDate?: Date;
}

interface IOrder extends Document {
	userId: mongoose.Schema.Types.ObjectId;
	products: IProduct[];
	totalPrice: number;
	shippingAddress: IShippingAddress;
	status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
	paymentMethod: 'credit_card' | 'paypal' | 'bank_transfer' | 'cod';
	paymentStatus: 'pending' | 'completed' | 'failed' | 'refunded';
	orderNotes?: string;
	updatedBy?: string;
	cancelledBy?: string;
	cancellationReason?: string;
	shippingDetails?: IShippingDetails;
	urgent?: boolean;
	createdAt: Date;
	updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>({
	productId: { type: Schema.Types.ObjectId, ref: 'Products', required: true },
	name: { type: String, required: true },
	quantity: { type: Number, required: true },
	size: { type: String, required: true },
	price: { type: String, required: true },
});

const ShippingAddressSchema = new Schema<IShippingAddress>({
	street: { type: String, required: true },
	city: { type: String, required: true },
	state: { type: String, required: true },
	zipCode: { type: String, required: true },
	country: { type: String, required: true },
});

const OrderSchema = new Schema<IOrder>(
	{
		userId: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
		products: { type: [ProductSchema], required: true },
		totalPrice: { type: Number, required: true },
		shippingAddress: { type: ShippingAddressSchema, required: true },
		status: {
			type: String,
			enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled','returned'],
			default: 'pending',
		},
		paymentMethod: {
			type: String,
			enum: ['credit_card', 'paypal', 'bank_transfer', 'cod','upi'],
			required: true,
		},
		paymentStatus: {
			type: String,
			enum: ['pending', 'completed', 'failed', 'refunded'],
			default: 'pending',
		},
		orderNotes: { type: String, default: '' },
		updatedBy: { type: Schema.Types.ObjectId, ref: 'Users' },
		cancelledBy: { type: Schema.Types.ObjectId, ref: 'Users' },
		cancellationReason: { type: String, default: '' },
		shippingDetails: {
			carrier: { type: String },
			trackingNumber: { type: String },
			estimatedDeliveryDate: { type: Date },
			actualDeliveryDate: { type: Date },
		},
		urgent: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

OrderSchema.index({ userId: 1, status: 1, createdAt: -1 });

export default models.Orders || model<IOrder>('Orders', OrderSchema);