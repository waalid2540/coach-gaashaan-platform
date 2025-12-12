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
            <div className="badge-primary mb-6">Productivity</div>
            <h1 className="heading-display text-white mb-6">
              The Power of <span className="text-gradient">Morning Routines</span>
            </h1>
            <div className="flex items-center justify-center gap-4 text-gray-400 mb-8">
              <span>December 5, 2024</span>
              <span>•</span>
              <span>6 min read</span>
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
              How you start your morning determines how you live your day. And how you live your
              days determines how you live your life. This isn&apos;t motivational fluff — it&apos;s a
              fundamental truth that every high achiever understands and applies.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              After coaching thousands of executives, entrepreneurs, and ambitious individuals,
              I&apos;ve noticed a striking pattern: <strong className="text-white">the most successful people
              are ruthlessly intentional about their mornings.</strong> They don&apos;t wake up and react
              to the world — they wake up and create their world.
            </p>

            <div className="divider mb-12" />

            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Why Mornings Matter More Than You Think
              </h2>

              <p className="text-gray-300 leading-relaxed mb-4">
                Your morning is the foundation upon which your entire day is built. Get it right,
                and everything else flows more easily. Get it wrong, and you spend the rest of
                the day playing catch-up.
              </p>

              <p className="text-gray-400 leading-relaxed mb-4">
                Here&apos;s the science: Your willpower and decision-making ability are at their peak
                in the morning. As the day progresses, you experience &quot;decision fatigue&quot; — your
                mental energy depletes with every choice you make. This is why successful people
                use their mornings for their most important work.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="card-enterprise text-center p-6">
                  <div className="text-3xl font-bold text-gold-500 mb-2">90%</div>
                  <p className="text-gray-400 text-sm">of executives wake before 6am</p>
                </div>
                <div className="card-enterprise text-center p-6">
                  <div className="text-3xl font-bold text-gold-500 mb-2">2-3x</div>
                  <p className="text-gray-400 text-sm">more productive morning hours</p>
                </div>
                <div className="card-enterprise text-center p-6">
                  <div className="text-3xl font-bold text-gold-500 mb-2">4am</div>
                  <p className="text-gray-400 text-sm">average CEO wake-up time</p>
                </div>
              </div>

              <blockquote className="border-l-4 border-gold-500 pl-6 py-4 bg-dark-800/50 mb-6">
                <p className="text-xl text-white italic mb-2">
                  &quot;Win your morning, win your day. Win your day, win your life.&quot;
                </p>
                <cite className="text-gold-500">— Coach Gaashaan</cite>
              </blockquote>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                The Victorious Morning Framework
              </h2>

              <p className="text-gray-300 leading-relaxed mb-6">
                I&apos;ve developed this morning routine framework based on what actually works for
                high performers. It&apos;s not about waking up at 4am (though that helps) — it&apos;s
                about being intentional with however much morning time you have.
              </p>

              {/* Phase 1 */}
              <div className="mb-8 p-6 bg-dark-800/50 border-l-4 border-primary-500">
                <h3 className="text-xl font-bold text-white mb-2">Phase 1: Awakening (First 10 Minutes)</h3>
                <p className="text-gold-500 mb-4">Set the tone before the world intrudes</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-6 h-6 text-gold-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-white">No phone for the first 10 minutes.</strong> Your mind is highly suggestible upon waking — don&apos;t fill it with other people&apos;s agendas.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-6 h-6 text-gold-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-white">Hydrate immediately.</strong> Your body is dehydrated after 7-8 hours of sleep. Drink 16-20oz of water.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-6 h-6 text-gold-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-white">Express gratitude.</strong> Think of 3 things you&apos;re grateful for. This immediately shifts your brain into a positive state.</span>
                  </li>
                </ul>
              </div>

              {/* Phase 2 */}
              <div className="mb-8 p-6 bg-dark-800/50 border-l-4 border-gold-500">
                <h3 className="text-xl font-bold text-white mb-2">Phase 2: Activation (20-30 Minutes)</h3>
                <p className="text-gold-500 mb-4">Energize your body and mind</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-6 h-6 text-gold-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-white">Move your body.</strong> Exercise, yoga, a brisk walk — anything that gets your blood flowing and endorphins pumping.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-6 h-6 text-gold-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-white">Cold exposure (optional but powerful).</strong> A cold shower for 30-60 seconds dramatically increases alertness and resilience.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-6 h-6 text-gold-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-white">Fuel properly.</strong> Eat a nutritious breakfast that provides sustained energy, not a sugar crash.</span>
                  </li>
                </ul>
              </div>

              {/* Phase 3 */}
              <div className="mb-8 p-6 bg-dark-800/50 border-l-4 border-primary-500">
                <h3 className="text-xl font-bold text-white mb-2">Phase 3: Elevation (15-30 Minutes)</h3>
                <p className="text-gold-500 mb-4">Feed your mind with greatness</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-6 h-6 text-gold-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-white">Read or listen to something inspirational.</strong> 10 pages of a great book or 15 minutes of a podcast.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-6 h-6 text-gold-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-white">Journal or meditate.</strong> Clear your mind, process your thoughts, and set your intentions.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-6 h-6 text-gold-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-white">Visualize your success.</strong> Spend 5 minutes seeing yourself achieving your goals.</span>
                  </li>
                </ul>
              </div>

              {/* Phase 4 */}
              <div className="mb-8 p-6 bg-dark-800/50 border-l-4 border-gold-500">
                <h3 className="text-xl font-bold text-white mb-2">Phase 4: Execution (First Work Block)</h3>
                <p className="text-gold-500 mb-4">Attack your most important task</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-6 h-6 text-gold-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-white">Identify your #1 priority.</strong> What&apos;s the ONE thing that will make everything else easier or unnecessary?</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-6 h-6 text-gold-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-white">Work in a 90-minute focus block.</strong> No distractions, no emails, no meetings. Deep work only.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-6 h-6 text-gold-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-white">Protect this time fiercely.</strong> This is when you do your best work. Guard it with your life.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                The Morning Routine Mistakes to Avoid
              </h2>

              <p className="text-gray-300 leading-relaxed mb-4">
                I&apos;ve seen people fail at morning routines for years. Here are the most common
                mistakes and how to avoid them:
              </p>

              <div className="space-y-4 mb-6">
                <div className="card-enterprise p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Hitting Snooze</h4>
                      <p className="text-gray-400 text-sm">Every time you hit snooze, you&apos;re telling your brain that your commitments don&apos;t matter. Put your alarm across the room.</p>
                    </div>
                  </div>
                </div>

                <div className="card-enterprise p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Checking Your Phone First</h4>
                      <p className="text-gray-400 text-sm">When you check your phone, you&apos;re immediately reactive. You&apos;re responding to other people&apos;s priorities, not creating your own.</p>
                    </div>
                  </div>
                </div>

                <div className="card-enterprise p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Trying to Do Too Much</h4>
                      <p className="text-gray-400 text-sm">A 3-hour morning routine is unsustainable. Start with 30 minutes and build from there.</p>
                    </div>
                  </div>
                </div>

                <div className="card-enterprise p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Inconsistency</h4>
                      <p className="text-gray-400 text-sm">A routine only works if you do it consistently. Same time, same activities, every single day — including weekends.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                My Personal Morning Routine
              </h2>

              <p className="text-gray-300 leading-relaxed mb-4">
                People often ask about my personal routine. Here&apos;s what I&apos;ve done every day for
                the past 20 years:
              </p>

              <div className="card-premium p-8 mb-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 pb-4 border-b border-dark-600">
                    <span className="text-gold-500 font-bold w-20">4:30 AM</span>
                    <span className="text-gray-300">Wake up (no snooze, ever)</span>
                  </div>
                  <div className="flex items-center gap-4 pb-4 border-b border-dark-600">
                    <span className="text-gold-500 font-bold w-20">4:35 AM</span>
                    <span className="text-gray-300">Hydrate + gratitude practice</span>
                  </div>
                  <div className="flex items-center gap-4 pb-4 border-b border-dark-600">
                    <span className="text-gold-500 font-bold w-20">4:45 AM</span>
                    <span className="text-gray-300">Meditation and prayer (20 min)</span>
                  </div>
                  <div className="flex items-center gap-4 pb-4 border-b border-dark-600">
                    <span className="text-gold-500 font-bold w-20">5:05 AM</span>
                    <span className="text-gray-300">Exercise (45 min)</span>
                  </div>
                  <div className="flex items-center gap-4 pb-4 border-b border-dark-600">
                    <span className="text-gold-500 font-bold w-20">5:50 AM</span>
                    <span className="text-gray-300">Cold shower + get ready</span>
                  </div>
                  <div className="flex items-center gap-4 pb-4 border-b border-dark-600">
                    <span className="text-gold-500 font-bold w-20">6:15 AM</span>
                    <span className="text-gray-300">Read and journal (30 min)</span>
                  </div>
                  <div className="flex items-center gap-4 pb-4 border-b border-dark-600">
                    <span className="text-gold-500 font-bold w-20">6:45 AM</span>
                    <span className="text-gray-300">Healthy breakfast</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-gold-500 font-bold w-20">7:00 AM</span>
                    <span className="text-gray-300">Deep work block begins (90 min)</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed">
                By 8:30 AM, I&apos;ve already accomplished more than most people do in an entire day.
                I&apos;ve invested in my body, mind, and spirit — and I&apos;ve completed my most important
                work. The rest of the day is a bonus.
              </p>
            </div>

            <div className="divider mb-12" />

            {/* Conclusion */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Start Tomorrow Morning
              </h2>

              <p className="text-gray-300 leading-relaxed mb-4">
                You don&apos;t need to overhaul your entire life tonight. Start with one small change
                tomorrow morning:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-gray-300">
                  <svg className="w-6 h-6 text-gold-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Set your alarm 30 minutes earlier than usual</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <svg className="w-6 h-6 text-gold-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Don&apos;t touch your phone for the first 10 minutes</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <svg className="w-6 h-6 text-gold-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Do one thing that energizes you (move, read, journal)</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <svg className="w-6 h-6 text-gold-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Repeat for 7 days, then add another element</span>
                </li>
              </ul>

              <blockquote className="border-l-4 border-gold-500 pl-6 py-4 bg-dark-800/50 mb-6">
                <p className="text-xl text-white italic mb-2">
                  &quot;The way you do the morning is the way you do everything. Master your morning,
                  master your life.&quot;
                </p>
                <cite className="text-gold-500">— Coach Gaashaan</cite>
              </blockquote>

              <div className="card-premium p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Your Victory Starts at Dawn</h3>
                <p className="text-gray-300 mb-6">
                  Every morning is a new beginning, a fresh chance to become the person you&apos;re
                  meant to be. Don&apos;t waste it. Don&apos;t scroll it away. Own it.
                </p>
                <p className="text-gold-500 font-semibold text-lg">
                  — Coach Gaashaan
                </p>
              </div>
            </div>

            {/* Share Section */}
            <div className="border-t border-dark-700 pt-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-gray-400">Found this helpful? Share it with an early riser.</p>
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
            <Link href="/blog/how-to-overcome-fear-and-take-bold-action" className="card-enterprise group hover:border-primary-500/50">
              <div className="badge-primary mb-4">Mindset</div>
              <h3 className="heading-md text-white mb-2 group-hover:text-primary-400 transition-colors">
                How to Overcome Fear and Take Bold Action
              </h3>
              <p className="text-body">Fear is not your enemy — it&apos;s a compass pointing toward growth.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-500">
        <div className="container-enterprise text-center">
          <h2 className="heading-lg text-white mb-4">Ready to Win Your Mornings?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join 350,000+ people who start their day with mentoring from Coach Gaashaan.
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
