import mongoose from 'mongoose';

const dbConnect = async () => {
	try {
		if (!process.env.MONGODB_URL) {
			throw new Error('Please define the MONGODB_URI environment variable inside .env');
		}

		const uri = process.env.MONGODB_URL;

		await mongoose.connect(uri);

		console.log('Connected to MongoDB');
	} catch (error) {
		console.error('Error connecting to MongoDB:', error);
		process.exit(1);
	}
};

export default dbConnect;