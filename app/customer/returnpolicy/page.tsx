'use client';

import Link from 'next/link';

export default function ReturnExchangePolicy() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <h1 className="text-3xl font-bold text-orange-800 text-center mb-8">
                    Return/Exchange Policy
                </h1>

                <p className="text-gray-700 mb-6 text-sm sm:text-base">
                    We are committed to making your shopping experience hassle-free and enjoyable! Please
                    read the following terms and conditions carefully before making a purchase. Your purchase
                    indicates that you have acknowledged, understood, and agreed to the terms.
                </p>

                <section className="space-y-8">
                    <div>
                        <h2 className="text-xl font-semibold text-orange-700 mb-2">
                            General Return Policy
                        </h2>
                        <p className="text-gray-700">
                            Products can be returned within 7 days from the date of delivery. Refunds are only
                            applicable for manufacturing defects or delivery of incorrect sizes. In other cases, a
                            credit note (valid for 90 days) will be issued.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-orange-700 mb-2">Return Process</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>
                                Contact our customer support at{' '}
                                <a
                                    href="tel:+919314966969"
                                    className="text-orange-600 hover:text-orange-700 underline"
                                >
                                    (+91) 8849251028
                                </a>{' '}
                                or email us at{' '}
                                <a
                                    href="mailto:jayvegad10@gmail.com"
                                    className="text-orange-600 hover:text-orange-700 underline"
                                >
                                    jayvegad10@gmail.com
                                </a>{' '}
                                within 7 days of delivery.
                            </li>
                            <li>
                                Provide details like order number, courier tracking ID, and reason for the return.
                            </li>
                            <li>
                                Ship the product to our address, or request a pickup (pickup charge: ₹200).
                            </li>
                            <li>
                                Keep a video of packing and shipping to avoid conflicts during the return process.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-orange-700 mb-2">Refund Policy</h2>
                        <p className="text-gray-700">
                            Refunds will be processed within 7-10 business days for eligible returns. A credit
                            note will be issued for other cases, valid for 90 days.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-orange-700 mb-2">Exchange Policy</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>
                                Exchanges are allowed only for size-related issues within 15 days of delivery.
                            </li>
                            <li>
                                If the desired size is unavailable, a credit note will be provided for future
                                purchases.
                            </li>
                            <li>
                                Exchange requests are allowed once per order.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-orange-700 mb-2">Cancellation Policy</h2>
                        <p className="text-gray-700">
                            Orders can be canceled within 24 hours of placement. Contact us at{' '}
                            <a
                                href="tel:+918849251028"
                                className="text-orange-600 hover:text-orange-700 underline"
                            >
                                (+91) 8849251028
                            </a>{' '}
                            or{' '}
                            <a
                                href="mailto:jayvegad10@gmail.com"
                                className="text-orange-600 hover:text-orange-700 underline"
                            >
                                jayvegad10@gmail.com
                            </a>{' '}
                            to request a cancellation.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-orange-700 mb-2">Shipping Address</h2>
                        <address className="not-italic text-gray-700">
                            Nandani Creation Ltd., Rajwadi Poshak,
                            <br />
                            G/13, Kartarpura Industrial Area,
                            <br />
                            Bais Godam, Jaipur (Raj), India.
                            <br />
                            Pin: 302006
                            <br />
                            Phone: (+91) 8849251028 / 9016482643 / 9106709922
                            <br />
                            Email: <a href="mailto:jayvegad10@gmail.com" className='underline text-red-500'>rajwadiposhak@gmail.com</a>
                        </address>
                    </div>
                </section>

                <div className="mt-10">
                    <h3 className="text-lg font-semibold text-orange-700 mb-4">Quick Links</h3>
                    <ul className="space-y-3">
                        <li>
                            <Link className="text-orange-600 hover:text-orange-800 underline" href="/shipping-policy">
                                Shipping Policy
                            </Link>
                        </li>
                        <li>
                            <Link className="text-orange-600 hover:text-orange-800 underline" href="/track-your-order">
                                Track Your Order
                            </Link>
                        </li>
                        <li>
                            <Link className="text-orange-600 hover:text-orange-800 underline" href="/faq">
                                Frequently Asked Questions
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <footer className="bg-gray-100 py-6 mt-12">
                <div className="text-center text-gray-600 text-sm">
                    &copy; {new Date().getFullYear()} Rajwadi Poshak. All rights reserved. Subject to Jaipur
                    jurisdiction.
                </div>
            </footer>
        </div>
    );
}
