export const metadata = {
  title: 'About Us - ColorTool',
  description: 'Learn about ColorTool, our mission to help designers create perfect color schemes, and our commitment to providing free, accessible color tools.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Us
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              At ColorTool, we believe that great design starts with great colors. Our mission is to empower designers, 
              developers, and creators with powerful, accessible tools that make color selection and palette creation 
              effortless and enjoyable.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              We understand that choosing the right colors can make or break a design project. That's why we've created 
              a comprehensive suite of color tools that help you make informed decisions, ensure accessibility compliance, 
              and create harmonious color schemes that resonate with your audience.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">What We Offer</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>Color Palette Generator:</strong> Create harmonious color palettes based on color theory principles</li>
              <li><strong>Accessibility Contrast Checker:</strong> Ensure your color combinations meet WCAG guidelines for accessibility</li>
              <li><strong>Color Blog:</strong> Stay updated with the latest color trends, design tips, and expert insights</li>
              <li><strong>Free Tools:</strong> All our tools are completely free to use, with no registration required</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Values</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Accessibility First</h3>
                <p>
                  We believe that good design is inclusive design. Our contrast checker helps ensure your color choices 
                  are accessible to everyone, including users with visual impairments.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Free and Open</h3>
                <p>
                  All our tools are free to use. We believe that powerful design tools should be accessible to everyone, 
                  regardless of budget or experience level.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">User-Focused</h3>
                <p>
                  We continuously improve our tools based on user feedback. Your experience matters to us, and we're 
                  committed to making ColorTool the best color tool platform available.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Who We Are</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              ColorTool is built by a team of designers and developers who are passionate about color and design. 
              We understand the challenges of color selection and have created these tools to solve real problems 
              we've faced in our own design work.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Whether you're a professional designer working on a brand identity, a developer ensuring your app 
              meets accessibility standards, or a hobbyist exploring color theory, ColorTool is here to help you 
              create beautiful, accessible color schemes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Get in Touch</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Have questions, suggestions, or feedback? We'd love to hear from you! Visit our{' '}
              <a href="/contact" className="text-purple-600 dark:text-purple-400 hover:underline">Contact Us</a> page 
              to get in touch.
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

