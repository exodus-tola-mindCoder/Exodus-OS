'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, Linkedin, ExternalLink, Download, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BibleVerseComponent from '@/components/bible-verse-component';

export default function AboutWindow() {
  return (
    <div className="p-6 space-y-6">
      {/* Header with Profile Picture */}
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative mx-auto mb-4"
        >
          {/* Profile Picture Container */}
          <div className="relative w-32 h-32 mx-auto">
            {/* Main Profile Picture */}
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Exodus Tola - Professional Profile"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling!.classList.remove('hidden');
                }}
              />
              {/* Fallback Avatar */}
              <div className="hidden w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">ET</span>
              </div>
            </div>
            
            {/* Decorative Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-blue-300 dark:border-blue-600 opacity-30"
            />
            
            {/* Status Indicator */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-3 border-white dark:border-gray-800 shadow-lg flex items-center justify-center"
            >
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </motion.div>
            
            {/* Camera Icon for Upload Hint */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-black/20 rounded-full flex items-center justify-center cursor-pointer transition-opacity duration-200"
              title="Professional headshot"
            >
              <Camera className="w-8 h-8 text-white/80" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Exodus Tola</h2>
          <p className="text-blue-600 dark:text-blue-400 font-medium">Full-Stack Developer & Entrepreneur</p>
          <div className="flex items-center justify-center space-x-1 text-gray-500 dark:text-gray-400 mt-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Addis Ababa, Ethiopia</span>
          </div>
          
          {/* Professional Status */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="inline-flex items-center space-x-2 mt-3 px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium border border-green-200 dark:border-green-700"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Available for Projects</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Bible Verse - Inspiration */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <BibleVerseComponent theme="purpose" variant="quote" />
      </motion.div>

      {/* Bio */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="prose prose-sm max-w-none"
      >
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          I'm a passionate full-stack developer and entrepreneur focused on building solutions that make a real impact. 
          With expertise spanning web development, mobile applications, and system architecture, I specialize in creating 
          scalable applications that solve real-world problems.
        </p>
        
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          My journey in tech has led me to develop applications in healthcare, education, agriculture, and e-commerce. 
          I believe in the power of technology to transform communities and create opportunities for growth and development.
          <span className="block mt-2 text-blue-600 dark:text-blue-400 italic font-medium">
            "Whatever you do, work at it with all your heart, as working for the Lord." - Colossians 3:23
          </span>
        </p>
      </motion.div>

      {/* Skills */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Core Technologies</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            'React/Next.js', 'Node.js', 'TypeScript', 
            'Python', 'PostgreSQL', 'MongoDB',
            'React Native', 'AWS/GCP', 'Docker'
          ].map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 + (index * 0.1) }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="bg-gray-50 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 cursor-pointer border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Vision */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800"
      >
        <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center space-x-2">
          <span>🎯</span>
          <span>Vision</span>
        </h3>
        <p className="text-blue-700 dark:text-blue-300 text-sm">
          To leverage technology in creating sustainable solutions that address local challenges while building 
          a thriving tech ecosystem in Ethiopia and beyond.
        </p>
      </motion.div>

      {/* Contact & Links */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="flex flex-wrap gap-3 pt-4 border-t border-gray-200 dark:border-gray-700"
      >
        <Button variant="outline" className="flex items-center space-x-2 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200">
          <Mail className="w-4 h-4" />
          <span>Contact</span>
        </Button>
        <Button variant="outline" className="flex items-center space-x-2 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200">
          <Linkedin className="w-4 h-4" />
          <span>LinkedIn</span>
          <ExternalLink className="w-3 h-3" />
        </Button>
        <Button className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
          <Download className="w-4 h-4" />
          <span>Download CV</span>
        </Button>
      </motion.div>

      {/* Faith-based Personal Touch */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.7 }}
        className="text-center pt-4 border-t border-gray-100 dark:border-gray-800"
      >
        <BibleVerseComponent theme="inspiration" variant="minimal" />
      </motion.div>
    </div>
  );
}