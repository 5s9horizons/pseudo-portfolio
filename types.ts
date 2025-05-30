
export interface Project {
  id: string;
  name: string;
  description: string;
  stack: string[];
  imageUrl?: string; // Optional image for the project card
  githubLink?: string;
  demoLink?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  highlight?: boolean;
  icon?: React.ReactNode; // Optional: an icon component for the plan itself
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: number;
}
