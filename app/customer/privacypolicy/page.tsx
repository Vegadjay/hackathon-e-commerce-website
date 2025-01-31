'use client';

export default function PrivacyPolicy() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <h1 className="text-4xl font-bold text-center text-orange-700 mb-8">
                    Privacy Policy
                </h1>

                <div className="bg-white shadow-md rounded-lg p-8 space-y-6">
                    <p className="text-gray-700">
                        We respect your privacy and are committed to maintaining it. When you shop on this Website, we will ask you to input and will collect Personal Information from you such as your name, e-mail address, billing address, delivery address, telephone number, product selections, credit card or other payment information, and password.
                    </p>

                    <p className="text-gray-700">
                        We may also collect information about where you are on the internet (e.g., the URL you came from, IP address, domain types like .co.uk and .com), your browser type, the country where your computer is located, the pages of our website that were viewed during your visit, and the advertisements you clicked on. We may collect this information even if you do not register with us. None of this data is of a personal nature and will help us improve the quality of our service.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800">
                        How We Use the Information We Collect
                    </h2>

                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Processing your orders</li>
                        <li>Administering your account</li>
                        <li>Improving the website's performance by analyzing statistical data</li>
                    </ul>

                    <p className="text-gray-700">
                        If you consent, we may notify you of products or special offers that may be of interest to you. You agree that you do not object to us contacting you for any of the above purposes whether, by telephone, e-mail, or in writing and you confirm that you do not and will not consider any of the above as being a breach of any of your rights.
                    </p>

                    <p className="text-gray-700">
                        We will not release your Personal Information to any company outside for mailing or marketing purposes.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800">
                        Security of Your Information
                    </h2>

                    <p className="text-gray-700">
                        We do not hold any of your credit card information. This information is securely collected by our authorized payment processor. With the industry's most advanced encryption, fraud prevention, and protection policies, Secure Trading is dedicated to keeping your account safe and secure.
                    </p>

                    <p className="text-gray-700">
                        Once your information reaches Secure Trading, it resides on a server that is heavily guarded both physically and electronically. Secure Trading servers sit behind an electronic firewall and are not directly connected to the Internet, so your private information is available only to authorized computers.
                    </p>

                    <p className="text-gray-700">
                        Please check back frequently to see any updates or changes to our privacy policy.
                    </p>
                </div>
            </div>

            <footer className="bg-gray-100 py-6 mt-12">
                <div className="text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Jaipur Kurti. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
