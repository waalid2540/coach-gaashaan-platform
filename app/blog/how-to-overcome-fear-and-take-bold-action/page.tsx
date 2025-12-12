"use client";

import Link from "next/link";
import Image from "next/image";

export default function ArticlePage() {
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
            <Link href="/blog" className="nav-link">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-dark-900 to-dark-950">
        <div className="container-narrow">
          <div className="text-center">
            <div className="badge-primary mb-6">Mindset</div>
            <h1 className="heading-display text-white mb-6">
              How to Overcome Fear and <span className="text-gradient">Take Bold Action</span>
            </h1>
            <div className="flex items-center justify-center gap-4 text-gray-400 mb-8">
              <span>December 8, 2024</span>
              <span>•</span>
              <span>7 min read</span>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary-500">
                <Image
                  src="/images/gaashaan-1.jpg"
                  alt="Coach Gaashaan"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">Coach Gaashaan</p>
                <p className="text-sm text-gray-500">Founder, Victorious Living</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="section section-dark">
        <div className="container-narrow">
          <div className="prose prose-lg prose-invert max-w-none">
            {/* Introduction */}
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Fear is the invisible chain that keeps most people locked in mediocrity. It whispers
              lies about your capabilities, magnifies risks beyond reason, and convinces you that
              staying comfortable is safer than chasing your dreams. But here&apos;s the truth that
              will set you free: <strong className="text-white">fear is not your enemy — it&apos;s your compass.</strong>
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              Every successful person I&apos;ve coached has felt fear. The difference is they learned
              to use it as fuel rather than letting it become a cage. Today, I&apos;m going to show
              you exactly how to do the same.
            </p>

            <div className="divider mb-12" />

            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Understanding the Nature of Fear
              </h2>

              <p className="text-gray-300 leading-relaxed mb-4">
                Before you can conquer fear, you must understand it. Fear is an ancient survival
                mechanism designed to protect you from physical danger. The problem? Your brain
                can&apos;t distinguish between a saber-toothed tiger and a difficult conversation with
                your boss.
              </p>

              <p className="text-gray-400 leading-relaxed mb-4">
                This means your nervous system treats emotional risks — rejection, failure,
                embarrassment — the same way it treats physical threats. Your heart races,
                palms sweat, and every instinct screams at you to retreat to safety.
              </p>

              <blockquote className="border-l-4 border-gold-500 pl-6 py-4 bg-dark-800/50 mb-6">
                <p className="text-xl text-white italic mb-2">
                  &quot;Fear is not a signal to stop. It&apos;s a signal that you&apos;re about to grow.&quot;
                </p>
                <cite className="text-gold-500">— Coach Gaashaan</cite>
              </blockquote>

              <p className="text-gray-300 leading-relaxed mb-4">
                The key insight is this: <strong className="text-white">fear points toward growth.</strong> Whatever
                you&apos;re most afraid of is usually exactly what you need to do. Fear marks the
                boundary of your comfort zone — and everything you want is on the other side.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                The 5-Step Fear-Breaking Framework
              </h2>

              <p className="text-gray-300 leading-relaxed mb-6">
                I&apos;ve developed this framework over 27 years of coaching. It works because it
                addresses fear at its root — in your mind — before it can sabotage your actions.
              </p>

              {/* Step 1 */}
              <div className="mb-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-500 flex items-center justify-center text-white text-xl font-bold rounded-full">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Name Your Fear</h3>
                    <p className="text-gold-500">Specificity dissolves anxiety</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Vague fear is paralyzing. &quot;I&apos;m scared&quot; gives you nothing to work with. But
                  &quot;I&apos;m afraid that if I launch this business, I&apos;ll fail publicly and people will
                  think I&apos;m a fool&quot; — now that&apos;s something you can address.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Write down exactly what you&apos;re afraid of. Be brutally specific. When you name
                  the monster, it shrinks.
                </p>
              </div>

              {/* Step 2 */}
              <div className="mb-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-500 flex items-center justify-center text-white text-xl font-bold rounded-full">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Question Your Fear</h3>
                    <p className="text-gold-500">Challenge the assumptions</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Most fears are based on assumptions that have never been tested. Ask yourself:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-6 h-6 text-gold-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Is this fear based on fact or fiction?</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-6 h-6 text-gold-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>What&apos;s the worst that could realistically happen?</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-6 h-6 text-gold-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Could I recover from that worst case?</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-6 h-6 text-gold-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>What&apos;s the cost of doing nothing?</span>
                  </li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="mb-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-500 flex items-center justify-center text-white text-xl font-bold rounded-full">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Reframe Your Fear</h3>
                    <p className="text-gold-500">Transform threat into opportunity</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Your brain interprets the same physical sensations — racing heart, sweaty palms,
                  heightened awareness — as either fear or excitement. The only difference is the
                  story you tell yourself.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Instead of saying &quot;I&apos;m terrified,&quot; say &quot;I&apos;m excited.&quot; Instead of &quot;What if
                  I fail?&quot; ask &quot;What if I succeed beyond my wildest dreams?&quot;
                </p>
              </div>

              {/* Step 4 */}
              <div className="mb-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-500 flex items-center justify-center text-white text-xl font-bold rounded-full">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Take Micro-Actions</h3>
                    <p className="text-gold-500">Build momentum through small wins</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  You don&apos;t have to conquer your biggest fear today. Start with something small
                  that moves you in the right direction. Each small victory builds confidence for
                  the next challenge.
                </p>
                <div className="card-premium p-6">
                  <p className="text-gold-500 font-semibold mb-2">Example:</p>
                  <p className="text-gray-300">
                    If you fear public speaking, don&apos;t start with a TED talk. Start by sharing
                    an idea in a meeting. Then volunteer for a small presentation. Build your
                    way up gradually.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="mb-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-500 flex items-center justify-center text-white text-xl font-bold rounded-full">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Act Before You&apos;re Ready</h3>
                    <p className="text-gold-500">Courage comes from action, not waiting</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Here&apos;s the secret nobody tells you: <strong className="text-white">you will never feel
                  ready.</strong> Courage isn&apos;t the absence of fear — it&apos;s taking action despite it.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  The people you admire aren&apos;t fearless. They simply refuse to let fear make
                  their decisions. They feel the fear and do it anyway.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                The Cost of Playing It Safe
              </h2>

              <p className="text-gray-300 leading-relaxed mb-4">
                Most people focus on the risk of taking action. But what about the risk of
                inaction? What about the cost of staying where you are?
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="card-enterprise">
                  <h4 className="text-lg font-semibold text-primary-400 mb-3">The Price of Fear</h4>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>• Dreams that never become reality</li>
                    <li>• Potential that remains untapped</li>
                    <li>• Relationships never formed</li>
                    <li>• Experiences never lived</li>
                    <li>• A life of &quot;what ifs&quot; and regret</li>
                  </ul>
                </div>
                <div className="card-premium">
                  <h4 className="text-lg font-semibold text-gold-500 mb-3">The Reward of Courage</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Growth beyond imagination</li>
                    <li>• Confidence that compounds</li>
                    <li>• Opportunities that multiply</li>
                    <li>• A life of purpose and meaning</li>
                    <li>• Stories worth telling</li>
                  </ul>
                </div>
              </div>

              <blockquote className="border-l-4 border-gold-500 pl-6 py-4 bg-dark-800/50 mb-6">
                <p className="text-xl text-white italic mb-2">
                  &quot;In the end, we only regret the chances we didn&apos;t take. The fear you don&apos;t
                  face becomes your limit.&quot;
                </p>
                <cite className="text-gold-500">— Coach Gaashaan</cite>
              </blockquote>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Your Bold Action Challenge
              </h2>

              <p className="text-gray-300 leading-relaxed mb-4">
                Knowledge without action is useless. So here&apos;s your challenge:
              </p>

              <div className="card-premium p-8 mb-6">
                <h4 className="text-xl font-bold text-white mb-4">This Week&apos;s Challenge</h4>
                <ol className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-gold-500 text-black rounded-full flex items-center justify-center font-bold">1</span>
                    <span>Identify ONE thing you&apos;ve been avoiding because of fear</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-gold-500 text-black rounded-full flex items-center justify-center font-bold">2</span>
                    <span>Apply the 5-Step Framework to that specific fear</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-gold-500 text-black rounded-full flex items-center justify-center font-bold">3</span>
                    <span>Take ONE bold action toward it within 48 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-gold-500 text-black rounded-full flex items-center justify-center font-bold">4</span>
                    <span>Notice how you feel AFTER taking action (hint: you&apos;ll feel alive)</span>
                  </li>
                </ol>
              </div>

              <p className="text-xl text-white font-semibold mb-8">
                Remember: The version of you that achieves your biggest dreams is on the other
                side of your biggest fears. The only way to meet that person is to walk through
                the fear.
              </p>
            </div>

            <div className="divider mb-12" />

            {/* Conclusion */}
            <div className="mb-12">
              <div className="card-premium p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Fear Is Your Compass</h3>
                <p className="text-gray-300 mb-6">
                  The things that scare you most are often the things that will transform you most.
                  Don&apos;t run from fear — run toward it. On the other side is everything you&apos;ve
                  ever wanted.
                </p>
                <p className="text-gold-500 font-semibold text-lg">
                  — Coach Gaashaan
                </p>
              </div>
            </div>

            {/* Share Section */}
            <div className="border-t border-dark-700 pt-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-gray-400">Found this helpful? Share it with someone who needs courage.</p>
                <div className="flex gap-3">
                  <button className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-500 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-500 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-500 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="section section-darker">
        <div className="container-enterprise">
          <h2 className="heading-lg text-white mb-8 text-center">Continue Reading</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link href="/blog/5-daily-habits-that-will-transform-your-life" className="card-enterprise group hover:border-primary-500/50">
              <div className="badge-primary mb-4">Habits</div>
              <h3 className="heading-md text-white mb-2 group-hover:text-primary-400 transition-colors">
                5 Daily Habits That Will Transform Your Life
              </h3>
              <p className="text-body">Discover the simple yet powerful habits that successful people practice every single day.</p>
            </Link>
            <Link href="/blog/the-power-of-morning-routines" className="card-enterprise group hover:border-primary-500/50">
              <div className="badge-primary mb-4">Productivity</div>
              <h3 className="heading-md text-white mb-2 group-hover:text-primary-400 transition-colors">
                The Power of Morning Routines
              </h3>
              <p className="text-body">How you start your morning determines how you live your day.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-500">
        <div className="container-enterprise text-center">
          <h2 className="heading-lg text-white mb-4">Ready to Conquer Your Fears?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join 350,000+ people who receive daily mentoring from Coach Gaashaan.
          </p>
          <Link href="/#mentoring" className="btn-gold">
            Get Free Daily Mentoring
          </Link>
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
