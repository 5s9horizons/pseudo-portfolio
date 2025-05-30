import React from 'react';
import SectionContainer from '../components/SectionContainer';
import SectionTitle from '../components/SectionTitle';
import { pricingPlans, customSolutionPrompt } from '../data/pricingData';
import CheckIcon from '../components/icons/CheckIcon';
import { Link } from 'react-router-dom';
import ArrowRightIcon from '../components/icons/ArrowRightIcon';

const PricingPage: React.FC = () => {
  return (
    <SectionContainer>
      <SectionTitle subtitle="Choose the perfect plan for your full-stack web development needs.">
        Our Pricing Plans
      </SectionTitle>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
        {pricingPlans.map((plan) => (
          <div 
            key={plan.id} 
            className={`flex flex-col bg-gray-800/50 p-6 rounded-lg shadow-xl transition-all duration-300 border ${
              plan.highlight 
                ? 'border-[#00FF88]/70 shadow-[#00FF88]/30 scale-[1.02]' 
                : 'border-gray-700/50 hover:border-[#00FF88]/50'
            }`}
          >
            {plan.highlight && (
              <div className="text-center mb-4">
                <span className="px-4 py-1 text-xs font-semibold text-gray-900 bg-[#00FF88] rounded-full uppercase tracking-wider">
                  Most Popular
                </span>
              </div>
            )}
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-center text-[#00FF88] mb-2">{plan.name}</h3>
              <p className="text-3xl font-semibold text-center text-gray-100 mb-4">{plan.price}</p>
              <p className="text-sm text-gray-400 text-center mb-6 h-20 min-h-[5rem]">{plan.description}</p> 
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-[#00FF88] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to={plan.ctaLink}
              className={`w-full mt-auto block text-center px-6 py-3 rounded-md font-medium transition-colors duration-300
                ${plan.highlight 
                  ? 'bg-[#00FF88] text-gray-900 hover:bg-opacity-80 shadow-lg hover:shadow-[#00FF88]/40' 
                  : 'bg-gray-700 text-gray-200 hover:bg-[#00FF88] hover:text-gray-900 border border-gray-600 hover:border-[#00FF88]'
                }`}
            >
              {plan.ctaText}
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center bg-gray-800/30 p-8 md:p-12 rounded-lg shadow-xl border border-gray-700/50">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#00FF88]">{customSolutionPrompt.title}</h3>
        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          {customSolutionPrompt.description}
        </p>
        <Link
          to={customSolutionPrompt.ctaLink}
          className="inline-flex items-center justify-center px-8 py-3 border border-[#00FF88] text-base font-medium rounded-md text-[#00FF88] hover:bg-[#00FF88] hover:text-gray-950 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-950 focus:ring-[#00FF88]"
        >
          {customSolutionPrompt.ctaText}
          <ArrowRightIcon className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </SectionContainer>
  );
};

export default PricingPage;