import type { NavItem } from './types';

export const PRIMARY_GREEN = '#00FF88';
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORMSPREE_ID'; // Replace YOUR_FORMSPREE_ID

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Contact', path: '/contact' },
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/your-profile', 
  linkedin: 'https://linkedin.com/in/your-profile', 
  twitter: 'https://twitter.com/your-profile', 
  email: 'mailto:your-email@example.com', 
  instagram: 'https://instagram.com/your-profile', 
  youtube: 'https://youtube.com/your-channel', 
  medium: 'https://medium.com/@your-profile', 
  whatsapp: 'https://wa.me/yourphonenumber', 
  bluesky: 'https://bsky.app/profile/yourhandle.bsky.social', 
  mastodon: 'https://yourmastodonserver.social/@yourusername', 
  telegram: 'https://t.me/yourusername', 
  discord: 'https://discord.gg/yourinvitecode', 
  googlechat: 'https://chat.google.com/yourspace', 
  threads: 'https://threads.net/@yourusername', 
  signal: 'https://signal.me/#p/+yourphonenumber', 
  tiktok: 'https://tiktok.com/@yourusername', 
  patreon: 'https://patreon.com/yourusername', 
};

// Chatbot Constants
export const CHATBOT_NAME = "Pseudo Line Assistant";
export const CHATBOT_INITIAL_MESSAGE = "Hello! I'm the Pseudo Line Assistant. How can I help you today? You can ask me about our projects, pricing, or services.";
export const CHATBOT_SYSTEM_INSTRUCTION_BASE = `You are ${CHATBOT_NAME}, a professional and helpful AI assistant for Pseudo Line.
Pseudo Line is a future-forward, polymathic enterprise working at the intersection of software engineering & cybersecurity, open-source education & AI tools, and creative development (games, robotics, philosophy-inspired systems).
Their mission is: "We build tools that teach, systems that think, and art that moves."
Be concise and informative. If you don't know the answer to something, say so politely and suggest contacting them directly or visiting a relevant page.
Do not make up information. Guide users to the contact page for direct inquiries about starting a project.
Today's date is ${new Date().toLocaleDateString()}.`;

export const CHATBOT_PROJECTS_CONTEXT_HEADER = "\n\nHere's a summary of Pseudo Line's projects:";
export const CHATBOT_PRICING_CONTEXT_HEADER = "\n\nHere's a summary of Pseudo Line's pricing plans for full-stack web development:";
export const CHATBOT_SUFFIX_INSTRUCTION = "\n\nBased on this information, answer the user's questions. If a question is about starting a service or a very specific technical detail not covered, guide them to the contact page or the specific project/pricing page for more details.";
