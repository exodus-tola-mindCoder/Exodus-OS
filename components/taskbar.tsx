'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/components/theme-provider';
import { 
  Clock, Wifi, Battery, Volume2, Globe, Sun, Moon, Menu, Home, X, 
  Settings, ChevronUp, User, Palette, Languages, Zap, Info
} from 'lucide-react';
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
  const [showSystemPanel, setShowSystemPanel] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit' 
      }));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
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
    <>
      {/* System Panel - Slides up from bottom */}
      <AnimatePresence>
        {showSystemPanel && (
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute bottom-16 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-700/50 transition-colors duration-300 z-40"
          >
            <div className="p-6 max-h-80 overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Theme & Appearance */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center space-x-2">
                    <Palette className="w-4 h-4" />
                    <span>Appearance</span>
                  </h3>
                  
                  <div className="space-y-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={toggleTheme}
                      className="w-full flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
                    >
                      <div className="flex items-center space-x-3">
                        {theme === 'light' ? (
                          <Sun className="w-5 h-5 text-yellow-500" />
                        ) : (
                          <Moon className="w-5 h-5 text-blue-400" />
                        )}
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">Toggle</span>
                    </motion.button>
                  </div>
                </div>

                {/* Language & Localization */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center space-x-2">
                    <Languages className="w-4 h-4" />
                    <span>Language</span>
                  </h3>
                  
                  <div className="space-y-2">
                    {[
                      { code: 'en', name: 'English', flag: '🇺🇸' },
                      { code: 'am', name: 'አማርኛ', flag: '🇪🇹' },
                      { code: 'om', name: 'Afaan Oromo', flag: '🇪🇹' },
                    ].map((language) => (
                      <motion.button
                        key={language.code}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          // Handle language change
                          setShowSystemPanel(false);
                        }}
                        className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        <span className="text-lg">{language.flag}</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300">{language.name}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* System Info */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center space-x-2">
                    <Info className="w-4 h-4" />
                    <span>System</span>
                  </h3>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Version</span>
                      <span className="text-gray-800 dark:text-gray-200">Exodus OS v2.0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Uptime</span>
                      <span className="text-gray-800 dark:text-gray-200">2h 34m</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Memory</span>
                      <span className="text-gray-800 dark:text-gray-200">68% used</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Network</span>
                      <span className="text-green-600 dark:text-green-400">Connected</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Close Panel Button */}
              <div className="flex justify-center mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowSystemPanel(false)}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  <ChevronUp className="w-4 h-4" />
                  <span>Close Panel</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Taskbar */}
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
              className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg hover:shadow-xl transition-shadow duration-200 text-sm border border-blue-400/30"
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
                className="flex items-center space-x-2 px-3 py-2 bg-green-100 dark:bg-green-900/50 hover:bg-green-200 dark:hover:bg-green-800/70 text-green-700 dark:text-green-300 rounded-lg transition-all duration-200 text-sm font-medium shadow-sm hover:shadow-md border border-green-200 dark:border-green-700"
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
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
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
                      px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap border
                      ${activeWindow === windowId 
                        ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-700 shadow-md' 
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-700'
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
            {/* System Panel Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowSystemPanel(!showSystemPanel)}
              className={`p-2 rounded-lg transition-all duration-200 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 ${
                showSystemPanel 
                  ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-700' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
              title="System Settings"
            >
              <Settings className="w-4 h-4" />
            </motion.button>

            {/* System Icons - Desktop only */}
            {!isMobile && (
              <>
                <motion.div whileHover={{ scale: 1.1 }} className="p-1" title="Volume">
                  <Volume2 className="w-4 h-4" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className="p-1" title="Network">
                  <Wifi className="w-4 h-4" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className="p-1" title="Battery">
                  <Battery className="w-4 h-4" />
                </motion.div>
              </>
            )}
            
            {/* Clock */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-1 px-2 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
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
                      w-full p-3 rounded-lg text-left font-medium transition-all duration-200 border
                      ${activeWindow === windowId 
                        ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-700' 
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-700'
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
    </>
  );
}