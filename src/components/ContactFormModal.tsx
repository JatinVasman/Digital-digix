import React, { useState, useEffect, useRef } from 'react';
import { sendEmail } from '../utils/emailService';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

const SERVICE_OPTIONS = [
  // Digital Marketing Services
  { group: 'DIGITAL MARKETING', items: [
    'SEO Services',
    'Google Ads (PPC)',
    'Meta Ads (Facebook & Instagram)',
    'Social Media Marketing (SMM)',
    'Custom Web App Development',
    'Graphic Design',
    'Content Marketing',
    'Email Marketing',
  ]},
  // Legal — Intellectual Property
  { group: 'INTELLECTUAL PROPERTY', items: [
    'Trademark Search',
    'Trademark Filing & Drafting',
    'Trademark Objection',
    'Trademark Hearing',
    'Trademark Opposition',
    'Trademark Renewal',
    'International Trademark (Madrid Protocol)',
    'Trademark Watch & Monitoring',
    'Trademark Litigation',
    'Trademark Infringement Suits',
    'Patentability Search',
    'Patent Drafting & Specification',
    'Patent Filing & Submission',
    'Patent Examination & FER Response',
    'Patent Hearing & Representation',
    'Patent Opposition (Pre/Post-Grant)',
    'Patent Renewal & Annuities',
    'International Patent (PCT Application)',
    'Patent Watch & Monitoring',
    'Patent Litigation',
    'Patent Infringement & Injunctions',
    'Freedom to Operate (FTO) Search',
    'Patent Commercialization & Licensing',
    'Patent Prosecution',
    'Design Patent Filing',
    'Patent Portfolio Management',
    'Copyright Search',
    'Copyright Registration',
    'Copyright Objection',
    'Copyright Hearing',
    'Copyright Licensing',
    'Copyright Litigation',
    'Copyright Enforcement & Piracy',
    'Design Search',
    'Design Application Filing & Drafting',
    'Design Objection & Office Action Reply',
    'Design Hearing & Representation',
    'Design Opposition & Cancellation',
    'Design Renewal & Extension',
    'International Design Registration (Hague System)',
    'Design Watch & Monitoring',
    'Design Litigation',
    'Design Infringement Action',
    'Design Commercialization & Licensing',
    'Design Portfolio Management',
    'Domain Name & UDRP Disputes',
    'INDRP Domain Disputes (.IN Registry)',
    'Startup IP Protection',
  ]},
  // Legal — Corporate Legal
  { group: 'CORPORATE LEGAL', items: [
    'Startup & Business Advisory',
    'Startup India Registration',
    'Corporate Legal',
    'Commercial / Contract Drafting',
    'NDA Drafting',
    'Founders Agreement',
    'Vendor Agreement',
    'Master Service Agreement (MSA)',
    'SaaS Agreement',
    'Employment Contract',
    'Licensing Agreement',
    'Terms & Conditions / Privacy Policy',
    'Contract Drafting & Documentation',
    'Contract Review & Negotiation',
    'Commercial Agreements',
    'Corporate Advisory',
    'Corporate Governance & Secretarial Advisory',
    'Legal Due Diligence',
    'Regulatory & Compliance Advisory',
    'Legal Opinions & Advisory',
    'Transaction Support & Risk Assessment',
  ]},
  // Legal — Litigation
  { group: 'LITIGATION', items: [
    'Commercial Litigation',
    'IP Litigation',
    'High Court Trademark Infringement Suits',
    'Patent Injunctions & Trial Enforcement',
    'Copyright Anti-Piracy Actions & Enforcement',
    'Design Infringement Action & Mold Seizure',
    'Anti-Counterfeiting Action',
    'Passing Off & Unfair Competition',
    'Domain Name Disputes & UDRP Arbitration',
    'Customs & Border Enforcement',
    'Civil Matters',
    'Criminal Matters',
    'Cheque Bounce Cases',
    'SARFAESI Proceedings',
    'Arbitration & Execution',
    'Lok Adalat',
    'DRT Proceedings',
    'Property Litigation',
    'Title Search Report (TSR)',
    'Domestic Disputes',
    'Cybersquatting Litigation',
  ]},
];

export const ContactFormModal: React.FC<ContactFormModalProps> = ({ isOpen, onClose, prefilledService }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);

  // Sync prefilled service when modal opens
  useEffect(() => {
    if (isOpen && prefilledService) {
      setFormData(prev => ({ ...prev, service: prefilledService }));
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setSubmitted(false);
      setErrorMsg('');
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen, prefilledService]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    const res = await sendEmail({
      formType: 'contact',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.service
        ? `[Service: ${formData.service}]\n\n${formData.message}`
        : formData.message,
      service: formData.service,
    });

    setLoading(false);

    if (res.success) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        onClose();
      }, 4000);
    } else {
      setErrorMsg(res.message || 'Failed to send message. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        animation: 'contactModalFadeIn 0.3s ease',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Backdrop */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }} />

      {/* Modal Card */}
      <div
        ref={modalRef}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '560px',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: 'linear-gradient(145deg, #111111 0%, #1a1a1a 100%)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '24px',
          boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)',
          animation: 'contactModalSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close contact form"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.12)',
            background: 'rgba(255,255,255,0.06)',
            color: '#94A3B8',
            fontSize: '1.1rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
            zIndex: 10,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)';
            e.currentTarget.style.color = '#ef4444';
            e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
            e.currentTarget.style.color = '#94A3B8';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
          }}
        >
          ✕
        </button>

        {/* Header */}
        <div style={{
          padding: '2rem 2rem 0 2rem',
          textAlign: 'center',
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(255, 78, 39, 0.12)',
            color: '#FF4E27',
            padding: '0.3rem 1rem',
            borderRadius: '999px',
            fontSize: '0.7rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '0.75rem',
          }}>
            ✉️ Send Us a Message
          </div>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 900,
            color: '#FFFFFF',
            margin: '0 0 0.3rem 0',
            fontFamily: 'Outfit, sans-serif',
            lineHeight: 1.2,
          }}>
            Get in Touch
          </h2>
          <p style={{
            fontSize: '0.85rem',
            color: '#64748B',
            margin: 0,
            lineHeight: 1.5,
          }}>
            Fill in the form below and our team will get back to you within 24 hours.
          </p>
        </div>

        {/* Form Body */}
        <div style={{ padding: '1.5rem 2rem 2rem 2rem' }}>
          {submitted ? (
            <div style={{
              textAlign: 'center',
              padding: '2.5rem 1rem',
              animation: 'contactModalFadeIn 0.4s ease',
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(34, 197, 94, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem auto',
                fontSize: '1.8rem',
              }}>
                🎉
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#22C55E', margin: '0 0 0.5rem 0' }}>
                Message Sent Successfully!
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#94A3B8', margin: 0 }}>
                We'll contact you at <strong style={{ color: '#CBD5E1' }}>{formData.email}</strong> shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {errorMsg && (
                <div style={{
                  marginBottom: '1rem',
                  padding: '0.7rem 1rem',
                  background: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.25)',
                  borderRadius: '10px',
                  color: '#ef4444',
                  fontSize: '0.8rem',
                }}>
                  {errorMsg}
                </div>
              )}

              {/* Name */}
              <div style={{ marginBottom: '1rem' }}>
                <label style={labelStyle}>Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => { e.currentTarget.style.borderColor = '#FF4E27'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 78, 39, 0.12)'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
                />
              </div>

              {/* Email */}
              <div style={{ marginBottom: '1rem' }}>
                <label style={labelStyle}>Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => { e.currentTarget.style.borderColor = '#FF4E27'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 78, 39, 0.12)'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
                />
              </div>

              {/* Phone */}
              <div style={{ marginBottom: '1rem' }}>
                <label style={labelStyle}>Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => { e.currentTarget.style.borderColor = '#FF4E27'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 78, 39, 0.12)'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
                />
              </div>

              {/* Service Dropdown */}
              <div style={{ marginBottom: '1rem' }}>
                <label style={labelStyle}>Service Interested In</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  style={{
                    ...inputStyle,
                    cursor: 'pointer',
                    appearance: 'none',
                    colorScheme: 'dark',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M6 8L1 3h10z' fill='%2394A3B8'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 14px center',
                    paddingRight: '2.5rem',
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = '#FF4E27'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 78, 39, 0.12)'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <option value="" style={{ background: '#1a1a1a', color: '#94A3B8' }}>Select a service (optional)</option>
                  {SERVICE_OPTIONS.map((group) => (
                    <optgroup key={group.group} label={`— ${group.group} —`} style={{ background: '#111111', color: '#FF4E27', fontWeight: 700, fontSize: '0.8rem' }}>
                      {group.items.map((item) => (
                        <option key={item} value={item} style={{ background: '#1a1a1a', color: '#E2E8F0', padding: '6px 12px', fontWeight: 400 }}>{item}</option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={labelStyle}>Your Message *</label>
                <textarea
                  required
                  placeholder="Tell us about your project or requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    ...inputStyle,
                    minHeight: '100px',
                    resize: 'vertical',
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = '#FF4E27'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 78, 39, 0.12)'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
                />
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.85rem', marginTop: '1.25rem' }}>
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    backgroundColor: '#111111',
                    color: '#FFFFFF',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: '999px',
                    padding: '0.85rem 1.25rem',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    cursor: loading ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s ease',
                    opacity: loading ? 0.7 : 1,
                  }}
                  onMouseEnter={(e) => { if (!loading) e.currentTarget.style.backgroundColor = '#222222'; }}
                  onMouseLeave={(e) => { if (!loading) e.currentTarget.style.backgroundColor = '#111111'; }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  <span>{loading ? 'Sending...' : 'Send Message'}</span>
                </button>

                <a
                  href={`https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20services${formData.service ? `%20for%20${encodeURIComponent(formData.service)}` : ''}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    backgroundColor: '#25D366',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '999px',
                    padding: '0.85rem 1.25rem',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#20bd5a'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#25D366'; }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.146.568 4.157 1.559 5.897l-1.567 5.727 5.877-1.542c1.678.916 3.6 1.436 5.642 1.436 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z"/></svg>
                  <span>Send via WhatsApp</span>
                </a>
              </div>

              {/* Delivery notice */}
              <p style={{
                textAlign: 'center',
                fontSize: '0.75rem',
                color: '#64748B',
                marginTop: '0.85rem',
                marginBottom: 0,
                lineHeight: 1.4
              }}>
                Messages submitted here are delivered instantly to our team via Resend API with automated confirmation.
              </p>

              {/* Social Icons Row */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.85rem', marginTop: '1.5rem' }}>
                <a
                  href="https://www.facebook.com/people/BusinessVolunteers/61579138254807/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(0,0,0,0.08)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a
                  href="https://www.instagram.com/thebusinessvolunteers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(0,0,0,0.08)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" stroke="#E4405F" strokeWidth="2"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="#E4405F" strokeWidth="2"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" stroke="#E4405F" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/business-volunteers1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(0,0,0,0.08)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="#0A66C2"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a
                  href="https://www.youtube.com/@TheBusinessVolunteers"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(0,0,0,0.08)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#FF0000"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Keyframe Animations */}
      <style>{`
        @keyframes contactModalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes contactModalSlideUp {
          from { opacity: 0; transform: translateY(30px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.78rem',
  fontWeight: 700,
  color: '#94A3B8',
  marginBottom: '0.35rem',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.75rem 1rem',
  background: 'rgba(255, 255, 255, 0.04)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '12px',
  color: '#E2E8F0',
  fontSize: '0.875rem',
  outline: 'none',
  transition: 'all 0.2s ease',
  fontFamily: 'Inter, sans-serif',
  boxSizing: 'border-box',
};
