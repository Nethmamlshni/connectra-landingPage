"use client";

import { motion } from "framer-motion";

export default function TermsOfService() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50 py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
          Terms of Service
        </h1>
        <p className="text-gray-600 mb-12 text-center">
          Please read these terms carefully before using UniPlatform.
        </p>

        <div className="space-y-8 text-gray-700">
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-teal-600">
              Acceptance of Terms
            </h2>
            <p>
              By accessing or using UniPlatform, you agree to comply with these Terms of Service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-teal-600">
              User Accounts
            </h2>
            <p>
              Users may need to create an account to access certain features. You are responsible for maintaining your account information and password security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-teal-600">
              Prohibited Activities
            </h2>
            <p>
              You may not misuse the platform, post harmful content, or attempt to breach security measures.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-teal-600">
              Limitation of Liability
            </h2>
            <p>
              UniPlatform is not liable for any indirect, incidental, or consequential damages resulting from the use of the platform.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-teal-600">
              Contact
            </h2>
            <p>
              For any terms-related questions, please contact us at 
              <span className="font-medium text-teal-700"> support@uniplatform.com</span>.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
