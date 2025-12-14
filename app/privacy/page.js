export const metadata = {
  title: 'Privacy Policy - ColorTool',
  description: 'Read ColorTool\'s Privacy Policy to understand how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Introduction</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              At ColorTool ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal data. 
              This privacy policy explains how we collect, use, and safeguard your information when you visit our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Information We Collect</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Information You Provide</h3>
                <p className="mb-2">We may collect information that you voluntarily provide to us, including:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Contact information (name, email address) when you use our contact form</li>
                  <li>Feedback and messages you send to us</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Automatically Collected Information</h3>
                <p className="mb-2">When you visit our website, we may automatically collect certain information, including:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>IP address and browser type</li>
                  <li>Device information and operating system</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">How We Use Your Information</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you updates about our services (with your consent)</li>
              <li>Analyze website usage and trends to improve user experience</li>
              <li>Detect and prevent fraud or abuse</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small 
              text files stored on your device that help us remember your preferences and improve site functionality.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We use cookies for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Remembering your theme preference (light/dark mode)</li>
              <li>Storing recently used colors in our tools</li>
              <li>Analyzing website traffic and usage patterns</li>
              <li>Displaying relevant advertisements (via third-party ad networks like Google AdSense)</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              You can control cookies through your browser settings. However, disabling cookies may affect the functionality 
              of our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Third-Party Services</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We may use third-party services that collect, monitor, and analyze information, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li><strong>Google AdSense:</strong> We display advertisements through Google AdSense, which may use cookies 
              to serve personalized ads based on your browsing history</li>
              <li><strong>Analytics Services:</strong> We may use analytics services to understand how visitors use our website</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              These third-party services have their own privacy policies. We encourage you to review their policies to understand 
              how they collect and use your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Data Security</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the 
              Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Your Rights</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Disable cookies through your browser settings</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Children's Privacy</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Our website is not intended for children under the age of 13. We do not knowingly collect personal information 
              from children under 13. If you believe we have collected information from a child under 13, please contact us 
              immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy 
              periodically for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Contact Us</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Email: contact@colortool.com<br />
              Visit our <a href="/contact" className="text-purple-600 dark:text-purple-400 hover:underline">Contact Us</a> page
            </p>
          </section>
        </article>

        {/* Ad Space Placeholder */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg p-8 border-2 border-dashed border-gray-300 dark:border-gray-700 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Ad Space (728x90)
          </p>
        </div>
      </div>
    </div>
  );
}

