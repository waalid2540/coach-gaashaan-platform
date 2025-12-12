"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-950">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* About/Mentor Section */}
      <MentorSection />

      {/* Victorious Living Section */}
      <VictoriousLivingSection />

      {/* Programs Section */}
      <ProgramsSection />

      {/* Video Section */}
      <VideoSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Quotes Section */}
      <QuotesSection />

      {/* Blog Section */}
      <BlogSection />

      {/* Daily Mentoring CTA */}
      <DailyMentoringSection />

      {/* Contact/CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.programs-dropdown')) {
        setIsProgramsOpen(false);
      }
    };

    if (isProgramsOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isProgramsOpen]);

  const programItems = [
    { label: "Courses", href: "/courses", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
    { label: "Seminars", href: "/seminars", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
    { label: "Ebooks", href: "/ebooks", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
    { label: "Videos", href: "/videos", icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-950/95 backdrop-blur-sm border-b border-dark-800">
      <div className="container-enterprise">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#about" className="nav-link">About</Link>
            <Link href="#victorious-living" className="nav-link">Victorious Living</Link>

            {/* Programs Dropdown */}
            <div className="relative programs-dropdown">
              <button
                onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                className="nav-link flex items-center gap-1"
              >
                Programs
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isProgramsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isProgramsOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-dark-900 border border-dark-700 shadow-enterprise py-2 z-50">
                  {programItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-dark-800 hover:text-white transition-colors"
                      onClick={() => setIsProgramsOpen(false)}
                    >
                      <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                      </svg>
                      {item.label}
                    </Link>
                  ))}
                  <div className="border-t border-dark-700 mt-2 pt-2">
                    <Link
                      href="#programs"
                      className="flex items-center gap-3 px-4 py-3 text-gold-500 hover:bg-dark-800 transition-colors"
                      onClick={() => setIsProgramsOpen(false)}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                      </svg>
                      View All Programs
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="#video" className="nav-link">Video</Link>
            <Link href="#quotes" className="nav-link">Quotes</Link>
            <Link href="/blog" className="nav-link">Blog</Link>
            <Link href="/login" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-dark-800">
            <div className="flex flex-col gap-2">
              <Link href="#about" className="nav-link py-2">About</Link>
              <Link href="#victorious-living" className="nav-link py-2">Victorious Living</Link>

              {/* Mobile Programs Dropdown */}
              <div className="programs-dropdown">
                <button
                  onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                  className="nav-link py-2 flex items-center justify-between w-full"
                >
                  Programs
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isProgramsOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isProgramsOpen && (
                  <div className="pl-4 mt-2 space-y-2 border-l border-dark-700 ml-2">
                    {programItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="flex items-center gap-3 py-2 text-gray-400 hover:text-white transition-colors"
                      >
                        <svg className="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                        </svg>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="#video" className="nav-link py-2">Video</Link>
              <Link href="#quotes" className="nav-link py-2">Quotes</Link>
              <Link href="/blog" className="nav-link py-2">Blog</Link>
              <Link href="/login" className="btn-primary text-center mt-4">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    "/images/gaashaan-1.jpg",
    "/images/gaashaan-2.jpg",
    "/images/gaashaan-3.jpg",
    "/images/gaashaan-4.jpg",
    "/images/gaashaan-5.jpg",
    "/images/gaashaan-6.jpg",
  ];

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image Slider */}
      <div className="absolute inset-0 overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Coach Gaashaan ${index + 1}`}
              fill
              className="object-cover object-top"
              priority={index === 0}
            />
          </div>
        ))}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-gold-500 w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsVideoPlaying(false)}
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute -top-12 right-0 text-white hover:text-gold-500 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <video
              src="/images/gaashaan-video.mp4"
              controls
              autoPlay
              className="w-full aspect-video bg-black"
            />
          </div>
        </div>
      )}

      <div className="container-enterprise relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block badge-gold mb-8 animate-fade-in">
            Transform Your Life
          </div>

          {/* Main heading */}
          <h1 className="heading-display text-white mb-6 animate-fade-in-up text-shadow-lg">
            You Were Called Here{" "}
            <span className="block text-gradient">For A Reason</span>
          </h1>

          {/* Subheading */}
          <p className="text-body-lg max-w-2xl mx-auto mb-8 animate-fade-in-up animation-delay-200 text-shadow">
            You are not average. You are not ordinary. You were born to be{" "}
            <span className="text-gold-500 font-semibold">exceptional</span>.
            It&apos;s time to unlock your full potential and become who you were
            meant to be.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Link href="/signup" className="btn-primary">
              Start Your Journey
            </Link>
            <button
              onClick={() => setIsVideoPlaying(true)}
              className="btn-outline flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Watch Video
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-16 border-t border-white/20 animate-fade-in animation-delay-600">
            <p className="text-sm uppercase tracking-widest text-gray-300 mb-6">
              Trusted by ambitious individuals worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <span className="text-2xl font-bold text-white">Forbes</span>
              <span className="text-2xl font-bold text-white">SUCCESS</span>
              <span className="text-2xl font-bold text-white">Inc.</span>
              <span className="text-2xl font-bold text-white">Entrepreneur</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float z-20">
        <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="video" className="section section-gradient overflow-hidden">
      <div className="container-enterprise">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="badge-gold mb-6">Featured Video</div>
          <h2 className="heading-xl text-white mb-4">
            Watch <span className="text-gradient">Coach Gaashaan</span> in Action
          </h2>
          <p className="text-body-lg">
            Powerful insights and teachings to inspire your journey toward victorious living.
          </p>
        </div>

        {/* Video */}
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-dark-800 rounded-lg overflow-hidden border-2 border-gold-500/30 shadow-glow-gold">
            {isPlaying ? (
              <video
                src="/images/gaashaan-video.mp4"
                controls
                autoPlay
                className="w-full h-full object-contain bg-black"
              />
            ) : (
              <>
                {/* Thumbnail with play button */}
                <Image
                  src="/images/gaashaan-1.jpg"
                  alt="Coach Gaashaan - The Art of Victorious Living"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center hover:bg-primary-600 hover:scale-110 transition-all duration-300 shadow-glow group"
                  >
                    <svg className="w-10 h-10 text-white ml-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </button>
                </div>
                {/* Play text */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold text-lg">The Art of Victorious Living</p>
                    <p className="text-gray-300 text-sm">Coach Gaashaan</p>
                  </div>
                  <div className="bg-primary-500 px-4 py-2 rounded">
                    <span className="text-white font-semibold">Watch Now</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Video Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Discover the principles that will transform your life and help you overcome any obstacle.
              In this powerful video, Coach Gaashaan shares the secrets to living a victorious life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MentorSection() {
  return (
    <section id="about" className="section section-darker">
      <div className="container-enterprise">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Coach Gaashaan Image */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-dark-700 to-dark-800 relative overflow-hidden">
              <Image
                src="/images/gaashaan-1.jpg"
                alt="Coach Gaashaan - Professional Speaker and Life Coach"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Decorative border */}
              <div className="absolute inset-4 border border-gold-500/30 pointer-events-none" />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary-500 p-6 text-center">
              <span className="stat-number text-3xl">27+</span>
              <span className="stat-label text-xs block">Years Experience</span>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="badge-primary mb-6">Your Mentor</div>
            <h2 className="heading-xl text-white mb-6">
              Meet <span className="text-gradient">Coach Gaashaan</span>
            </h2>
            <div className="divider mb-8" />
            <p className="text-body-lg mb-6">
              For over 27 years, Coach Gaashaan has been transforming lives and
              helping ambitious individuals unlock their true potential. With a
              unique blend of practical wisdom, proven strategies, and
              compassionate guidance.
            </p>
            <p className="text-body mb-8">
              Having coached thousands of clients across the globe, from executives
              to entrepreneurs, Coach Gaashaan brings a wealth of experience and a
              track record of real results. His approach is direct, actionable,
              and designed for those who are serious about change.
            </p>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-6">
              <div className="card-enterprise p-4">
                <span className="text-2xl font-bold text-white">10,000+</span>
                <p className="text-sm text-gray-400">Lives Transformed</p>
              </div>
              <div className="card-enterprise p-4">
                <span className="text-2xl font-bold text-white">50+</span>
                <p className="text-sm text-gray-400">Countries Reached</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VictoriousLivingSection() {
  const pillars = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Resilience",
      description: "Build unshakeable mental fortitude that allows you to face any challenge with confidence and grace.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Purpose",
      description: "Discover your true calling and align every action with your deepest values and highest aspirations.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Inner Peace",
      description: "Cultivate a calm, centered mind that remains stable regardless of external storms.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      title: "Victory Mindset",
      description: "Transform obstacles into opportunities and see every circumstance as a stepping stone to greatness.",
    },
  ];

  return (
    <section id="victorious-living" className="section relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-950 to-dark-900">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-500/20 to-transparent" />
        </div>
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-enterprise relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="badge-gold mb-6">Coach Gaashaan&apos;s Philosophy</div>
          <h2 className="heading-display text-white mb-6">
            The Art Of <span className="text-gold-500">Victorious</span> Living
          </h2>
          <div className="divider-gold divider-center mb-8" />
          <p className="text-body-lg max-w-3xl mx-auto">
            The real art of victorious living is{" "}
            <span className="text-gold-500 font-semibold">victory over self</span>{" "}
            and{" "}
            <span className="text-gold-500 font-semibold">victory over your conditions</span>.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left side - Quote and philosophy */}
          <div className="relative">
            <div className="absolute -top-8 -left-8 text-9xl text-gold-500/10 font-serif">&quot;</div>
            <div className="card-premium relative">
              <p className="text-xl md:text-2xl text-white leading-relaxed mb-8">
                Your circumstances are not your destiny. Your{" "}
                <span className="text-gold-500">response</span> to them is.
                Every obstacle you face is an invitation to grow stronger,
                wiser, and more resilient.
              </p>
              <p className="text-lg text-gray-400 mb-6">
                True victory isn&apos;t the absence of problems — it&apos;s the presence
                of unwavering faith in yourself and your ability to overcome
                anything life puts in your path.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">G</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Coach Gaashaan</p>
                  <p className="text-sm text-gray-500">Founder, Victorious Living</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Key principles */}
          <div>
            <h3 className="heading-lg text-white mb-8">
              The Four Pillars of <span className="text-gold-500">Victory</span>
            </h3>
            <div className="space-y-6">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="flex gap-5 p-5 bg-dark-800/50 border border-dark-700 hover:border-gold-500/30 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-all duration-300">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-dark-800 via-dark-900 to-dark-800 border border-gold-500/20">
            <p className="text-lg text-gray-300 mb-6">
              Ready to master the art of victorious living?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup" className="btn-gold">
                Begin Your Victory Journey
              </Link>
              <Link href="#programs" className="btn-outline-gold">
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgramsSection() {
  const programs = [
    {
      title: "Foundations of Excellence",
      level: "Beginner",
      description: "Master the fundamentals of personal development and build unshakeable habits that last.",
      features: ["12-week program", "Weekly coaching calls", "Private community access", "Lifetime access"],
      price: "$997",
      featured: false,
    },
    {
      title: "Elite Performance",
      level: "Advanced",
      description: "For high-achievers ready to break through to the next level of success and impact.",
      features: ["16-week intensive", "1-on-1 coaching sessions", "Exclusive mastermind", "VIP support"],
      price: "$2,997",
      featured: true,
    },
    {
      title: "Executive Mastery",
      level: "Premium",
      description: "Private coaching for executives and entrepreneurs seeking transformational results.",
      features: ["6-month engagement", "Unlimited access", "Custom strategy", "Priority support"],
      price: "Apply",
      featured: false,
    },
  ];

  const resources = [
    {
      title: "Courses",
      description: "Self-paced online courses to transform your mindset and build lasting success habits.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      count: "12+ Courses",
    },
    {
      title: "Seminars",
      description: "Live and recorded seminars featuring powerful teachings on victorious living.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      count: "50+ Seminars",
    },
    {
      title: "Ebooks",
      description: "Downloadable guides and books packed with actionable strategies for personal growth.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      count: "8+ Ebooks",
    },
    {
      title: "Videos",
      description: "Exclusive video content featuring lessons, interviews, and motivational talks.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      count: "100+ Videos",
    },
  ];

  return (
    <section id="programs" className="section section-gradient">
      <div className="container-enterprise">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-gold mb-6">Training Programs</div>
          <h2 className="heading-xl text-white mb-6">
            No Fluff. No BS.{" "}
            <span className="text-gradient">Just Results.</span>
          </h2>
          <p className="text-body-lg">
            Award-winning mindset infusion designed to give you an unfair
            advantage in life and business.
          </p>
        </div>

        {/* Programs grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`relative ${
                program.featured
                  ? "card-premium border-gold-500/50"
                  : "card-enterprise"
              }`}
            >
              {program.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 badge-gold">
                  Most Popular
                </div>
              )}
              <div className="text-sm uppercase tracking-widest text-gray-500 mb-4">
                {program.level}
              </div>
              <h3 className="heading-md text-white mb-4">{program.title}</h3>
              <p className="text-body mb-6">{program.description}</p>
              <ul className="space-y-3 mb-8">
                {program.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <div className="text-3xl font-bold text-white mb-4">{program.price}</div>
                <button
                  className={`w-full ${program.featured ? "btn-gold" : "btn-outline"}`}
                >
                  {program.price === "Apply" ? "Apply Now" : "Enroll Now"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Resources Section */}
        <div className="mt-24 pt-16 border-t border-dark-700">
          <div className="text-center mb-12">
            <h3 className="heading-lg text-white mb-4">
              Additional <span className="text-gold-500">Resources</span>
            </h3>
            <p className="text-body max-w-2xl mx-auto">
              Expand your learning with our comprehensive library of courses, seminars, ebooks, and videos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="card-enterprise text-center group cursor-pointer hover:border-gold-500/50"
              >
                <div className="w-16 h-16 bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-500 mx-auto mb-4 group-hover:bg-gold-500 group-hover:text-black transition-all duration-300">
                  {resource.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{resource.title}</h4>
                <p className="text-body text-sm mb-4">{resource.description}</p>
                <span className="badge-gold">{resource.count}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/resources" className="btn-outline-gold">
              Browse All Resources
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { number: "10,000+", label: "Lives Transformed" },
    { number: "27+", label: "Years of Excellence" },
    { number: "50+", label: "Countries Reached" },
    { number: "98%", label: "Success Rate" },
  ];

  return (
    <section className="py-20 bg-primary-500">
      <div className="container-enterprise">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, Tech Startup",
      content: "Coach Gaashaan completely transformed my approach to leadership. In just 3 months, I doubled my company's revenue and found balance I never thought possible.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Entrepreneur",
      content: "The Elite Performance program was a game-changer. The strategies are practical, actionable, and they work. I've recommended Coach Gaashaan to everyone I know.",
      rating: 5,
    },
    {
      name: "Amira Hassan",
      role: "Executive Director",
      content: "After years of feeling stuck, I finally broke through. The daily mentoring keeps me accountable and the community is incredibly supportive.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section section-dark">
      <div className="container-enterprise">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-primary mb-6">Success Stories</div>
          <h2 className="heading-xl text-white mb-6">
            Real People. <span className="text-gradient">Real Results.</span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-enterprise">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">&quot;{testimonial.content}&quot;</p>
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuotesSection() {
  const quotes = [
    {
      text: "Victory is not about defeating others. It's about conquering the limitations within yourself.",
      category: "Victory Over Self",
    },
    {
      text: "Your circumstances don't define you. Your response to them does.",
      category: "Mindset",
    },
    {
      text: "The strongest people aren't those who show strength in front of us, but those who win battles we know nothing about.",
      category: "Resilience",
    },
    {
      text: "Don't wait for the perfect moment. Take the moment and make it perfect.",
      category: "Action",
    },
    {
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      category: "Perseverance",
    },
    {
      text: "The only person you are destined to become is the person you decide to be.",
      category: "Destiny",
    },
  ];

  return (
    <section id="quotes" className="section section-gradient">
      <div className="container-enterprise">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-gold mb-6">Words of Wisdom</div>
          <h2 className="heading-xl text-white mb-6">
            Quotes by <span className="text-gradient">Coach Gaashaan</span>
          </h2>
          <p className="text-body-lg">
            Powerful insights to inspire your journey toward victorious living.
          </p>
        </div>

        {/* Quotes grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="card-enterprise relative group hover:border-gold-500/50"
            >
              {/* Quote mark */}
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-gold-500 flex items-center justify-center">
                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <div className="pt-4">
                <p className="text-lg text-gray-200 leading-relaxed mb-4 italic">
                  &quot;{quote.text}&quot;
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gold-500 font-medium">
                    — Coach Gaashaan
                  </span>
                  <span className="badge-gold text-xs">{quote.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more button */}
        <div className="text-center mt-12">
          <Link href="/quotes" className="btn-outline-gold">
            View All Quotes
          </Link>
        </div>
      </div>
    </section>
  );
}

function BlogSection() {
  const posts = [
    {
      title: "5 Daily Habits That Will Transform Your Life",
      excerpt: "Discover the simple yet powerful habits that successful people practice every single day to stay focused and driven.",
      category: "Habits",
      date: "Dec 10, 2024",
      readTime: "5 min read",
    },
    {
      title: "How to Overcome Fear and Take Bold Action",
      excerpt: "Fear is not your enemy — it's a compass pointing toward growth. Learn how to use fear as fuel for success.",
      category: "Mindset",
      date: "Dec 8, 2024",
      readTime: "7 min read",
    },
    {
      title: "The Power of Morning Routines",
      excerpt: "How you start your morning determines how you live your day. Create a morning routine that sets you up for victory.",
      category: "Productivity",
      date: "Dec 5, 2024",
      readTime: "6 min read",
    },
  ];

  return (
    <section id="blog" className="section section-darker">
      <div className="container-enterprise">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-primary mb-6">Latest Insights</div>
          <h2 className="heading-xl text-white mb-6">
            The <span className="text-gradient">Victory Blog</span>
          </h2>
          <p className="text-body-lg">
            Articles, insights, and strategies to help you live a victorious life.
          </p>
        </div>

        {/* Blog posts grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
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
                {/* Category badge */}
                <div className="absolute top-4 left-4">
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
                <h3 className="heading-md text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-body mb-4">{post.excerpt}</p>
                <span className="text-primary-500 font-medium text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <Link href="/blog" className="btn-primary">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}

function DailyMentoringSection() {
  return (
    <section id="mentoring" className="section section-darker">
      <div className="container-enterprise">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="badge-gold mb-6">#BetterEveryDay</div>
            <h2 className="heading-xl text-white mb-6">
              Join <span className="text-gold-500">350,000+</span> Members
            </h2>
            <div className="divider-gold mb-8" />
            <p className="text-body-lg mb-6">
              Start every day with purpose. Get daily mentoring delivered
              straight to your inbox — insights, strategies, and motivation
              to keep you on track.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Daily video mentoring from Coach Gaashaan",
                "Actionable strategies you can implement immediately",
                "Join a community of high-achievers",
                "100% free — no credit card required",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <svg className="w-6 h-6 text-gold-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="card-premium">
            <h3 className="heading-md text-white mb-2">
              Begin Your Adventure Now
            </h3>
            <p className="text-gray-400 mb-8">
              Start with free daily mentoring
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="First Name"
                className="input-enterprise"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="input-enterprise"
              />
              <button type="submit" className="btn-gold w-full">
                Get Free Daily Mentoring
              </button>
              <p className="text-xs text-gray-500 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-700">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.svg')] bg-repeat" />
        </div>
      </div>

      <div className="container-enterprise relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-xl text-white mb-6">
            Ready to Become Exceptional?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Stop waiting for the perfect moment. The time is now.
            Your transformation starts with a single decision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="btn-gold">
              Start Your Journey Today
            </Link>
            <Link href="#programs" className="btn-outline border-white text-white hover:bg-white hover:text-primary-500">
              View Programs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-dark-800">
      <div className="container-enterprise py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 bg-primary-500 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">G</span>
              </div>
              <span className="text-white font-bold text-xl">COACH GAASHAAN</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering ambitious individuals to unlock their potential and
              achieve extraordinary results in life and business.
            </p>
            <div className="flex gap-4">
              {["twitter", "linkedin", "instagram", "youtube"].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com`}
                  className="w-10 h-10 bg-dark-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-500 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["About", "Programs", "Daily Mentoring", "Testimonials", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Contact
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>hello@coachgaashaan.com</li>
              <li>Speaking Inquiries</li>
              <li>Help Center</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-dark-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 Coach Gaashaan. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
