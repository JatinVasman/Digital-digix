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

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '0.85rem 1.5rem',
                  background: loading
                    ? 'rgba(255, 78, 39, 0.4)'
                    : 'linear-gradient(135deg, #FF4E27 0%, #E84422 100%)',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '14px',
                  fontSize: '0.925rem',
                  fontWeight: 800,
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  fontFamily: 'Outfit, sans-serif',
                  letterSpacing: '0.02em',
                  boxShadow: loading ? 'none' : '0 8px 24px rgba(255, 78, 39, 0.25)',
                }}
                onMouseEnter={(e) => {
                  if (!loading) {
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(255, 78, 39, 0.35)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = loading ? 'none' : '0 8px 24px rgba(255, 78, 39, 0.25)';
                }}
              >
                {loading ? '⏳ Sending...' : 'Send Message ➔'}
              </button>

              {/* Trust badge */}
              <p style={{
                textAlign: 'center',
                fontSize: '0.7rem',
                color: '#475569',
                marginTop: '0.75rem',
                marginBottom: 0,
              }}>
                🔒 Your information is secure and will never be shared.
              </p>
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
