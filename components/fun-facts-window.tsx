'use client';

import { motion } from 'framer-motion';
import { Music, BookOpen, Heart, Coffee, Code2, Gamepad2, Camera, Headphones } from 'lucide-react';
import BibleVerseComponent from '@/components/bible-verse-component';

const funFacts = [
  {
    icon: BookOpen,
    title: 'Daily Bible Reader',
    fact: 'I read the Bible daily and invest time in spiritual growth. This practice keeps me grounded and provides wisdom for both life and business decisions.',
    color: 'from-blue-500 to-indigo-500',
    bgColor: 'from-blue-50 to-indigo-50',
    borderColor: 'border-blue-200'
  },
  {
    icon: Heart,
    title: 'Faith-Driven Developer',
    fact: 'My Christian faith guides my approach to technology - building solutions that serve others and make a positive impact in the community.',
    color: 'from-rose-500 to-pink-500',
    bgColor: 'from-rose-50 to-pink-50',
    borderColor: 'border-rose-200'
  },
  {
    icon: Music,
    title: 'Musical Soul',
    fact: 'I play piano/keyboard and love composing melodies in my free time. Music helps me think creatively and solve complex problems.',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'from-purple-50 to-pink-50',
    borderColor: 'border-purple-200'
  },
  {
    icon: Coffee,
    title: 'Coffee Enthusiast',
    fact: 'As a true Ethiopian, I have a deep appreciation for coffee culture. I enjoy exploring different brewing methods and local coffee varieties.',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'from-amber-50 to-orange-50',
    borderColor: 'border-amber-200'
  },
  {
    icon: Code2,
    title: 'Late Night Coder',
    fact: 'Some of my best coding happens between 10 PM and 2 AM. There\'s something magical about the quiet hours when complex problems suddenly make sense.',
    color: 'from-gray-500 to-slate-500',
    bgColor: 'from-gray-50 to-slate-50',
    borderColor: 'border-gray-200'
  },
  {
    icon: Gamepad2,
    title: 'Strategic Gamer',
    fact: 'I enjoy strategy games and puzzles. They help me think several steps ahead - a skill that translates well to software architecture and business planning.',
    color: 'from-green-500 to-teal-500',
    bgColor: 'from-green-50 to-teal-50',
    borderColor: 'border-green-200'
  },
  {
    icon: Camera,
    title: 'Moment Capturer',
    fact: 'I love photography, especially capturing the beauty of Ethiopian landscapes and the vibrant culture of Addis Ababa.',
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'from-cyan-50 to-blue-50',
    borderColor: 'border-cyan-200'
  },
  {
    icon: Headphones,
    title: 'Podcast Learner',
    fact: 'I\'m always listening to tech podcasts, entrepreneurship shows, and Christian content. Learning never stops, even during commutes!',
    color: 'from-violet-500 to-purple-500',
    bgColor: 'from-violet-50 to-purple-50',
    borderColor: 'border-violet-200'
  }
];

export default function FunFactsWindow() {
  return (
    <div className="p-6 space-y-6 max-h-96 overflow-y-auto">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
            <Music className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Fun Facts About Exodus</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">The person behind the code - hobbies, interests, and faith</p>
          </div>
        </div>
      </div>

      {/* Bible Verse */}
      <BibleVerseComponent theme="faith" variant="card" />

      {/* Fun Facts Grid */}
      <div className="grid gap-4">
        {funFacts.map((fact, index) => (
          <motion.div
            key={fact.title}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.02, y: -2 }}
            className={`bg-gradient-to-br ${fact.bgColor} dark:${fact.bgColor.replace('50', '900/20')} p-5 rounded-lg border ${fact.borderColor} dark:${fact.borderColor.replace('200', '800')} hover:shadow-lg transition-all duration-300 cursor-pointer group`}
          >
            <div className="flex items-start space-x-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-12 h-12 bg-gradient-to-br ${fact.color} rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300`}
              >
                <fact.icon className="w-6 h-6 text-white" />
              </motion.div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-gray-800 dark:group-hover:text-gray-50 transition-colors">
                  {fact.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                  {fact.fact}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Life Philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800 text-center"
      >
        <div className="text-4xl mb-3">🙏</div>
        <h3 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">Life Philosophy</h3>
        <p className="text-indigo-700 dark:text-indigo-300 text-sm italic leading-relaxed mb-3">
          "Code with purpose, live with intention, and always stay curious. 
          The best solutions come from understanding both technology and humanity."
        </p>
        <p className="text-indigo-600 dark:text-indigo-400 text-xs font-medium">- Exodus Tola</p>
        
        {/* Faith Statement */}
        <div className="mt-4 pt-4 border-t border-indigo-200 dark:border-indigo-700">
          <p className="text-indigo-700 dark:text-indigo-300 text-sm">
            ✝️ <strong>Faith:</strong> Protestant Christian who believes in using technology to serve others and glorify God
          </p>
        </div>
      </motion.div>

      {/* Future Content Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-200 dark:border-gray-700 text-center"
      >
        <div className="text-2xl mb-2">🎵</div>
        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Coming Soon</h4>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Musical compositions and performances will be featured here. 
          Stay tuned for audio samples and creative projects!
        </p>
      </motion.div>
    </div>
  );
}