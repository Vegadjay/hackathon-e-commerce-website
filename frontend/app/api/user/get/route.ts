import { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import { Schema, model, Document } from 'mongoose';

interface IAddress {
  street: string;
  city: string;
  state: string;
  zip: string;
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
  verified: Verification;
  role: 'user' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zip: { type: String, required: true },
    },
    token: { type: String },
    otp: { type: Number },
    otpExpiry: { type: Date },
    verified: {
      email: { type: Boolean, default: false },
      phone: { type: Boolean, default: false },
    },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const User = model<IUser>('User', UserSchema);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (mongoose.connections[0].readyState === 0) {
    await mongoose.connect(process.env.MONGODB_URI as string);
  }

  if (req.method === 'GET') {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching users', error });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
