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
            <div className="badge-primary mb-6">Habits</div>
            <h1 className="heading-display text-white mb-6">
              5 Daily Habits That Will <span className="text-gradient">Transform Your Life</span>
            </h1>
            <div className="flex items-center justify-center gap-4 text-gray-400 mb-8">
              <span>December 10, 2024</span>
              <span>•</span>
              <span>5 min read</span>
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
              Success isn&apos;t built in a day — it&apos;s built daily. The habits you practice every single day
              determine the trajectory of your life. After 27 years of coaching thousands of individuals
              to achieve extraordinary results, I&apos;ve identified five daily habits that consistently
              separate those who thrive from those who merely survive.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              These aren&apos;t complicated rituals or time-consuming practices. They&apos;re simple,
              actionable habits that anyone can implement starting today. The key is consistency —
              doing these five things every single day, no matter what.
            </p>

            <div className="divider mb-12" />

            {/* Habit 1 */}
            <div className="mb-12">
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-500 flex items-center justify-center text-white text-2xl font-bold">
                  1
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Start Your Day with Intention
                  </h2>
                  <p className="text-gold-500 font-medium">The Morning Mindset Reset</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4">
                The first 30 minutes of your day set the tone for everything that follows. Most people
                wake up and immediately reach for their phones, flooding their minds with other people&apos;s
                agendas, news, and distractions. This is a critical mistake.
              </p>

              <p className="text-gray-400 leading-relaxed mb-4">
                Instead, start each day by asking yourself three powerful questions:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-gray-300">
                  <svg className="w-6 h-6 text-gold-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong className="text-white">What am I grateful for today?</strong> — Gratitude shifts your mindset from scarcity to abundance.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <svg className="w-6 h-6 text-gold-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong className="text-white">What is my ONE priority today?</strong> — Focus creates momentum.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <svg className="w-6 h-6 text-gold-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong className="text-white">Who do I need to become today?</strong> — Identity drives behavior.</span>
                </li>
              </ul>

              <div className="card-premium p-6">
                <p className="text-gold-500 font-semibold mb-2">Pro Tip:</p>
                <p className="text-gray-300">
                  Keep a journal by your bed. Before you even get up, write down your answers to these
                  three questions. This simple practice takes less than 5 minutes but can transform your
                  entire day.
                </p>
              </div>
            </div>

            {/* Habit 2 */}
            <div className="mb-12">
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-500 flex items-center justify-center text-white text-2xl font-bold">
                  2
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Move Your Body
                  </h2>
                  <p className="text-gold-500 font-medium">Physical Energy Creates Mental Clarity</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4">
                Your body and mind are not separate — they&apos;re one integrated system. When your body is
                stagnant, your mind becomes foggy. When your body is energized, your mind becomes sharp.
              </p>

              <p className="text-gray-400 leading-relaxed mb-4">
                You don&apos;t need to spend two hours at the gym. Even 20-30 minutes of intentional movement
                can dramatically shift your energy, mood, and mental clarity. The key is consistency, not intensity.
              </p>

              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">Here&apos;s what works:</strong>
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-gray-300">
                  <svg className="w-6 h-6 text-gold-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>A brisk morning walk to clear your mind</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <svg className="w-6 h-6 text-gold-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Strength training to build resilience</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <svg className="w-6 h-6 text-gold-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Yoga or stretching for flexibility and calm</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <svg className="w-6 h-6 text-gold-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Dancing, swimming, or any movement you enjoy</span>
                </li>
              </ul>

              <blockquote className="border-l-4 border-gold-500 pl-6 py-4 bg-dark-800/50 mb-6">
                <p className="text-xl text-white italic mb-2">
                  &quot;Take care of your body. It&apos;s the only place you have to live.&quot;
                </p>
                <cite className="text-gold-500">— Coach Gaashaan</cite>
              </blockquote>
            </div>

            {/* Habit 3 */}
            <div className="mb-12">
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-500 flex items-center justify-center text-white text-2xl font-bold">
                  3
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Feed Your Mind
                  </h2>
                  <p className="text-gold-500 font-medium">Continuous Learning is Non-Negotiable</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4">
                The quality of your life is directly proportional to the quality of the information
                you consume. If you&apos;re feeding your mind junk — social media drama, negative news,
                gossip — you&apos;ll produce junk results. If you feed your mind wisdom, knowledge, and
                inspiration, you&apos;ll produce extraordinary outcomes.
              </p>

              <p className="text-gray-400 leading-relaxed mb-4">
                Commit to learning something new every single day. Here&apos;s a simple formula:
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="card-enterprise text-center p-6">
                  <div className="text-3xl font-bold text-gold-500 mb-2">10</div>
                  <p className="text-gray-300">Pages of a good book</p>
                </div>
                <div className="card-enterprise text-center p-6">
                  <div className="text-3xl font-bold text-gold-500 mb-2">15</div>
                  <p className="text-gray-300">Minutes of a podcast</p>
                </div>
                <div className="card-enterprise text-center p-6">
                  <div className="text-3xl font-bold text-gold-500 mb-2">1</div>
                  <p className="text-gray-300">Educational video</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                This isn&apos;t about consuming more — it&apos;s about consuming better. Replace 30 minutes of
                mindless scrolling with 30 minutes of intentional learning, and watch how your life
                transforms over the next year.
              </p>
            </div>

            {/* Habit 4 */}
            <div className="mb-12">
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-500 flex items-center justify-center text-white text-2xl font-bold">
                  4
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Practice Radical Focus
                  </h2>
                  <p className="text-gold-500 font-medium">The Power of Single-Tasking</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4">
                In a world of constant distractions, focus has become a superpower. Most people try
                to do everything and end up accomplishing nothing meaningful. Winners identify their
                highest-value activities and give them their undivided attention.
              </p>

              <p className="text-gray-400 leading-relaxed mb-4">
                Here&apos;s the brutal truth: <strong className="text-white">multitasking is a myth.</strong> Every
                time you switch between tasks, you lose momentum and mental energy. Studies show it
                can take up to 23 minutes to fully regain focus after an interruption.
              </p>

              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">The solution? Time blocking.</strong>
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-gray-300">
                  <svg className="w-6 h-6 text-gold-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Identify your 3 most important tasks for the day</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <svg className="w-6 h-6 text-gold-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Block 90-minute focus sessions for deep work</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <svg className="w-6 h-6 text-gold-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Eliminate all distractions during these blocks (phone on airplane mode)</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <svg className="w-6 h-6 text-gold-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Take short breaks between blocks to recharge</span>
                </li>
              </ul>

              <div className="card-premium p-6">
                <p className="text-gold-500 font-semibold mb-2">Remember:</p>
                <p className="text-gray-300">
                  It&apos;s not about having time — it&apos;s about making time for what matters most.
                  When you focus on your highest priorities first, everything else falls into place.
                </p>
              </div>
            </div>

            {/* Habit 5 */}
            <div className="mb-12">
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-500 flex items-center justify-center text-white text-2xl font-bold">
                  5
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Reflect and Review
                  </h2>
                  <p className="text-gold-500 font-medium">End Each Day with Purpose</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4">
                The most successful people I&apos;ve coached all share one common practice: they end each
                day with intentional reflection. This isn&apos;t just looking back — it&apos;s extracting lessons
                and setting yourself up for an even better tomorrow.
              </p>

              <p className="text-gray-400 leading-relaxed mb-4">
                Before you go to bed, spend 10 minutes answering these questions:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-gray-300">
                  <svg className="w-6 h-6 text-gold-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong className="text-white">What went well today?</strong> — Celebrate your wins, no matter how small.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <svg className="w-6 h-6 text-gold-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong className="text-white">What could I have done better?</strong> — Growth comes from honest self-assessment.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <svg className="w-6 h-6 text-gold-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong className="text-white">What am I committed to tomorrow?</strong> — Set your intention for the next day.</span>
                </li>
              </ul>

              <blockquote className="border-l-4 border-gold-500 pl-6 py-4 bg-dark-800/50 mb-6">
                <p className="text-xl text-white italic mb-2">
                  &quot;An unexamined life is not worth living. Review your days, and you&apos;ll transform your years.&quot;
                </p>
                <cite className="text-gold-500">— Coach Gaashaan</cite>
              </blockquote>
            </div>

            <div className="divider mb-12" />

            {/* Conclusion */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                The Compound Effect of Daily Habits
              </h2>

              <p className="text-gray-300 leading-relaxed mb-4">
                Here&apos;s what most people don&apos;t understand: small daily actions compound into
                extraordinary results over time. If you improve by just 1% every day, you&apos;ll be
                37 times better by the end of the year. That&apos;s not motivation — that&apos;s mathematics.
              </p>

              <p className="text-gray-300 leading-relaxed mb-4">
                These five habits might seem simple, but simplicity is the ultimate sophistication.
                Don&apos;t underestimate them. Don&apos;t overcomplicate them. Just do them — every single day.
              </p>

              <p className="text-xl text-white font-semibold mb-8">
                Start tomorrow morning. Start with habit #1. Then add one habit each week until
                all five become part of who you are.
              </p>

              <div className="card-premium p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Your Victory Starts Today</h3>
                <p className="text-gray-300 mb-6">
                  Remember: You were not born to be average. You were born to be victorious.
                  These habits are your weapons for the battle. Use them daily.
                </p>
                <p className="text-gold-500 font-semibold text-lg">
                  — Coach Gaashaan
                </p>
              </div>
            </div>

            {/* Share Section */}
            <div className="border-t border-dark-700 pt-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-gray-400">Found this helpful? Share it with someone who needs it.</p>
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
            <Link href="/blog/how-to-overcome-fear-and-take-bold-action" className="card-enterprise group hover:border-primary-500/50">
              <div className="badge-primary mb-4">Mindset</div>
              <h3 className="heading-md text-white mb-2 group-hover:text-primary-400 transition-colors">
                How to Overcome Fear and Take Bold Action
              </h3>
              <p className="text-body">Fear is not your enemy — it&apos;s a compass pointing toward growth.</p>
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
          <h2 className="heading-lg text-white mb-4">Ready to Transform Your Life?</h2>
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
