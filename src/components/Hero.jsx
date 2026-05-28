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




        {/* New Courses Launched */}
        <div className="hero__new-courses animate-fadeInUp delay-4b">
          <div className="hero__new-courses-label">
            <div className="label-line" />
            <span>🚀 NEW COURSES LAUNCHED</span>
            <div className="label-line" />
          </div>
          <div className="hero__course-cards">
            <div className="hero-course-card" style={{'--hcc-color': '#db2777'}}>
              <div className="hero-course-card__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <div className="hero-course-card__info">
                <h4>FRONTEND <span>DEVELOPMENT</span></h4>
                <p>HTML • CSS • JavaScript</p>
              </div>
            </div>
            <div className="hero-course-card" style={{'--hcc-color': '#4338ca'}}>
              <div className="hero-course-card__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
                  <line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
                </svg>
              </div>
              <div className="hero-course-card__info">
                <h4>BACKEND <span>DEVELOPMENT</span></h4>
                <p>Node.js • Express • DB • APIs</p>
              </div>
            </div>
            <div className="hero-course-card" style={{'--hcc-color': '#0891b2'}}>
              <div className="hero-course-card__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
                </svg>
              </div>
              <div className="hero-course-card__info">
                <h4>FULLSTACK <span>DEVELOPMENT</span></h4>
                <p>Frontend • Backend • Database</p>
              </div>
            </div>
          </div>
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
