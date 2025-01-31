import mongoose, { Schema, Document } from 'mongoose';

interface ICategory extends Document {
    name: string;
    description?: string;
    image?: string;
    createdAt: Date;
    updatedAt: Date;
}

const CategorySchema: Schema = new Schema(
    {
        name: { type: String, required: true, unique: true },
        description: { type: String },
        image: { type: String },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Category || mongoose.model<ICategory>('Category', CategorySchema);
