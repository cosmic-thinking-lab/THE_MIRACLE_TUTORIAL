import { useEffect, useRef, useState } from 'react';
import './Gallery.css';

const categories = [
  { id: 'all', label: 'All Gallery', icon: '▦' },
  { id: 'support', label: 'Support Services', icon: '🎧' },
  { id: 'policies', label: 'Coaching Policies', icon: '🛡️' },
  { id: 'campus', label: 'Campus Life', icon: '🏫' },
  { id: 'achievements', label: 'Achievements', icon: '🏆' },
];

const galleryItems = [
  // Support Services
  { id: 1, category: 'support', title: 'Library & Study Hall', desc: 'Well-stocked library with reference materials and peaceful study environment.', image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800', icon: '📖', color: '#7c3aed' },
  { id: 2, category: 'support', title: 'Doubt Clearing Sessions', desc: 'Regular one-on-one doubt solving sessions with expert faculty.', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800', icon: '💬', color: '#0284c7' },
  { id: 3, category: 'support', title: 'Online Resources', desc: 'Access to digital learning materials, tests, and practice platforms.', image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800', icon: '💻', color: '#059669' },
  { id: 4, category: 'support', title: 'Counseling Services', desc: 'Career guidance and stress management support for students.', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800', icon: '👥', color: '#ea580c' },
  { id: 5, category: 'support', title: 'Study Material', desc: 'Comprehensive notes and updated study guides for all courses.', image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800', icon: '📚', color: '#db2777' },
  { id: 6, category: 'support', title: 'Mock Tests', desc: 'Weekly and monthly mock exams to improve exam readiness.', image: 'https://images.unsplash.com/photo-1484941959180-c1f96e969ec0?q=80&w=800', icon: '📝', color: '#4f46e5' },
  
  // Coaching Policies
  { id: 7, category: 'policies', title: 'Attendance Discipline', desc: 'Students are encouraged to attend all classes regularly.', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800', icon: '📅', color: '#0d9488' },
  { id: 8, category: 'policies', title: 'Code of Conduct', desc: 'Maintaining mutual respect among students and faculty.', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800', icon: '🤝', color: '#1a237e' },
  { id: 9, category: 'policies', title: 'Regular Assessments', desc: 'Frequent evaluations to monitor progress and performance.', image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800', icon: '📊', color: '#ea580c' },
  { id: 10, category: 'policies', title: 'Parental Engagement', desc: 'Regular parent-teacher meetings and progress discussions.', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800', icon: '👨‍👩‍👧', color: '#be123c' },
  { id: 11, category: 'policies', title: 'Health & Safety', desc: 'Safe, secure, and student-friendly campus environment.', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800', icon: '🛡️', color: '#15803d' },
];

const colors = [
  'linear-gradient(135deg,#1a237e 0%,#283593 100%)',
  'linear-gradient(135deg,#0369a1 0%,#0ea5e9 100%)',
  'linear-gradient(135deg,#065f46 0%,#059669 100%)',
  'linear-gradient(135deg,#92400e 0%,#f59e0b 100%)',
  'linear-gradient(135deg,#6d28d9 0%,#a78bfa 100%)',
  'linear-gradient(135deg,#9d174d 0%,#f43f5e 100%)',
  'linear-gradient(135deg,#0f766e 0%,#14b8a6 100%)',
  'linear-gradient(135deg,#c2410c 0%,#fb923c 100%)',
];

export default function Gallery() {
  const sectionRef = useRef(null);

  const activeTab = 'all'; // Default to show all
  const filteredItems = galleryItems;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .gallery-card').forEach((el, i) => {
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
    <section id="gallery" className="gallery-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-badge">
            <span>🖼️</span> OUR GALLERY
          </div>
          <h2 className="section-title gallery__title">
            Learning Environment <span>That Builds Success</span>
          </h2>
          <p className="section-subtitle">
            Explore the facilities, support systems, and disciplined academic culture at The Miracle Tutorial, Dumduma, Bhubaneswar.
          </p>
        </div>

        {/* Category Labels (Non-clickable) */}
        <div className="gallery__tabs reveal">
          {categories.map(cat => (
            <div
              key={cat.id}
              className="gallery__tab"
            >
              <span className="tab-icon">{cat.icon}</span>
              {cat.label}
            </div>
          ))}
        </div>

        {/* Gallery Content */}
        <div className="gallery__content">
          
          {/* Support Services Section */}
          <div className="gallery__category-section">
            <div className="gallery__sub-header reveal">
              <div className="sub-header__title">
                <span className="sub-icon">🎧</span>
                <h3>SUPPORT SERVICES</h3>
                <div className="header-line" />
              </div>
              <p>Facilities and support systems that enhance learning and ensure student success.</p>
            </div>
            <div className="gallery__grid">
              {galleryItems.filter(item => item.category === 'support').map((item) => (
                <GalleryCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Coaching Policies Section */}
          <div className="gallery__category-section" style={{ marginTop: '60px' }}>
            <div className="gallery__sub-header reveal">
              <div className="sub-header__title">
                <span className="sub-icon">🛡️</span>
                <h3>COACHING POLICIES</h3>
                <div className="header-line" />
              </div>
              <p>Our guidelines and policies ensure a disciplined, positive and result-oriented environment.</p>
            </div>
            <div className="gallery__grid">
              {galleryItems.filter(item => item.category === 'policies').map((item) => (
                <GalleryCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GalleryCard({ item }) {
  return (
    <div className="gallery-card reveal">
      <div className="gallery-card__img-wrap">
        <img src={item.image} alt={item.title} loading="lazy" />
        <div className="gallery-card__overlay">
          <div className="card-content">
            <div className="card-icon" style={{ background: item.color }}>
              {item.icon}
            </div>
            <div className="card-text">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
