import { useEffect, useRef } from 'react';
import './WhyUs.css';

const reasons = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Experienced Faculty',
    desc: 'Our team of IIT/AIIMS alumni and veteran educators brings decades of teaching excellence and mentorship.',
    color: '#1a237e',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Best Study Material',
    desc: 'Meticulously curated study material, concise notes, and comprehensive question banks updated every year.',
    color: '#0284c7',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
      </svg>
    ),
    title: 'Regular Tests',
    desc: 'Weekly chapter tests, monthly full-length mock exams, and AIATS with detailed performance analytics.',
    color: '#059669',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
    title: 'Doubt Sessions',
    desc: 'Dedicated daily doubt-clearing sessions and one-on-one mentoring to ensure no student is left behind.',
    color: '#7c3aed',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    title: 'Excellent Results',
    desc: 'Over 200+ IIT/NEET selections annually with a track record of top AIR rankings and state toppers.',
    color: '#ea580c',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
    title: 'Personalized Guidance',
    desc: 'Individual study plans, regular parent-teacher meetings, and career counseling tailored to each student.',
    color: '#0d9488',
  },
];

export default function WhyUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .why-card').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" className="whyus-section" ref={sectionRef}>
      {/* Decorative background elements */}
      <div className="whyus__bg-glow whyus__bg-glow--1" />
      <div className="whyus__bg-glow whyus__bg-glow--2" />
      <div className="whyus__bg-dots" />

      <div className="container">
        <div className="section-header reveal">
          <p className="section-tag">✦ Our Strengths</p>
          <h2 className="section-title whyus__heading">Why Choose <span>TMT?</span></h2>
          <p className="section-subtitle">
            Discover what sets The Miracle Tutorial apart from the rest — every element designed for your success.
          </p>
          <div className="header-glow" />
        </div>

        <div className="whyus__grid">
          {reasons.map((reason, i) => (
            <div
              className="why-card reveal"
              key={i}
              style={{ '--card-color': reason.color }}
            >
              <div className="why-card__inner">
                {/* Number */}
                <span className="why-card__number">{String(i + 1).padStart(2, '0')}</span>

                <div className="why-card__header">
                  <div className="why-card__icon-wrap">
                    {reason.icon}
                    <div className="icon-glow" />
                  </div>
                  <div className="why-card__title-box">
                    <h3 className="why-card__title">{reason.title}</h3>
                    <div className="why-card__line" />
                  </div>
                </div>

                <p className="why-card__desc">{reason.desc}</p>

                {/* Decorative dots in card background */}
                <div className="why-card__dots" />
              </div>
              <div className="why-card__glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
