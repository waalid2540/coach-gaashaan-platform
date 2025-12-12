"use client";

import Link from "next/link";

export default function BlogPage() {
  const posts = [
    {
      slug: "5-daily-habits-that-will-transform-your-life",
      title: "5 Daily Habits That Will Transform Your Life",
      excerpt: "Discover the simple yet powerful habits that successful people practice every single day to stay focused and driven.",
      category: "Habits",
      date: "Dec 10, 2024",
      readTime: "5 min read",
      featured: true,
    },
    {
      slug: "how-to-overcome-fear-and-take-bold-action",
      title: "How to Overcome Fear and Take Bold Action",
      excerpt: "Fear is not your enemy — it's a compass pointing toward growth. Learn how to use fear as fuel for success.",
      category: "Mindset",
      date: "Dec 8, 2024",
      readTime: "7 min read",
      featured: false,
    },
    {
      slug: "the-power-of-morning-routines",
      title: "The Power of Morning Routines",
      excerpt: "How you start your morning determines how you live your day. Create a morning routine that sets you up for victory.",
      category: "Productivity",
      date: "Dec 5, 2024",
      readTime: "6 min read",
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-950/95 backdrop-blur-sm border-b border-dark-800">
        <div className="container-enterprise">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-12 w-12 bg-primary-500 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">G</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-white font-bold text-xl tracking-wide">
                  COACH GAASHAAN
                </span>
              </div>
            </Link>
            <Link href="/" className="nav-link">
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-dark-900 to-dark-950">
        <div className="container-enterprise">
          <div className="text-center max-w-3xl mx-auto">
            <div className="badge-primary mb-6">The Victory Blog</div>
            <h1 className="heading-display text-white mb-6">
              Insights for <span className="text-gradient">Victorious Living</span>
            </h1>
            <p className="text-body-lg">
              Articles, strategies, and wisdom to help you live a life of victory and purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section section-dark">
        <div className="container-enterprise">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Link
                key={index}
                href={`/blog/${post.slug}`}
                className="card-enterprise group cursor-pointer hover:border-primary-500/50"
              >
                {/* Image placeholder */}
                <div className="aspect-video bg-gradient-to-br from-dark-700 to-dark-600 mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                  </div>
                  {post.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="badge-gold">Featured</span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <span className="badge-primary">{post.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="heading-md text-white mb-3 group-hover:text-primary-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-body mb-4">{post.excerpt}</p>
                  <span className="text-primary-500 font-medium text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read Article
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-950 border-t border-dark-800 py-8">
        <div className="container-enterprise text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Coach Gaashaan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
