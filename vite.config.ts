import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const apiKey = process.env.API_KEY;

  if (mode === 'production' && !apiKey) {
    console.warn("WARN: API_KEY is not defined for production build. Chatbot may not work.");
  }
  
  return {
    // Set the base path for GitHub Pages deployment
    base: '/pseudo-portfolio/',  // <-- Update this to match your GitHub repo name

    plugins: [react()],
    
    define: {
      // Make process.env.API_KEY available on the client side
      'process.env.API_KEY': JSON.stringify(apiKey)
    },

    server: {
      port: 3000,
      open: true
    }
  }
});
