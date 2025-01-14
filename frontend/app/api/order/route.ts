import { NextResponse } from 'next/server';
import Order from '@/models/Order';
import connectToDatabase from 'lib/dbConnect';
import { z } from 'zod';
import User from '@/models/User';
import nodemailer from 'nodemailer';

const ProductSchema = z.object({
  productId: z.string().nonempty("Product ID is required"),
  name: z.string().nonempty("Product name is required"),
  quantity: z.number().positive("Quantity must be greater than 0"),
  size: z.string().nonempty("Size is required"),
  price: z.string().nonempty("Price is required")
});

const ShippingAddressSchema = z.object({
  street: z.string().nonempty("Street is required"),
  city: z.string().nonempty("City is required"),
  state: z.string().nonempty("State is required"),
  zipCode: z.string().regex(/^\d{5}$/, "Invalid ZIP code"),
  country: z.string().nonempty("Country is required")
});

const ShippingDetailsSchema = z.object({
  carrier: z.string().optional(),
  trackingNumber: z.string().optional(),
  estimatedDeliveryDate: z.string().optional(),
  actualDeliveryDate: z.string().optional()
});

const OrderSchema = z.object({
  userId: z.string().nonempty("User ID is required"),
  products: z.array(ProductSchema).nonempty("Products list cannot be empty"),
  totalPrice: z.number().positive("Total price must be greater than 0"),
  shippingAddress: ShippingAddressSchema,
  status: z.enum(['pending', 'processing', 'shipped', 'delivered', 'cancelled', 'returned']).optional(),
  paymentMethod: z.enum(['credit_card', 'paypal', 'bank_transfer', 'cod', 'upi']),
  paymentStatus: z.enum(['pending', 'completed', 'failed', 'refunded']).optional(),
  orderNotes: z.string().optional(),
  urgent: z.boolean().optional(),
  shippingDetails: ShippingDetailsSchema.optional()
});

export async function POST(req: Request) {
  try {
    await connectToDatabase();

    const body = await req.json();
    const parsedData = OrderSchema.parse(body);

    const user = await User.findById(parsedData.userId);
    if (!user) {
      return NextResponse.json({ success: false, error: 'User not found' }, { status: 404 });
    }

    const calculatedTotalPrice = parsedData.products.reduce((total, product) => {
      return total + (parseFloat(product.price) * product.quantity);
    }, 0);

    if (calculatedTotalPrice !== parsedData.totalPrice) {
      return NextResponse.json({ success: false, error: 'Total price mismatch' }, { status: 400 });
    }

    const newOrder = new Order({
      userId: parsedData.userId,
      products: parsedData.products,
      totalPrice: calculatedTotalPrice,
      shippingAddress: parsedData.shippingAddress,
      status: 'pending',
      paymentMethod: parsedData.paymentMethod,
      paymentStatus: parsedData.paymentStatus || 'pending',
      orderNotes: parsedData.orderNotes || '',
      urgent: parsedData.urgent || false,
      shippingDetails: parsedData.shippingDetails || {}
    });

    const savedOrder = await newOrder.save();
    user.orders.push(savedOrder._id);
    await user.save();

    await sendEmail(savedOrder, user.email);

    return NextResponse.json({ success: true, data: savedOrder }, { status: 200 });

  } catch (error) {
    if (error instanceof z.ZodError) {
      const validationErrors = error.errors.map((err) => ({
        path: err.path.join('.'),
        message: err.message
      }));
      return NextResponse.json({ success: false, error: 'Validation failed', details: validationErrors }, { status: 400 });
    }

    console.error('Error creating order:', error);
    return NextResponse.json({ success: false, error: 'Failed to create order' }, { status: 500 });
  }
}

const sendEmail = async (orderDetails: any, email: string) => {
  console.log("Sending email to ", email);
  console.log("Order details", orderDetails);

  const generateEmailHTML = (orderDetails: any) => {
    const productRows = orderDetails.products
      .map(
        (product: any) => `
      <tr>
        <td style="padding: 12px; text-align: center; border-bottom: 1px solid #e0e0e0;">${product.name}</td>
        <td style="padding: 12px; text-align: center; border-bottom: 1px solid #e0e0e0;">${product.size}</td>
        <td style="padding: 12px; text-align: center; border-bottom: 1px solid #e0e0e0;">${product.quantity}</td>
        <td style="padding: 12px; text-align: center; border-bottom: 1px solid #e0e0e0;">$${product.price}</td>
      </tr>`
      )
      .join("");

    return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          background-color: #f8f9fa;
          margin: 0;
          padding: 0;
        }
        .email-container {
          max-width: 700px;
          margin: 30px auto;
          background-color: #ffffff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .header {
          background-color: #4caf50;
          color: #ffffff;
          padding: 20px;
          text-align: center;
          font-size: 24px;
          font-weight: bold;
        }
        .content {
          padding: 20px;
          color: #333333;
          line-height: 1.6;
        }
        .content p {
          margin: 10px 0;
        }
        .order-details {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
        }
        .order-details th, .order-details td {
          padding: 12px;
          border: 1px solid #e0e0e0;
          text-align: center;
        }
        .order-details th {
          background-color: #f4f4f4;
          font-weight: bold;
        }
        .footer {
          background-color: #f9f9f9;
          text-align: center;
          padding: 15px;
          font-size: 12px;
          color: #666666;
        }
        .btn {
          display: inline-block;
          background-color: #4caf50;
          color: #ffffff;
          text-decoration: none;
          padding: 12px 20px;
          border-radius: 5px;
          margin-top: 20px;
          font-size: 16px;
        }
        .btn:hover {
          background-color: #45a049;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          Order Confirmation
        </div>
        <div class="content">
          <p>Dear Customer,</p>
          <p>Thank you for your order! Your order has been successfully placed. Below are the details:</p>
          <table class="order-details">
            <thead>
              <tr>
                <th>Product</th>
                <th>Size</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              ${productRows}
            </tbody>
          </table>
          <p><strong>Total Price:</strong> $${orderDetails.totalPrice}</p>
          <p><strong>Shipping Address:</strong></p>
          <p>
            ${orderDetails.shippingAddress.street}<br>
            ${orderDetails.shippingAddress.city}, ${orderDetails.shippingAddress.state} ${orderDetails.shippingAddress.zipCode}<br>
            ${orderDetails.shippingAddress.country}
          </p>
          <p><strong>Estimated Delivery Date:</strong> ${new Date(orderDetails.shippingDetails.estimatedDeliveryDate).toDateString()}</p>
          <a href="${process.env.NEXTAUTH_URL}" class="btn">View Order</a>
        </div>
        <div class="footer">
          <p>If you have any questions about your order, please contact us at support@${process.env.NEXTAUTH_URL}.</p>
          <p>Thank you for shopping with us!</p>
        </div>
      </div>
    </body>
    </html>
  `;
  };


  const emailHTML = generateEmailHTML(orderDetails);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: 'Order Confirmation',
    html: emailHTML,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};