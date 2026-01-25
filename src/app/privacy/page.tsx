"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50 py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-12 text-center">
          Your privacy is important to us. Learn how UniPlatform collects, uses, and protects your information.
        </p>

        <div className="space-y-8 text-gray-700">
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-teal-600">
              Information We Collect
            </h2>
            <p>
              We collect personal information such as name, email, and usage data to provide a better experience on our platform.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-teal-600">
              How We Use Your Information
            </h2>
            <p>
              Your information helps us improve our services, communicate with you, and ensure security across the platform.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-teal-600">
              Data Security
            </h2>
            <p>
              We use industry-standard security measures to protect your data. However, no online system is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-teal-600">
              Sharing of Information
            </h2>
            <p>
              We do not sell your personal information to third parties. We may share data only with service providers to operate the platform.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-teal-600">
              Contact Us
            </h2>
            <p>
              For any privacy-related questions, please contact us at 
              <span className="font-medium text-teal-700"> support@uniplatform.com</span>.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
