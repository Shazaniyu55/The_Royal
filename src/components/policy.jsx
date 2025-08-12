import React, { useState } from "react";

const LegalInfo = () => {
  const [activeTab, setActiveTab] = useState("privacy");

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-8">The Royale Cleaners – Legal</h1>

      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("privacy")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            activeTab === "privacy"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Privacy Policy
        </button>
        <button
          onClick={() => setActiveTab("terms")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            activeTab === "terms"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Terms & Conditions
        </button>
      </div>

      <div className="bg-white shadow p-6 rounded-lg space-y-6">
        {activeTab === "privacy" && (
          <div>
            <h2 className="text-xl font-bold mb-2">Privacy Policy</h2>
            <p className="text-sm text-gray-600 mb-4">Effective Date: 8/82025</p>

            <p>
              At <strong>The Royale Cleaners</strong>, we value your privacy and are committed to protecting your personal data.
            </p>

            <h3 className="font-semibold mt-4">1. Information We Collect</h3>
            <ul className="list-disc list-inside ml-4">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Address</li>
              <li>Payment details (via secure third-party platforms)</li>
            </ul>

            <h3 className="font-semibold mt-4">2. How We Use Your Information</h3>
            <p>To process bookings, communicate, and improve services.</p>

            <h3 className="font-semibold mt-4">3. Data Sharing</h3>
            <p>Only shared with secure third-party providers or legal authorities.</p>

            <h3 className="font-semibold mt-4">4. Data Security</h3>
            <p>We apply encryption and strict access control.</p>

            <h3 className="font-semibold mt-4">5. Your Rights</h3>
            <p>Request, correct, or delete your data at any time.</p>

            <h3 className="font-semibold mt-4">6. Cookies</h3>
            <p>Our site may use cookies to improve user experience.</p>

            <h3 className="font-semibold mt-4">7. Contact Us</h3>
            <p>Email: info@royalecleaners.co.uk | Phone: +44-7349-791131</p>
          </div>
        )}

        {activeTab === "terms" && (
          <div>
            <h2 className="text-xl font-bold mb-2">Terms & Conditions</h2>
            <p className="text-sm text-gray-600 mb-4">Effective Date: 8/8/2025</p>

            <h3 className="font-semibold mt-4">1. Service Scope</h3>
            <p>We provide professional residential and commercial cleaning services.</p>

            <h3 className="font-semibold mt-4">2. Bookings and Cancellations</h3>
            <p>Bookings must be made in advance. 24-hour cancellation policy applies.</p>

            <h3 className="font-semibold mt-4">3. Payments</h3>
            <p>Payment is due before or upon service. We accept card, bank transfer, or cash.</p>

            <h3 className="font-semibold mt-4">4. Customer Responsibilities</h3>
            <p>Ensure access, secure pets, and inform us of any special instructions.</p>

            <h3 className="font-semibold mt-4">5. Liability</h3>
            <p>Not liable for pre-existing damage or incidents caused by undisclosed risks.</p>

            <h3 className="font-semibold mt-4">6. Satisfaction Guarantee</h3>
            <p>Contact us within 24 hours if unsatisfied. We offer a free re-clean or refund.</p>

            <h3 className="font-semibold mt-4">7. Intellectual Property</h3>
            <p>Website content belongs to The Royale Cleaners and may not be reused without permission.</p>

            <h3 className="font-semibold mt-4">8. Changes to Terms</h3>
            <p>We may update these terms at any time. Continued use means acceptance.</p>

            <h3 className="font-semibold mt-4">9. Governing Law</h3>
            <p>These terms follow the laws of United Kingdom.</p>

            <h3 className="font-semibold mt-4">10. Contact</h3>
            <p>Email: info@royalecleaners.co.uk | Phone: +44-7349-791131</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LegalInfo;
