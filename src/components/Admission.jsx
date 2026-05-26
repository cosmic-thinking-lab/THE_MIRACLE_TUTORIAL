import { useEffect, useRef, useState } from 'react';
import './Admission.css';

const steps = [
  { step: '01', title: 'Contact Us', desc: 'Reach out via our contact section or visit us in person to start your journey.', icon: '💬' },
  { step: '02', title: 'Counseling Session', desc: 'Attend a FREE one-on-one counseling session with our academic advisor to choose the right program.', icon: '👨‍🏫' },
  { step: '03', title: 'Admission Test', desc: 'Appear for our diagnostic admission test to help us assess your current level and customize learning.', icon: '📝' },
  { step: '04', title: 'Complete Enrollment', desc: 'Submit documents, pay fees, and collect your study kit. Welcome to The Miracle Tutorial family!', icon: '🎓' },
];

export default function Admission() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right, .admission-step').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="admission" className="admission-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <p className="section-tag">✦ Join Us</p>
          <h2 className="section-title">Admission <span>Process</span></h2>
          <p className="section-subtitle">
            Getting started at TMT is simple. Follow these four easy steps to begin your journey to excellence.
          </p>
        </div>

        {/* Steps */}
        <div className="admission__steps">
          {steps.map((s, i) => (
            <div className="admission-step" key={i} style={{ '--delay': `${i * 0.1}s` }}>
              <div className="step__number">{s.step}</div>
              <div className="step__icon">{s.icon}</div>
              <h3 className="step__title">{s.title}</h3>
              <p className="step__desc">{s.desc}</p>
              {i < steps.length - 1 && <div className="step__connector" />}
            </div>
          ))}
        </div>

        {/* Redirect to Contact */}
        <div className="admission__cta reveal">
          <div className="cta-card">
            <div className="cta-content">
              <h3>Ready to Enroll?</h3>
              <p>For admissions and queries, please visit our contact section or reach out to us directly.</p>
              <button className="btn btn-primary btn-lg" onClick={scrollToContact}>
                Go to Contact Section
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: '10px' }}>
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
