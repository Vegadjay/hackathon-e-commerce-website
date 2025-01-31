'use client';

import React from 'react';

const ShoppingPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center text-red-500">Shopping Policy</h1>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2 text-red-500">Shipping Policy</h2>
                <li>Jaipuriadaah offers FREE shipping on every domestic order. For certain inaccessible locations requiring special arrangements within India, the actual shipping charge by the courier company will be charged.</li>
                <li>Your order will be shipped fully insured.</li>
                <li>We urge all customers to inspect the package for any damage before receiving or signing for receipt.</li>
                <li>Orders will be shipped within 7 to 8 working days. Expected delivery time is 3-5 business days.</li>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold text-red-500 mb-2">Address Change Policy</h2>
                <li>The shipping address can be changed before the shipping confirmation mail is sent. Once the confirmation mail is sent, no changes will be entertained.</li>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold text-red-500 mb-2">Delivery Guidelines</h2>
                <li>Do not accept deliveries if the box is tampered with or empty.</li>
                <li>Recipients must open and check the package before signing the delivery receipt.</li>
                <li>If the recipient is unavailable, the courier company will attempt delivery thrice before returning the package. Any re-shipment costs will be charged to the customer.</li>
                <li>International import duties are to be paid by the customer.</li>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold text-red-500 mb-2">Cash on Delivery (COD) Policy</h2>
                <ul className="list-disc ml-5">
                    <li>COD service availability depends on location.</li>
                    <li>Customers with a history of unpaid COD orders may be restricted from using COD.</li>
                    <li>Frequent returns of COD orders may result in disapproval of future COD requests.</li>
                    <li>Suspected fraud or suspicious activity may lead to COD disapproval.</li>
                </ul>
                <p>If COD is disapproved, customers will be informed at the time of ordering and provided alternative payment options.</p>
            </section>
        </div>
    );
};

export default ShoppingPolicy;
