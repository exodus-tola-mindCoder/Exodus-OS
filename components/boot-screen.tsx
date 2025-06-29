'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Loader2 } from 'lucide-react';

export default function BootScreen() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="h-screen w-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-black dark:via-gray-900 dark:to-black flex flex-col items-center justify-center text-white transition-colors duration-300"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-center"
      >
        <motion.h1 
          className="text-6xl font-light mb-8 tracking-wide"
          animate={{ 
            textShadow: [
              "0 0 20px rgba(59, 130, 246, 0.5)",
              "0 0 40px rgba(59, 130, 246, 0.8)",
              "0 0 20px rgba(59, 130, 246, 0.5)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Exodus<span className="text-blue-400">OS</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-xl mb-8 text-gray-300"
        >
          {t('welcome')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex items-center justify-center space-x-3"
        >
          <Loader2 className="h-6 w-6 animate-spin" />
          <span className="text-gray-400">{t('loading')}</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}