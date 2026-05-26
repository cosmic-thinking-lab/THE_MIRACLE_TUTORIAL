import { useEffect, useRef } from 'react';
import './About.css';

const highlights = [
  { icon: '🎯', title: 'Focused Preparation', desc: 'Structured curriculum aligned with JEE, NEET & board exams.' },
  { icon: '🏆', title: 'Proven Track Record', desc: 'Consistent outstanding results year after year.' },
  { icon: '📚', title: 'Strong Foundation', desc: 'Building deep conceptual understanding from ground up.' },
  { icon: '👨‍🏫', title: 'Expert Faculty', desc: 'Highly qualified, dedicated educators committed to student success.' },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right')
              .forEach(el => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <p className="section-tag">✦ Who We Are</p>
          <h2 className="section-title">About <span>The Miracle Tutorial</span></h2>
          <p className="section-subtitle">Shaping futures through excellence in education since our founding.</p>
        </div>

        <div className="about__grid">
          {/* Left – Image / Decorative */}
          <div className="about__visual reveal-left">
            <div className="about__image-card">
              <div className="about__badge-top">
                <span>🌟</span>
                <div>
                  <strong>Premier Institute</strong>
                  <small>JEE · NEET · Foundation</small>
                </div>
              </div>
              <div className="about__director-card">
                  <div className="about__director-img-wrap">
                    <img src="https://i.ibb.co/Df3rScCT/sir.png" alt="Golakbihari Nayak" className="about__director-img" />
                  </div>
                <div className="about__director-info">
                  <h4 className="about__director-name">Golakbihari Nayak</h4>
                  <p className="about__director-title">Director of TMT</p>
                  <p className="about__director-sub">Lect. of Mathematics</p>
                </div>
              </div>
              <div className="about__floating-stat about__floating-stat--1">
                <strong>5000+</strong><span>Students</span>
              </div>
              <div className="about__floating-stat about__floating-stat--2">
                <strong>200+</strong><span>Selections</span>
              </div>
              <div className="about__floating-stat about__floating-stat--3">
                <strong>15+</strong><span>Years</span>
              </div>
            </div>
          </div>

          {/* Right – Text */}
          <div className="about__text reveal-right">
            <p className="section-tag">Our Story</p>
            <h3 className="about__heading">Building Champions,<br/>One Student at a Time</h3>

            <p className="about__para">
              <strong>THE MIRACLE TUTORIAL</strong> is a premier coaching institute for the preparation of
              JEE (Main + Advanced), JEE (Main), Pre-Medical (NEET-UG), Pre-Nurture &amp; Career Foundation
              (Class VIII to XII, NTSE &amp; Olympiads).
            </p>
            <p className="about__para">
              The institute is well regarded for high-quality entrance exam preparation and produces excellent
              results year after year. At TMT, we focus on building a strong foundation of knowledge and concepts
              in students for their success.
            </p>
            <p className="about__para">
              We provide an excellent platform for competitive exams and board-level education. Our highly
              qualified and experienced faculties are dedicated to students' success and overall development.
            </p>

            <div className="about__highlights">
              {highlights.map((h, i) => (
                <div className="about__highlight-card" key={i}>
                  <span className="highlight-icon">{h.icon}</span>
                  <div>
                    <strong>{h.title}</strong>
                    <p>{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
