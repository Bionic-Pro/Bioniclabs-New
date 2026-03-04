import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, FileText, Cookie } from 'lucide-react';

type LegalType = 'privacy' | 'terms' | 'cookies';

interface LegalModalProps {
  isOpen: boolean;
  type: LegalType | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  const getContent = () => {
    switch (type) {
      case 'privacy':
        return {
          title: 'Privacy Policy',
          icon: Shield,
          color: 'text-cyan-400',
          content: (
            <div className="space-y-4 text-gray-300">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              <p>At Bionic.labs, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our applications.</p>
              
              <h4 className="text-white font-bold text-lg mt-6">1. Information We Collect</h4>
              <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register with the Site or our mobile application.</li>
                <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
              </ul>

              <h4 className="text-white font-bold text-lg mt-6">2. Use of Your Information</h4>
              <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. We may use information collected about you via the Site to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Create and manage your account.</li>
                <li>Email you regarding your account or order.</li>
                <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
                <li>Generate a personal profile about you to make future visits to the Site more personalized.</li>
              </ul>

              <h4 className="text-white font-bold text-lg mt-6">3. Disclosure of Your Information</h4>
              <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</li>
                <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
              </ul>
            </div>
          )
        };
      case 'terms':
        return {
          title: 'Terms of Service',
          icon: FileText,
          color: 'text-red-400',
          content: (
            <div className="space-y-4 text-gray-300">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Bionic.labs website and applications operated by us.</p>
              
              <h4 className="text-white font-bold text-lg mt-6">1. Acceptance of Terms</h4>
              <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>

              <h4 className="text-white font-bold text-lg mt-6">2. Intellectual Property</h4>
              <p>The Service and its original content, features and functionality are and will remain the exclusive property of Bionic.labs and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.</p>

              <h4 className="text-white font-bold text-lg mt-6">3. User Accounts</h4>
              <p>When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>

              <h4 className="text-white font-bold text-lg mt-6">4. Limitation of Liability</h4>
              <p>In no event shall Bionic.labs, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

              <h4 className="text-white font-bold text-lg mt-6">5. Governing Law</h4>
              <p>These Terms shall be governed and construed in accordance with the laws of California, United States, without regard to its conflict of law provisions.</p>
            </div>
          )
        };
      case 'cookies':
        return {
          title: 'Cookie Policy',
          icon: Cookie,
          color: 'text-yellow-400',
          content: (
            <div className="space-y-4 text-gray-300">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              <p>This Cookie Policy explains what cookies are and how we use them. You should read this policy so you can understand what type of cookies we use, or the information we collect using cookies and how that information is used.</p>
              
              <h4 className="text-white font-bold text-lg mt-6">1. What Are Cookies?</h4>
              <p>Cookies are small text files that are sent to your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.</p>

              <h4 className="text-white font-bold text-lg mt-6">2. How We Use Cookies</h4>
              <p>When you use and access the Service, we may place a number of cookies files in your web browser. We use cookies for the following purposes:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>To enable certain functions of the Service.</li>
                <li>To provide analytics.</li>
                <li>To store your preferences.</li>
                <li>To enable advertisements delivery, including behavioral advertising.</li>
              </ul>

              <h4 className="text-white font-bold text-lg mt-6">3. Types of Cookies We Use</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Essential Cookies:</strong> We may use essential cookies to authenticate users and prevent fraudulent use of user accounts.</li>
                <li><strong>Analytics Cookies:</strong> We may use analytics cookies to track information how the Service is used so that we can make improvements.</li>
                <li><strong>Advertising Cookies:</strong> These cookies are used to deliver advertisements that are relevant to you and your interests.</li>
              </ul>

              <h4 className="text-white font-bold text-lg mt-6">4. Your Choices Regarding Cookies</h4>
              <p>If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser. Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.</p>
            </div>
          )
        };
      default:
        return { title: '', icon: Shield, color: '', content: null };
    }
  };

  const { title, icon: Icon, color, content } = getContent();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-3xl max-h-[80vh] bg-gray-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-gray-900/50">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-white/5 ${color}`}>
                  <Icon size={24} />
                </div>
                <h2 className="text-2xl font-display font-bold text-white">{title}</h2>
              </div>
              <button 
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto custom-scrollbar">
              {content}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-white/10 bg-gray-900/50 flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
