import './Footer.css';

const navLinks = [
  { label: 'Home',       id: 'home' },
  { label: 'Courses',    id: 'courses' },
  { label: 'Admission',  id: 'admission' },
  { label: 'Gallery',    id: 'gallery' },
  { label: 'About Us',   id: 'about' },
  { label: 'Contact Us', id: 'contact' },
];

const courses = [
  'JEE Main + Advanced',
  'JEE Main',
  'NEET-UG',
  'Foundation Courses',
  'NTSE Preparation',
  'Olympiad Preparation',
];

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="#0f172a"/>
        </svg>
      </div>

      <div className="footer__main">
        <div className="container footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <img src="/tmt-logo.png" alt="TMT Logo" className="footer__logo-img" />
              <div>
                <span className="footer__logo-name">THE MIRACLE</span>
                <span className="footer__logo-sub">TUTORIAL</span>
              </div>
            </div>
            <p className="footer__brand-desc">
              Premier coaching institute for JEE, NEET, Foundation Courses, NTSE & Olympiad preparation.
              Empowering students to achieve their dreams since our founding.
            </p>
            <div className="footer__contact-quick">
              <a href="tel:+916370324756">📞 6370324756</a>
              <a href="tel:+916371809622">📞 6371809622</a>
              <a href="mailto:www.themiracletutorial@gmail.com">✉️ www.themiracletutorial@gmail.com</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__links">
              {navLinks.map(({ label, id }) => (
                <li key={id}>
                  <button onClick={() => scrollTo(id)} className="footer__link">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div className="footer__col">
            <h4 className="footer__col-title">Our Courses</h4>
            <ul className="footer__links">
              {courses.map(c => (
                <li key={c}>
                  <button onClick={() => scrollTo('courses')} className="footer__link">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                    {c}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div className="footer__col">
            <h4 className="footer__col-title">Visit Us</h4>
            <address className="footer__address">
              <p>📍 Phase 2, Dumduma, Near SBI<br />Bhubaneswar, Odisha – 751019</p>
              <p>🕒 Mon – Sat: 7:00 AM – 8:00 PM</p>
            </address>
            <button
              className="footer__apply-btn btn btn-primary"
              onClick={() => scrollTo('admission')}
            >
              Apply Now →
            </button>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© Copyright 2021 - All Rights Reserved <strong>The Miracle Tutorial</strong></p>
          <p className="footer__bottom-right">Designed and Developed by <strong>Cosmic Thinking Lab</strong></p>
        </div>
      </div>
    </footer>
  );
}
