'use client';

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { X, Minus, Square, Home } from 'lucide-react';

interface WindowProps {
  id: string;
  title: string;
  children: React.ReactNode;
  isActive: boolean;
  onClose: () => void;
  onFocus: () => void;
  onBackToDesktop: () => void;
  zIndex: number;
}

export default function Window({
  title,
  children,
  isActive,
  onClose,
  onFocus,
  onBackToDesktop,
  zIndex,
}: WindowProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dragRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // Auto-maximize on mobile
      if (mobile) {
        setIsMaximized(true);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMobile || isMaximized) return;
    
    setIsDragging(true);
    onFocus();
    
    const startX = e.clientX - position.x;
    const startY = e.clientY - position.y;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: Math.max(0, Math.min(window.innerWidth - 400, e.clientX - startX)),
        y: Math.max(0, Math.min(window.innerHeight - 300, e.clientY - startY)),
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMaximize = () => {
    if (isMobile) return; // Always maximized on mobile
    setIsMaximized(!isMaximized);
  };

  const handleBackToDesktop = () => {
    onBackToDesktop();
  };

  if (isMinimized) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        y: 0,
        x: isMaximized || isMobile ? 0 : position.x,
        y: isMaximized || isMobile ? 0 : position.y,
      }}
      exit={{ opacity: 0, scale: 0.8, y: 50 }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className={`
        absolute bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-2xl border border-white/20 dark:border-gray-700/50 transition-colors duration-300
        ${isMaximized || isMobile 
          ? 'inset-0 rounded-none' 
          : 'rounded-lg min-w-80 max-w-4xl min-h-96'
        }
        ${isActive ? 'ring-2 ring-blue-500/50 dark:ring-blue-400/50' : ''}
      `}
      style={{ 
        zIndex,
        width: isMaximized || isMobile ? '100vw' : 'auto',
        height: isMaximized || isMobile ? '100vh' : 'auto',
      }}
      onClick={onFocus}
    >
      {/* Window Header */}
      <div
        ref={dragRef}
        onMouseDown={handleMouseDown}
        className={`
          flex items-center justify-between p-3 border-b border-gray-200/50 dark:border-gray-700/50 bg-gray-50/50 dark:bg-gray-800/50 transition-colors duration-300
          ${isDragging ? 'cursor-grabbing' : (isMobile || isMaximized ? 'cursor-default' : 'cursor-grab')}
          ${isMaximized || isMobile ? 'rounded-none' : 'rounded-t-lg'}
        `}
      >
        <div className="flex items-center space-x-3">
          <div className="flex space-x-2">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors flex items-center justify-center group"
            >
              <X className="w-2 h-2 text-red-800 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
            
            {!isMobile && (
              <>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMinimized(true)}
                  className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors flex items-center justify-center group"
                >
                  <Minus className="w-2 h-2 text-yellow-800 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleMaximize}
                  className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors flex items-center justify-center group"
                >
                  <Square className="w-2 h-2 text-green-800 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>
              </>
            )}
          </div>
          <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200 select-none transition-colors duration-300 truncate">
            {title}
          </h3>
        </div>

        {/* Back to Desktop Button */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleBackToDesktop}
          className="flex items-center space-x-2 px-3 py-1.5 bg-blue-100 dark:bg-blue-900/50 hover:bg-blue-200 dark:hover:bg-blue-800/70 text-blue-700 dark:text-blue-300 rounded-lg transition-all duration-200 text-sm font-medium shadow-sm hover:shadow-md"
          title="Back to Desktop"
        >
          <Home className="w-4 h-4" />
          <span className="hidden sm:inline">Desktop</span>
        </motion.button>
      </div>

      {/* Window Content */}
      <div className={`
        overflow-auto bg-white dark:bg-gray-900 transition-colors duration-300
        ${isMaximized || isMobile 
          ? 'h-[calc(100vh-60px)] rounded-none' 
          : 'max-h-96 rounded-b-lg'
        }
      `}>
        {children}
      </div>
    </motion.div>
  );
}