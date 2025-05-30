import React from 'react';
import SectionContainer from '../components/SectionContainer';
import SectionTitle from '../components/SectionTitle';
import { Link } from 'react-router-dom';
import ArrowLeftIcon from '../components/icons/ArrowLeftIcon';

const TermsOfServicePage: React.FC = () => {
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
        <SectionTitle subtitle="Last updated: October 26, 2023 (Placeholder Date)">Terms of Service</SectionTitle>
        
        <div className="prose prose-invert prose-lg max-w-none text-gray-300 bg-gray-800/30 p-6 md:p-8 rounded-lg shadow-lg">
          <p>
            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the
            Pseudo Line website (the "Service") operated by Pseudo Line ("us", "we", or "our").
          </p>
          <p>
            Your access to and use of the Service is conditioned upon your acceptance of and compliance with
            these Terms. These Terms apply to all visitors, users, and others who wish to access or use the Service.
          </p>
          <p>
            By accessing or using the Service you agree to be bound by these Terms. If you disagree with
            any part of the terms then you do not have permission to access the Service.
          </p>
          <p>
            <strong>This is placeholder text.</strong> You should replace this with your actual Terms of Service.
            It's recommended to consult with a legal professional to ensure your terms are comprehensive and
            protect your interests.
          </p>

          <h2>1. Use of the Website</h2>
          <p>
            You agree to use the website only for lawful purposes and in a way that does not infringe the rights of,
            restrict or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes
            harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive
            content or disrupting the normal flow of dialogue within the website.
          </p>
          
          <h2>2. Intellectual Property</h2>
          <p>
            The Service and its original content (excluding content provided by users), features and functionality
            are and will remain the exclusive property of Pseudo Line and its licensors. The Service is protected by
            copyright, trademark, and other laws of both your country and foreign countries. Our trademarks and
            trade dress may not be used in connection with any product or service without the prior written
            consent of Pseudo Line.
          </p>
          <p>
            The placeholder logo and other design elements are for illustrative purposes. Project images used
            (e.g., from picsum.photos) are for placeholder demonstration only and subject to their respective licenses.
          </p>

          <h2>3. Links To Other Web Sites</h2>
          <p>
            Our Service may contain links to third-party web sites or services that are not owned or controlled by
            Pseudo Line.
          </p>
          <p>
            Pseudo Line has no control over, and assumes no responsibility for the content, privacy policies,
            or practices of any third party web sites or services. We do not warrant the offerings of any of these
            entities/individuals or their websites.
          </p>
          <p>
            You acknowledge and agree that Pseudo Line shall not be responsible or liable, directly or
            indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or
            reliance on any such content, goods or services available on or through any such third party web sites
            or services.
          </p>
          <p>
            We strongly advise you to read the terms and conditions and privacy policies of any third-party web
            sites or services that you visit.
          </p>

          <h2>4. AI Chatbot</h2>
            <p>
                The AI Chatbot feature is provided for informational purposes only. While we strive to ensure the information provided by the chatbot is accurate and helpful, we make no warranties regarding its completeness or accuracy. Responses from the chatbot do not constitute professional advice. For critical decisions or specific project engagements, please contact us directly.
            </p>
            <p>
                Your use of the AI Chatbot is subject to the terms and privacy policies of Google (for the Gemini API). We are not responsible for data handling practices by Google. The API key usage is managed as per our Privacy Policy.
            </p>
            <p>
                You agree not to input any sensitive personal information, illegal content, or harmful material into the chatbot. We reserve the right to suspend or terminate access to the chatbot feature for any user violating these terms.
            </p>

          <h2>5. Disclaimer</h2>
          <p>
            Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE"
            basis. The Service is provided without warranties of any kind, whether express or implied, including,
            but not limited to, implied warranties of merchantability, fitness for a particular purpose,
            non-infringement or course of performance.
          </p>
          
          <h2>6. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction - e.g., California, USA],
            without regard to its conflict of law provisions.
          </p>

          <h2>7. Changes</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
            revision is material we will provide at least 30 days' notice prior to any new terms taking effect.
            What constitutes a material change will be determined at our sole discretion.
          </p>
          <p>
            By continuing to access or use our Service after any revisions become effective, you agree to be
            bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use
            the Service.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us using the information on our <Link to="/contact" className="text-[#00FF88] hover:underline">Contact Page</Link>.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default TermsOfServicePage;
