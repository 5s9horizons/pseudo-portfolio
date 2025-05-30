import type { PricingPlan } from '../types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'micro-spark',
    name: 'MicroSpark',
    price: '$250 - $450+',
    description: 'A minimalist digital calling card. Perfect for showcasing a single project, resume, or contact details with a professional touch.',
    features: [
      'Ultra-Minimalist Single Section Page',
      'Text & Essential Links Only',
      'Clean, Professional Look',
      'Mobile Responsive Design',
      'Deployment Guidance',
    ],
    ctaText: 'Get Online Simply',
    ctaLink: '/contact?plan=micro-spark',
    highlight: false,
  },
  {
    id: 'starter-spark',
    name: 'StarterSpark',
    price: '$500 - $800+',
    description: 'The essential first step for individuals or new ideas needing a clean, single-page web presence.',
    features: [
      'Single Page Static Website',
      'Clean & Professional Template Customization (Colors, Fonts)',
      'Contact Form Integration',
      'Mobile Responsive Design',
      'Basic SEO Setup (Meta Tags)',
      'Deployment Guidance',
    ],
    ctaText: 'Spark Your Idea',
    ctaLink: '/contact?plan=starter-spark',
    highlight: false,
  },
  {
    id: 'launchpad',
    name: 'LaunchPad',
    price: '$900 - $1200+',
    description: 'For small businesses needing a professional multi-page website to establish a solid online presence.',
    features: [
      'Multi-page Static Website (up to 5 pages)',
      'Customized Design (based on chosen themes/styles)',
      'Content Integration (client-provided)',
      'Blog Setup Guidance (for static site generators)',
      'Enhanced SEO Setup (meta tags, sitemap)',
      'Performance Optimization Basics',
      'Deployment Assistance & Guidance',
    ],
    ctaText: 'Get Launched',
    ctaLink: '/contact?plan=launchpad',
    highlight: false, 
  },
  {
    id: 'impact-plus',
    name: 'ImpactPlus',
    price: '$1300 - $1600+',
    description: 'For businesses looking for more interactivity or simple content management capabilities.',
    features: [
      'Everything in LaunchPad, plus:',
      'Dynamic Elements (e.g., interactive components)',
      'Simple CMS Integration Guidance (e.g., Decap CMS)',
      'Basic E-commerce Link Integration (e.g., Stripe/PayPal buttons)',
      'Newsletter/Mailing List Form Integration',
      'Analytics Setup (e.g., Google Analytics)',
      'Priority Email Support (Business Hours)',
    ],
    ctaText: 'Make an Impact',
    ctaLink: '/contact?plan=impact-plus',
    highlight: true,
  },
];

export const customSolutionPrompt = {
  title: "Need a Custom Solution?",
  description: "If your project requirements go beyond our standard plans, or you need a unique combination of features, we're here to help. Let's discuss your specific needs to craft a tailored proposal.",
  ctaText: "Request a Custom Quote",
  ctaLink: "/contact?plan=custom"
};