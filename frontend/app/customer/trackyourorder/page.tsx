'use client';

import { useState } from 'react';

export default function TrackYourOrder() {
    const [orderID, setOrderID] = useState('');
    const [email, setEmail] = useState('');
    const [trackingInfo, setTrackingInfo] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleTrackOrder = (e) => {
        e.preventDefault();

        // Simulate tracking info fetch (replace with API call)
        if (orderID === '12345' && email === 'example@example.com') {
            setTrackingInfo({
                orderStatus: 'Shipped',
                trackingNumber: 'JAIP123456789',
                expectedDelivery: '2025-01-25',
                courier: 'Blue Dart',
                trackingURL: 'https://www.bluedart.com/',
            });
            setErrorMessage('');
        } else {
            setErrorMessage('No order found for the provided details.');
            setTrackingInfo(null);
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <h1 className="text-4xl font-bold text-center text-orange-700 mb-10">
                    Track Your Order
                </h1>

                <form onSubmit={handleTrackOrder} className="space-y-8 bg-white shadow-lg rounded-lg p-8">
                    <div className="space-y-4">
                        <div>
                            <label
                                htmlFor="order-id"
                                className="block text-lg font-medium text-gray-700"
                            >
                                Order ID
                            </label>
                            <input
                                type="text"
                                id="order-id"
                                value={orderID}
                                onChange={(e) => setOrderID(e.target.value)}
                                placeholder="Enter your Order ID"
                                className="mt-2 block w-full p-3 rounded-lg border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-lg font-medium text-gray-700"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your Email Address"
                                className="mt-2 block w-full p-3 rounded-lg border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-orange-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-700 transition"
                    >
                        Track Order
                    </button>

                    {errorMessage && (
                        <div className="text-red-600 text-center mt-4">{errorMessage}</div>
                    )}
                </form>

                {trackingInfo && (
                    <div className="mt-10 bg-white shadow-lg rounded-lg p-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                            Tracking Details
                        </h2>
                        <ul className="space-y-4">
                            <li className="text-gray-700">
                                <strong>Order Status:</strong> {trackingInfo.orderStatus}
                            </li>
                            <li className="text-gray-700">
                                <strong>Tracking Number:</strong> {trackingInfo.trackingNumber}
                            </li>
                            <li className="text-gray-700">
                                <strong>Expected Delivery:</strong> {trackingInfo.expectedDelivery}
                            </li>
                            <li className="text-gray-700">
                                <strong>Courier:</strong> {trackingInfo.courier}
                            </li>
                        </ul>
                        <div className="mt-6 text-center">
                            <a
                                href={trackingInfo.trackingURL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-orange-600 hover:text-orange-800 underline"
                            >
                                Track Shipment on {trackingInfo.courier}
                            </a>
                        </div>
                    </div>
                )}
            </div>

            <footer className="bg-gray-100 py-6 mt-16">
                <div className="text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Jaipur Kurti. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
