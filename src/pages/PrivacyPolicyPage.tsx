import React from 'react';
import SectionContainer from '../components/SectionContainer';
import SectionTitle from '../components/SectionTitle';
import { Link } from 'react-router-dom';
import ArrowLeftIcon from '../components/icons/ArrowLeftIcon';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <SectionContainer>
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-sm text-gray-400 hover:text-[#00FF88] transition-colors duration-200 group"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2 transition-transform duration-200 group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>
        <SectionTitle subtitle="Last updated: October 26, 2023 (Placeholder Date)">Privacy Policy</SectionTitle>
        
        <div className="prose prose-invert prose-lg max-w-none text-gray-300 bg-gray-800/30 p-6 md:p-8 rounded-lg shadow-lg">
          <p>
            Welcome to Pseudo Line's Privacy Policy. This page informs you of our policies regarding the collection,
            use, and disclosure of personal data when you use our website and the choices you have associated with
            that data.
          </p>
          <p>
            <strong>This is placeholder text.</strong> You should replace this with your actual Privacy Policy.
            It's recommended to consult with a legal professional to ensure your policy is comprehensive and compliant
            with all applicable laws and regulations (e.g., GDPR, CCPA).
          </p>

          <h2>Information Collection and Use</h2>
          <p>
            We collect several different types of information for various purposes to provide and improve our
            Service to you.
          </p>
          <h3>Types of Data Collected</h3>
          <h4>Personal Data</h4>
          <p>
            While using our Service, we may ask you to provide us with certain personally identifiable information
            that can be used to contact or identify you ("Personal Data"). Personally identifiable information may
            include, but is not limited to:
          </p>
          <ul>
            <li>Email address (e.g., via contact form or chatbot interaction if stored)</li>
            <li>First name and last name (e.g., via contact form)</li>
            <li>Cookies and Usage Data</li>
          </ul>
          <h4>Usage Data</h4>
          <p>
            We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data
            may include information such as your computer's Internet Protocol address (e.g. IP address), browser
            type, browser version, the pages of our Service that you visit, the time and date of your visit,
            the time spent on those pages, unique device identifiers and other diagnostic data.
          </p>

          <h2>Use of Data</h2>
          <p>Pseudo Line uses the collected data for various purposes:</p>
          <ul>
            <li>To provide and maintain our Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To allow you to participate in interactive features of our Service when you choose to do so (e.g., Chatbot)</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our Service</li>
            <li>To monitor the usage of our Service</li>
            <li>To detect, prevent and address technical issues</li>
            <li>To respond to your inquiries submitted through the contact form.</li>
          </ul>
          
          <h2>Contact Form Data</h2>
          <p>
            If you use our contact form, we use Formspree as a third-party service provider. Formspree's use of your information is governed by their privacy policy. We only collect the information you provide in the form (name, email, message) to respond to your inquiry.
          </p>

          <h2>AI Chatbot Data</h2>
          <p>
            Our AI Chatbot is powered by Google's Gemini API. Interactions with the chatbot involve sending your input to Google's servers for processing to generate a response. We do not store your chat history beyond the current session in your browser unless otherwise specified. Please refer to Google's Privacy Policy for information on how they handle data processed by their AI services.
          </p>
          <p>
            The API key for the Gemini API is intended to be managed via `process.env.API_KEY` as defined in the Vite configuration.
          </p>

          <h2>Cookies</h2>
          <p>
            Our website is built with Vite and React. It may use cookies necessary for the basic functioning of the site or by third-party services like Formspree or Google (for the AI Chatbot). We do not currently use cookies for direct user tracking or extensive analytics. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent, though some parts of our Service may not function properly without them.
          </p>

          <h2>Security of Data</h2>
          <p>
            The security of your data is important to us but remember that no method of transmission over the
            Internet or method of electronic storage is 100% secure. While we strive to use commercially
            acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
            new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any
            changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us using the information on our <Link to="/contact" className="text-[#00FF88] hover:underline">Contact Page</Link>.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default PrivacyPolicyPage;
