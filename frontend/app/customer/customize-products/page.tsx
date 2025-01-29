'use client';

import Link from 'next/link';

export default function CustomOrderPolicy() {
    return (
        <div className="bg-red-50 min-h-screen">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <h1 className="text-3xl font-bold text-red-800 text-center mb-8">
                    Customize / Made To Order Products
                </h1>

                <p className="text-gray-700 mb-6 text-sm sm:text-base">
                    We do customize garments according to the measurements provided to us. It will cost 500 rupees extra. Cash on delivery payment option is not available for customize items.
                </p>

                <section className="space-y-8">
                    <div>
                        <h2 className="text-xl font-semibold text-red-700 mb-2">
                            Payment Policy for Custom Orders
                        </h2>
                        <p className="text-gray-700">
                            25% minimum amount shall be pre-paid for the 3XL size, and complete pre-paid amount for plus sizes, 4XL, 5XL, 6XL to get them processed.
                            No return, Refund, or Exchange is applicable on 3XL and above size or customized (Made To Order) pieces.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-red-700 mb-2">Return / Exchange Policy</h2>
                        <p className="text-gray-700">
                            We don't offer return or exchanges of customized products. Please make sure to double-check the size and measurements before ordering.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-red-700 mb-2">Contact for Custom Orders</h2>
                        <p className="text-gray-700">
                            If you want to customize garments, please send us an e-mail at{' '}
                            <a
                                href="mailto:jaipuriadaah@gmail.com"
                                className="text-red-600 hover:text-red-700 underline"
                            >
                                jaipuriadaah@gmail.com
                            </a>{' '}
                            or contact us on WhatsApp at{' '}
                            <a
                                href="tel:+918078619508"
                                className="text-red-600 hover:text-red-700 underline"
                            >
                                +918078619508
                            </a>{' '}
                            /{' '}
                            <a
                                href="tel:+91701484290"
                                className="text-red-600 hover:text-red-700 underline"
                            >
                                +91701484290
                            </a>{' '}
                            or Instagram{' '}
                            <a
                                href="https://www.instagram.com/jaipuriadaah/"
                                className="text-red-600 hover:text-red-700 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                @jaipuriadaah
                            </a>.
                        </p>
                    </div>
                </section>

                <div className="mt-10">
                    <h3 className="text-lg font-semibold text-red-700 mb-4">Quick Links</h3>
                    <ul className="space-y-3">
                        <li>
                            <Link className="text-red-600 hover:text-red-800 underline" href="/shipping-policy">
                                Shipping Policy
                            </Link>
                        </li>
                        <li>
                            <Link className="text-red-600 hover:text-red-800 underline" href="/track-your-order">
                                Track Your Order
                            </Link>
                        </li>
                        <li>
                            <Link className="text-red-600 hover:text-red-800 underline" href="/faq">
                                Frequently Asked Questions
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <footer className="bg-red-100 py-6 mt-12">
                <div className="text-center text-gray-600 text-sm">
                    &copy; {new Date().getFullYear()} Rajwadi Poshak. All rights reserved. Subject to Jaipur jurisdiction.
                </div>
            </footer>
        </div>
    );
}
