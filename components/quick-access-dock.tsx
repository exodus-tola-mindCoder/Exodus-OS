'use client';

import { motion } from 'framer-motion';
import { User, Code, Star, Building2, FolderOpen, HelpCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

interface QuickAccessDockProps {
  onIconClick: (id: string) => void;
}

const quickAccessItems = [
  { id: 'about', icon: User, label: 'About', color: 'from-blue-500 to-blue-600' },
  { id: 'skills', icon: Code, label: 'Skills', color: 'from-green-500 to-green-600' },
  { id: 'testimonials', icon: Star, label: 'Reviews', color: 'from-yellow-500 to-yellow-600' },
  { id: 'clients', icon: Building2, label: 'Clients', color: 'from-purple-500 to-purple-600' },
  { id: 'documents', icon: FolderOpen, label: 'Files', color: 'from-gray-500 to-gray-600' },
];

export default function QuickAccessDock({ onIconClick }: QuickAccessDockProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide dock when scrolling on smaller screens
      if (window.innerWidth < 1024) {
        setIsVisible(window.scrollY < 50);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="absolute top-4 left-1/2 transform -translate-x-1/2 z-40 hidden md:block"
    >
      <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/30 dark:border-gray-700/50 p-3 transition-colors duration-300">
        <div className="flex items-center space-x-2">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-3 pr-3 border-r border-gray-200 dark:border-gray-700">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">EOS</span>
            </div>
            <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 hidden lg:block">
              Exodus OS
            </span>
          </div>

          {/* Quick Access Icons */}
          <div className="flex items-center space-x-1">
            {quickAccessItems.map((item, index) => (
              <div key={item.id} className="relative">
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onIconClick(item.id)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="group relative p-2 rounded-xl hover:bg-gray-100/80 dark:hover:bg-gray-800/80 transition-all duration-200"
                >
                  <div className={`w-8 h-8 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-lg transition-shadow duration-200`}>
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                </motion.button>
                
                {/* Desktop-only Tooltip */}
                {hoveredItem === item.id && (
                  <motion.div
                    initial={{ opacity: 0, y: -5, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -5, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-[100]"
                    style={{ pointerEvents: 'none' }}
                  >
                    <div className="bg-gray-900/95 dark:bg-gray-800/95 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg shadow-xl border border-gray-700/50 whitespace-nowrap">
                      Open {item.label}
                      {/* Arrow */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900/95 dark:border-b-gray-800/95" />
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Help Icon */}
          <div className="pl-3 border-l border-gray-200 dark:border-gray-700 relative">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setHoveredItem('help')}
              onMouseLeave={() => setHoveredItem(null)}
              className="group p-2 rounded-xl hover:bg-gray-100/80 dark:hover:bg-gray-800/80 transition-all duration-200"
            >
              <HelpCircle className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" />
            </motion.button>
            
            {/* Help Tooltip */}
            {hoveredItem === 'help' && (
              <motion.div
                initial={{ opacity: 0, y: -5, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -5, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-[100]"
                style={{ pointerEvents: 'none' }}
              >
                <div className="bg-gray-900/95 dark:bg-gray-800/95 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg shadow-xl border border-gray-700/50 max-w-48 text-center">
                  💡 Hover over icons for helpful tooltips!
                  {/* Arrow */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900/95 dark:border-b-gray-800/95" />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Helper Text - Desktop only */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="text-center mt-3 hidden lg:block"
      >
        <p className="text-xs text-gray-600 dark:text-gray-400 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-200/50 dark:border-gray-700/50 inline-block">
          💡 Quick access to essential sections
        </p>
      </motion.div>
    </motion.div>
  );
}