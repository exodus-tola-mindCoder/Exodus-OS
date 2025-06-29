'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Book, Heart, Star } from 'lucide-react';

interface BibleVerse {
  verse: string;
  reference: string;
  theme: 'inspiration' | 'wisdom' | 'strength' | 'purpose' | 'faith';
}

const bibleVerses: BibleVerse[] = [
  {
    verse: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, to give you hope and a future.",
    reference: "Jeremiah 29:11",
    theme: "purpose"
  },
  {
    verse: "I can do all things through Christ who strengthens me.",
    reference: "Philippians 4:13",
    theme: "strength"
  },
  {
    verse: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
    reference: "Proverbs 3:5-6",
    theme: "wisdom"
  },
  {
    verse: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
    reference: "Joshua 1:9",
    theme: "strength"
  },
  {
    verse: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
    reference: "Romans 8:28",
    theme: "faith"
  },
  {
    verse: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.",
    reference: "Colossians 3:23",
    theme: "inspiration"
  },
  {
    verse: "The heart of man plans his way, but the Lord establishes his steps.",
    reference: "Proverbs 16:9",
    theme: "wisdom"
  },
  {
    verse: "Commit to the Lord whatever you do, and he will establish your plans.",
    reference: "Proverbs 16:3",
    theme: "purpose"
  }
];

interface BibleVerseComponentProps {
  theme?: 'inspiration' | 'wisdom' | 'strength' | 'purpose' | 'faith';
  variant?: 'card' | 'banner' | 'quote' | 'minimal';
  className?: string;
}

export default function BibleVerseComponent({ 
  theme, 
  variant = 'card',
  className = '' 
}: BibleVerseComponentProps) {
  const [currentVerse, setCurrentVerse] = useState<BibleVerse | null>(null);

  useEffect(() => {
    const filteredVerses = theme 
      ? bibleVerses.filter(v => v.theme === theme)
      : bibleVerses;
    
    const randomVerse = filteredVerses[Math.floor(Math.random() * filteredVerses.length)];
    setCurrentVerse(randomVerse);
  }, [theme]);

  if (!currentVerse) return null;

  const getThemeColors = (verseTheme: string) => {
    const colors = {
      inspiration: {
        bg: 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20',
        border: 'border-blue-200 dark:border-blue-800',
        text: 'text-blue-800 dark:text-blue-200',
        accent: 'text-blue-600 dark:text-blue-400'
      },
      wisdom: {
        bg: 'from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20',
        border: 'border-purple-200 dark:border-purple-800',
        text: 'text-purple-800 dark:text-purple-200',
        accent: 'text-purple-600 dark:text-purple-400'
      },
      strength: {
        bg: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
        border: 'border-green-200 dark:border-green-800',
        text: 'text-green-800 dark:text-green-200',
        accent: 'text-green-600 dark:text-green-400'
      },
      purpose: {
        bg: 'from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20',
        border: 'border-orange-200 dark:border-orange-800',
        text: 'text-orange-800 dark:text-orange-200',
        accent: 'text-orange-600 dark:text-orange-400'
      },
      faith: {
        bg: 'from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20',
        border: 'border-rose-200 dark:border-rose-800',
        text: 'text-rose-800 dark:text-rose-200',
        accent: 'text-rose-600 dark:text-rose-400'
      }
    };
    return colors[verseTheme as keyof typeof colors] || colors.inspiration;
  };

  const colors = getThemeColors(currentVerse.theme);

  if (variant === 'banner') {
    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`bg-gradient-to-r ${colors.bg} border-b ${colors.border} p-4 ${className}`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Book className={`w-5 h-5 ${colors.accent}`} />
            <span className={`text-sm font-medium ${colors.accent}`}>Daily Inspiration</span>
          </div>
          <p className={`${colors.text} text-lg font-medium italic leading-relaxed mb-2`}>
            "{currentVerse.verse}"
          </p>
          <p className={`${colors.accent} text-sm font-semibold`}>
            - {currentVerse.reference}
          </p>
        </div>
      </motion.div>
    );
  }

  if (variant === 'quote') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`relative p-6 bg-gradient-to-br ${colors.bg} border ${colors.border} rounded-lg ${className}`}
      >
        <div className="absolute top-4 left-4">
          <span className={`text-4xl ${colors.accent} opacity-50 font-serif`}>"</span>
        </div>
        <div className="pl-8">
          <p className={`${colors.text} text-lg leading-relaxed mb-4 italic`}>
            {currentVerse.verse}
          </p>
          <div className="flex items-center justify-between">
            <p className={`${colors.accent} font-semibold text-sm`}>
              {currentVerse.reference}
            </p>
            <div className="flex items-center space-x-1">
              <Heart className={`w-4 h-4 ${colors.accent}`} />
              <span className={`text-xs ${colors.text}`}>Scripture</span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  if (variant === 'minimal') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`text-center ${className}`}
      >
        <p className={`text-sm ${colors.text} italic leading-relaxed mb-1`}>
          "{currentVerse.verse}"
        </p>
        <p className={`text-xs ${colors.accent} font-medium`}>
          - {currentVerse.reference}
        </p>
      </motion.div>
    );
  }

  // Default card variant
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`bg-gradient-to-br ${colors.bg} p-5 rounded-lg border ${colors.border} ${className}`}
    >
      <div className="flex items-start space-x-3">
        <div className={`w-10 h-10 bg-gradient-to-br ${colors.accent.replace('text-', 'from-').replace('dark:text-', 'to-')} rounded-lg flex items-center justify-center shadow-md`}>
          <Book className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-3">
            <Star className={`w-4 h-4 ${colors.accent}`} />
            <span className={`text-sm font-semibold ${colors.accent} capitalize`}>
              {currentVerse.theme}
            </span>
          </div>
          <p className={`${colors.text} leading-relaxed mb-3 italic`}>
            "{currentVerse.verse}"
          </p>
          <p className={`${colors.accent} font-semibold text-sm`}>
            {currentVerse.reference}
          </p>
        </div>
      </div>
    </motion.div>
  );
}