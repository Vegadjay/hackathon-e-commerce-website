import mongoose, { Schema, Document } from 'mongoose';

interface IProduct extends Document {
	name: string;
	price: number;
	rating: number;
	reviews: number;
	inStock: number;
	images: [string];
	delivery: string;
	deliveryDate: string;
	seller: string;
	color: string[];
	category: string;
	productModel: string;
	size: string[];
	features: string[];
	description: string;
	chartData: Array<{
		month: string;
		revenue: number;
	}>;
	createdAt: Date;
	updatedAt: Date;
}

const ProductSchema: Schema = new Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
	rating: { type: Number, default: 0, min: 0, max: 5 },
	reviews: { type: Number, default: 0 },
	inStock: { type: Number, required: true },
	delivery: { type: String },
	images: { type: [String] },
	deliveryDate: { type: String },
	seller: { type: String },
	color: { type: [String], default: [] },
	category: { type: String, required: true },
	productModel: { type: String },
	size: { type: [String], default: [] },
	features: { type: [String], default: [] },
	description: { type: String, required: true },
	chartData: [{
		month: { type: String },
		revenue: { type: Number }
	}],
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
});

ProductSchema.pre('save', function (next) {
	this.updatedAt = new Date();
	next();
});

export default mongoose.models.Products || mongoose.model<IProduct>('Products', ProductSchema);