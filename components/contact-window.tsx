'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Linkedin, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  projectType: string;
}

export default function ContactWindow() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '', projectType: 'general' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <div className="p-6 space-y-6 max-h-96 overflow-y-auto">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
            <Mail className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Get In Touch</h2>
            <p className="text-gray-600 text-sm">Let's discuss your project or collaboration ideas</p>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-center"
        >
          <Mail className="w-6 h-6 text-blue-600 mx-auto mb-2" />
          <h3 className="font-semibold text-blue-800 text-sm">Email</h3>
          <p className="text-blue-700 text-xs">exodus.tola@example.com</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-green-50 p-4 rounded-lg border border-green-100 text-center"
        >
          <Phone className="w-6 h-6 text-green-600 mx-auto mb-2" />
          <h3 className="font-semibold text-green-800 text-sm">Phone</h3>
          <p className="text-green-700 text-xs">+251 9XX XXX XXX</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-purple-50 p-4 rounded-lg border border-purple-100 text-center"
        >
          <MapPin className="w-6 h-6 text-purple-600 mx-auto mb-2" />
          <h3 className="font-semibold text-purple-800 text-sm">Location</h3>
          <p className="text-purple-700 text-xs">Addis Ababa, Ethiopia</p>
        </motion.div>
      </div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Your full name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          >
            <option value="general">General Inquiry</option>
            <option value="web-development">Web Development</option>
            <option value="mobile-app">Mobile App Development</option>
            <option value="consulting">Technical Consulting</option>
            <option value="collaboration">Collaboration</option>
            <option value="speaking">Speaking Engagement</option>
          </select>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="Brief description of your inquiry"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
            placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </>
          )}
        </Button>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center space-x-2 p-3 bg-green-50 border border-green-200 rounded-lg text-green-800"
          >
            <CheckCircle className="w-5 h-5" />
            <span className="text-sm">Message sent successfully! I'll get back to you within 24 hours.</span>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center space-x-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-800"
          >
            <AlertCircle className="w-5 h-5" />
            <span className="text-sm">Failed to send message. Please try again or contact me directly.</span>
          </motion.div>
        )}
      </motion.form>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="pt-4 border-t border-gray-200"
      >
        <h3 className="font-semibold text-gray-800 mb-3 text-center">Connect on Social Media</h3>
        <div className="flex justify-center space-x-4">
          <Button variant="outline" size="sm" className="flex items-center space-x-2">
            <Linkedin className="w-4 h-4 text-blue-600" />
            <span>LinkedIn</span>
            <ExternalLink className="w-3 h-3" />
          </Button>
          <Button variant="outline" size="sm" className="flex items-center space-x-2">
            <Github className="w-4 h-4 text-gray-800" />
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3" />
          </Button>
        </div>
      </motion.div>

      {/* Response Time Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center"
      >
        <h4 className="font-semibold text-blue-800 mb-2">⚡ Quick Response Guarantee</h4>
        <p className="text-blue-700 text-sm">
          I typically respond to all inquiries within 24 hours. For urgent projects, 
          feel free to mention it in your message for priority handling.
        </p>
      </motion.div>
    </div>
  );
}