import mongoose, { Schema, Document} from 'mongoose';

interface IProduct extends Document {
	name: string;
	description: string;
	price: number;
	category: string;
	stock: number;
	sizes: string[];
	colors: string[];
	images: string[];
	createdAt: Date;
	updatedAt: Date;
}

const ProductSchema: Schema = new Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
	price: { type: Number, required: true },
	category: { type: String, required: true },
	stock: { type: Number, required: true },
	sizes: { type: [String], required: true },
	colors: { type: [String], required: true },
	images: { type: [String], required: true },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.products || mongoose.model<IProduct>('Products', ProductSchema);
