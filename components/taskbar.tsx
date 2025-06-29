'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/components/theme-provider';
import { Clock, Wifi, Battery, Volume2, Globe, Sun, Moon, Menu, Home, X } from 'lucide-react';
import LanguageSwitcher from '@/components/language-switcher';

interface TaskbarProps {
  openWindows: string[];
  activeWindow: string | null;
  onWindowClick: (windowId: string) => void;
  onBackToDesktop: () => void;
}

export default function Taskbar({ openWindows, activeWindow, onWindowClick, onBackToDesktop }: TaskbarProps) {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [showLanguageSwitcher, setShowLanguageSwitcher] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  const currentTime = new Date().toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit' 
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getWindowDisplayName = (windowId: string) => {
    const nameMap: Record<string, string> = {
      'about': 'About',
      'skills': 'Skills',
      'testimonials': 'Reviews',
      'clients': 'Clients',
      'contact': 'Contact',
      'services': 'Services',
      'calendar-booking': 'Meeting',
      'case-studies': 'Cases',
      'social-media': 'Social',
      'analytics': 'Analytics',
      'github': 'GitHub',
      'achievements': 'Awards',
      'blog': 'Blog',
      'fun-facts': 'Fun Facts',
      'terminal': 'Terminal',
      'documents': 'Files',
      'recycle-bin': 'Trash',
      // Projects
      'agrix': 'AgriX',
      'unigo': 'UniGo',
      'freshman-placement': 'Placement',
      'eastlink-market': 'EastLink',
      'bloodhero-ethiopia': 'BloodHero',
      'peerswap': 'PeerSwap',
      'campus-repo': 'Campus Repo',
      'spiritual-growth': 'Spiritual'
    };
    
    return nameMap[windowId] || windowId.charAt(0).toUpperCase() + windowId.slice(1);
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="absolute bottom-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-700/50 transition-colors duration-300 h-16 z-50"
    >
      <div className="flex items-center justify-between h-full px-3 sm:px-4">
        {/* Left Section */}
        <div className="flex items-center space-x-2">
          {/* Logo/Start Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBackToDesktop}
            className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg hover:shadow-xl transition-shadow duration-200 text-sm"
            title="Back to Desktop"
          >
            EOS
          </motion.button>
          
          {/* Desktop Button - Show when windows are open */}
          {openWindows.length > 0 && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBackToDesktop}
              className="flex items-center space-x-2 px-3 py-2 bg-green-100 dark:bg-green-900/50 hover:bg-green-200 dark:hover:bg-green-800/70 text-green-700 dark:text-green-300 rounded-lg transition-all duration-200 text-sm font-medium shadow-sm hover:shadow-md"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Desktop</span>
            </motion.button>
          )}
          
          {/* Mobile Windows Menu Button */}
          {isMobile && openWindows.length > 0 && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {showMobileMenu ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </motion.button>
          )}
        </div>

        {/* Center Section - Desktop Windows */}
        {!isMobile && openWindows.length > 0 && (
          <div className="flex items-center space-x-2 flex-1 px-4 overflow-x-auto">
            <AnimatePresence>
              {openWindows.map((windowId) => (
                <motion.button
                  key={windowId}
                  initial={{ opacity: 0, scale: 0.8, x: -20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: -20 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onWindowClick(windowId)}
                  className={`
                    px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap
                    ${activeWindow === windowId 
                      ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-700 shadow-md' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }
                  `}
                >
                  {getWindowDisplayName(windowId)}
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Right Section - System Tray */}
        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {theme === 'light' ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Sun className="w-4 h-4 text-yellow-500" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Moon className="w-4 h-4 text-blue-400" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Language Switcher - Desktop only */}
          {!isMobile && (
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowLanguageSwitcher(!showLanguageSwitcher)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
              >
                <Globe className="w-4 h-4" />
              </motion.button>
              <AnimatePresence>
                {showLanguageSwitcher && (
                  <div className="absolute bottom-full right-0 mb-2">
                    <LanguageSwitcher onClose={() => setShowLanguageSwitcher(false)} />
                  </div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* System Icons - Desktop only */}
          {!isMobile && (
            <>
              <motion.div whileHover={{ scale: 1.1 }} className="p-1">
                <Volume2 className="w-4 h-4" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="p-1">
                <Wifi className="w-4 h-4" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="p-1">
                <Battery className="w-4 h-4" />
              </motion.div>
            </>
          )}
          
          {/* Clock */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-1 px-2 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">{currentTime}</span>
          </motion.div>
        </div>
      </div>

      {/* Mobile Windows Menu Overlay */}
      <AnimatePresence>
        {isMobile && showMobileMenu && openWindows.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-700/50 p-4 max-h-60 overflow-y-auto"
          >
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3">Open Windows</h3>
              {openWindows.map((windowId) => (
                <motion.button
                  key={windowId}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    onWindowClick(windowId);
                    setShowMobileMenu(false);
                  }}
                  className={`
                    w-full p-3 rounded-lg text-left font-medium transition-all duration-200
                    ${activeWindow === windowId 
                      ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-700' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }
                  `}
                >
                  {getWindowDisplayName(windowId)}
                  {activeWindow === windowId && (
                    <span className="text-xs opacity-70 block">Currently active</span>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}