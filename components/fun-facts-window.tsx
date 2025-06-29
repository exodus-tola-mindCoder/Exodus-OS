'use client';

import { motion } from 'framer-motion';
import { Music, BookOpen, Heart, Coffee, Code2, Gamepad2, Camera, Headphones } from 'lucide-react';

const funFacts = [
  {
    icon: Music,
    title: 'Musical Soul',
    fact: 'I play piano/keyboard and love composing melodies in my free time. Music helps me think creatively and solve complex problems.',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'from-purple-50 to-pink-50',
    borderColor: 'border-purple-200'
  },
  {
    icon: BookOpen,
    title: 'Daily Reader',
    fact: 'I read the Bible daily and invest time in spiritual growth. This practice keeps me grounded and provides wisdom for both life and business decisions.',
    color: 'from-blue-500 to-indigo-500',
    bgColor: 'from-blue-50 to-indigo-50',
    borderColor: 'border-blue-200'
  },
  {
    icon: Heart,
    title: 'Mindful Living',
    fact: 'I practice meditation and mindfulness to stay focused and maintain mental clarity. It helps me approach challenges with a calm and strategic mindset.',
    color: 'from-green-500 to-teal-500',
    bgColor: 'from-green-50 to-teal-50',
    borderColor: 'border-green-200'
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
    color: 'from-red-500 to-rose-500',
    bgColor: 'from-red-50 to-rose-50',
    borderColor: 'border-red-200'
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
    fact: 'I\'m always listening to tech podcasts, entrepreneurship shows, and educational content. Learning never stops, even during commutes!',
    color: 'from-violet-500 to-purple-500',
    bgColor: 'from-violet-50 to-purple-50',
    borderColor: 'border-violet-200'
  }
];

export default function FunFactsWindow() {
  return (
    <div className="p-6 space-y-6 max-h-96 overflow-y-auto">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
            <Music className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Fun Facts About Exodus</h2>
            <p className="text-gray-600 text-sm">The person behind the code - hobbies, interests, and quirks</p>
          </div>
        </div>
      </div>

      {/* Fun Facts Grid */}
      <div className="grid gap-4">
        {funFacts.map((fact, index) => (
          <motion.div
            key={fact.title}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.02, y: -2 }}
            className={`bg-gradient-to-br ${fact.bgColor} p-5 rounded-lg border ${fact.borderColor} hover:shadow-lg transition-all duration-300 cursor-pointer group`}
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
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                  {fact.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-800 transition-colors">
                  {fact.fact}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fun Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-gradient-to-br from-indigo-50 to-purple-50 p-5 rounded-lg border border-indigo-200 text-center"
      >
        <div className="text-4xl mb-3">🎯</div>
        <h3 className="font-semibold text-indigo-800 mb-2">Life Philosophy</h3>
        <p className="text-indigo-700 text-sm italic leading-relaxed">
          "Code with purpose, live with intention, and always stay curious. 
          The best solutions come from understanding both technology and humanity."
        </p>
        <p className="text-indigo-600 text-xs mt-2 font-medium">- Exodus Tola</p>
      </motion.div>

      {/* Future Content Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center"
      >
        <div className="text-2xl mb-2">🎵</div>
        <h4 className="font-semibold text-gray-800 mb-2">Coming Soon</h4>
        <p className="text-gray-600 text-sm">
          Musical compositions and performances will be featured here. 
          Stay tuned for audio samples and creative projects!
        </p>
      </motion.div>
    </div>
  );
}