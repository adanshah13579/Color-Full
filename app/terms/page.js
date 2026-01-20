export const metadata = {
  title: 'Terms & Conditions - Theme & Color',
  description: 'Read Theme & Color\'s Terms and Conditions to understand the rules and regulations for using our website and services.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Terms & Conditions
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Agreement to Terms</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              By accessing and using Theme & Color ("the Website"), you accept and agree to be bound by the terms and provision 
              of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Use License</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Permission is granted to temporarily access and use Theme & Color for personal, non-commercial transitory viewing only. 
              This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
              <li>Attempt to decompile or reverse engineer any software contained on the Website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              This license shall automatically terminate if you violate any of these restrictions and may be terminated by 
              Theme & Color at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Disclaimer</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The materials on Theme & Color's website are provided on an 'as is' basis. Theme & Color makes no warranties, expressed 
              or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties 
              or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property 
              or other violation of rights.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Further, Theme & Color does not warrant or make any representations concerning the accuracy, likely results, or 
              reliability of the use of the materials on its website or otherwise relating to such materials or on any sites 
              linked to this site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Limitations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In no event shall Theme & Color or its suppliers be liable for any damages (including, without limitation, damages 
              for loss of data or profit, or due to business interruption) arising out of the use or inability to use the 
              materials on Theme & Color's website, even if Theme & Color or a Theme & Color authorized representative has been notified 
              orally or in writing of the possibility of such damage.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for 
              consequential or incidental damages, these limitations may not apply to you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Accuracy of Materials</h2>
            <p className="text-gray-700 dark:text-gray-300">
              The materials appearing on Theme & Color's website could include technical, typographical, or photographic errors. 
              Theme & Color does not warrant that any of the materials on its website are accurate, complete, or current. 
              Theme & Color may make changes to the materials contained on its website at any time without notice. However, 
              Theme & Color does not make any commitment to update the materials.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Links</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Theme & Color has not reviewed all of the sites linked to its website and is not responsible for the contents of 
              any such linked site. The inclusion of any link does not imply endorsement by Theme & Color of the site. Use of 
              any such linked website is at the user's own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Modifications</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Theme & Color may revise these terms of service for its website at any time without notice. By using this website 
              you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">User Content</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You retain ownership of any content you create or generate using our tools. However, by using our services, 
              you grant us a non-exclusive, worldwide, royalty-free license to use, display, and distribute your content 
              solely for the purpose of providing and improving our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Prohibited Uses</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">You may not use our website:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>In any way that violates any applicable national or international law or regulation</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
              <li>To impersonate or attempt to impersonate the company, a company employee, another user, or any other person or entity</li>
              <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful</li>
              <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Intellectual Property</h2>
            <p className="text-gray-700 dark:text-gray-300">
              The Website and its original content, features, and functionality are owned by Theme & Color and are protected by 
              international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Governing Law</h2>
            <p className="text-gray-700 dark:text-gray-300">
              These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit 
              to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Contact Information</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you have any questions about these Terms & Conditions, please contact us:
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


