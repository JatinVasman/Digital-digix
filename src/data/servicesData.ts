export interface ServiceItem {
  slug: string;
  id?: string;
  title: string;
  category: string;
  icon: string;
  description: string;
  longDescription: string;
  pricing: string;
  whatWeDo: string[];
  deliverables: string[];
  painPoints: string[];
  faqs: { q: string; a: string }[];
  approach: string;
  typicalResults: string;
}

export const ALL_17_SERVICES: ServiceItem[] = [
  {
    slug: 'social-media-marketing',
    id: '1',
    title: 'Social Media Marketing',
    category: 'Social Growth',
    icon: '📱',
    description: 'Grow on Instagram, Facebook & LinkedIn with content calendars, viral reels, posting and analytics.',
    longDescription: 'Supercharge your brand presence on Instagram, Facebook, and LinkedIn. We build custom monthly content calendars, write high-converting captions, design scroll-stopping graphics, produce viral reels hooks, and provide comprehensive monthly analytics reports to drive inbound customer leads and sales.',
    pricing: '₹5,999–₹11,999/mo',
    whatWeDo: [
      '360° Social Brand Strategy & Monthly Content Planning',
      'High-Engagement Graphic & Reel Content Production',
      'Community Engagement, Comment Moderation & Direct Message Leads',
      'Targeted Hashtag Research, Audience Profiling & Strategic Posting',
      'Monthly Data Analytics & Performance Optimization Audits',
      'Influencer Outreach, Brand Collaboration Setup & UGC Curation'
    ],
    deliverables: [
      '12-30 Custom Social Posts / Month',
      '4-12 Reels & Vertical Video Shorts',
      'Hashtag & Profile Bio Optimization',
      'Monthly PDF Analytics Report',
      'Dedicated WhatsApp Support Group'
    ],
    painPoints: [
      'Inconsistent posting schedule and fragmented brand voice',
      'Low organic reach, engagement rates, and follower growth stagnation',
      'Outdated visual aesthetic failing to attract high-value leads',
      'Lack of time to conceptualize, write, and schedule posts'
    ],
    faqs: [
      { q: 'Which platforms do you cover in Social Media Marketing?', a: 'We handle Instagram, Facebook, LinkedIn, Twitter/X, Pinterest, and YouTube Shorts.' },
      { q: 'Do I get to approve posts before they go live?', a: 'Yes, we provide a 14-day advance content calendar for your review and approval.' },
      { q: 'Do you create original graphics and copy?', a: '100%! All visuals, captions, hashtags, and video scripts are custom created for your brand.' },
      { q: 'Is community engagement included?', a: 'Yes, we actively monitor and reply to comments and DMs during business hours.' }
    ],
    approach: 'Content-first brand storytelling: we build custom visual grids, write direct-response copy, and schedule at peak-hour traffic slots.',
    typicalResults: 'Clients see an average of 40% organic follower growth and 2.5x increase in DM-to-lead conversion rates.'
  },
  {
    slug: 'graphic-design',
    id: '2',
    title: 'Graphic Design',
    category: 'Design & Branding',
    icon: '🎨',
    description: 'From social posts and logos to packaging, presentations, pitch decks and corporate branding.',
    longDescription: 'Premium, custom visual assets tailored for B2B and D2C brands. We design social media ad creatives, corporate pitch decks, sales brochures, packaging labels, retail banners, and 3D product mockups with transparent, per-design pricing and ultra-fast 24-hour turnaround times.',
    pricing: '₹200 onwards',
    whatWeDo: [
      'Custom Social Media Posts, Stories & Ad Creatives',
      'Corporate Pitch Decks, Sales Brochures & Banners',
      'Product Packaging, Labels & Retail Display Designs',
      '3D Product Mockups & Large-Format Flex Printing Assets',
      'Infographic Layouts, Ebook Design & Custom Illustrations',
      'Corporate Stationary, Letterheads & Invoice Design Templates'
    ],
    deliverables: [
      'High-Res PNG/JPEG Files',
      'Print-Ready PDF (CMYK 300 DPI)',
      'Editable Vector Source Files (AI/PSD)',
      'Brand Color Palette Guide',
      'Fonts and Typography Package'
    ],
    painPoints: [
      'Amateur looking designs damaging brand credibility',
      'Slow designer turnaround delaying marketing campaigns',
      'High agency retainers eating into profit margins',
      'Fragmented visual styles across different company channels'
    ],
    faqs: [
      { q: 'How is graphic design priced?', a: 'We offer transparent per-design pricing. Standard formats are ₹200, structured designs are ₹340, and multi-page layouts are ₹130/page. No retainers or hidden fees.' },
      { q: 'Do you offer logo design?', a: 'Yes, we design professional, vector logos starting from ₹850 up to ₹3,500 depending on concepts and design drafts required.' },
      { q: 'How fast is delivery?', a: 'Standard social posts and ad creatives take 24–48 hours. Complex brochures, packaging layouts or multi-page pitch decks take 48–72 hours.' },
      { q: 'Do prices include revisions and final files?', a: 'Yes, all prices include minor revisions to ensure you are happy, and you receive print-ready PDFs as well as editable source files (AI/PSD).' }
    ],
    approach: 'Share your brief on WhatsApp, choose the design type, and we deliver print- and web-ready files with revisions. Transparent per-design pricing means you know the cost before we start — no surprises.',
    typicalResults: 'Brands get consistent, conversion-focused creatives delivered fast — often within 24–48 hours for standard formats — at a fraction of typical agency rates.'
  },
  {
    slug: 'ugc-reels-creator-marketing',
    id: '3',
    title: 'UGC Reels & Creator Marketing',
    category: 'Viral Content',
    icon: '🎥',
    description: 'Authentic UGC-style reels — scripted, filmed, edited and deployed for maximum ad ROAS.',
    longDescription: 'Connect with your target demographic through authentic User-Generated Content (UGC) videos. We source vetted models and creators from our in-house network of 250+ talent, write direct-response scripts using Problem-Agitate-Solve hooks, and manage the entire filming and post-production pipeline.',
    pricing: '₹2,100–₹5,100/campaign',
    whatWeDo: [
      'Vetted Creator Selection from 250+ UGC Creators',
      'Script Writing & Problem-Agitate-Solve Hook Creation',
      'Full UGC Reel Filming, Editing & Sound Design',
      'Spark Ad Whitelisting & Commercial Digital Usage Rights',
      'Unboxing, Product Review & Lifestyle Video Shoots',
      'Niche-Specific Model Casting (Fashion, Tech, Beauty, Health)'
    ],
    deliverables: [
      'Vetted Creator Selection & Matching',
      'Script Writing & Problem-Agitate-Solve Hooks',
      'Full UGC Reel Editing & Color Grade',
      'Spark Ad Commercial Usage Rights',
      'High-Resolution Raw Footage Files'
    ],
    painPoints: [
      'Ad fatigue on static graphic ads causing CPC surge',
      'Lack of customer trust and social proof',
      'High actor and studio fees for product shoots',
      'Difficulty managing and coordinating with multiple online creators'
    ],
    faqs: [
      { q: 'Who provides the creators?', a: 'We handle creator matching from our network of 250+ UGC creators.' },
      { q: 'Are ad commercial usage rights included?', a: 'Yes, full commercial digital ad rights are included.' },
      { q: 'Can we review and approve scripts beforehand?', a: 'Yes, you approve all scripts and hooks before creators film.' },
      { q: 'What is the average turnaround for UGC videos?', a: 'Filming, editing, and delivery take about 7 to 10 days.' }
    ],
    approach: 'Story hook psychology: we script high-impact hooks, direct vetted creators, and edit with fast-paced retention editing styles.',
    typicalResults: 'UGC ads generate 4x higher CTR and up to 35% lower cost-per-acquisition compared to static graphics.'
  },
  {
    slug: 'dashboard-kpi-systems',
    id: '4',
    title: 'Dashboard & KPI Systems',
    category: 'Data & Analytics',
    icon: '📊',
    description: 'Turn business data into clear insights, automated reports and real-time ROI tracking.',
    longDescription: 'Stop guessing your return on ad spend (ROAS). We build custom Google Looker Studio and PowerBI dashboards integrating data from Meta, Google, Amazon, and CRM tools, providing automated daily WhatsApp summaries and real-time visibility into cost-per-lead and pipeline health.',
    pricing: '₹2,000–₹15,000',
    whatWeDo: [
      'Custom Google Looker Studio & PowerBI Dashboard Setup',
      'Multi-Channel Ad Spend & ROAS Integration (Meta, Google, Amazon)',
      'Automated Daily Email & WhatsApp Performance Summaries',
      'Sales Pipeline & CRM Lead Tracking Real-Time Connectors',
      'Inventory Tracking & Order Management Data Flows',
      'Custom Business Goal Setting & Alert Notifications'
    ],
    deliverables: [
      'Live Real-Time KPI Dashboard',
      'Automated Daily Executive Summaries',
      'Cost-Per-Lead & Profit Analytics',
      'Team Access Permissions & Connectors',
      'Interactive Training Video Tutorial'
    ],
    painPoints: [
      'No visibility into true return on marketing spend',
      'Manual Excel spreadsheet entry errors wasting hours of work',
      'Scattered data across multiple apps (Meta, Shopify, GA4)',
      'Inability to track sales representative response times'
    ],
    faqs: [
      { q: 'Can I view my dashboard on mobile?', a: 'Yes! Dashboards are 100% mobile responsive and update automatically.' },
      { q: 'Is my business data secure?', a: '100% secure. Data connectors use direct encrypted APIs with restricted access.' },
      { q: 'Which platforms can you connect to the dashboard?', a: 'We connect Shopify, Meta Ads, Google Ads, CRM tools, Amazon, and Google Sheets.' },
      { q: 'How often does the data update?', a: 'Data is refreshed automatically in real-time or every hour depending on the API restrictions.' }
    ],
    approach: 'Unified data architecture: we integrate GA4, Shopify, Meta Ads, and CRMs into a single interactive visualization.',
    typicalResults: 'Operational teams save 5+ hours weekly on manual reporting and gain absolute visibility into true blended ROAS.'
  },
  {
    slug: 'seo',
    id: '5',
    title: 'SEO Services',
    category: 'Search Engine Rank',
    icon: '🔍',
    description: 'Rank at the top of Google and generate organic buyer leads 24/7 with white-hat SEO & GEO.',
    longDescription: 'Dominate search engine results and acquire organic leads 24/7. Our white-hat SEO strategy includes full technical auditing, high-intent keyword mapping, core web vitals optimization, digital PR backlink building, Generative Engine Optimization (GEO/AEO), and Google Search Console tracking for predictable traffic growth.',
    pricing: '₹4,000–₹12,000/mo',
    whatWeDo: [
      'Comprehensive Technical SEO & Site Architecture Audit',
      'High-Intent Commercial Keyword Research & Mapping',
      'Generative Engine Optimization (GEO/AEO) for ChatGPT & Gemini',
      'High-Authority Backlink Acquisition & Digital PR Outreach',
      'On-Page Schema Markup & Core Web Vitals Optimization',
      'SEO Content Strategy & Copywriting Planning'
    ],
    deliverables: [
      'Monthly Keyword Rank Reports',
      'Technical Audit Action Plan',
      'High-DA Backlinks Acquisition',
      'SEO Optimized Content Writing',
      'SEO Competitor Gap Analysis Sheet'
    ],
    painPoints: [
      'Invisible on Google Search for high-intent queries',
      'High dependence on paid ads driving up marketing costs',
      'Competitors ranking higher on valuable search terms',
      'Broken site links, slow page load speeds, and indexing issues'
    ],
    faqs: [
      { q: 'How long until I see Page 1 rankings?', a: 'Initial keyword movement is visible in 60-90 days.' },
      { q: 'Do you guarantee #1 ranking on Google?', a: 'We follow white-hat SEO practices that consistently drive top 3 rankings.' },
      { q: 'Do you help write blog posts for SEO?', a: 'Yes, we produce SEO-optimized blogs targeting valuable search keywords.' },
      { q: 'Will SEO help my local map ranking?', a: 'Yes, SEO works in tandem with Google Business Profile optimizations to boost maps rankings.' }
    ],
    approach: 'Semantic relevance & speed: technical site audits combined with high-intent keyword maps and digital PR backlink outreach.',
    typicalResults: 'Predictable organic search traffic growth with 60% of target keywords reaching Page 1 of Google in 90 days.'
  },
  {
    slug: 'google-ads',
    id: '6',
    title: 'Google Ads Management',
    category: 'Paid Search',
    icon: '🎯',
    description: 'Capture high-intent searches the moment customers look for you with high ROAS PPC.',
    longDescription: 'Put your brand in front of customers actively searching for your services. We construct high-converting search, display, and Performance Max (PMax) campaigns, eliminate wasted budget using negative keyword lists, and establish accurate GA4 conversion tracking.',
    pricing: '18% of Monthly Ad Spend',
    whatWeDo: [
      'Search Campaign Bidding & Keyword Match Optimization',
      'Negative Keyword Filtering & Budget Waste Elimination',
      'GA4 Conversion Tracking & Revenue Attribution Setup',
      'Performance Max (PMax) & YouTube Video Ad Management',
      'Competitor Ad Spy Research & Bid Strategy Adjustments',
      'Landing Page Conversion Rate Auditing'
    ],
    deliverables: [
      'Google Search & Display Campaigns',
      'Conversion Tracking Setup',
      'Negative Keyword Audit',
      'Bi-Weekly Strategy Calls',
      'Monthly ROI Dashboard Access'
    ],
    painPoints: [
      'Wasted budget on irrelevant search clicks',
      'Low quality lead inquiries from display campaigns',
      'High cost per acquisition (CPA) eating margins',
      'Inability to track which search queries generate revenue'
    ],
    faqs: [
      { q: 'Is there a minimum ad budget requirement?', a: 'We manage accounts starting from ₹15,000/month ad spend.' },
      { q: 'Who owns the Google Ads account?', a: 'You retain 100% ownership of your Google Ads account.' },
      { q: 'What is the pricing model for Google Ads?', a: 'We charge a percentage of the monthly ad spend with zero lock-in contracts.' },
      { q: 'Do you create display ad graphics?', a: 'Yes, our in-house design team creates display banners and video ad assets.' }
    ],
    approach: 'Intent-driven bidding optimization: we write high-relevance search headlines and structure smart performance max funnels.',
    typicalResults: 'Higher click-through-rates (CTR) and an average of 3.8x return on ad spend (ROAS) across campaigns.'
  },
  {
    slug: 'meta-ads',
    id: '7',
    title: 'Meta Ads Management',
    category: 'Social Acquisition',
    icon: '📣',
    description: 'Facebook & Instagram campaigns engineered for predictable leads and customer acquisition.',
    longDescription: 'Scale your customer acquisition with data-driven Facebook and Instagram ad campaigns. We build custom and lookalike audience models, design high-converting visual ad creatives, write direct-response copy, implement Conversions API (CAPI), and configure retargeting funnels.',
    pricing: '15% of Ad Spend',
    whatWeDo: [
      'Laser-Focused Audience Profiling & Lookalike Audience Building',
      'High-Converting Ad Creative Design & Video Copywriting',
      'Meta Pixel & Conversions API (CAPI) Integration',
      'Multi-Stage Retargeting Funnel Architecture',
      'A/B Ad Placement & Budget Optimization Testing',
      'Instant Lead Form Optimization with Verification'
    ],
    deliverables: [
      'Meta Lead Gen Campaigns',
      'Custom Ad Creatives & Copies',
      'Pixel & CAPI Setup',
      'Weekly ROI Reporting',
      'Ad Account Security Audit'
    ],
    painPoints: [
      'High cost per lead (CPL) and ad fatigue',
      'Unqualified lead form spam wasting sales team time',
      'Ad account policy bans disrupting lead generation',
      'Inaccurate tracking and data loss post-iOS 14 update'
    ],
    faqs: [
      { q: 'Do you design the ad graphics and videos?', a: 'Yes! Creative design and copy are completely included.' },
      { q: 'How do you prevent bad leads?', a: 'We use custom screening questions and instant OTP verification.' },
      { q: 'What is the setup time for a new campaign?', a: 'We launch campaigns within 5 to 7 business days after strategy approval.' },
      { q: 'Do you assist with disabled ad account recovery?', a: 'Yes, we help submit official appeals and configure backup business managers.' }
    ],
    approach: 'Creative-led performance scaling: constant variations of visual creatives, high-retention video hooks, and custom lookalike segmentation.',
    typicalResults: 'Consistent, scalable lead flow and lower cost-per-lead (CPL) by up to 45% compared to baseline.'
  },
  {
    slug: 'web-development',
    id: '8',
    title: 'Website Development',
    category: 'Web Engineering',
    icon: '💻',
    description: 'Modern, ultra-fast, SEO-ready web apps with WhatsApp integration, SSL and 1-year support.',
    longDescription: 'Custom Next.js, React, and WordPress websites engineered for maximum speed, security, and search engine visibility. Includes mobile-first responsive design, direct WhatsApp instant lead chat integration, SSL security setup, and 1 full year of dedicated cloud hosting maintenance and tech support.',
    pricing: '₹6,500–₹18,000',
    whatWeDo: [
      'Custom Mobile-Responsive Next.js / React / WordPress Engineering',
      'High-Converting Landing Page Layouts & Copywriting',
      'WhatsApp Lead Chatbot & CRM Integration',
      'Speed Optimization & Core Web Vitals Audit (95+ Google Score)',
      'SSL Security, Domain Setup & 1-Year Cloud Hosting Maintenance',
      'Payment Gateway Integration (Razorpay, Stripe) & E-commerce Setup'
    ],
    deliverables: [
      'Custom Designed Website (1-10 Pages)',
      'WhatsApp Instant Lead Bot',
      'SSL Security Certificate',
      '1 Year Free Maintenance & Technical Support',
      'Full Admin CMS Access & Training Video'
    ],
    painPoints: [
      'Slow loading website speeds causing user drop-offs',
      'Non-mobile friendly layout alienating mobile traffic',
      'High developer costs & hidden post-launch maintenance fees',
      'Outdated design failing to generate direct business leads'
    ],
    faqs: [
      { q: 'Is hosting and domain included?', a: 'Yes, we include 1 year of SSL high-speed cloud hosting and domain setup.' },
      { q: 'Can I edit content myself later?', a: 'Yes, we provide an easy-to-use CMS dashboard and a 15-minute video tutorial.' },
      { q: 'How long does development take?', a: 'Single landing pages take 3-5 days. Full corporate sites take 7-14 days.' },
      { q: 'Is the website optimized for search engines?', a: 'Yes, we build every website with SEO-friendly semantic code, fast loading architecture, and meta tags.' }
    ],
    approach: 'Design for conversion first: clear CTAs, trust signals and sub-3-second loads — then layer in SEO architecture so the site earns traffic from day one.',
    typicalResults: 'Client websites average 90+ mobile speed scores and 2–3x enquiry rates vs. their old sites.'
  },
  {
    slug: 'whatsapp-marketing',
    id: '9',
    title: 'WhatsApp Marketing',
    category: 'Direct Marketing',
    icon: '💬',
    description: "India's highest engagement channel: automated cart recovery, broadcasts and chatbot nodes.",
    longDescription: "Leverage India's highest engagement channel with 95%+ open rates. We register and configure official Meta WhatsApp Cloud API, build automated product catalogs, deploy abandoned cart alerts, and launch targeted broadcast campaigns to re-engage customers.",
    pricing: '₹2,500–₹6,000/mo',
    whatWeDo: [
      'Official Meta WhatsApp Cloud API Account Setup',
      'Targeted Broadcast Message Campaign Creation',
      'Interactive Product Catalog & Shopping Bot Setup',
      'Automated Abandoned Cart & Payment Reminder Flows',
      'Customer Support Ticketing & Routing Workflows',
      'Opt-In Lead Capture Forms & Growth Campaigns'
    ],
    deliverables: [
      'Official WhatsApp API Setup',
      'Broadcast Campaign Manager',
      'Interactive Product Catalog',
      'Automated Chatbot Workflows',
      'Meta WhatsApp Business Manager Setup'
    ],
    painPoints: [
      'Low email open rates (15-20%) hindering client communication',
      'Risk of phone bans using unverified software',
      'No automated customer support setup during off hours',
      'High cost per SMS with low response rates'
    ],
    faqs: [
      { q: 'Are broadcast messages safe from phone bans?', a: 'Yes, we use official Meta WhatsApp Cloud API to prevent bans.' },
      { q: 'Can customers place orders inside WhatsApp?', a: 'Yes, using WhatsApp Native Catalog Shopping.' },
      { q: 'Is there a setup charge for WhatsApp broadcast?', a: 'All setup features are included in our standard onboarding package.' },
      { q: 'Can we send media like images and PDFs in broadcasts?', a: 'Yes, WhatsApp API supports images, videos, documents, and interactive CTA buttons.' }
    ],
    approach: 'Permission-based lifecycle flows: automated cart recovery alerts, broadcast lists, and interactive customer support chatbot nodes.',
    typicalResults: 'Average open rates of 95% and up to 15% recovery on abandoned carts without active manual intervention.'
  },
  {
    slug: 'email-marketing',
    id: '10',
    title: 'Email Marketing Funnels',
    category: 'Retention & CRM',
    icon: '📧',
    description: 'Turn subscribers into repeat buyers with automated flows, newsletters and deliverability optimization.',
    longDescription: 'Build predictable repeat revenue from your email list. We design high-converting email templates, write persuasive lifecycle copy, set up automated welcome series, abandoned checkout sequences, and post-purchase win-back flows using Klaviyo, Mailchimp, and Brevo.',
    pricing: '₹4,500–₹12,000/mo',
    whatWeDo: [
      'Automated Welcome, Abandoned Cart & Win-back Flow Setup',
      'High-Converting Copywriting & Responsive Email Template Design',
      'Audience Segmentation, List Cleaning & Deliverability Warm-up',
      'Weekly/Monthly Newsletter Strategy & Execution',
      'A/B Subject Line & CTA Optimization Testing',
      'Revenue Attribution & Conversion Tracking Setup'
    ],
    deliverables: [
      'Custom Automated Drip Funnels',
      'Bespoke Email Design Templates',
      'Segmented Audience Lists',
      'Monthly Deliverability & Revenue Report',
      'A/B Testing Experiment Log'
    ],
    painPoints: [
      'Low open rates and emails landing in spam folders',
      'No automated sequences capturing abandoned sales',
      'Lack of time or design expertise to send consistent newsletters',
      'Zero visibility into revenue generated from email subscribers'
    ],
    faqs: [
      { q: 'Which email platforms do you support?', a: 'We work with Klaviyo, Mailchimp, ActiveCampaign, HubSpot, Brevo, and ConvertKit.' },
      { q: 'Do you design the graphics and write the copy?', a: 'Yes! Full copywriting, design, and technical automation setup are included.' },
      { q: 'How quickly can email flows be live?', a: 'Core automated sequences are designed, tested, and live within 5 to 7 business days.' },
      { q: 'Will this help our emails avoid spam?', a: 'Yes, we configure SPF, DKIM, DMARC records and warmup protocols to ensure 98%+ inbox delivery.' }
    ],
    approach: 'Segmentation & value nurturing: automated customer onboarding sequences, seasonal promotions, and behavioral drip triggers.',
    typicalResults: 'Email channel revenue contribution increases to 20%+ of overall sales with zero media spend.'
  },
  {
    slug: 'influencer-marketing',
    id: '11',
    title: 'Influencer Marketing',
    category: 'Influencer Growth',
    icon: '🌟',
    description: 'High-trust creator endorsements across Instagram, YouTube and LinkedIn with ROI tracking.',
    longDescription: 'Scale brand authority and social commerce through performance-driven creator collaborations. We source vetted micro and macro influencers with genuine engagement, negotiate contracts, handle product seeding, manage creative briefs, and track affiliate referral sales.',
    pricing: '₹15,000–₹50,000/campaign',
    whatWeDo: [
      'Vetted Influencer Sourcing & Fraud Engagement Audits',
      'Campaign Creative Briefing, Concepting & Script Alignment',
      'Contract Negotiation, Deliverable Tracking & Usage Rights Management',
      'Product Seeding, Gifting Logistics & Creator Coordination',
      'UTM Link & Coupon Code Conversion Attribution Tracking',
      'Paid Ad Whitelisting / Spark Ads Setup for Top Performing Posts'
    ],
    deliverables: [
      'Curated Influencer Roster',
      'Creative Direction Briefs',
      'Published Creator Posts & Reels',
      'Comprehensive Campaign Analytics Report',
      'Commercial Usage Rights for Paid Ads'
    ],
    painPoints: [
      'Wasting budget on influencers with fake followers and bot engagement',
      'Difficulty negotiating fair pricing and deliverable contracts',
      'Creators missing deadlines or deviating from brand guidelines',
      'No tracking of actual sales generated from influencer collaborations'
    ],
    faqs: [
      { q: 'How do you check for fake influencer engagement?', a: 'We audit creator audience quality, follower authenticity scores, and historical comment sentiment before outreach.' },
      { q: 'Do we get to approve the influencers before hiring?', a: 'Yes, you receive a shortlisted roster with metrics and pricing for final approval.' },
      { q: 'Are commercial ad usage rights included?', a: 'Yes, we secure digital commercial usage rights so you can run the content as paid ads.' },
      { q: 'What influencer tiers do you manage?', a: 'We work with nano (5k-25k), micro (25k-100k), and macro (100k-1M+) creators.' }
    ],
    approach: 'Micro-influencer alignment: sourcing high-engagement creators in your niche and structuring performance-based commission campaigns.',
    typicalResults: 'Authentic brand endorsements yielding 3x social referral traffic spikes and increased brand search volume.'
  },
  {
    slug: 'b2b-lead-generation',
    id: '12',
    title: 'B2B Lead Generation',
    category: 'B2B Acquisition',
    icon: '💼',
    description: 'Predictable qualified B2B pipeline across LinkedIn, cold email and high-intent search.',
    longDescription: 'Fill your sales calendar with qualified decision-maker meetings. We build account-based marketing (ABM) funnels, craft personalized cold email campaigns, automate LinkedIn outreach sequences, design high-converting lead magnets, and route pre-screened prospects directly into your CRM.',
    pricing: 'Custom / Pay-per-lead',
    whatWeDo: [
      'Ideal Customer Profile (ICP) & Account List Building',
      'Personalized Multi-Touch Cold Email & LinkedIn Sequences',
      'High-Converting B2B Lead Magnet & Landing Page Creation',
      'Prospect Qualification, Screening & Meeting Booking Setup',
      'CRM Integration (HubSpot, Salesforce, Pipedrive) & Zapier Automation',
      'Sales Follow-Up Scripting & Objection Handling Playbooks'
    ],
    deliverables: [
      'Verified B2B Prospect Database',
      'Outbound Sequence Copy & Automation',
      'High-Converting B2B Landing Page',
      'Sales-Ready Booked Meetings',
      'Real-Time Pipeline Analytics Dashboard'
    ],
    painPoints: [
      'Unpredictable sales pipeline and reliance on word-of-mouth',
      'Sales reps spending hours manually prospecting on LinkedIn',
      'Cold emails ending up in spam folders with near-zero replies',
      'Paying high retainers without guaranteed qualified meetings'
    ],
    faqs: [
      { q: 'How do you ensure prospects are qualified?', a: 'We filter by job title, company revenue, tech stack, and verify specific intent criteria agreed upfront.' },
      { q: 'Do you write the outreach messaging?', a: 'Yes, we draft custom multi-touch copy tailored to decision-maker pain points.' },
      { q: 'Which CRMs do you integrate with?', a: 'We connect directly with HubSpot, Zoho, Salesforce, Pipedrive, and Google Sheets.' },
      { q: 'What is the setup time for outbound campaigns?', a: 'Domain warmup, ICP list curation, and sequence building take approximately 7 business days.' }
    ],
    approach: 'Account-based targeting: custom sales copywriting, automated LinkedIn sequences, and landing page asset downloads.',
    typicalResults: 'A predictable monthly pipeline of qualified corporate decision-makers booking directly on calendars.'
  },
  {
    slug: 'ecommerce-scaling',
    id: '13',
    title: 'E-commerce Scaling',
    category: 'Ecommerce Growth',
    icon: '🛒',
    description: 'Full-funnel growth for online stores: catalog ads, Shopping feeds, retargeting and CRO.',
    longDescription: 'Accelerate your online store revenue. We optimize Google Shopping feeds, run Advantage+ Catalog ads, configure automated abandoned cart flows via Klaviyo, manage Amazon/Flipkart listings, and perform Conversion Rate Optimization (CRO) to maximize your average order value (AOV) and customer lifetime value (LTV).',
    pricing: '₹8,000–₹20,000/mo',
    whatWeDo: [
      'Google Shopping & Advantage+ Catalog Ads Setup',
      'Klaviyo Email & SMS Abandoned Cart Automation Flows',
      'Amazon & Flipkart Marketplace SEO & Product Listing Optimization',
      'Conversion Rate Optimization (CRO) & Heatmap Audits',
      'Product Bundling & Upsell Strategy Execution',
      'Loyalty Program Design & Customer Retention Setup'
    ],
    deliverables: [
      'Shopping & Catalog Ad Setup',
      'Klaviyo Email Automations',
      'Marketplace Product SEO',
      'Monthly ROAS Dashboard',
      'Discount Codes & Campaign Strategy Doc'
    ],
    painPoints: [
      'High cart abandonment rates on Shopify / WooCommerce',
      'Low ROAS on Meta ads and high customer acquisition cost (CAC)',
      'Poor product ranking on Amazon and Flipkart marketplaces',
      'Low repeat purchase rates and customer lifetime value'
    ],
    faqs: [
      { q: 'What ROAS can I expect?', a: 'Our e-commerce campaigns average between 3.5x to 6.2x ROAS depending on product margins and price point.' },
      { q: 'Do you work with Shopify and WooCommerce?', a: 'Yes, we are experienced with Shopify, WooCommerce, Magento, and custom headless stores.' },
      { q: 'Do you set up email automations?', a: 'Yes, we configure abandoned cart, welcome series, cross-sell, and win-back flows.' },
      { q: 'Do you manage marketplace ads on Amazon?', a: 'Yes, we configure and optimize Amazon PPC campaigns, Sponsored Brands, and A+ content.' }
    ],
    approach: 'Full-funnel monetization: landing page optimization, custom bundling offers, and high-frequency dynamic product retargeting.',
    typicalResults: 'E-commerce stores see 2.8x average growth in digital revenue and improved customer lifetime value (LTV).'
  },
  {
    slug: 'cro',
    id: '14',
    title: 'Conversion Rate Optimization',
    category: 'CRO & Funnels',
    icon: '⚡',
    description: 'Turn more existing visitors into paying customers with heatmaps, UX audits and A/B testing.',
    longDescription: 'Stop burning ad spend on leaky landing pages. We deploy heatmaps, user session recordings, heuristic UX analysis, and structured A/B tests on headlines, CTAs, forms, and checkouts to dramatically increase conversion rates without increasing your ad budget.',
    pricing: '₹5,000–₹15,000/audit',
    whatWeDo: [
      'User Session Recording, Heatmap & Click-Tracking Analysis',
      'Heuristic UX/UI Friction & Mobile Checkout Audit',
      'Hypothesis-Driven A/B & Multivariate Split Testing',
      'Form Simplification & Instant Field Validation Setup',
      'Copywriting Re-Structuring & Social Proof Hierarchy Placement',
      'Page Speed Optimization & Frictionless Mobile UX Redesign'
    ],
    deliverables: [
      'Full CRO Friction Audit Report',
      'Wireframes of High-Converting Page Variants',
      'A/B Test Execution & Statistical Significance Log',
      'Optimized Checkout & Form Layouts',
      'Post-Implementation Conversion Lift Report'
    ],
    painPoints: [
      'High traffic volume but low inquiry or purchase conversion rates',
      'High checkout drop-off rates on mobile devices',
      'Unclear value propositions causing high bounce rates',
      'Wasting advertising budget on pages that do not convert'
    ],
    faqs: [
      { q: 'How much can CRO improve conversions?', a: 'Most brands experience a 20% to 50% lift in conversion rates following strategic CRO implementations.' },
      { q: 'Do we need high traffic for CRO?', a: 'While A/B testing benefits from higher traffic, qualitative heuristic and friction audits improve conversion on any traffic volume.' },
      { q: 'Do you implement the code changes?', a: 'Yes, we provide ready-to-deploy code or integrate changes directly on Shopify, WordPress, or custom React apps.' },
      { q: 'How long does a full CRO audit take?', a: 'Initial heuristic and tracking audit takes 5 to 7 days, followed by 30-day split testing sprints.' }
    ],
    approach: 'Behavioral intelligence tracking: heatmaps, screen recordings, user friction analyses, and structured A/B testing of headers and CTAs.',
    typicalResults: 'Boost checkout and lead conversion rates by 20% to 50% without increasing advertising spend.'
  },
  {
    slug: 'local-seo',
    id: '15',
    title: 'Local Business SEO',
    category: 'Local Search',
    icon: '📍',
    description: 'Own the Google map pack: GBP optimization, reviews, local citations and geo-landing pages.',
    longDescription: 'Dominate local searches and drive in-store foot traffic and phone calls. We optimize and verify your Google Business Profile (GBP), build consistent citations across 50+ local directories, set up automated review generation funnels, and build geo-targeted landing pages.',
    pricing: '₹3,500–₹9,000/mo',
    whatWeDo: [
      'Google Business Profile (GBP) Full Optimization & Verification',
      'Local Map-Pack Rank Boosting & Citation Building',
      'Automated Review Generation & Response Funnels',
      'Hyper-Local Service Page Schema Markup',
      'Local Directory Citation Audit & Indexing',
      'Geo-Targeted Content & Blog Strategy'
    ],
    deliverables: [
      'GBP Profile Optimization',
      '50+ Local Directory Citations',
      'Automated Review Link QR Code',
      'Monthly Map Rank Report',
      'Review Generation Strategy Template'
    ],
    painPoints: [
      'Not showing up on Google Maps for high-intent local queries',
      'Competitors dominating the local 3-pack search results',
      'Negative or missing Google reviews dragging down placement',
      'Inconsistent Name, Address, Phone (NAP) data across directories'
    ],
    faqs: [
      { q: 'Will this increase phone calls and in-person visits?', a: 'Yes, local map optimization directly boosts calls, direction requests, and website visits.' },
      { q: 'Can you help reinstate suspended profiles?', a: 'Yes, we assist with Google Business Profile suspension appeals and verification.' },
      { q: 'How long until local map rankings improve?', a: 'Map listings typically start climbing search positions within 30 to 60 days.' },
      { q: 'Do you manage review responses?', a: 'Yes, we draft keyword-rich, professional replies to all customer reviews.' }
    ],
    approach: 'Geotargeted optimization: citation building, Google Business Profile local keyword mapping, and positive review generation systems.',
    typicalResults: 'Rank in the local top-3 map pack, driving up to 80% more local telephone calls and map direction requests.'
  },
  {
    slug: 'ai-automation-systems',
    id: '16',
    title: 'AI Automation Systems',
    category: 'AI & Automation',
    icon: '🤖',
    description: 'Custom AI agents, automated customer intake and smart CRM workflows to cut manual work.',
    longDescription: 'Eliminate repetitive manual tasks and accelerate lead response times. We build custom AI-powered customer support bots, auto-answering email ticket engines, automated WhatsApp lead screening workflows, and intelligent CRM integrations connecting your tools seamlessly.',
    pricing: '₹5,000–₹25,000',
    whatWeDo: [
      'Custom Conversational AI Support Agent Integration',
      'Automated WhatsApp & Email Lead Qualification Workflows',
      'CRM Automation & Lead Routing (HubSpot, Zoho, Pipedrive)',
      'AI-Powered Document Processing & Data Extraction',
      'Zapier / Make.com Enterprise Multi-Step Automation Flows',
      'Generative AI Content & Marketing Pipeline Setup'
    ],
    deliverables: [
      'Trained Conversational AI Agent',
      'Automated Multi-Channel Lead Workflows',
      'CRM Custom Integration Pipelines',
      'Interactive System Training Documentation',
      '30 Days Post-Deployment Technical Support'
    ],
    painPoints: [
      'Sales reps taking hours to respond to new inbound leads',
      'Support teams bogged down answering repetitive customer FAQs',
      'Manual data entry errors between forms, CRMs, and spreadsheets',
      'High staffing costs for round-the-clock customer inquiry coverage'
    ],
    faqs: [
      { q: 'How accurately do AI agents answer customer questions?', a: 'We train the AI exclusively on your verified business knowledge base, FAQs, and product catalogs to prevent hallucinations.' },
      { q: 'Can the AI transfer chats to a human agent?', a: 'Yes, the AI can seamlessly escalate complex conversations to human agents on WhatsApp or live chat.' },
      { q: 'Which platforms can the AI connect to?', a: 'We integrate with WhatsApp, Website Chatbots, Instagram DMs, Email, and major CRMs.' },
      { q: 'How long does deployment take?', a: 'Standard AI chatbot and CRM automation flows are deployed within 7 to 10 business days.' }
    ],
    approach: 'Process optimization: building custom OpenAI API middleware, auto-answering email ticket routines, and internal CRM integrations.',
    typicalResults: 'Reduce manual administrative tasks by 70%, boosting corporate operational response speeds.'
  },
  {
    slug: 'brand-identity-design',
    id: '17',
    title: 'Brand Identity Design',
    category: 'Design & Branding',
    icon: '✒️',
    description: 'Memorable vector logos, color systems, typography and full brand guidelines.',
    longDescription: 'Establish world-class brand authority. We design 3-5 unique commercial-copyright vector logo concepts, curate custom typography and color palettes, craft comprehensive brand identity style guides, and deliver social media profile kits and corporate stationery.',
    pricing: '₹850–₹3,500',
    whatWeDo: [
      '3-5 Unique Vector Logo Concepts',
      'Brand Identity Style Guide (Typography, Palette, Usage Rules)',
      'Social Media Profile Kit (Avatar, Banners, Favicon)',
      'Business Card & Letterhead Stationery Designs',
      'Brand Voice and Positioning Strategy Development',
      'Merchandise & Promotional Item Mockups'
    ],
    deliverables: [
      '3-5 Unique Logo Concepts',
      'Full Brand Guidelines PDF',
      'Vector Source Files (AI, EPS, SVG, PDF)',
      'Social Media Branding Kit',
      'Corporate Stationery Assets'
    ],
    painPoints: [
      'Outdated clip-art logos making the business look untrustworthy',
      'No visual brand consistency across website, social, and print',
      'Low-resolution file formats pixelating on signs and uniforms',
      'Lack of brand guidelines resulting in fragmented marketing designs'
    ],
    faqs: [
      { q: 'Do I own full legal copyright of the logo?', a: 'Yes, 100% full commercial copyright is transferred to you upon delivery.' },
      { q: 'What files will I receive?', a: 'You receive vector files (AI, EPS, SVG), high-res transparent PNGs, and print-ready PDFs.' },
      { q: 'How many design revisions are included?', a: 'We offer 3 complete rounds of design revisions on the chosen logo concept.' },
      { q: 'Can you help modernize an existing logo?', a: 'Yes, we offer brand modernization and logo refinement services.' }
    ],
    approach: 'Strategic visual mapping: customer psychology profiling, custom typography logo guides, and full brand guideline systems.',
    typicalResults: 'Establish a premium market authority perception, enabling brands to justify 20% to 50% higher price points.'
  }
];

export const SERVICES_BY_SLUG: Record<string, ServiceItem> = ALL_17_SERVICES.reduce((acc, s) => {
  acc[s.slug] = s;
  return acc;
}, {} as Record<string, ServiceItem>);

export function getServiceBySlug(rawSlug?: string): ServiceItem | undefined {
  if (!rawSlug) return undefined;
  const clean = rawSlug.toLowerCase().trim();
  
  if (SERVICES_BY_SLUG[clean]) return SERVICES_BY_SLUG[clean];
  
  // Try by ID
  const byId = ALL_17_SERVICES.find(s => s.id === clean);
  if (byId) return byId;

  // Try title match
  const byTitle = ALL_17_SERVICES.find(s => 
    s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') === clean
  );
  if (byTitle) return byTitle;

  // Known common aliases
  const aliasMap: Record<string, string> = {
    'smm': 'social-media-marketing',
    'graphics': 'graphic-design',
    'ugc-reels': 'ugc-reels-creator-marketing',
    'creator-marketing': 'ugc-reels-creator-marketing',
    'kpi-dashboards': 'dashboard-kpi-systems',
    'dashboards': 'dashboard-kpi-systems',
    'seo-services': 'seo',
    'search-engine-optimization': 'seo',
    'ppc': 'google-ads',
    'google-ads-management': 'google-ads',
    'meta-ads-management': 'meta-ads',
    'facebook-ads': 'meta-ads',
    'instagram-ads': 'meta-ads',
    'paid-ads': 'meta-ads',
    'website-development': 'web-development',
    'custom-web-apps': 'web-development',
    'whatsapp-api': 'whatsapp-marketing',
    'email-marketing-funnels': 'email-marketing',
    'lead-generation': 'b2b-lead-generation',
    'b2b-leads': 'b2b-lead-generation',
    'ecommerce-marketing': 'ecommerce-scaling',
    'e-commerce-scaling': 'ecommerce-scaling',
    'e-commerce-marketing': 'ecommerce-scaling',
    'ecommerce': 'ecommerce-scaling',
    'e-commerce': 'ecommerce-scaling',
    'conversion-rate-optimization': 'cro',
    'conversion-optimization': 'cro',
    'local-business-seo': 'local-seo',
    'ai-automation': 'ai-automation-systems',
    'ai-systems': 'ai-automation-systems',
    'branding': 'brand-identity-design',
    'brand-identity': 'brand-identity-design',
    'logo-branding': 'brand-identity-design',
    'logo-and-branding': 'brand-identity-design'
  };

  const canonicalSlug = aliasMap[clean];
  if (canonicalSlug && SERVICES_BY_SLUG[canonicalSlug]) {
    return SERVICES_BY_SLUG[canonicalSlug];
  }

  return undefined;
}
