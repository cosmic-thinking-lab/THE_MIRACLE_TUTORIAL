import { useEffect, useRef } from 'react';
import './Contact.css';

const contactInfo = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Our Address',
    value: 'Phase 2, Dumduma, Near SBI, Bhubaneswar, Odisha, 751019',
    link: 'https://www.google.com/maps/place/The+Miracle+Tutorial/data=!4m2!3m1!1s0x0:0x95c40ed4b783b300',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.5 19.79 19.79 0 01.22 5.18 2 2 0 012.18 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 10.09a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0121 16.92z"/>
      </svg>
    ),
    label: 'Phone',
    value: '9938669552, 6370324756',
    link: 'tel:+919938669552',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'www.themiracletutorial@gmail.com',
    link: 'mailto:www.themiracletutorial@gmail.com',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    label: 'Working Hours',
    value: 'Mon – Sat: 7:00 AM – 8:00 PM',
    link: null,
  },
];



export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el, i) => {
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

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <p className="section-tag">✦ Get In Touch</p>
          <h2 className="section-title">Contact <span>Us</span></h2>
          <p className="section-subtitle">
            We're here to help. Reach out to us for admissions, course queries, or anything else.
          </p>
        </div>

        <div className="contact__grid">
          {/* Info Cards */}
          <div className="contact__info reveal-left">
            <div className="contact__info-cards">
              {contactInfo.map((info, i) => (
                <div className="contact-info-card" key={i}>
                  <div className="contact-info-card__icon">{info.icon}</div>
                  <div className="contact-info-card__text">
                    <span className="info-label">{info.label}</span>
                    {info.link ? (
                      <a href={info.link} className="info-value info-value--link">{info.value}</a>
                    ) : (
                      <span className="info-value">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>


          </div>

          {/* Map */}
          <div className="contact__map reveal-right">
            <div className="map-wrapper">
              <iframe
                title="The Miracle Tutorial Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.232539063806!2d85.78913867605963!3d20.23594001476142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x95c40ed4b783b300!2sThe%20Miracle%20Tutorial!5e0!3m2!1sen!2sin!4v1715690000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="map-pin">
                <div className="map-pin__dot">📍</div>
                <div className="map-pin__label">The Miracle Tutorial</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
