import { useEffect, useRef, useState } from 'react';
import './Courses.css';

const courses = [
  {
    id: 'jee-adv',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
    ),
    title: 'JEE Main + Advanced',
    badge: 'Most Popular',
    badgeIcon: '⭐',
    badgeColor: 'gold',
    desc: 'Comprehensive preparation for both JEE Main & Advanced with in-depth coverage of Physics, Chemistry & Mathematics.',
    duration: '2 Years',
    features: ['Daily Practice Problems', 'Weekly Mock Tests', 'Doubt Clearing Sessions'],
    color: '#1a237e',
    bgIcon: (
      <svg className="course-card__bg-icon" viewBox="0 0 100 100" opacity="0.05">
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none"/>
        <circle cx="50" cy="50" r="10" fill="currentColor"/>
        <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="1"/>
      </svg>
    )
  },
  {
    id: 'jee-main',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: 'JEE Main',
    badge: 'High Demand',
    badgeIcon: '📈',
    badgeColor: 'blue',
    desc: 'Focused preparation for JEE Main covering all topics with regular revision and full-length mock exams.',
    duration: '1–2 Years',
    features: ['Chapter-wise Tests', 'NTA Pattern Practice', 'Rank Booster Sessions'],
    color: '#0284c7',
    bgIcon: (
      <svg className="course-card__bg-icon" viewBox="0 0 100 100" opacity="0.05">
        <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="1" fill="none"/>
        <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="1"/>
      </svg>
    )
  },
  {
    id: 'neet',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4.8 2.3c.5-.3 1.2-.3 1.7 0l12 7.2c.5.3.8.8.8 1.4v10.5c0 .6-.3 1.1-.8 1.4l-12 7.2c-.5.3-1.2.3-1.7 0l-12-7.2c-.5-.3-.8-.8-.8-1.4V10.9c0-.6.3-1.1.8-1.4l12-7.2z" opacity="0"/>
        <path d="M12 2v20M2 12h20M12 2a10 10 0 1 0 10 10"/>
      </svg>
    ),
    title: 'NEET-UG',
    badge: 'Top Results',
    badgeIcon: '🏆',
    badgeColor: 'green',
    desc: 'Expert-led NEET preparation covering Biology, Physics & Chemistry with focus on MCQ mastery and time management.',
    duration: '1–2 Years',
    features: ['NCERT Based Learning', 'Biology Deep Dives', 'Full Syllabus Revision'],
    color: '#059669',
    bgIcon: (
      <svg className="course-card__bg-icon" viewBox="0 0 100 100" opacity="0.05">
        <path d="M50 20 A30 30 0 1 0 80 50" stroke="currentColor" strokeWidth="2" fill="none"/>
        <circle cx="50" cy="50" r="5" fill="currentColor"/>
      </svg>
    )
  },
  {
    id: 'foundation',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Foundation Courses',
    badge: 'Class VIII–X',
    badgeIcon: '👥',
    badgeColor: 'purple',
    desc: 'Strong conceptual foundation for Class VIII–X students preparing for board exams and competitive entrance tests.',
    duration: '1 Year',
    features: ['Concept Building', 'Board Exam Prep', 'Competitive Edge'],
    color: '#7c3aed',
    bgIcon: (
      <svg className="course-card__bg-icon" viewBox="0 0 100 100" opacity="0.05">
        <path d="M20 80 L50 20 L80 80 Z" stroke="currentColor" strokeWidth="1" fill="none"/>
      </svg>
    )
  },
  {
    id: 'ntse',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
    title: 'NTSE Preparation',
    badge: 'Scholarship Exam',
    badgeIcon: '🎗️',
    badgeColor: 'orange',
    desc: 'Specialized coaching for NTSE Stage I & II with focus on Mental Ability, Scholastic Aptitude and Language tests.',
    duration: '6 Months',
    features: ['MAT + SAT Coverage', 'State Level Prep', 'Interview Guidance'],
    color: '#ea580c',
    bgIcon: (
      <svg className="course-card__bg-icon" viewBox="0 0 100 100" opacity="0.05">
        <path d="M30 30 L70 70 M70 30 L30 70" stroke="currentColor" strokeWidth="2"/>
      </svg>
    )
  },
  {
    id: 'olympiad',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Olympiad Preparation',
    badge: 'International',
    badgeIcon: '🌐',
    badgeColor: 'teal',
    desc: 'Olympiad training for Science, Math & Astronomy — NSO, IMO, IPhO, INChO — with advanced problem-solving techniques.',
    duration: '6 Months',
    features: ['Advanced Problem Solving', 'International Syllabus', 'Stage-wise Coaching'],
    color: '#0d9488',
    bgIcon: (
      <svg className="course-card__bg-icon" viewBox="0 0 100 100" opacity="0.05">
        <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" fill="none"/>
      </svg>
    )
  },
];

const badgeColors = {
  gold:   { bg: 'rgba(245,158,11,0.15)',   color: '#d97706' },
  blue:   { bg: 'rgba(2,132,199,0.15)',    color: '#0284c7' },
  green:  { bg: 'rgba(5,150,105,0.15)',    color: '#059669' },
  purple: { bg: 'rgba(124,58,237,0.15)',   color: '#7c3aed' },
  orange: { bg: 'rgba(234,88,12,0.15)',    color: '#ea580c' },
  teal:   { bg: 'rgba(13,148,136,0.15)',   color: '#0d9488' },
};

export default function Courses() {
  const sectionRef = useRef(null);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .course-card').forEach((el, i) => {
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

  const scrollToAdmission = () => {
    document.getElementById('admission')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="courses" className="courses-section" ref={sectionRef}>
      <div className="courses-section__bg-pattern" />
      <div className="container">
        <div className="section-header reveal">
          <p className="section-tag">✦ What We Offer</p>
          <h2 className="section-title">Our <span>Courses</span></h2>
          <p className="section-subtitle">
            Carefully designed programs for every stage of your academic journey — from foundation to the nation's toughest entrance exams.
          </p>
        </div>

        <div className="courses__grid">
          {courses.map((course) => {
            const bc = badgeColors[course.badgeColor];
            const isHovered = hoveredId === course.id;
            return (
              <div
                key={course.id}
                className="course-card reveal"
                style={{ '--course-color': course.color }}
                onMouseEnter={() => setHoveredId(course.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Top accent bar */}
                <div className="course-card__bar" />

                {/* Badge and Icon Row */}
                <div className="course-card__header">
                  <div className="course-card__icon-container">
                    {course.icon}
                  </div>
                  <span
                    className="course-badge"
                    style={{ background: bc.bg, color: bc.color }}
                  >
                    <span className="badge-icon">{course.badgeIcon}</span>
                    {course.badge}
                  </span>
                </div>

                {/* Background Pattern */}
                {course.bgIcon}

                {/* Content */}
                <h3 className="course-card__title">{course.title}</h3>
                <p className="course-card__desc">{course.desc}</p>

                {/* Features */}
                <ul className="course-card__features">
                  {course.features.map((f, i) => (
                    <li key={i}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="course-card__footer">
                  <div className="course-duration">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    Duration: <strong>{course.duration}</strong>
                  </div>
                  <button
                    className="course-enroll-btn"
                    onClick={scrollToAdmission}
                    style={{ background: course.color }}
                  >
                    Enroll Now
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
