import React, { useState } from 'react';
import SectionContainer from '../components/SectionContainer';
import SectionTitle from '../components/SectionTitle';
import { FORMSPREE_ENDPOINT } from '../constants';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('Message sent successfully! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await response.json();
        if (data.errors && Array.isArray(data.errors)) {
          setStatus(data.errors.map((error: { message: string}) => error.message).join(', '));
        } else if (data.error) {
           setStatus(data.error);
        }else {
          setStatus('Oops! There was a problem submitting your form.');
        }
      }
    } catch (error) {
      setStatus('Oops! There was a problem submitting your form.');
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:border-[#00FF88] focus:ring-1 focus:ring-[#00FF88] text-gray-100 placeholder-gray-500 transition-colors duration-200 outline-none";

  return (
    <SectionContainer>
      <SectionTitle subtitle="We'd love to hear from you. Reach out with any questions or ideas.">Contact Us</SectionTitle>
      <div className="max-w-2xl mx-auto bg-gray-800/50 p-8 rounded-lg shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputClass}
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputClass}
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
            <textarea
              name="message"
              id="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              className={`${inputClass} scrollbar-thin scrollbar-thumb-[#00FF88] scrollbar-track-gray-700`}
              placeholder="Your message..."
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-[#00FF88] hover:bg-opacity-80 transition-colors duration-300 shadow-lg hover:shadow-[#00FF88]/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-950 focus:ring-[#00FF88]"
              disabled={status === 'Sending...'}
            >
              {status === 'Sending...' ? 'Sending...' : 'Send Message'}
            </button>
          </div>
          {status && (
            <p className={`mt-4 text-sm text-center ${status.toLowerCase().includes('oops') || status.toLowerCase().includes('problem') || status.toLowerCase().includes('error') ? 'text-red-400' : 'text-green-400'}`}>
              {status}
            </p>
          )}
        </form>
      </div>
    </SectionContainer>
  );
};

export default ContactPage;
