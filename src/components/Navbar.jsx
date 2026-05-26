import { useState, useEffect, useCallback } from 'react';
import './Navbar.css';

const navLinks = [
  { id: 'home',      label: 'Home' },
  { id: 'courses',   label: 'Courses' },
  { id: 'admission', label: 'Admission' },
  { id: 'gallery',   label: 'Gallery' },
  { id: 'about',     label: 'About Us' },
  { id: 'contact',   label: 'Contact Us' },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [activeSection, setActive] = useState('home');

  /* ── scroll → shrink navbar & detect active section ── */
  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);

    const offsets = navLinks.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return { id, top: Infinity };
      return { id, top: Math.abs(el.getBoundingClientRect().top - 90) };
    });
    const nearest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
    setActive(nearest.id);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  /* ── lock body scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="container navbar__inner">
          {/* Logo */}
          <button className="navbar__logo" onClick={() => scrollTo('home')} aria-label="Go to home">
            <div className="logo-icon">
              <img src="https://i.ibb.co/Kx3qs5c8/Whats-App-Image-2026-05-14-at-8-23-40-PM.jpg" alt="TMT Logo" className="logo-img" style={{ height: '56px', width: 'auto' }} />
            </div>
          </button>

          {/* Desktop links */}
          <ul className="navbar__links">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <button
                  className={`nav-link${activeSection === id ? ' nav-link--active' : ''}`}
                  onClick={() => scrollTo(id)}
                >
                  {label}
                  <span className="nav-link__underline" />
                </button>
              </li>
            ))}
          </ul>



          {/* Hamburger */}
          <button
            className={`hamburger${menuOpen ? ' hamburger--open' : ''}`}
            onClick={() => setMenuOpen(p => !p)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`}>
        <ul className="mobile-menu__links">
          {navLinks.map(({ id, label }, i) => (
            <li key={id} style={{ animationDelay: `${i * 0.07}s` }}>
              <button
                className={`mobile-nav-link${activeSection === id ? ' mobile-nav-link--active' : ''}`}
                onClick={() => scrollTo(id)}
              >
                {label}
              </button>
            </li>
          ))}

        </ul>
      </div>
    </>
  );
}
