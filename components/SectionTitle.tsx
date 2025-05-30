
import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, subtitle }) => {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-[#00FF88]">
        {children}
      </h2>
      {subtitle && <p className="text-lg text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
      <div className="mt-4 h-1 w-20 mx-auto rounded-full bg-[#00FF88] opacity-50"></div>
    </div>
  );
};

export default SectionTitle;
