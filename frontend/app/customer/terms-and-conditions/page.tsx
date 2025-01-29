import Head from "next/head";

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen  text-gray-900 p-6">
            <Head>
                <title>Terms and Conditions - Jaipuriadaah</title>
            </Head>
            <div className="max-w-4xl mx-auto bg-white p-8 border-gray-200">
                <h1 className="text-4xl text-red-600 font-extrabold mb-8 text-center">
                    Terms and Conditions
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                    Please read these terms and conditions ("terms", "terms and conditions") carefully before using Jaipuriadaah.com website (the "service").
                </p>

                <div className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-semibold text-red-500 border-red-500 pb-2">1. Product Display</h2>
                        <p className="text-gray-700">
                            We have made every effort to display the color of our products as accurately as possible. However, due to monitor differences, we cannot guarantee exact color representation.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-red-500 border-red-500 pb-2">2. User Certification</h2>
                        <p className="text-gray-700">
                            The User certifies that they are at least 18 years of age or have the consent of a parent or legal guardian.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-red-500 border-red-500 pb-2">3. Order Cancellation</h2>
                        <p className="text-gray-700">
                            Jaipuriadaah reserves the right to refuse or cancel any order due to incorrect pricing or any other issue. In such cases, payments will be refunded, and the User will be informed.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-red-500 border-red-500 pb-2">4. Privacy Policy</h2>
                        <p className="text-gray-700">
                            Please read our{' '}
                            <a href="/privacy-policy" className="text-blue-500 hover:text-blue-600 underline">
                                Privacy Policy
                            </a>{' '}
                            to understand how we handle user data.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-red-500 border-red-500 pb-2">5. Copyright</h2>
                        <p className="text-gray-700">
                            Content published on this website (digital downloads, images, texts, graphics, logos) is the property of Jaipuriadaah and is protected by international copyright laws.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-red-500 border-red-500 pb-2">6. Communications</h2>
                        <p className="text-gray-700">
                            By using this website, you agree to receive electronic communications from us, including emails and website notices.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-red-500 border-red-500 pb-2">7. Applicable Law</h2>
                        <p className="text-gray-700">
                            By visiting this website, you agree that the laws of India will govern these terms and conditions.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-red-500 border-red-500 pb-2">8. Disputes</h2>
                        <p className="text-gray-700">
                            Any dispute related to this website will be handled by state or federal courts in India.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-red-500 border-red-500 pb-2">9. User Content</h2>
                        <p className="text-gray-700">
                            Visitors may post content as long as it is not obscene, illegal, defamatory, or harmful. We reserve the right to remove such content.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-red-500 border-red-500 pb-2">10. User Account</h2>
                        <p className="text-gray-700">
                            If you create an account, you are responsible for maintaining its confidentiality. We reserve the right to terminate accounts if necessary.
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
