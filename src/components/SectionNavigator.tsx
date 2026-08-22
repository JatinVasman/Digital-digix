import React, { useState, useEffect, useRef, useCallback } from 'react';

const SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'stats', label: 'Stats' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'showcase', label: 'Showcase' },
  { id: 'why-us', label: 'Why Us' },
  { id: 'legal', label: 'Legal' },
  { id: 'contact', label: 'Contact' },
];

interface SectionNavigatorProps {
  activePage: string;
}

export const SectionNavigator: React.FC<SectionNavigatorProps> = ({ activePage }) => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const visibilityMap = useRef<Map<string, number>>(new Map());

  const updateActiveSection = useCallback(() => {
    let maxRatio = 0;
    let mostVisible = 'hero';
    visibilityMap.current.forEach((ratio, id) => {
      if (ratio > maxRatio) {
        maxRatio = ratio;
        mostVisible = id;
      }
    });
    setActiveSection(mostVisible);
  }, []);

  // biome-ignore lint: observer setup runs on mount or when activePage changes
  useEffect(() => {
    // Cleanup any previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    if (activePage !== 'home') return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibilityMap.current.set(entry.target.id, entry.intersectionRatio);
        }
        updateActiveSection();
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.5, 0.7, 1],
        rootMargin: '-88px 0px -10% 0px',
      }
    );

    // Small delay to ensure all sections are rendered
    const timer = setTimeout(() => {
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el && observerRef.current) {
          observerRef.current.observe(el);
        }
      }
    }, 300);

    return () => {
      clearTimeout(timer);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [activePage, updateActiveSection]);

  // Only show on homepage
  if (activePage !== 'home') return null;

  const handleClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, sectionId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(sectionId);
    }
  };

  return (
    <nav className="section-nav" aria-label="Page sections">
      <div className="section-nav__track">
        {SECTIONS.map((section) => {
          const isActive = activeSection === section.id;
          const isHovered = hoveredId === section.id;

          return (
            <div key={section.id} className="section-nav__item">
              {/* Tooltip — positioned to the left */}
              <span
                className={`section-nav__tooltip ${isHovered ? 'section-nav__tooltip--visible' : ''}`}
                aria-hidden="true"
              >
                {section.label}
              </span>

              {/* Indicator button */}
              <button
                className={`section-nav__indicator ${isActive ? 'section-nav__indicator--active' : ''}`}
                onClick={() => handleClick(section.id)}
                onKeyDown={(e) => handleKeyDown(e, section.id)}
                onMouseEnter={() => setHoveredId(section.id)}
                onMouseLeave={() => setHoveredId(null)}
                onFocus={() => setHoveredId(section.id)}
                onBlur={() => setHoveredId(null)}
                aria-label={`Go to ${section.label}`}
                aria-current={isActive ? 'true' : undefined}
                title={section.label}
              />
            </div>
          );
        })}
      </div>
    </nav>
  );
};
