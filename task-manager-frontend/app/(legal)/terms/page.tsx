export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: March 2026</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">1. Acceptance of Terms</h2>
          <p className="text-gray-600 leading-relaxed">
            By accessing or using our task management service, you agree to be bound by these Terms of Service.
            If you do not agree to these terms, please do not use our service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">2. Description of Service</h2>
          <p className="text-gray-600 leading-relaxed">
            We provide a task management platform that allows users to create, organize, and track tasks and projects.
            The service is available to anyone who registers an account.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">3. User Accounts</h2>
          <p className="text-gray-600 leading-relaxed">
            You are responsible for maintaining the confidentiality of your account credentials.
            You agree to provide accurate and complete information when registering.
            You are responsible for all activity that occurs under your account.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">4. Acceptable Use</h2>
          <p className="text-gray-600 leading-relaxed mb-3">You agree not to:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Use the service for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to other accounts</li>
            <li>Upload malicious content or spam</li>
            <li>Impersonate any person or entity</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">5. Termination</h2>
          <p className="text-gray-600 leading-relaxed">
            We reserve the right to suspend or terminate your account at any time if you violate these terms.
            You may also delete your account at any time by contacting us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">6. Disclaimer of Liability</h2>
          <p className="text-gray-600 leading-relaxed">
            The service is provided &quot;as is&quot; without warranties of any kind. We are not liable for any loss of data,
            interruption of service, or damages arising from your use of the platform.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">7. Changes to Terms</h2>
          <p className="text-gray-600 leading-relaxed">
            We may update these terms from time to time. Continued use of the service after changes
            constitutes acceptance of the new terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-3">8. Contact</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have any questions about these Terms, please contact us at{" "}
            <a href="mailto:support@yourapp.com" className="text-green-600 hover:text-green-700 font-medium">
              support@yourapp.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
