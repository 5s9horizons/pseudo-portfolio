import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // In a real scenario, ensure process.env.API_KEY is available during build/dev
  // For example, by loading a .env file if necessary,
  // but the prompt states it's pre-configured and accessible.
  const apiKey = process.env.API_KEY;

  if (mode === 'production' && !apiKey) {
    console.warn("WARN: API_KEY is not defined for production build. Chatbot may not work.");
  }
  
  return {
    plugins: [react()],
    define: {
      // This makes process.env.API_KEY available in client-side code
      // It will be replaced with its actual value at build time.
      'process.env.API_KEY': JSON.stringify(apiKey)
    },
    server: {
      port: 3000,
      open: true
    }
  }
});
