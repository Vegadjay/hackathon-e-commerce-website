import mongoose, { Schema, Document, model, models } from 'mongoose';

interface ICoupon extends Document {
	code: string;
	discountType: 'percentage' | 'fixed';
	discountValue: number;
	minPurchaseAmount?: number;
	maxDiscountAmount?: number;
	usageLimit?: number;
	usedCount: number;
	startDate: Date;
	expiryDate: Date;
	applicableProducts?: mongoose.Schema.Types.ObjectId[];
	applicableCategories?: string[];
	isActive: boolean;
	createdAt: Date;
	updatedAt: Date;
}

const CouponSchema = new Schema<ICoupon>(
	{
		code: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			uppercase: true,
		},
		discountType: {
			type: String,
			enum: ['percentage', 'fixed'],
			required: true,
		},
		discountValue: {
			type: Number,
			required: true,
			min: 0,
		},
		minPurchaseAmount: {
			type: Number,
			default: 0,
		},
		maxDiscountAmount: {
			type: Number,
			default: null,
		},
		usageLimit: {
			type: Number,
			default: null,
		},
		usedCount: {
			type: Number,
			default: 0,
		},
		startDate: {
			type: Date,
			required: true,
			default: Date.now,
		},
		expiryDate: {
			type: Date,
			required: true,
		},
		applicableProducts: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Products',
			},
		],
		applicableCategories: [
			{
				type: String,
			},
		],
		isActive: {
			type: Boolean,
			default: true,
		},
	},
	{ timestamps: true }
);

CouponSchema.index({ code: 1, isActive: 1, expiryDate: -1 });

export default models.Coupons || model<ICoupon>('Coupons', CouponSchema);
