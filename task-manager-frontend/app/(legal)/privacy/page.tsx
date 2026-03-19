export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: March 2026</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">1. What Data We Collect</h2>
          <p className="text-gray-600 leading-relaxed mb-3">When you use our service, we collect the following:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li><span className="font-medium">Name</span> — provided during registration</li>
            <li><span className="font-medium">Email address</span> — provided during registration or via Google/GitHub login</li>
            <li><span className="font-medium">Password</span> — stored securely as a hashed value (we never store plain text passwords)</li>
            <li><span className="font-medium">IP address</span> — recorded when you agree to our Terms of Service</li>
            <li><span className="font-medium">Terms agreement timestamp</span> — date and time you agreed to our terms</li>
            <li><span className="font-medium">Tasks and project data</span> — content you create inside the app</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">2. Why We Collect It</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>To create and manage your account</li>
            <li>To authenticate you securely when you log in</li>
            <li>To provide the task management service</li>
            <li>To maintain a legal record of your agreement to our terms</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">3. Third-Party Services</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            We offer login via the following third-party providers. When you choose to sign in with them,
            they may share basic profile information (name, email) with us:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>
              <span className="font-medium">Google</span> —{" "}
              <a href="https://policies.google.com/privacy" target="_blank" className="text-green-600 hover:text-green-700">
                Google Privacy Policy
              </a>
            </li>
            <li>
              <span className="font-medium">GitHub</span> —{" "}
              <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" className="text-green-600 hover:text-green-700">
                GitHub Privacy Statement
              </a>
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-3">
            We do not share your data with any other third parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">4. How We Store Your Data</h2>
          <p className="text-gray-600 leading-relaxed">
            Your data is stored in a secured database. Passwords are hashed using industry-standard algorithms
            and are never stored in plain text. We take reasonable measures to protect your data from
            unauthorized access.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">5. Cookies</h2>
          <p className="text-gray-600 leading-relaxed">
            We use an HTTP-only authentication cookie to keep you logged in. This cookie cannot be accessed
            by JavaScript and is only used to identify your session securely. We do not use tracking or
            advertising cookies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">6. Your Rights</h2>
          <p className="text-gray-600 leading-relaxed mb-3">You have the right to:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Request a copy of the data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your account and all associated data</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-3">
            To exercise any of these rights, contact us at{" "}
            <a href="mailto:support@yourapp.com" className="text-green-600 hover:text-green-700 font-medium">
              support@yourapp.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-3">7. Changes to This Policy</h2>
          <p className="text-gray-600 leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of significant changes
            by updating the date at the top of this page.
          </p>
        </section>
      </div>
    </div>
  );
}
