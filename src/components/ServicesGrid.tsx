import React, { useState } from 'react';
import { WorkShowcaseMarquee } from './WorkShowcaseMarquee';
import { SERVICE_ID_TO_SLUG } from '../utils/routes';

import { ALL_17_SERVICES, type ServiceItem } from '../data/servicesData';

export type ComprehensiveServiceItem = ServiceItem;

export interface PricingCategory {
  title: string;
  subtitle: string;
  items: { name: string; price: string }[];
}

export const serviceApproachResults: Record<string, { approach: string; typicalResults: string }> = {
  'Social Media Marketing': {
    approach: 'Content-first brand storytelling: we build custom visual grids, write direct-response copy, and schedule at peak-hour traffic slots.',
    typicalResults: 'Clients see an average of 40% organic follower growth and 2.5x increase in DM-to-lead conversion rates.'
  },
  'Graphic Design': {
    approach: 'Share your brief on WhatsApp, choose the design type, and we deliver print- and web-ready files with revisions. Transparent per-design pricing means you know the cost before we start — no surprises.',
    typicalResults: 'Brands get consistent, conversion-focused creatives delivered fast — often within 24–48 hours for standard formats — at a fraction of typical agency rates.'
  },
  'UGC Reels & Creator Marketing': {
    approach: 'Story hook psychology: we script high-impact hooks, direct vetted creators, and edit with fast-paced retention editing styles.',
    typicalResults: 'UGC ads generate 4x higher CTR and up to 35% lower cost-per-acquisition compared to static graphics.'
  },
  'Dashboard & KPI Systems': {
    approach: 'Unified data architecture: we integrate GA4, Shopify, Meta Ads, and CRMs into a single interactive visualization.',
    typicalResults: 'Operational teams save 5+ hours weekly on manual reporting and gain absolute visibility into true blended ROAS.'
  },
  'SEO Services': {
    approach: 'Semantic relevance & speed: technical site audits combined with high-intent keyword maps and digital PR backlink outreach.',
    typicalResults: 'Predictable organic search traffic growth with 60% of target keywords reaching Page 1 of Google in 90 days.'
  },
  'Google Ads Management': {
    approach: 'Intent-driven bidding optimization: we write high-relevance search headlines and structure smart performance max funnels.',
    typicalResults: 'Higher click-through-rates (CTR) and an average of 3.8x return on ad spend (ROAS) across campaigns.'
  },
  'Meta Ads Management': {
    approach: 'Creative-led performance scaling: constant variations of visual creatives, high-retention video hooks, and custom lookalike segmentation.',
    typicalResults: 'Consistent, scalable lead flow and lower cost-per-lead (CPL) by up to 45% compared to baseline.'
  },
  'Website Development': {
    approach: 'Design for conversion first: clear CTAs, trust signals and sub-3-second loads — then layer in SEO architecture so the site earns traffic from day one.',
    typicalResults: 'Client websites average 90+ mobile speed scores and 2–3x enquiry rates vs. their old sites.'
  },
  'WhatsApp Marketing': {
    approach: 'Permission-based lifecycle flows: automated cart recovery alerts, broadcast lists, and interactive customer support chatbot nodes.',
    typicalResults: 'Average open rates of 95% and up to 15% recovery on abandoned carts without active manual intervention.'
  },
  'Email Marketing Funnels': {
    approach: 'Segmentation & value nurturing: automated customer onboarding sequences, seasonal promotions, and behavioral drip triggers.',
    typicalResults: 'Email channel revenue contribution increases to 20%+ of overall sales with zero media spend.'
  },
  'Influencer Marketing': {
    approach: 'Micro-influencer alignment: sourcing high-engagement creators in your niche and structuring performance-based commission campaigns.',
    typicalResults: 'Authentic brand endorsements yielding 3x social referral traffic spikes and increased brand search volume.'
  },
  'B2B Lead Generation': {
    approach: 'Account-based targeting: custom sales copywriting, automated LinkedIn sequences, and landing page asset downloads.',
    typicalResults: 'A predictable monthly pipeline of qualified corporate decision-makers booking directly on calendars.'
  },
  'E-commerce Scaling': {
    approach: 'Full-funnel monetization: landing page optimization, custom bundling offers, and high-frequency dynamic product retargeting.',
    typicalResults: 'E-commerce stores see 2.8x average growth in digital revenue and improved customer lifetime value (LTV).'
  },
  'Conversion Rate Optimization': {
    approach: 'Behavioral intelligence tracking: heatmaps, screen recordings, user friction analyses, and structured A/B testing of headers and CTAs.',
    typicalResults: 'Boost checkout and lead conversion rates by 20% to 50% without increasing advertising spend.'
  },
  'Local Business SEO': {
    approach: 'Geotargeted optimization: citation building, Google Business Profile local keyword mapping, and positive review generation systems.',
    typicalResults: 'Rank in the local top-3 map pack, driving up to 80% more local telephone calls and map direction requests.'
  },
  'AI Automation Systems': {
    approach: 'Process optimization: building custom OpenAI API middleware, auto-answering email ticket routines, and internal CRM integrations.',
    typicalResults: 'Reduce manual administrative tasks by 70%, boosting corporate operational response speeds.'
  },
  'Brand Identity Design': {
    approach: 'Strategic visual mapping: customer psychology profiling, custom typography logo guides, and full brand guideline systems.',
    typicalResults: 'Establish a premium market authority perception, enabling brands to justify 20% to 50% higher price points.'
  }
};

export const graphicDesignPricingData: PricingCategory[] = [
  {
    title: "Standard Creatives — ₹150 each",
    subtitle: "Single-page social & digital formats.",
    items: [
      { name: "Poster Design", price: "₹150" },
      { name: "Flyer Design", price: "₹150" },
      { name: "Pamphlet Design", price: "₹150" },
      { name: "Leaflet Design", price: "₹150" },
      { name: "Social Media Post Design", price: "₹150" },
      { name: "Festival Post Design", price: "₹150" },
      { name: "Promotional Post Design", price: "₹150" },
      { name: "Product Post Design", price: "₹150" },
      { name: "Offer Post Design", price: "₹150" },
      { name: "Event Poster Design", price: "₹150" },
      { name: "School Admission Creative", price: "₹150" },
      { name: "Food Promotion Poster", price: "₹150" },
      { name: "Meta Ad Creative", price: "₹150" },
      { name: "Google Display Ad", price: "₹150" },
      { name: "Google Banner Ad", price: "₹150" },
      { name: "WhatsApp Marketing Creative", price: "₹150" },
      { name: "App Promotion Creative", price: "₹150" }
    ]
  },
  {
    title: "Structured Designs — ₹280 each",
    subtitle: "Layout complexity — cards, certificates, menus.",
    items: [
      { name: "Visiting Card Design", price: "₹280" },
      { name: "Letterhead Design", price: "₹280" },
      { name: "ID Card Design", price: "₹280" },
      { name: "Certificate Design", price: "₹280" },
      { name: "Quotation Design", price: "₹280" },
      { name: "Carousel Design", price: "₹280" },
      { name: "Menu Card Design", price: "₹280" },
      { name: "YouTube Banner Design", price: "₹280" },
      { name: "Event Invitation Design", price: "₹280" }
    ]
  },
  {
    title: "Multi-Page Documents — ₹130 / page",
    subtitle: "Billed per page or per slide.",
    items: [
      { name: "PPT / Presentation Design", price: "₹130/slide" },
      { name: "Investor Pitch Deck", price: "₹130/slide" },
      { name: "Sales Presentation", price: "₹130/slide" },
      { name: "Business Proposal Design", price: "₹130/slide" },
      { name: "Training Presentation", price: "₹130/slide" },
      { name: "Catalogue Design", price: "₹130/page" },
      { name: "School Magazine Design", price: "₹130/page" },
      { name: "Prospectus Design", price: "₹130/page" },
      { name: "Annual Report Design", price: "Custom Quote" }
    ]
  },
  {
    title: "Large-Format & Corporate Branding — ₹499+",
    subtitle: "Outdoor, packaging & corporate identity.",
    items: [
      { name: "Standee Design", price: "₹649" },
      { name: "Flex Banner Design", price: "₹649" },
      { name: "Roll-Up Banner Design", price: "₹649" },
      { name: "Hoarding Design", price: "₹1,149" },
      { name: "Billboard Design", price: "₹1,149" },
      { name: "Shop Branding Design", price: "₹1,649 onwards" },
      { name: "Vehicle Branding Design", price: "₹1,149 onwards" },
      { name: "Wall Branding Design", price: "₹1,149 onwards" },
      { name: "Product Packaging Design", price: "₹1,649" },
      { name: "Box Packaging Design", price: "₹2,149" },
      { name: "Company Profile Design", price: "₹1,999 onwards" },
      { name: "Brand Guidelines", price: "₹2,999 onwards" },
      { name: "Logo Design", price: "₹850 – ₹3,500" }
    ]
  },
  {
    title: "Packaging & Product Design",
    subtitle: "Custom commercial packaging layouts.",
    items: [
      { name: "Product Label Design", price: "₹649" },
      { name: "Product Tag Design", price: "₹430" },
      { name: "Shopping Bag Design", price: "₹649" },
      { name: "Product Mockup Design", price: "₹430" }
    ]
  },
  {
    title: "Restaurant & Hospitality",
    subtitle: "Branding materials for dining and hotels.",
    items: [
      { name: "Restaurant Menu Design", price: "₹649" },
      { name: "Room Service Menu Design", price: "₹649" },
      { name: "Hotel Brochure Design", price: "₹1,149" },
      { name: "Tent Card Design", price: "₹430" }
    ]
  },
  {
    title: "Custom & Creative Services",
    subtitle: "Tailored creative illustrations and retouching.",
    items: [
      { name: "Infographic Design", price: "₹649" },
      { name: "Vector Tracing", price: "₹649" },
      { name: "Photo Retouching", price: "₹430" },
      { name: "Photo Manipulation", price: "₹649" },
      { name: "AI Image Enhancement", price: "₹150" },
      { name: "Merchandise Design", price: "₹649" },
      { name: "T-Shirt Design", price: "₹649" },
      { name: "Landing Page Graphics", price: "₹649" },
      { name: "Custom Illustration", price: "Custom Quote" },
      { name: "Custom Artwork", price: "Custom Quote" }
    ]
  }
];

const smmPackagesData = [
  {
    name: 'Starter',
    price: '3,499',
    features: [
      '2 Social Platforms',
      '12 Posts/Month',
      '3 Reels Edited',
      '1 Festival Poster',
      'Monthly Report'
    ],
    badge: '',
    popular: false,
    whatsappText: 'Hi, I am interested in your services'
  },
  {
    name: 'Growth',
    price: '5,999',
    features: [
      '3 Social Platforms',
      '20 Posts/Month',
      '8 Reels Edited',
      '3 Festival Posters',
      'Meta Ads Setup',
      'Monthly Strategy Call'
    ],
    badge: 'MOST POPULAR',
    popular: true,
    whatsappText: 'Hi, I am interested in your services'
  },
  {
    name: 'Pro',
    price: '8,999',
    features: [
      '4 Social Platforms',
      '30 Posts/Month',
      '12 Reels Edited',
      '6 Festival Posters',
      'Full Meta Ads Management',
      'Google My Business',
      'Weekly Report'
    ],
    badge: 'BEST ROI',
    popular: false,
    whatsappText: 'Hi, I am interested in your services'
  }
];

const partnershipTiersData = [
  {
    tier: '3-4 Accounts',
    discount: '10% OFF',
    desc: 'Perfect for boutique agencies',
    tag: ''
  },
  {
    tier: '5-9 Accounts',
    discount: '15% OFF',
    desc: 'Mid-size agencies & resellers',
    tag: 'MOST POPULAR'
  },
  {
    tier: '10-49 Accounts',
    discount: '20% OFF',
    desc: 'Large agency portfolios',
    tag: 'BEST VALUE'
  },
  {
    tier: '50+ Accounts',
    discount: 'Custom',
    desc: 'Enterprise + dedicated manager',
    tag: 'ENTERPRISE'
  }
];

const smmFaqsData = [
  {
    q: 'What makes Digital Digix different from other agencies?',
    a: 'We focus on pure results with no long-term lock-in retainer traps, and we provide transparent pay-per-performance execution led directly by founders.'
  },
  {
    q: 'How long before I see SMM results?',
    a: 'While organic SEO takes months, our SMM campaigns deliver high-quality engagement, viral reels, and targeted lead generation within 24 to 72 hours of ad campaigns going live.'
  },
  {
    q: 'Is there a lock-in contract?',
    a: 'Absolutely not. All our social media marketing packages are billed month-to-month. You are free to scale up, scale down, or cancel at any time with no penalties.'
  },
  {
    q: 'Is post-pay available at Digital Digix?',
    a: 'Yes, we offer pay-after-results or pay-per-outcome performance setups for qualified brands after aligning on upfront lead definitions and targets.'
  },
  {
    q: 'Do you offer B2B or agency discounts?',
    a: 'Yes! Our B2B & Agency Tiers provide up to 20% off for partners managing multiple client accounts under white-label execution.'
  },
  {
    q: 'Which package should I choose?',
    a: 'The Starter package is great for brand consistency, the Growth package is perfect for active lead generation, and the Pro package is designed for maximum market dominance.'
  }
];

export const detailed17Services: ComprehensiveServiceItem[] = ALL_17_SERVICES;

interface ServicesGridProps {
  onOpenStrategyModal: (serviceName?: string) => void;
  onNavigate?: (page: any, slug?: string) => void;
  backgroundColor?: string;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ 
  onNavigate,
  backgroundColor
}) => {
  const [selectedService, setSelectedService] = useState<ComprehensiveServiceItem | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [viewingSmmDetails, setViewingSmmDetails] = useState(false);
  const [openInlineSmmFaqIndex, setOpenInlineSmmFaqIndex] = useState<number | null>(null);

  return (
    <section id="services" style={{ padding: '6rem 0', backgroundColor: backgroundColor || 'var(--bg-main)' }}>
      <div className="container">
        
        {viewingSmmDetails ? (
          <div>
            <button
              onClick={() => setViewingSmmDetails(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.95rem',
                fontWeight: 700,
                color: '#0F172A',
                backgroundColor: '#F1F5F9',
                padding: '0.5rem 1.25rem',
                borderRadius: '999px',
                border: '1px solid #CBD5E1',
                marginBottom: '2rem',
                cursor: 'pointer'
              }}
            >
              ← Back to All Services
            </button>

            {/* FULL SMM DETAILS SECTION */}
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <div className="section-tag" style={{ color: '#3B82F6', background: 'rgba(59, 130, 246, 0.1)' }}>SMM HUB & CREATOR NETWORK</div>
              <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '3.4rem', fontWeight: 900, marginBottom: '1rem', color: '#0F172A', letterSpacing: '-0.02em' }}>
                Social Media Marketing & Viral Reach Engine
              </h2>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '750px', margin: '0 auto' }}>
                Scale your brand's organic and paid presence across Instagram, Facebook, LinkedIn, YouTube, and UGC creator networks to convert followers into paying customers.
              </p>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#D97706', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                — TRANSPARENT VALUE —
              </div>
              <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '0.75rem' }}>
                Packages & Pay-As-You-Go
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
                Flexible plans, no retainer traps. Only pay for outcomes that matter.
              </p>
            </div>

            {/* smm packages grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', maxWidth: '1140px', margin: '0 auto 3rem auto', alignItems: 'stretch' }} className="graphics-pricing-grid">
              {smmPackagesData.map((pkg, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: pkg.popular ? '#1A1311' : '#FFFFFF',
                    color: pkg.popular ? '#FFFFFF' : '#0F172A',
                    border: pkg.popular ? '2px solid #D97706' : '1px solid #E2E8F0',
                    borderRadius: '28px',
                    padding: '2.25rem 2rem 2rem 2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: pkg.popular ? '0 15px 35px rgba(217, 119, 6, 0.1)' : '0 10px 30px rgba(0, 0, 0, 0.02)',
                    position: 'relative'
                  }}
                >
                  {pkg.badge && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '-14px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: '#D97706',
                        color: '#FFFFFF',
                        padding: '0.4rem 1.25rem',
                        borderRadius: '999px',
                        fontSize: '0.75rem',
                        fontWeight: 900,
                        letterSpacing: '0.08em',
                        boxShadow: '0 4px 12px rgba(217, 119, 6, 0.25)'
                      }}
                    >
                      {pkg.badge}
                    </span>
                  )}

                  <div style={{ marginBottom: '1.25rem' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, color: pkg.popular ? '#E0B56C' : '#D97706', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                      {pkg.name}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'baseline', marginTop: '0.4rem' }}>
                      <span style={{ fontSize: '2.5rem', fontWeight: 900, fontFamily: 'Outfit, serif' }}>
                        ₹{pkg.price}
                      </span>
                      <span style={{ fontSize: '0.9rem', color: pkg.popular ? '#94A3B8' : '#64748B', marginLeft: '0.25rem', fontWeight: 600 }}>
                        /mo
                      </span>
                    </div>
                  </div>

                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', listStyle: 'none', padding: 0, margin: '0 0 1.75rem 0', flex: 1, fontSize: '0.95rem' }}>
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <span style={{ color: pkg.popular ? '#E0B56C' : '#D97706', fontWeight: 900 }}>✓</span>
                        <span style={{ color: pkg.popular ? '#E2E8F0' : '#475569', fontWeight: 500 }}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20services`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      padding: '1rem',
                      borderRadius: '999px',
                      fontWeight: 800,
                      fontSize: '0.95rem',
                      textDecoration: 'none',
                      backgroundColor: pkg.popular ? '#E0B56C' : '#1A1311',
                      color: pkg.popular ? '#1A1311' : '#FFFFFF',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    Get Started →
                  </a>
                </div>
              ))}
            </div>

            {/* SMM Pay-as-you-go box */}
            <div
              style={{
                maxWidth: '1140px',
                margin: '0 auto 5rem auto',
                background: 'linear-gradient(135deg, #F0F6FC 0%, #E3EBF4 100%)',
                border: '1px dashed rgba(59, 130, 246, 0.35)',
                borderRadius: '24px',
                padding: '2.5rem',
                boxShadow: '0 10px 30px rgba(59, 130, 246, 0.03)',
                textAlign: 'left'
              }}
            >
              <div style={{ fontSize: '0.725rem', fontWeight: 900, color: '#3B82F6', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                — PAY-AS-YOU-GO —
              </div>
              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                Prefer outcomes over retainers? Our pay-per-performance model lets you pay only for leads that meet criteria agreed upfront — budget, location and intent. Single deliverables start tiny: posters from ₹149, reels from ₹380, dashboards from ₹2,000. <a href="https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20services" target="_blank" rel="noopener noreferrer" style={{ color: '#3B82F6', fontWeight: 800, textDecoration: 'underline' }}>Request a quote</a> and we'll build a plan around your numbers.
              </p>
            </div>

            {/* B2B Reseller Tiers */}
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#3B82F6', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                — PARTNERSHIPS —
              </div>
              <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '0.75rem' }}>
                B2B & Agency Tiers
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
                White-label execution and volume pricing for agencies, resellers and enterprise teams.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', maxWidth: '1140px', margin: '0 auto 5.5rem auto' }} className="graphics-pricing-grid">
              {partnershipTiersData.map((tier, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '24px',
                    padding: '2.25rem 1.5rem',
                    textAlign: 'center',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.02)',
                    position: 'relative'
                  }}
                >
                  {tier.tag && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '-12px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: tier.tag === 'MOST POPULAR' ? '#C2410C' : tier.tag === 'BEST VALUE' ? '#5B21B6' : '#B45309',
                        color: '#FFFFFF',
                        padding: '0.25rem 0.85rem',
                        borderRadius: '999px',
                        fontSize: '0.625rem',
                        fontWeight: 900,
                        letterSpacing: '0.05em'
                      }}
                    >
                      {tier.tag}
                    </span>
                  )}
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>{tier.tier}</div>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: '#3B82F6', fontFamily: 'Outfit, serif', margin: '0.75rem 0' }}>{tier.discount}</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>{tier.desc}</div>
                </div>
              ))}
            </div>

            {/* Work showcase marquee */}
            <div style={{ margin: '4rem 0' }}>
              <WorkShowcaseMarquee />
            </div>

            {/* SMM FAQs accordion */}
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748B', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                — COMMON QUESTIONS —
              </div>
              <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '0.75rem' }}>
                Pricing & Process FAQs
              </h2>
            </div>

            <div style={{ maxWidth: '850px', margin: '0 auto 5rem auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {smmFaqsData.map((faq, index) => {
                const isOpen = openInlineSmmFaqIndex === index;
                return (
                  <div
                    key={index}
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '16px',
                      border: '1px solid #E2E8F0',
                      overflow: 'hidden',
                      boxShadow: isOpen ? '0 10px 25px rgba(0, 0, 0, 0.03)' : 'none',
                      transition: 'box-shadow 0.3s ease'
                    }}
                  >
                    <div
                      style={{
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '1.25rem 1.75rem',
                        fontWeight: 700,
                        color: '#0F172A'
                      }}
                      onClick={() => setOpenInlineSmmFaqIndex(isOpen ? null : index)}
                    >
                      <span>{faq.q}</span>
                      <span style={{ fontSize: '1.25rem', fontWeight: 400, color: '#64748B', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.25s' }}>
                        ＋
                      </span>
                    </div>
                    {isOpen && (
                      <div style={{ padding: '1rem 1.75rem 1.5rem 1.75rem', borderTop: '1px solid #F1F5F9', backgroundColor: '#FFFFFF' }}>
                        <p style={{ margin: 0, fontSize: '0.925rem', color: '#475569', lineHeight: 1.6 }}>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* SMM CTA BANNER */}
            <div style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', borderRadius: '28px', padding: '3.5rem 3rem', color: '#FFF', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap', marginBottom: '4rem' }}>
              <div style={{ maxWidth: '640px' }}>
                <span className="section-tag" style={{ background: 'rgba(255,78,39,0.2)', color: '#FF4E27', border: 'none', marginBottom: '0.75rem' }}>
                  VIRAL GROWTH ENGINE
                </span>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#FFF', marginBottom: '0.5rem' }}>
                  Ready to Dominate Social Media?
                </h2>
                <p style={{ fontSize: '1.05rem', color: '#94A3B8', lineHeight: 1.6 }}>
                  Get a custom content calendar and UGC creator growth strategy tailored for your brand within 2 hours.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href="https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ padding: '1rem 2.2rem', fontSize: '1rem', display: 'inline-flex', alignItems: 'center' }}
                >
                  💬 Discuss SMM on WhatsApp
                </a>
                <button
                  className="btn btn-secondary"
                  style={{ color: '#FFF', borderColor: 'rgba(255,255,255,0.3)', padding: '1rem 2.2rem', fontSize: '1rem' }}
                  onClick={() => window.open('https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20services', '_blank')}
                >
                  Book SMM Strategy Call ➔
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* HEADER & SUBTITLE MATCHING SCREENSHOT */}
            <div className="section-header services-section-header" style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 3.5rem auto' }}>
              <h2 className="services-heading" style={{ color: '#0F172A' }}>
                Services & Transparent Pricing
              </h2>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                No lock-in contracts. No hidden fees. Click any service for the full breakdown: pain points, deliverables, approach and FAQs.
              </p>
            </div>

            {/* 17 SERVICE CARDS GRID MATCHING SCREENSHOT 1 & 2 EXACTLY */}
            <div className="responsive-4-grid" style={{ marginBottom: '2.5rem', maxWidth: '1100px', margin: '0 auto 2.5rem auto' }}>
              {detailed17Services.map((service) => {
                const slug = service.slug || SERVICE_ID_TO_SLUG[service.id || ''] || service.id;
                return (
                  <a
                    key={service.id}
                    href={`/services/${slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (onNavigate) {
                        onNavigate('service-details', slug);
                      } else {
                        window.location.href = `/services/${slug}`;
                      }
                    }}
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      background: '#FFFFFF',
                      borderTop: '4px solid #FF4E27',
                      borderLeft: '1px solid #E2E8F0',
                      borderRight: '1px solid #E2E8F0',
                      borderBottom: '1px solid #E2E8F0',
                      borderRadius: '20px',
                      padding: '1.5rem 1.25rem',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: '0 8px 25px rgba(11, 19, 42, 0.04)',
                      transition: 'transform 0.3s ease, boxShadow 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 12px 30px rgba(11, 19, 42, 0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(11, 19, 42, 0.04)';
                    }}
                  >
                    <div style={{ fontSize: '2rem', marginBottom: '0.6rem' }}>{service.icon}</div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.4rem', color: '#0F172A', fontFamily: 'Outfit, serif', lineHeight: 1.25 }}>
                      {service.title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '1rem', lineHeight: 1.45, flexGrow: 1 }}>
                      {service.description}
                    </p>

                    {/* PRICE TAG & FULL DETAILS LINK MATCHING SCREENSHOT */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem', marginTop: 'auto' }}>
                      <div style={{ fontFamily: 'Outfit', fontSize: '1.05rem', fontWeight: 800, color: '#3B82F6' }}>
                        {service.pricing}
                      </div>
                      <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#3B82F6', letterSpacing: '0.05em' }}>
                        FULL DETAILS →
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* VIEW ALL SERVICES & PRICING PILL BUTTON MATCHING SCREENSHOT */}
            <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
              <button
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('services');
                  } else {
                    window.location.href = '#services';
                  }
                }}
                style={{
                  backgroundColor: '#FDFBF7',
                  color: '#0F172A',
                  border: '1px solid #CBD5E1',
                  borderRadius: '999px',
                  padding: '0.85rem 2.2rem',
                  fontSize: '0.95rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0F172A';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.borderColor = '#0F172A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FDFBF7';
                  e.currentTarget.style.color = '#0F172A';
                  e.currentTarget.style.borderColor = '#CBD5E1';
                }}
              >
                View All Services & Pricing →
              </button>
            </div>
          </>
        )}



      </div>

      {/* SERVICE DEEP DIVE FULL PAGE VIEW */}
      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          {/* STICKY TOP PAGE BAR */}
          <div
            style={{
              position: 'sticky',
              top: 0,
              zIndex: 10,
              backgroundColor: '#FFFFFF',
              borderBottom: '1px solid #E2E8F0',
              padding: '1rem 2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
            }}
          >
            <button
              onClick={() => setSelectedService(null)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.95rem',
                fontWeight: 700,
                color: '#0F172A',
                backgroundColor: '#F1F5F9',
                padding: '0.5rem 1.25rem',
                borderRadius: '999px',
                border: '1px solid #CBD5E1'
              }}
            >
              ← Back to All Services
            </button>
            <button
              onClick={() => setSelectedService(null)}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#F1F5F9',
                border: '1px solid #CBD5E1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
                fontWeight: 800,
                color: '#0F172A'
              }}
            >
              ✕
            </button>
          </div>

          <div className="modal-card" style={{ maxWidth: '1380px', padding: '3.5rem 2.5rem 6rem 2.5rem' }} onClick={(e) => e.stopPropagation()}>

            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '0.5rem' }}>{selectedService.icon}</div>
              <span className="section-tag">{selectedService.category}</span>
              <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.5rem', margin: '0.4rem 0 0.5rem 0', fontWeight: 900, color: '#0F172A' }}>{selectedService.title}</h2>
              <p style={{ fontSize: '1.05rem', color: '#64748B', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto' }}>
                {selectedService.longDescription || selectedService.description}
              </p>
              <div style={{ fontFamily: 'Outfit', fontSize: '1.8rem', fontWeight: 900, color: '#D97706', marginTop: '0.75rem' }}>
                {selectedService.pricing}
              </div>
            </div>

            {selectedService.title === 'Social Media Marketing' ? (
              <div style={{ marginBottom: '3.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                  <span style={{ width: '50px', height: '1px', background: '#D97706', opacity: 0.6 }}></span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#D97706', letterSpacing: '0.15em', textTransform: 'uppercase' }}>PACKAGES & PRICING</span>
                  <span style={{ width: '50px', height: '1px', background: '#D97706', opacity: 0.6 }}></span>
                </div>
                <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '2.2rem', fontWeight: 900, color: '#0F172A', textAlign: 'center', marginBottom: '2.5rem' }}>
                  Social Media Marketing Packages
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '3rem' }} className="graphics-pricing-grid">
                  {smmPackagesData.map((pkg, idx) => (
                    <div
                      key={idx}
                      style={{
                        backgroundColor: pkg.popular ? '#1A1311' : '#FFFFFF',
                        color: pkg.popular ? '#FFFFFF' : '#0F172A',
                        border: pkg.popular ? '2px solid #D97706' : '1px solid #E2E8F0',
                        borderRadius: '24px',
                        padding: '2rem 1.5rem 1.75rem 1.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: pkg.popular ? '0 15px 35px rgba(217, 119, 6, 0.1)' : '0 10px 30px rgba(0, 0, 0, 0.02)',
                        position: 'relative'
                      }}
                    >
                      {pkg.badge && (
                        <span
                          style={{
                            position: 'absolute',
                            top: '-12px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            backgroundColor: '#D97706',
                            color: '#FFFFFF',
                            padding: '0.3rem 1rem',
                            borderRadius: '999px',
                            fontSize: '0.65rem',
                            fontWeight: 900,
                            letterSpacing: '0.08em',
                            boxShadow: '0 4px 12px rgba(217, 119, 6, 0.25)',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {pkg.badge}
                        </span>
                      )}

                      <div style={{ marginBottom: '1.25rem', textAlign: 'center' }}>
                        <span style={{ fontSize: '0.8rem', fontWeight: 800, color: pkg.popular ? '#E0B56C' : '#D97706', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                          {pkg.name}
                        </span>
                        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', marginTop: '0.4rem' }}>
                          <span style={{ fontSize: '2.2rem', fontWeight: 900, fontFamily: 'Outfit, serif' }}>
                            ₹{pkg.price}
                          </span>
                          <span style={{ fontSize: '0.85rem', color: pkg.popular ? '#94A3B8' : '#64748B', marginLeft: '0.25rem', fontWeight: 600 }}>
                            /mo
                          </span>
                        </div>
                      </div>

                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', flex: 1, fontSize: '0.875rem' }}>
                        {pkg.features.map((feature, fIdx) => (
                          <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ color: pkg.popular ? '#E0B56C' : '#D97706', fontWeight: 900 }}>✓</span>
                            <span style={{ color: pkg.popular ? '#E2E8F0' : '#475569', fontWeight: 500 }}>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <a
                        href={`https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20services`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'block',
                          textAlign: 'center',
                          padding: '0.85rem',
                          borderRadius: '999px',
                          fontWeight: 800,
                          fontSize: '0.9rem',
                          textDecoration: 'none',
                          backgroundColor: pkg.popular ? '#E0B56C' : '#1A1311',
                          color: pkg.popular ? '#1A1311' : '#FFFFFF',
                          border: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        Get Started →
                      </a>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    margin: '0 auto 4rem auto',
                    background: 'linear-gradient(135deg, #F0F6FC 0%, #E3EBF4 100%)',
                    border: '1px dashed rgba(59, 130, 246, 0.35)',
                    borderRadius: '24px',
                    padding: '2rem',
                    boxShadow: '0 10px 30px rgba(59, 130, 246, 0.03)',
                    textAlign: 'left'
                  }}
                >
                  <div style={{ fontSize: '0.725rem', fontWeight: 900, color: '#3B82F6', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    — PAY-AS-YOU-GO —
                  </div>
                  <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                    Prefer outcomes over retainers? Our pay-per-performance model lets you pay only for leads that meet criteria agreed upfront — budget, location and intent. Single deliverables start tiny: posters from ₹149, reels from ₹380, dashboards from ₹2,000. <a href="https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20services" target="_blank" rel="noopener noreferrer" style={{ color: '#3B82F6', fontWeight: 800, textDecoration: 'underline' }}>Request a quote</a> and we'll build a plan around your numbers.
                  </p>
                </div>

                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#3B82F6', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    — PARTNERSHIPS —
                  </div>
                  <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '2.2rem', fontWeight: 900, color: '#0F172A', marginBottom: '0.75rem' }}>
                    B2B & Agency Tiers
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: '#64748B' }}>
                    White-label execution and volume pricing for agencies, resellers and enterprise teams.
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem', margin: '0 auto 4rem auto' }} className="graphics-pricing-grid">
                  {partnershipTiersData.map((tier, idx) => (
                    <div
                      key={idx}
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #E2E8F0',
                        borderRadius: '24px',
                        padding: '1.75rem 1.25rem',
                        textAlign: 'center',
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.02)',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                      }}
                    >
                      {tier.tag && (
                        <span
                          style={{
                            position: 'absolute',
                            top: '-10px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            backgroundColor: tier.tag === 'MOST POPULAR' ? '#C2410C' : tier.tag === 'BEST VALUE' ? '#5B21B6' : '#B45309',
                            color: '#FFFFFF',
                            padding: '0.2rem 0.65rem',
                            borderRadius: '999px',
                            fontSize: '0.575rem',
                            fontWeight: 900,
                            letterSpacing: '0.05em',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {tier.tag}
                        </span>
                      )}
                      <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.25rem' }}>{tier.tier}</div>
                      <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#3B82F6', fontFamily: 'Outfit, serif', margin: '0.5rem 0' }}>{tier.discount}</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>{tier.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            ) : selectedService.title === 'Graphic Design' ? (
              <div style={{ marginBottom: '3.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                  <span style={{ width: '50px', height: '1px', background: '#3B82F6', opacity: 0.6 }}></span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#3B82F6', letterSpacing: '0.15em', textTransform: 'uppercase' }}>TRANSPARENT PRICING</span>
                  <span style={{ width: '50px', height: '1px', background: '#3B82F6', opacity: 0.6 }}></span>
                </div>
                <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '2.2rem', fontWeight: 900, color: '#0F172A', textAlign: 'center', marginBottom: '0.5rem' }}>
                  Graphic Design Price List
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#64748B', textAlign: 'center', marginBottom: '2.5rem', maxWidth: '650px', margin: '0 auto 2.5rem auto', lineHeight: 1.5 }}>
                  Clear per-design pricing across every format — no hidden charges. GST applicable as per norms; prices subject to change.
                </p>

                {/* Grid container */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '3rem' }} className="graphics-pricing-grid">
                  {graphicDesignPricingData.map((cat, catIdx) => (
                    <div
                      key={catIdx}
                      style={{
                        background: '#FFFFFF',
                        borderTop: '4px solid #FF4E27',
                        borderLeft: '1px solid #E2E8F0',
                        borderRight: '1px solid #E2E8F0',
                        borderBottom: '1px solid #E2E8F0',
                        borderRadius: '20px',
                        padding: '1.5rem 1.25rem 1.75rem 1.25rem',
                        boxShadow: '0 8px 25px rgba(11, 19, 42, 0.03)',
                        display: 'flex',
                        flexDirection: 'column',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = '0 12px 30px rgba(11, 19, 42, 0.08)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(11, 19, 42, 0.03)';
                      }}
                      onClick={() => {
                        const slug = cat.title.toLowerCase().replace(' & ', '-').replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
                        if (onNavigate) {
                          onNavigate('graphic-details', slug);
                        } else {
                          window.location.href = `/graphic-design#${slug}`;
                        }
                      }}
                    >
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', margin: '0 0 0.25rem 0', fontFamily: 'Outfit, sans-serif' }}>
                        {cat.title}
                      </h4>
                      <p style={{ fontSize: '0.78rem', color: '#64748B', margin: '0 0 1.25rem 0', lineHeight: 1.4 }}>
                        {cat.subtitle}
                      </p>
                      
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                        {cat.items.map((item, itemIdx) => {
                          const slug = item.name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
                          return (
                            <div
                              key={itemIdx}
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                fontSize: '0.81rem',
                                color: '#334155',
                                padding: '0.4rem 0.5rem',
                                borderBottom: '1px solid #F1F5F9',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                transition: 'background-color 0.2s ease'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#F8FAFC';
                                e.currentTarget.style.textDecoration = 'underline';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.textDecoration = 'none';
                              }}
                              onClick={(e) => {
                                e.stopPropagation();
                                if (onNavigate) {
                                  onNavigate('design-item', slug);
                                } else {
                                  window.location.href = `/graphic-design/${slug}`;
                                }
                              }}>
                              <span style={{ fontWeight: 500, flex: 1, paddingRight: '0.5rem', lineHeight: 1.3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.name}</span>
                              <span style={{ fontWeight: 700, color: '#3B82F6', whiteSpace: 'nowrap', flexShrink: 0, textAlign: 'right' }}>{item.price}</span>
                            </div>
                          );
                        })}
                      </div>
                      
                      <div style={{ marginTop: 'auto', paddingTop: '1.25rem', fontSize: '0.8rem', fontWeight: 800, color: '#FF4E27', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <span>View Explanation & Details</span>
                        <span style={{ fontSize: '0.9rem' }}>➔</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Our Approach / Typical Results blocks side-by-side */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '3.5rem' }} className="graphics-info-blocks">
                  <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '20px', padding: '1.5rem 1.75rem', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#3B82F6', letterSpacing: '0.08em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                      —— Our Approach
                    </div>
                    <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                      Share your brief on WhatsApp, choose the design type, and we deliver print- and web-ready files with revisions. Transparent per-design pricing means you know the cost before we start — no surprises.
                    </p>
                  </div>
                  <div style={{ background: '#0F172A', borderRadius: '20px', padding: '1.5rem 1.75rem', color: '#FFF' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#FBBF24', letterSpacing: '0.08em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                      —— Typical Results
                    </div>
                    <p style={{ fontSize: '0.875rem', color: '#94A3B8', lineHeight: 1.6, margin: 0 }}>
                      Brands get consistent, conversion-focused creatives delivered fast — often within 24–48 hours for standard formats — at a fraction of typical agency rates.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                  <span style={{ width: '50px', height: '1px', background: '#D97706', opacity: 0.6 }}></span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#D97706', letterSpacing: '0.15em', textTransform: 'uppercase' }}>DELIVERABLES</span>
                  <span style={{ width: '50px', height: '1px', background: '#D97706', opacity: 0.6 }}></span>
                </div>
                <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '1.8rem', fontWeight: 900, color: '#0F172A', textAlign: 'center', marginBottom: '1.25rem' }}>
                  What We Do
                </h3>

                {/* Grid of badges/pills layout */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '2.5rem' }}>
                  {selectedService.whatWeDo.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: '#FFF1EE',
                        border: '1px solid rgba(255,78,39,0.2)',
                        padding: '0.75rem 1.25rem',
                        borderRadius: '14px',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: '#0F172A',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        boxShadow: '0 2px 8px rgba(255,78,39,0.03)'
                      }}
                    >
                      <span style={{ color: '#D97706', fontWeight: 900 }}>✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Our Approach / Typical Results blocks side-by-side */}
                {serviceApproachResults[selectedService.title] && (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '3.5rem' }} className="graphics-info-blocks">
                    <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '20px', padding: '1.5rem 1.75rem', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#3B82F6', letterSpacing: '0.08em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                        —— Our Approach
                      </div>
                      <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                        {serviceApproachResults[selectedService.title].approach}
                      </p>
                    </div>
                    <div style={{ background: '#0F172A', borderRadius: '20px', padding: '1.5rem 1.75rem', color: '#FFF' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#FBBF24', letterSpacing: '0.08em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                        —— Typical Results
                      </div>
                      <p style={{ fontSize: '0.875rem', color: '#94A3B8', lineHeight: 1.6, margin: 0 }}>
                        {serviceApproachResults[selectedService.title].typicalResults}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* FAQS INTERACTIVE ACCORDION SECTION */}
            <div style={{ marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <span style={{ width: '50px', height: '1px', background: '#D97706', opacity: 0.6 }}></span>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#D97706', letterSpacing: '0.15em', textTransform: 'uppercase' }}>QUESTIONS</span>
                <span style={{ width: '50px', height: '1px', background: '#D97706', opacity: 0.6 }}></span>
              </div>
              <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '2.2rem', fontWeight: 900, color: '#0F172A', textAlign: 'center', marginBottom: '1.5rem' }}>
                {selectedService.title} FAQs
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {(selectedService.title === 'Social Media Marketing' ? smmFaqsData : selectedService.faqs).map((faq, fIdx) => {
                  const isOpen = openFaqIndex === fIdx;
                  return (
                    <div
                      key={fIdx}
                      style={{
                        background: '#FFFFFF',
                        border: '1px solid #E2E8F0',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 12px rgba(11, 19, 42, 0.03)',
                        transition: 'all 0.25s ease'
                      }}
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                        style={{
                          width: '100%',
                          padding: '1.15rem 1.25rem',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          textAlign: 'left'
                        }}
                      >
                        <span style={{ fontSize: '1.025rem', fontWeight: 800, color: '#0F172A' }}>
                          Q: {faq.q}
                        </span>
                        <span
                          style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '50%',
                            backgroundColor: isOpen ? '#FF4E27' : '#F1F5F9',
                            color: isOpen ? '#FFFFFF' : '#475569',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1rem',
                            fontWeight: 800,
                            transition: 'all 0.25s ease',
                            marginLeft: '1rem',
                            flexShrink: 0
                          }}
                        >
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>

                      {isOpen && (
                        <div
                          style={{
                            padding: '0 1.25rem 1.25rem 1.25rem',
                            color: '#475569',
                            fontSize: '0.925rem',
                            lineHeight: 1.6,
                            borderTop: '1px solid #F1F5F9',
                            marginTop: '-0.25rem',
                            paddingTop: '0.85rem'
                          }}
                        >
                          <strong style={{ color: 'var(--primary)', display: 'block', marginBottom: '0.25rem' }}>Answer:</strong>
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              className="btn btn-primary"
              style={{ width: '100%', padding: '1rem' }}
              onClick={() => {
                setSelectedService(null);
                window.open(`https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20services`, '_blank');
              }}
            >
              Get Started with {selectedService.title} ➔
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
