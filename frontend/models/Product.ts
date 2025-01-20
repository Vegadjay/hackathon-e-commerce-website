import mongoose, { Schema, models } from 'mongoose';

interface IProduct{
	name: string;
	price: number;
	rating: number;
	reviews: number;
	inStock: number;
	delivery: string;
	deliveryDate: string;
	seller: string;
	color: string[];
	category: string;
	model: string;
	size: string[];
	images: string[];
	features: string[];
	description: string;
	chartData: {
		month: string;
		revenue: number;
	}[];
}

const ProductSchema: Schema = new Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
	rating: { type: Number, required: true },
	reviews: { type: Number, required: true },
	inStock: { type: Number, required: true },
	delivery: { type: String, required: true },
	deliveryDate: { type: String, required: true },
	seller: { type: String, required: true },
	color: { type: [String], required: true },
	category: { type: String, required: true },
	model: { type: String, required: true },
	size: { type: [String], required: true },
	images: { type: [String], required: true },
	features: { type: [String], required: true },
	description: { type: String, required: true },
	chartData: [
		{
			month: { type: String, required: true },
			revenue: { type: Number, required: true }
		}
	]
});

export default models.Products || mongoose.model<IProduct>('Products', ProductSchema);