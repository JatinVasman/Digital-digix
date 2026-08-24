import React, { useState } from 'react';
import type { PageView } from '../types';
import { ALL_STATE_LOCATIONS, TOP_FOOTER_INTERNATIONAL_LOCATIONS } from '../data/locationsData';
import { WorkShowcaseMarquee } from '../components/WorkShowcaseMarquee';

interface LocationsDirectoryPageProps {
  onNavigate: (page: PageView) => void;
  onSelectLocation: (locationName: string) => void;
}

export const LocationsDirectoryPage: React.FC<LocationsDirectoryPageProps> = ({ onNavigate, onSelectLocation }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTab, setActiveTab] = useState<string>('All');

  const handleCityClick = (city: string) => {
    onSelectLocation(city);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredStates = ALL_STATE_LOCATIONS.filter((item) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    const matchesState = item.state.toLowerCase().includes(query);
    const matchesTier2 = item.tier2.some(c => c.toLowerCase().includes(query));
    const matchesTier3 = item.tier3_4.some(c => c.toLowerCase().includes(query));
    return matchesState || matchesTier2 || matchesTier3;
  });

  const filteredIntl = TOP_FOOTER_INTERNATIONAL_LOCATIONS.filter(loc =>
    !searchQuery || loc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalCitiesCount = ALL_STATE_LOCATIONS.reduce((acc, curr) => acc + curr.tier2.length + curr.tier3_4.length, 0) + TOP_FOOTER_INTERNATIONAL_LOCATIONS.length;

  return (
    <div style={{ backgroundColor: '#FDFBF7', minHeight: '100vh', padding: '2rem 0 6rem 0' }}>
      <div className="container" style={{ maxWidth: '1180px' }}>
        
        {/* 1. BREADCRUMB */}
        <div style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: '1.5rem' }}>
          <a href="/" style={{ color: '#3B82F6', textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Home</a>
          {' / '}
          <span style={{ color: '#0F172A', fontWeight: 700 }}>Complete Locations Directory</span>
        </div>

        {/* 2. HERO HEADER BANNER */}
        <div className="responsive-hero-card" style={{ background: '#FFFFFF', borderTop: '4px solid #FF4E27', borderLeft: '1px solid #E2E8F0', borderRight: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', borderRadius: '24px', padding: '3.5rem 3rem', marginBottom: '3rem', boxShadow: '0 15px 35px rgba(11,19,42,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ width: '30px', height: '1px', background: '#FF4E27' }}></span>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#FF4E27', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              PAN-INDIA & GLOBAL GEOGRAPHIC COVERAGE ({totalCitiesCount}+ MARKETS)
            </span>
          </div>

          <h1 style={{ fontFamily: 'Outfit, serif', fontSize: '3.2rem', fontWeight: 900, color: '#0F172A', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            Explore Our Complete Digital Marketing Locations Directory
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, maxWidth: '850px', marginBottom: '2.25rem' }}>
            Business Volunteers delivers data-driven performance marketing, Local SEO, Meta & Google PPC ads, social media management, and custom web engineering across Tier 1 Metros, Tier 2 Growth Hubs, Tier 3 & Tier 4 local markets in India, as well as International business hubs.
          </p>

          {/* SEARCH BAR & CATEGORY TABS CONTAINER */}
          <div style={{ background: '#F8FAFC', padding: '1.5rem', borderRadius: '20px', border: '1px solid #E2E8F0', display: 'flex', flexWrap: 'wrap', gap: '1.25rem', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '480px' }}>
              <input
                type="text"
                placeholder="🔍 Search any city or state (e.g. Gorakhpur, Kota, Ludhiana, USA)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.85rem 1.4rem',
                  borderRadius: '999px',
                  border: '1.5px solid #CBD5E1',
                  fontSize: '0.95rem',
                  outline: 'none',
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
                }}
              />
            </div>

            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              {['All', 'Tier 2 Metros', 'Tier 3 & 4 Cities', 'International'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    backgroundColor: activeTab === tab ? '#0F172A' : '#FFFFFF',
                    color: activeTab === tab ? '#FFFFFF' : '#475569',
                    border: activeTab === tab ? 'none' : '1px solid #CBD5E1',
                    padding: '0.55rem 1.25rem',
                    borderRadius: '999px',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: activeTab === tab ? '0 4px 12px rgba(15,23,42,0.15)' : 'none'
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 3. INTERNATIONAL DESTINATIONS GRID */}
        {(activeTab === 'All' || activeTab === 'International') && filteredIntl.length > 0 && (
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '24px', padding: '2.25rem', border: '1px solid #E2E8F0', marginBottom: '2.5rem', boxShadow: '0 8px 25px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #F1F5F9' }}>
              <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '1.6rem', fontWeight: 900, color: '#0F172A', margin: 0, display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ fontSize: '1.4rem' }}>🌍</span>
                <span>International Expansion Markets</span>
              </h2>
              <span style={{ fontSize: '0.825rem', fontWeight: 800, color: '#0284C7', backgroundColor: '#F0F9FF', padding: '0.35rem 0.9rem', borderRadius: '999px' }}>
                Global Cross-Border Hubs
              </span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {filteredIntl.map((loc) => {
                const citySlug = loc.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
                return (
                  <a
                    key={loc}
                    href={`/digital-marketing/${citySlug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleCityClick(loc);
                    }}
                    style={{
                      textDecoration: 'none',
                      backgroundColor: '#F0F9FF',
                      color: '#0284C7',
                      border: '1px solid #BAE6FD',
                      borderRadius: '999px',
                      padding: '0.6rem 1.4rem',
                      fontSize: '0.9rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      display: 'inline-block'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#0284C7';
                      e.currentTarget.style.color = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#F0F9FF';
                      e.currentTarget.style.color = '#0284C7';
                    }}
                  >
                    🌐 {loc} Digital Marketing →
                  </a>
                );
              })}
            </div>
          </div>
        )}

        {/* 4. STATE-BY-STATE DOMESTIC LOCATIONS GRID */}
        {(activeTab === 'All' || activeTab === 'Tier 2 Metros' || activeTab === 'Tier 3 & 4 Cities') && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginBottom: '4rem' }}>
            {filteredStates.map((stateData) => {
              const showTier2 = activeTab === 'All' || activeTab === 'Tier 2 Metros';
              const showTier3 = activeTab === 'All' || activeTab === 'Tier 3 & 4 Cities';

              const tier2List = stateData.tier2.filter(c => !searchQuery || c.toLowerCase().includes(searchQuery.toLowerCase()));
              const tier3List = stateData.tier3_4.filter(c => !searchQuery || c.toLowerCase().includes(searchQuery.toLowerCase()));

              if (!tier2List.length && !tier3List.length) return null;

              return (
                <div
                  key={stateData.state}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '24px',
                    padding: '2.25rem',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.03)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #F1F5F9' }}>
                    <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '1.6rem', fontWeight: 900, color: '#0F172A', margin: 0, display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <span style={{ fontSize: '1.4rem' }}>📍</span>
                      <span>{stateData.state} Coverage</span>
                    </h2>
                    <span style={{ fontSize: '0.825rem', fontWeight: 800, color: '#FF4E27', backgroundColor: '#FFF0ED', padding: '0.35rem 0.9rem', borderRadius: '999px' }}>
                      {stateData.tier2.length + stateData.tier3_4.length} Cities Covered
                    </span>
                  </div>

                  {/* TIER 2 METROS */}
                  {showTier2 && tier2List.length > 0 && (
                    <div style={{ marginBottom: '1.5rem' }}>
                      <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#3B82F6', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.85rem' }}>
                        TIER 2 MAJOR METRO HUBS
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                        {tier2List.map((city) => {
                          const citySlug = city.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
                          return (
                            <a
                              key={city}
                              href={`/digital-marketing/${citySlug}`}
                              onClick={(e) => {
                                e.preventDefault();
                                handleCityClick(city);
                              }}
                              style={{
                                textDecoration: 'none',
                                backgroundColor: '#F8FAFC',
                                color: '#0F172A',
                                border: '1px solid #CBD5E1',
                                borderRadius: '999px',
                                padding: '0.5rem 1.25rem',
                                fontSize: '0.875rem',
                                fontWeight: 700,
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                                display: 'inline-block'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#FF4E27';
                                e.currentTarget.style.color = '#FFFFFF';
                                e.currentTarget.style.borderColor = '#FF4E27';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '#F8FAFC';
                                e.currentTarget.style.color = '#0F172A';
                                e.currentTarget.style.borderColor = '#CBD5E1';
                              }}
                            >
                              {city} →
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* TIER 3 & 4 CITIES */}
                  {showTier3 && tier3List.length > 0 && (
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.85rem' }}>
                        TIER 3 & TIER 4 LOCAL MARKET COVERAGE
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {tier3List.map((city) => {
                          const citySlug = city.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
                          return (
                            <a
                              key={city}
                              href={`/digital-marketing/${citySlug}`}
                              onClick={(e) => {
                                e.preventDefault();
                                handleCityClick(city);
                              }}
                              style={{
                                textDecoration: 'none',
                                backgroundColor: '#FFFFFF',
                                color: '#475569',
                                border: '1px solid #E2E8F0',
                                borderRadius: '999px',
                                padding: '0.4rem 1rem',
                                fontSize: '0.825rem',
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                display: 'inline-block'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#0F172A';
                                e.currentTarget.style.color = '#FFFFFF';
                                e.currentTarget.style.borderColor = '#0F172A';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '#FFFFFF';
                                e.currentTarget.style.color = '#475569';
                                e.currentTarget.style.borderColor = '#E2E8F0';
                              }}
                            >
                              {city}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

      </div>

      <WorkShowcaseMarquee />

      {/* 5. BOTTOM WHATSAPP CTA BOX */}
      <div className="container" style={{ maxWidth: '1100px' }}>
        <div style={{ background: '#181311', borderRadius: '24px', padding: '3.5rem 2rem', textAlign: 'center', color: '#FFFFFF', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
          <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.5rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '0.5rem' }}>
            Don't see your city listed?
          </h2>
          <p style={{ fontSize: '1rem', color: '#94A3B8', marginBottom: '2rem' }}>
            We provide full-spectrum digital marketing and social growth for businesses in any location across India & Globally.
          </p>

          <a
            href="https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ backgroundColor: '#25D366', color: '#FFFFFF', padding: '0.95rem 2.5rem', borderRadius: '999px', fontWeight: 900, fontSize: '1rem', textDecoration: 'none', display: 'inline-block', boxShadow: '0 10px 30px rgba(37, 211, 102, 0.3)' }}
          >
            Chat on WhatsApp 💬 →
          </a>
        </div>
      </div>
    </div>
  );
};
