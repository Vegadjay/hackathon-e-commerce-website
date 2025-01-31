import Head from "next/head";

export default function CancellationPolicy() {
    return (
        <div className="min-h-screen  text-gray-900 p-6">
            <Head>
                <title>Cancellation Policy - Jaipuriadaah</title>
            </Head>
            <div className="max-w-4xl mx-auto bg-white p-8">
                <h1 className="text-4xl text-red-600 font-extrabold mb-8 text-center">
                    Cancellation Policy
                </h1>
                <p className="text-lg text-gray-700 mb-6">
                    We understand that sometimes plans change. Here is our cancellation policy for a smooth experience.
                </p>
                <div className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-semibold text-red-500 border-red-500 pb-2">1. Cancellation Period</h2>
                        <p className="text-gray-700">
                            Cancellation can be done within 24 hours of the order placed.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-red-500 border-red-500 pb-2">2. Refund Charges</h2>
                        <p className="text-gray-700">
                            Please note that if a paid order is refunded after cancellation, a 2% payment gateway charge will be deducted from the total paid amount.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-red-500 border-red-500 pb-2">3. Our Commitment</h2>
                        <p className="text-gray-700">
                            We are committed to making your shopping experience as fuss-free and enjoyable as much as possible!
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-red-500 border-red-500 pb-2">4. Contact Customer Service</h2>
                        <p className="text-gray-700">
                            If you need assistance with cancellation, please contact our customer service team:
                        </p>
                        <ul className="list-inside list-disc text-gray-700">
                            <li>Email: <span className="text-blue-500">contact@jaipuriadaah.com</span></li>
                            <li>Phone: <span className="text-blue-500">+91 8000715538</span> (Mon-Sat, 10am - 6pm)</li>
                        </ul>
                        <p className="text-gray-700">
                            Our helpful and experienced team will help you deal with cancellation.
                        </p>
                    </div>
                </div>

                <footer className="mt-12 text-center text-gray-600 text-sm">
                    <p>&copy; {new Date().getFullYear()} Jaipuriadaah. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}
