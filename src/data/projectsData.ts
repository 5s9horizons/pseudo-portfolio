import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'codex-terminal',
    name: 'Codex Terminal',
    description: 'An advanced command-line interface infused with AI capabilities for enhanced developer productivity and system interaction. Features natural language processing for commands and intelligent suggestions.',
    stack: ['Rust', 'Python', 'LLM API', 'WebSockets'],
    imageUrl: 'https://picsum.photos/seed/codexterminal/600/400',
    githubLink: '#', 
    demoLink: '#',   
  },
  {
    id: 'satori-os',
    name: 'Satori OS',
    description: 'A minimalist, security-focused operating system designed for clarity and mindful computing. Explores novel UI/UX paradigms inspired by philosophical concepts of awareness and flow.',
    stack: ['C', 'Assembly', 'Custom Kernel', 'Minimalist GUI'],
    imageUrl: 'https://picsum.photos/seed/satorios/600/400',
    githubLink: '#',
  },
  {
    id: 'ghost-mentor',
    name: 'Ghost Mentor',
    description: 'An AI-powered mentorship platform that provides personalized guidance and learning paths for open-source contributors and software engineering aspirants. Uses adaptive learning algorithms.',
    stack: ['Node.js', 'React', 'PostgreSQL', 'AI/ML', 'GraphQL'],
    imageUrl: 'https://picsum.photos/seed/ghostmentor/600/400',
    demoLink: '#',
  },
  {
    id: 'real-time-study-guide-ai',
    name: 'Real-Time Study Guide AI',
    description: 'An intelligent study assistant that dynamically generates and adapts study materials based on user progress, learning style, and real-time educational content feeds.',
    stack: ['Python (Flask)', 'Next.js', 'Vector DB', 'LLM API'],
    imageUrl: 'https://picsum.photos/seed/studyguiadeai/600/400',
    githubLink: '#',
  },
  {
    id: 'codex-fusion-journal',
    name: 'Codex Fusion Journal',
    description: 'A digital journaling application that integrates creative writing prompts, data visualization of personal metrics, and AI-driven insights for self-reflection and growth.',
    stack: ['Electron', 'SvelteKit', 'SQLite', 'D3.js', 'NLP'],
    imageUrl: 'https://picsum.photos/seed/fusionjournal/600/400',
  },
  {
    id: 'polymathic-engine',
    name: 'Polymathic Engine',
    description: 'A conceptual framework and early-stage prototype for a system that cross-references knowledge from diverse domains to identify novel connections and generate interdisciplinary insights.',
    stack: ['Graph DB', 'AI/ML', 'Semantic Web', 'Research'],
    imageUrl: 'https://picsum.photos/seed/polymathic/600/400',
    githubLink: '#',
  },
];
