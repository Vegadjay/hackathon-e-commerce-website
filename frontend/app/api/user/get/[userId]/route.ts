import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { Schema, model, Document } from 'mongoose';

// Define Interfaces
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
    },
    { timestamps: true }
);

const User = mongoose.models.User || model<IUser>('User', UserSchema);

async function connectToDB() {
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(process.env.MONGODB_URI as string);
    }
}

export async function GET(req: NextRequest, { params }: { params: { userId: string } }) {
    try {
        await connectToDB();

        const { userId } = params;
        if (!userId) {
            return NextResponse.json({ message: 'User ID is required' }, { status: 400 });
        }

        const user = await User.findById(userId);
        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        console.error('Error fetching user:', error);
        return NextResponse.json({ message: 'Internal Server Error', error }, { status: 500 });
    }
}
