
import React from 'react';

// A simplified representation for Google Chat
const GoogleChatIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.97 0 3.8-.58 5.34-1.58L21.66 22l-1.58-4.34C21.42 15.8 22 13.97 22 12c0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    <circle cx="8.5" cy="12" r="1.5"/>
    <circle cx="12" cy="12" r="1.5"/>
    <circle cx="15.5" cy="12" r="1.5"/>
  </svg>
);

export default GoogleChatIcon;
