import { useEffect, useRef, useState } from 'react';
import './Hero.css';

const stats = [
  { value: 5000,  suffix: '+', label: 'Students Enrolled' },
  { value: 98,    suffix: '%', label: 'Success Rate' },
  { value: 15,    suffix: '+', label: 'Years Experience' },
  { value: 200,   suffix: '+', label: 'IIT/NEET Selections' },
];

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatItem({ stat, animate }) {
  const count = useCountUp(stat.value, 2000, animate);
  return (
    <div className="stat-item">
      <span className="stat-value">{count}{stat.suffix}</span>
      <span className="stat-label">{stat.label}</span>
    </div>
  );
}

export default function Hero() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      {/* Background */}
      <div className="hero__bg" />
      <div className="hero__overlay" />

      {/* Floating decorative orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      <div className="container hero__content">
        {/* Badge */}
        <div className="hero__badge animate-fadeInUp delay-1">
          <span className="badge-dot" />
          Admissions Open 2026–27
        </div>

        {/* Headline */}
        <h1 className="hero__title animate-fadeInUp delay-2">
          <span className="hero__title-sub">Welcome to</span>
          <span className="hero__title-main">THE MIRACLE</span>
          <span className="hero__title-accent">TUTORIAL</span>
        </h1>

        {/* Tagline */}
        <p className="hero__tagline animate-fadeInUp delay-3">
          Premier Coaching Institute for
          <strong> JEE, NEET </strong>&amp;
          <strong> Foundation Courses</strong>
        </p>

        {/* CTA Buttons */}
        <div className="hero__actions animate-fadeInUp delay-4">
          <button className="btn btn-primary hero-btn" onClick={() => scrollTo('courses')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            Explore Courses
          </button>
          <button className="btn btn-outline hero-btn" onClick={() => scrollTo('contact')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.5 19.79 19.79 0 01.22 5.18 2 2 0 012.18 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 10.09a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0121 16.92z"/>
            </svg>
            Contact Us
          </button>
          <button className="btn btn-outline hero-btn" onClick={() => scrollTo('about')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            About Us
          </button>
        </div>

        {/* Stats */}
        <div className="hero__stats animate-fadeInUp delay-5" ref={statsRef}>
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} animate={statsVisible} />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-indicator" onClick={() => scrollTo('about')}>
        <span>Scroll Down</span>
        <div className="scroll-arrow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
