import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import dbConnect from '@/lib/dbConnect';
import { Schema, model, Document, Types } from 'mongoose';

// Define Interfaces
interface IAddress {
    street?: string;
    city?: string;
    state?: string;
    zip?: string;
}

interface Verification {
    email: boolean;
    phone: boolean;
}

interface IUser extends Document {
    username: string;
    email: string;
    password?: string; // Optional for OAuth users
    phone?: string;    // Optional for OAuth users
    address?: IAddress;
    token?: string;
    otp?: number;
    otpExpiry?: Date;
    verified: Verification;
    role: 'user' | 'admin';
    provider?: string; // Add provider field for OAuth
}

const UserSchema = new Schema<IUser>(
    {
        username: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: false }, // Not required for OAuth users
        phone: { type: String, required: false },    // Not required for OAuth users
        address: {
            street: { type: String, required: false },
            city: { type: String, required: false },
            state: { type: String, required: false },
            zip: { type: String, required: false },
        },
        token: { type: String },
        otp: { type: Number },
        otpExpiry: { type: Date },
        verified: {
            email: { type: Boolean, default: false },
            phone: { type: Boolean, default: false },
        },
        role: { type: String, enum: ['user', 'admin'], default: 'user' },
        provider: { type: String }, // Store OAuth provider name
    },
    { timestamps: true }
);

// Add index for better query performance
UserSchema.index({ email: 1 });

const User = mongoose.models.User || model<IUser>('User', UserSchema);

export async function GET(
    req: NextRequest,
    { params }: { params: { userId: string } }
) {
    try {
        await dbConnect();

        const { userId } = params;

        // Validate userId format
        if (!userId || !Types.ObjectId.isValid(userId)) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Invalid user ID format'
                },
                { status: 400 }
            );
        }

        const user = await User.findById(new Types.ObjectId(userId))
            .select('-password -token -otp -otpExpiry'); // Exclude sensitive fields

        if (!user) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'User not found'
                },
                { status: 404 }
            );
        }

        // Return sanitized user object
        return NextResponse.json({
            success: true,
            user: {
                id: user._id.toString(),
                username: user.username,
                email: user.email,
                phone: user.phone,
                address: user.address,
                verified: user.verified,
                role: user.role,
                provider: user.provider,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt
            }
        }, { status: 200 });

    } catch (error) {
        console.error('Error fetching user:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Internal Server Error',
                error: process.env.NODE_ENV === 'development' ? error : undefined
            },
            { status: 500 }
        );
    }
}

export default User;