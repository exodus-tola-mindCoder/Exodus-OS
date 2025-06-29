'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface DesktopIconProps {
  id: string;
  icon: LucideIcon;
  label: string;
  tooltip?: string;
  onClick: () => void;
}

export default function DesktopIcon({ id, icon: Icon, label, tooltip, onClick }: DesktopIconProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState<'top' | 'bottom'>('bottom');
  const [isMobile, setIsMobile] = useState(false);
  const [tapCount, setTapCount] = useState(0);
  const iconRef = useRef<HTMLDivElement>(null);
  const tooltipTimeoutRef = useRef<NodeJS.Timeout>();
  const tapTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getTooltipText = () => {
    if (tooltip) return tooltip;
    
    // Context-aware tooltips
    const tooltipMap: Record<string, string> = {
      'about': 'Learn about Exodus - his background, vision, and journey',
      'skills': 'Technical skills and technologies Exodus masters',
      'testimonials': 'What clients and colleagues say about working with Exodus',
      'clients': 'Organizations that trust Exodus with their projects',
      'contact': 'Get in touch for projects and collaborations',
      'analytics': 'Portfolio analytics and visitor insights',
      'github': 'Live GitHub activity and repository stats',
      'documents': 'Download resume, pitch decks, and important files',
      'fun-facts': 'Personal interests and hobbies beyond coding',
      'terminal': '🎮 Easter Egg: Interactive command line interface',
      'recycle-bin': '🗑️ Abandoned projects and learning experiments'
    };

    return tooltipMap[label.toLowerCase()] || `Explore ${label} - tap to see description, double-tap to open`;
  };

  const calculateTooltipPosition = () => {
    if (!iconRef.current) return;
    
    const rect = iconRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const spaceBelow = viewportHeight - rect.bottom;
    
    // Smart positioning based on available space
    setTooltipPosition(spaceBelow < 100 ? 'top' : 'bottom');
  };

  const handleMouseEnter = () => {
    if (isMobile) return; // No hover on mobile
    
    calculateTooltipPosition();
    tooltipTimeoutRef.current = setTimeout(() => {
      setShowTooltip(true);
    }, 200);
  };

  const handleMouseLeave = () => {
    if (tooltipTimeoutRef.current) {
      clearTimeout(tooltipTimeoutRef.current);
    }
    setShowTooltip(false);
  };

  const handleClick = () => {
    if (!isMobile) {
      // Desktop: Direct click to open
      onClick();
      setShowTooltip(false);
      return;
    }

    // Mobile: Tap logic
    setTapCount(prev => prev + 1);

    // Clear any existing timeout
    if (tapTimeoutRef.current) {
      clearTimeout(tapTimeoutRef.current);
    }

    if (tapCount === 0) {
      // First tap: Show tooltip
      calculateTooltipPosition();
      setShowTooltip(true);
      
      // Auto-hide tooltip after 3 seconds
      setTimeout(() => setShowTooltip(false), 3000);
      
      // Reset tap count after 1 second
      tapTimeoutRef.current = setTimeout(() => {
        setTapCount(0);
      }, 1000);
    } else {
      // Second tap: Open content
      onClick();
      setShowTooltip(false);
      setTapCount(0);
    }
  };

  // Reset tap count when tooltip is hidden
  useEffect(() => {
    if (!showTooltip && isMobile) {
      const timer = setTimeout(() => setTapCount(0), 500);
      return () => clearTimeout(timer);
    }
  }, [showTooltip, isMobile]);

  // Get icon-specific colors that work well in both themes
  const getIconColors = (iconId: string) => {
    const colorMap: Record<string, { bg: string; icon: string; hover: string; border: string }> = {
      'terminal': {
        bg: 'from-gray-800 to-black dark:from-green-600 dark:to-green-800',
        icon: 'text-green-400 dark:text-green-100',
        hover: 'hover:from-green-700 hover:to-green-900 dark:hover:from-green-500 dark:hover:to-green-700',
        border: 'border-green-500/30 dark:border-green-400/50'
      },
      'about': {
        bg: 'from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-800',
        icon: 'text-white',
        hover: 'hover:from-blue-600 hover:to-blue-800 dark:hover:from-blue-500 dark:hover:to-blue-700',
        border: 'border-blue-400/30 dark:border-blue-500/50'
      },
      'skills': {
        bg: 'from-emerald-500 to-emerald-700 dark:from-emerald-600 dark:to-emerald-800',
        icon: 'text-white',
        hover: 'hover:from-emerald-600 hover:to-emerald-800 dark:hover:from-emerald-500 dark:hover:to-emerald-700',
        border: 'border-emerald-400/30 dark:border-emerald-500/50'
      },
      'contact': {
        bg: 'from-purple-500 to-purple-700 dark:from-purple-600 dark:to-purple-800',
        icon: 'text-white',
        hover: 'hover:from-purple-600 hover:to-purple-800 dark:hover:from-purple-500 dark:hover:to-purple-700',
        border: 'border-purple-400/30 dark:border-purple-500/50'
      },
      'github': {
        bg: 'from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800',
        icon: 'text-white',
        hover: 'hover:from-gray-800 hover:to-black dark:hover:from-gray-500 dark:hover:to-gray-700',
        border: 'border-gray-500/30 dark:border-gray-400/50'
      },
      'agrix': {
        bg: 'from-green-500 to-green-700 dark:from-green-600 dark:to-green-800',
        icon: 'text-white',
        hover: 'hover:from-green-600 hover:to-green-800 dark:hover:from-green-500 dark:hover:to-green-700',
        border: 'border-green-400/30 dark:border-green-500/50'
      },
      'bloodhero-ethiopia': {
        bg: 'from-red-500 to-red-700 dark:from-red-600 dark:to-red-800',
        icon: 'text-white',
        hover: 'hover:from-red-600 hover:to-red-800 dark:hover:from-red-500 dark:hover:to-red-700',
        border: 'border-red-400/30 dark:border-red-500/50'
      },
      'default': {
        bg: 'from-slate-500 to-slate-700 dark:from-slate-600 dark:to-slate-800',
        icon: 'text-white',
        hover: 'hover:from-slate-600 hover:to-slate-800 dark:hover:from-slate-500 dark:hover:to-slate-700',
        border: 'border-slate-400/30 dark:border-slate-500/50'
      }
    };

    return colorMap[iconId] || colorMap['default'];
  };

  const colors = getIconColors(id);

  return (
    <div className="relative w-full flex justify-center" ref={iconRef}>
      <motion.div
        whileHover={!isMobile ? { scale: 1.05, y: -3 } : {}}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`
          flex flex-col items-center cursor-pointer group rounded-xl transition-all duration-200 w-full
          ${isMobile 
            ? 'p-3 max-w-[90px] active:bg-blue-50 dark:active:bg-blue-900/20' 
            : 'p-3 max-w-[100px] hover:bg-white/20 dark:hover:bg-white/10'
          }
        `}
      >
        <div className="relative mb-2">
          <motion.div
            whileHover={!isMobile ? { 
              rotate: [0, -3, 3, -3, 0],
              transition: { duration: 0.5 }
            } : {}}
            className={`
              bg-gradient-to-br ${colors.bg} ${colors.hover}
              rounded-xl shadow-lg flex items-center justify-center transition-all duration-300 
              border ${colors.border} backdrop-blur-sm
              group-hover:shadow-xl group-hover:border-opacity-70
              ${isMobile 
                ? 'w-12 h-12' 
                : 'w-14 h-14 lg:w-16 lg:h-16'
              }
            `}
          >
            <Icon className={`
              ${colors.icon} transition-all duration-200
              ${isMobile ? 'w-6 h-6' : 'w-7 h-7 lg:w-8 lg:h-8'}
            `} />
          </motion.div>
          
          {/* Glow effect - desktop only */}
          {!isMobile && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-lg"
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1.2 }}
            />
          )}
        </div>
        
        <motion.span 
          className={`
            text-gray-800 dark:text-gray-200 text-center font-medium 
            group-hover:text-blue-600 dark:group-hover:text-blue-400 
            transition-colors duration-200 leading-tight max-w-full px-1
            ${isMobile 
              ? 'text-xs break-words hyphens-auto' 
              : 'text-sm'
            }
          `}
          whileHover={!isMobile ? { scale: 1.02 } : {}}
          style={{
            wordBreak: 'break-word',
            lineHeight: '1.2',
          }}
        >
          {label}
        </motion.span>

        {/* Mobile tap indicator */}
        {isMobile && tapCount > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center shadow-lg border border-white dark:border-gray-800"
          >
            <span className="text-white text-xs font-bold">{tapCount}</span>
          </motion.div>
        )}
      </motion.div>

      {/* Smart Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: tooltipPosition === 'top' ? 10 : -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: tooltipPosition === 'top' ? 10 : -10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className={`absolute left-1/2 transform -translate-x-1/2 z-[200] ${
              tooltipPosition === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'
            }`}
            style={{ pointerEvents: 'none' }}
          >
            <div className="relative">
              <div className={`
                bg-gray-900/95 dark:bg-gray-800/95 backdrop-blur-sm text-white rounded-lg 
                shadow-2xl border border-gray-700/50 dark:border-gray-600/50 text-center
                ${isMobile 
                  ? 'text-xs px-3 py-2 max-w-[160px]' 
                  : 'text-xs px-3 py-2 max-w-[220px]'
                }
              `}>
                <div className="font-medium leading-relaxed">
                  {getTooltipText()}
                </div>
                {isMobile && (
                  <div className="text-blue-300 text-[10px] mt-1 opacity-80">
                    Tap again to open
                  </div>
                )}
              </div>
              
              {/* Tooltip arrow */}
              <div 
                className={`absolute left-1/2 transform -translate-x-1/2 w-0 h-0 ${
                  tooltipPosition === 'top' 
                    ? 'top-full border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/95 dark:border-t-gray-800/95'
                    : 'bottom-full border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900/95 dark:border-b-gray-800/95'
                }`}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}