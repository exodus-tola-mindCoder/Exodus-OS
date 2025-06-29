'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface LanguageSwitcherProps {
  onClose: () => void;
}

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'am', name: 'አማርኛ', flag: '🇪🇹' },
  { code: 'om', name: 'Afaan Oromo', flag: '🇪🇹' },
];

export default function LanguageSwitcher({ onClose }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle outside click detection
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    // Add event listeners
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    // Cleanup event listeners on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [onClose]);

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    onClose();
  };

  return (
    <motion.div
      ref={dropdownRef}
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 10 }}
      className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-lg shadow-lg border border-gray-200/50 dark:border-gray-700/50 p-2 min-w-48 transition-colors duration-300"
    >
      <div className="space-y-1">
        {languages.map((language) => (
          <motion.button
            key={language.code}
            whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
            onClick={() => handleLanguageChange(language.code)}
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/30"
          >
            <div className="flex items-center space-x-3">
              <span className="text-lg">{language.flag}</span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {language.name}
              </span>
            </div>
            {i18n.language === language.code && (
              <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            )}
          </motion.button>
        ))}
      </div>
      
      {/* Helper text */}
      <div className="mt-2 pt-2 border-t border-gray-200/50 dark:border-gray-700/50">
        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
          Press Esc or click outside to close
        </p>
      </div>
    </motion.div>
  );
}