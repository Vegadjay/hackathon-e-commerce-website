# <p align="center">Welcome to Rajwadi Poshak! 👗</p>

Rajwadi Poshak is an online fashion store specializing in ethnic and traditional wear. The platform provides users with a seamless shopping experience, offering a variety of premium-quality outfits, including kurta sets, silk suits, and handcrafted clothing.

## ✨ Features
- 🛍️ User authentication (Signup/Login)
- 👗 Product listing with categories & filters
- 🛒 Shopping cart & wishlist
- 📱 AI based product recommendation & search
- 💳 Secure checkout & payment integration
- 📦 Order tracking & management
- 🏢 Admin dashboard for product, order and many more management
- 📱 Mobile-responsive design

## 🛠 Technology Stack

### Frontend:
<img src="https://skillicons.dev/icons?i=nextjs,ts,tailwind"/>

### Backend:
- Nextjs provide its own backend services and support SSR
- JWT authentication for security and many more
<img src="https://skillicons.dev/icons?i=nextjs,mongodb"/>

### AI's Backend:
<img src="https://skillicons.dev/icons?i=python,flask"/>

### Additional Tools:
<img src="https://skillicons.dev/icons?i=vercel"/>

## 🚀 Installation & Setup

### Prerequisites
- Node.js installed
- MongoDB setup (local or cloud)

### Steps to Run the Project Locally
```bash
# Clone the repository
git clone https://github.com/yourusername/rajwadi-poshak.git
cd rajwadi-poshak

# Install dependencies
npm install

# Create a .env file and configure required environment variables

# Run the development server
npm run dev
```
The application will be available at `http://localhost:3000/`.

## 📡 API Endpoints
### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Products
- `GET /api/products` - Fetch all products
- `GET /api/products/:id` - Get a specific product
- `POST /api/products` - Add a new product (Admin only)
- `PUT /api/products/:id` - Update product (Admin only)
- `DELETE /api/products/:id` - Remove a product (Admin only)

### Orders
- `POST /api/orders` - Create a new order
- `GET /api/orders/:userId` - Get user orders
- `GET /api/orders` - Get all orders (Admin only)

## 🌍 Deployment
- Frontend: Deployed on [Vercel](https://rajwadiposhak.vercel.app/)
- Backend: Hosted on a cloud-based service

## 📜 License
This project is licensed under the MIT License.

## 📞 Contact
For any inquiries or support, reach out to:
- **Email**: hemang9705@gmail.com or jayvegad@gmail.com
- **Phone**: +91 9016482643 or +91 8849251028

Let's bring elegance and tradition together! 👗✨
