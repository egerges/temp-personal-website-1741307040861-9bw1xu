"use client";

import React from "react";

const TermsAndConditions: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="py-20 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
        Terms and Conditions
      </h1>
      <p className="text-gray-700 text-center mt-4">Effective Date: January 1, {currentYear}</p>
      <p className="text-gray-700 text-center">Last Updated: January 1, {currentYear}</p>

      <div className="mt-8 text-gray-800">
        <p>
          Welcome to the personal portfolio website of Elio Gerges (&quot;the Website&quot;). By accessing or using this Website, you agree to be bound by these Terms and Conditions. If you do not agree, please refrain from using the Website.
        </p>

        <h2 className="text-xl font-semibold mt-6">1. Website Use</h2>
        <h3 className="mt-4 font-semibold">1.1 Purpose</h3>
        <p>This Website is intended to showcase the professional portfolio of Elio Gerges, including information about his projects, skills, and contact details.</p>

        <h3 className="mt-4 font-semibold">1.2 Restrictions</h3>
        <p>By using the Website, you agree not to:</p>
        <ul className="list-disc ml-6">
          <li>Use the Website for any unlawful purpose.</li>
          <li>Attempt to disrupt the functionality of the Website through hacking, phishing, or malware.</li>
          <li>Copy, distribute, or reproduce any content without prior permission.</li>
        </ul>

        <h3 className="mt-4 font-semibold">1.3 Eligibility</h3>
        <p>You must be at least 13 years old to access or use this Website.</p>

        <h2 className="text-xl font-semibold mt-6">2. Intellectual Property</h2>
        <h3 className="mt-4 font-semibold">2.1 Ownership</h3>
        <p>All content on this Website, including but not limited to text, images, graphics, and code, is the intellectual property of Elio Gerges unless otherwise stated.</p>

        <h3 className="mt-4 font-semibold">2.2 Limited License</h3>
        <p>You are granted a limited, non-exclusive, non-transferable license to access and view the Website for personal, non-commercial purposes.</p>

        <h3 className="mt-4 font-semibold">2.3 Prohibited Actions</h3>
        <ul className="list-disc ml-6">
          <li>Use content for commercial purposes without explicit permission.</li>
          <li>Modify, distribute, or republish any materials without prior consent.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">3. Privacy</h2>
        <p>Your privacy is important to us. Please review our <a href="/privacy" className="text-blue-500 underline">Privacy Policy</a> to understand how your information is collected, used, and protected while using this Website.</p>

        <h2 className="text-xl font-semibold mt-6">4. Disclaimer of Warranties</h2>
        <h3 className="mt-4 font-semibold">4.1 &quot;As-Is&quot; Basis</h3>
        <p>This Website is provided on an &quot;as-is&quot; and &quot;as-available&quot; basis. Elio Gerges makes no representations or warranties of any kind regarding the Website or its content.</p>

        <h3 className="mt-4 font-semibold">4.2 No Guarantee</h3>
        <p>While efforts are made to ensure the accuracy and reliability of the content, no guarantees are provided regarding the completeness, accuracy, or suitability of the information.</p>

        <h2 className="text-xl font-semibold mt-6">5. Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, Elio Gerges shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use of or inability to use the Website.</p>

        <h2 className="text-xl font-semibold mt-6">6. Third-Party Links</h2>
        <p>The Website may include links to external websites for informational purposes. These links are provided as a convenience, and Elio Gerges is not responsible for the content or policies of third-party websites. Use these links at your own discretion.</p>

        <h2 className="text-xl font-semibold mt-6">7. User Contributions</h2>
        <h3 className="mt-4 font-semibold">7.1 Submissions</h3>
        <p>If you submit any content (e.g., contact form inquiries), you grant Elio Gerges a non-exclusive, royalty-free, worldwide license to use, reproduce, and display the content for the intended purpose.</p>

        <h3 className="mt-4 font-semibold">7.2 Prohibited Content</h3>
        <p>You may not submit content that is:</p>
        <ul className="list-disc ml-6">
          <li>Unlawful, abusive, defamatory, or obscene.</li>
          <li>Violates intellectual property rights.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">8. Modifications to the Website</h2>
        <p>Elio Gerges reserves the right to modify, suspend, or discontinue any part of the Website at any time without notice.</p>

        <h2 className="text-xl font-semibold mt-6">9. Termination</h2>
        <p>Elio Gerges reserves the right to terminate or suspend access to the Website for users who violate these Terms and Conditions or engage in prohibited conduct.</p>

        <h2 className="text-xl font-semibold mt-6">10. Governing Law</h2>
        <h3 className="mt-4 font-semibold">10.1 Jurisdiction</h3>
        <p>These Terms and Conditions are governed by the laws of California, US. Any disputes shall be resolved in the courts of California.</p>

        <h3 className="mt-4 font-semibold">10.2 International Use</h3>
        <p>If you are accessing the Website from outside the US, you are responsible for compliance with local laws.</p>

        <h2 className="text-xl font-semibold mt-6">11. Indemnification</h2>
        <p>You agree to indemnify and hold harmless Elio Gerges from any claims, damages, or expenses (including legal fees) arising out of your use of the Website or violation of these Terms and Conditions.</p>

        <h2 className="text-xl font-semibold mt-6">12. Changes to Terms and Conditions</h2>
        <p>Elio Gerges may update these Terms and Conditions periodically. Changes will be posted with a new &quot;Effective Date,&quot; and continued use of the Website constitutes acceptance of the updated Terms.</p>

        <h2 className="text-xl font-semibold mt-6">13. Contact Information</h2>
        <p>
          For questions or concerns about these Terms and Conditions, please contact:
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

export default TermsAndConditions;
