import React, { useState } from 'react';
import type { PageView } from '../types';

interface NotFoundPageProps {
  onNavigate: (page: PageView, slug?: string) => void;
  onOpenStrategyModal?: (note?: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate, onOpenStrategyModal }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    onNavigate('blog');
  };

  return (
    <div style={{
      backgroundColor: 'var(--bg-main)',
      color: 'var(--text-main)',
      minHeight: '85vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4rem 1.5rem',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        
        {/* 404 BADGE */}
        <div style={{
          display: 'inline-block',
          backgroundColor: 'rgba(255, 78, 39, 0.1)',
          color: '#FF4E27',
          padding: '0.4rem 1.25rem',
          borderRadius: '999px',
          fontSize: '0.85rem',
          fontWeight: 800,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '1.25rem'
        }}>
          Error 404
        </div>

        {/* H1 HEADING */}
        <h1 style={{
          fontFamily: 'Outfit, sans-serif',
          fontSize: '3.5rem',
          fontWeight: 900,
          lineHeight: 1.1,
          marginBottom: '1rem',
          color: 'var(--secondary)'
        }}>
          Page Not Found
        </h1>

        <p style={{
          fontSize: '1.15rem',
          color: 'var(--text-muted)',
          lineHeight: 1.6,
          marginBottom: '2.5rem'
        }}>
          The page you are looking for might have been moved, renamed, or is temporarily unavailable. 
          Use the quick links below or search our growth resources to find what you need.
        </p>

        {/* SEARCH FORM */}
        <form onSubmit={handleSearch} style={{
          display: 'flex',
          maxWidth: '480px',
          margin: '0 auto 3rem auto',
          background: 'var(--bg-card)',
          borderRadius: '999px',
          border: '1.5px solid var(--border-color)',
          padding: '0.35rem 0.35rem 0.35rem 1.25rem',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <input
            type="text"
            placeholder="Search articles, services, industries..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              backgroundColor: 'transparent',
              fontSize: '0.95rem',
              color: 'var(--text-main)'
            }}
          />
          <button
            type="submit"
            className="btn btn-primary"
            style={{
              borderRadius: '999px',
              padding: '0.6rem 1.5rem',
              fontSize: '0.875rem',
              cursor: 'pointer'
            }}
          >
            Search
          </button>
        </form>

        {/* QUICK NAVIGATION TILES */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1rem',
          marginBottom: '3rem'
        }}>
          <button
            onClick={() => onNavigate('home')}
            className="btn"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              color: 'var(--secondary)',
              padding: '1rem',
              borderRadius: '16px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s ease'
            }}
          >
            <span style={{ fontSize: '1.5rem' }}>🏠</span>
            <span>Homepage</span>
          </button>

          <button
            onClick={() => onNavigate('services')}
            className="btn"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              color: 'var(--secondary)',
              padding: '1rem',
              borderRadius: '16px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s ease'
            }}
          >
            <span style={{ fontSize: '1.5rem' }}>⚡</span>
            <span>All Services</span>
          </button>

          <button
            onClick={() => onNavigate('industries')}
            className="btn"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              color: 'var(--secondary)',
              padding: '1rem',
              borderRadius: '16px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s ease'
            }}
          >
            <span style={{ fontSize: '1.5rem' }}>🏭</span>
            <span>89+ Industries</span>
          </button>

          <button
            onClick={() => onNavigate('blog')}
            className="btn"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              color: 'var(--secondary)',
              padding: '1rem',
              borderRadius: '16px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s ease'
            }}
          >
            <span style={{ fontSize: '1.5rem' }}>📚</span>
            <span>Blog & Insights</span>
          </button>

          <button
            onClick={() => onNavigate('portfolio')}
            className="btn"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              color: 'var(--secondary)',
              padding: '1rem',
              borderRadius: '16px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s ease'
            }}
          >
            <span style={{ fontSize: '1.5rem' }}>📈</span>
            <span>Case Studies</span>
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="btn"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              color: 'var(--secondary)',
              padding: '1rem',
              borderRadius: '16px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s ease'
            }}
          >
            <span style={{ fontSize: '1.5rem' }}>📞</span>
            <span>Contact Us</span>
          </button>
        </div>

        {/* CTA ACTION */}
        {onOpenStrategyModal && (
          <div>
            <button
              onClick={() => onOpenStrategyModal('404 Recovery Session')}
              className="btn btn-primary"
              style={{
                borderRadius: '999px',
                padding: '0.9rem 2.2rem',
                fontWeight: 800,
                fontSize: '0.95rem'
              }}
            >
              Get Free Strategy Consultation →
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
