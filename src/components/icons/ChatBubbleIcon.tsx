import React from 'react';

const ChatBubbleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3.68-3.091a4.501 4.501 0 00-3.207-1.254H5.25c-1.136 0-2.097-.847-2.193-1.98-.027-.34-.052-.68-.072-1.02V8.511c.027-.34.052-.68.072-1.02A2.25 2.25 0 015.25 5.25h9.503c.836 0 1.534.565 1.888 1.352l1.613 2.915z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25a2.25 2.25 0 012.25-2.25h9.503c.836 0 1.534.565 1.888 1.352l1.613 2.915M19.5 16.5v-2.625c0-.818-.311-1.566-.856-2.125l-2.011-1.926M3.75 12h.008v.008H3.75V12zm3 0h.008v.008H6.75V12zm3 0h.008v.008H9.75V12z" />
  </svg>
);

export default ChatBubbleIcon;
