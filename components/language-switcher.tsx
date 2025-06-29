'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';

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

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    onClose();
  };

  return (
    <motion.div
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
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-colors"
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
    </motion.div>
  );
}