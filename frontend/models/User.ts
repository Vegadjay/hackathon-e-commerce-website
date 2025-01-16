import mongoose, { Schema, Document } from 'mongoose';

interface IAddress {
	street: string;
	city: string;
	state: string;
	zipCode: string;
	country: string;
}

interface Verification {
	email: boolean;
	phone: boolean;
}

interface IUser extends Document {
	username: string;
	email: string;
	password: string;
	phone: string;
	address: IAddress;
	token: string;
	otp: number;
	otpExpiry: Date;
	cart: string | null;
	orders: string[];
	verified: Verification;
	role: 'user' | 'admin';
	createdAt: Date;
	updatedAt: Date;
}

const AddressSchema: Schema = new Schema({
	street: { type: String, required: true },
	city: { type: String, required: true },
	state: { type: String, required: true },
	zipCode: { type: String, required: true },
	country: { type: String, required: true }
});

const UserSchema: Schema = new Schema({
	username: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	phone: { type: String, required: true, unique: true },
	address: { type: AddressSchema, required: false },
	token: { type: String, required: true },
	otp: { type: Number, required: false },
	otpExpiry: { type: Date, required: false },
	cart : { type: Schema.Types.ObjectId, ref: 'Carts', required: false, default: null },
	orders: [{ type: String, ref: 'Orders' }],
	verified: {
		email: { type: Boolean, default: false },
		phone: { type: Boolean, default: false }
	},
	role: { type: String, enum: ['user', 'admin'], default: 'user' },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.Users || mongoose.model<IUser>('Users', UserSchema);