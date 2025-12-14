import Link from 'next/link';
import { notFound } from 'next/navigation';

// Dummy blog post data (in a real app, this would come from a CMS or database)
const blogPosts = {
  1: {
    id: 1,
    title: '10 Color Trends for 2024: What Designers Need to Know',
    description: 'Discover the most popular color palettes and trends shaping design in 2024.',
    content: `
      <p>Color trends are constantly evolving, and 2024 brings exciting new palettes that reflect our changing world. 
      From vibrant neons to calming pastels, this year's color trends offer something for every design project.</p>
      
      <h2>1. Vibrant Neons</h2>
      <p>Neon colors are making a strong comeback in 2024. These eye-catching hues add energy and excitement to any design.</p>
      
      <h2>2. Calming Pastels</h2>
      <p>On the opposite end, soft pastel colors provide a sense of tranquility and peace, perfect for wellness and lifestyle brands.</p>
      
      <h2>3. Earth Tones</h2>
      <p>Sustainable and grounded, earth tones continue to be popular as brands emphasize their environmental values.</p>
      
      <h2>4. Digital Blues</h2>
      <p>Tech-inspired blues and cyans reflect our increasingly digital world and are perfect for technology brands.</p>
      
      <h2>5. Warm Oranges</h2>
      <p>Warm, inviting oranges create a sense of friendliness and approachability in brand designs.</p>
      
      <p>These trends show that 2024 is all about balance - between bold and subtle, digital and natural, energetic and calm.</p>
    `,
    category: 'Trends',
    date: '2024-01-15',
    readTime: '5 min read',
    author: 'ColorTool Team',
  },
  2: {
    id: 2,
    title: 'How to Choose the Perfect Color Scheme for Your Project',
    description: 'A comprehensive guide to selecting colors that work harmoniously together.',
    content: `
      <p>Choosing the right color scheme is one of the most important decisions in any design project. 
      The colors you select can make or break your design's effectiveness.</p>
      
      <h2>Understanding Color Theory</h2>
      <p>Color theory is the foundation of good design. Understanding how colors relate to each other on the color wheel 
      helps you create harmonious combinations.</p>
      
      <h2>Types of Color Schemes</h2>
      <ul>
        <li><strong>Monochromatic:</strong> Variations of a single color</li>
        <li><strong>Analogous:</strong> Colors next to each other on the color wheel</li>
        <li><strong>Complementary:</strong> Colors opposite each other on the color wheel</li>
        <li><strong>Triadic:</strong> Three evenly spaced colors on the color wheel</li>
      </ul>
      
      <h2>Consider Your Brand</h2>
      <p>Your color choices should align with your brand's personality and values. Consider what emotions and associations 
      you want your colors to evoke.</p>
      
      <h2>Test and Iterate</h2>
      <p>Don't be afraid to experiment. Use tools like our Color Customizer to visualize how different color combinations 
      work together before making final decisions.</p>
    `,
    category: 'Tutorial',
    date: '2024-01-10',
    readTime: '8 min read',
    author: 'ColorTool Team',
  },
  3: {
    id: 3,
    title: 'Color Psychology in Design: Understanding User Emotions',
    description: 'Understanding how colors affect emotions and user behavior in design.',
    content: `
      <p>Colors have a profound impact on human psychology and behavior. Understanding color psychology can help you 
      create designs that evoke the right emotions and drive desired actions.</p>
      
      <h2>The Power of Red</h2>
      <p>Red is associated with energy, passion, and urgency. It's often used for call-to-action buttons and important alerts.</p>
      
      <h2>The Calm of Blue</h2>
      <p>Blue conveys trust, stability, and professionalism. It's a popular choice for financial and technology companies.</p>
      
      <h2>The Growth of Green</h2>
      <p>Green represents nature, growth, and harmony. It's perfect for environmental and wellness brands.</p>
      
      <h2>Cultural Considerations</h2>
      <p>Remember that color meanings can vary across cultures. Research your target audience to ensure your color choices 
      resonate appropriately.</p>
    `,
    category: 'Psychology',
    date: '2024-01-05',
    readTime: '6 min read',
    author: 'ColorTool Team',
  },
};

export async function generateMetadata({ params }) {
  const post = blogPosts[params.id];
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  
  return {
    title: `${post.title} - ColorTool Blog`,
    description: post.description,
  };
}

export default function BlogPostPage({ params }) {
  const post = blogPosts[params.id];
  
  if (!post) {
    notFound();
  }
  
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:underline mb-8"
        >
          ← Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-8">
          <div className="mb-4">
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span>•</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <span>By {post.author}</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="h-64 md:h-96 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 rounded-xl mb-8"></div>

        {/* Content */}
        <div 
          className="prose prose-lg dark:prose-invert max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Share Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Share this article</h3>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Twitter
            </button>
            <button className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors">
              Facebook
            </button>
            <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors">
              LinkedIn
            </button>
          </div>
        </div>

        {/* Related Posts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.values(blogPosts)
              .filter((p) => p.id !== post.id)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {relatedPost.description}
                  </p>
                </Link>
              ))}
          </div>
        </section>

        {/* Ad Space Placeholder */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border-2 border-dashed border-gray-300 dark:border-gray-700 text-center mb-8">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Ad Space (728x90)
          </p>
        </div>
      </div>
    </article>
  );
}

