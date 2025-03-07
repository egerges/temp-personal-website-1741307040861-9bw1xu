"use client";

import React from "react";

const PrivacyPolicy: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="py-20 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
        Privacy Policy
      </h1>
      <p className="text-gray-700 text-center mt-4">Effective Date: January 1, {currentYear}</p>
      <p className="text-gray-700 text-center">Last Updated: January 1, {currentYear}</p>

      <div className="mt-8 text-gray-800">
        <p>
          Your privacy is important. This Privacy Policy explains how we collect, use, and protect your personal information when you visit the portfolio website of Elio Gerges (&quot;the Website&quot;). By using the Website, you agree to the terms of this Privacy Policy.
        </p>

        <h2 className="text-xl font-semibold mt-6">1. Information We Collect</h2>
        <p className="mt-2">
          <strong>1.1 Personal Information:</strong> We may collect personal information that you voluntarily provide through the Website, including:
        </p>
        <ul className="list-disc ml-6">
          <li>Name</li>
          <li>Email address</li>
          <li>Messages submitted via the contact form</li>
        </ul>

        <p className="mt-4">
          <strong>1.2 Non-Personal Information:</strong> We may collect non-personal information automatically, such as:
        </p>
        <ul className="list-disc ml-6">
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Device type and operating system</li>
          <li>Pages viewed, visit duration, and click behavior</li>
        </ul>

        <p className="mt-4">
          <strong>1.3 Cookies and Similar Technologies:</strong> The Website uses cookies to enhance functionality and user experience.
        </p>

        <h2 className="text-xl font-semibold mt-6">2. How We Use Your Information</h2>
        <p className="mt-2">Your information is used for:</p>
        <ul className="list-disc ml-6">
          <li>Responding to inquiries submitted through the contact form</li>
          <li>Analyzing Website performance to improve functionality</li>
          <li>Enhancing user experience with personalization</li>
        </ul>
        <p className="mt-2">We do not sell or rent your personal data to third parties.</p>

        <h2 className="text-xl font-semibold mt-6">
          3. Legal Basis for Processing Personal Data (GDPR Compliance)
        </h2>
        <p className="mt-2">Under GDPR, we process your data on the following legal bases:</p>
        <ul className="list-disc ml-6">
          <li><strong>Consent:</strong> Explicit consent for data collection (e.g., submitting a contact form).</li>
          <li><strong>Legitimate Interest:</strong> To improve website performance and understand user behavior.</li>
          <li><strong>Legal Obligations:</strong> To comply with applicable laws and regulations.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">4. How We Share Your Information</h2>
        <p className="mt-2">We only share your information in limited circumstances:</p>
        <ul className="list-disc ml-6">
          <li><strong>Service Providers:</strong> Trusted third-party services for hosting, analytics, or email delivery.</li>
          <li><strong>Legal Compliance:</strong> When required by law or regulatory authorities.</li>
          <li><strong>Business Transfers:</strong> In case of a website transfer or sale.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">5. Your Privacy Rights</h2>
        <h3 className="text-lg font-semibold mt-4">5.1 GDPR Rights (EU Visitors)</h3>
        <p className="mt-2">
          EU residents have the right to access, correct, delete, restrict processing, and more. Contact us at <a href="mailto:legal@eliogerges.com" className="text-blue-500 underline">legal@eliogerges.com</a> to exercise these rights.
        </p>

        <h3 className="text-lg font-semibold mt-4">5.2 CCPA Rights (California Residents)</h3>
        <p className="mt-2">
          California residents have the right to know, delete, and opt-out of data collection. Submit requests at <a href="mailto:legal@eliogerges.com" className="text-blue-500 underline">legal@eliogerges.com</a>.
        </p>

        <h3 className="text-lg font-semibold mt-4">5.3 Dubai and Lebanon</h3>
        <p className="mt-2">
          Visitors may request access, correction, or deletion of personal information by contacting <a href="mailto:legal@eliogerges.com" className="text-blue-500 underline">legal@eliogerges.com</a>.
        </p>

        <h2 className="text-xl font-semibold mt-6">6. Cookies and Tracking Technologies</h2>
        <p className="mt-2">We use cookies to improve your experience. Manage cookies through your browser settings.</p>

        <h2 className="text-xl font-semibold mt-6">7. Data Retention</h2>
        <p className="mt-2">Personal data is retained as long as necessary for outlined purposes or required by law.</p>

        <h2 className="text-xl font-semibold mt-6">8. Data Security</h2>
        <p className="mt-2">We implement measures to protect your data, including encryption and regular updates.</p>

        <h2 className="text-xl font-semibold mt-6">9. Contact Us</h2>
        <p className="mt-2">
          For questions, contact us at:
          <br />
          <strong>Email:</strong> <a href="mailto:legal@eliogerges.com" className="text-blue-500 underline">legal@eliogerges.com</a>
          <br />
          <strong>Address:</strong> California, US
        </p>

        <p className="mt-12 text-center text-gray-600">
          © {currentYear} Elio Gerges. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
