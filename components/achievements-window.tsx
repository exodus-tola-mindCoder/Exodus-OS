'use client';

import { motion } from 'framer-motion';
import { Trophy, Award, Medal, Star, Target, Calendar, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Achievement {
  id: string;
  title: string;
  description: string;
  category: 'Competition' | 'Recognition' | 'Certification' | 'Milestone';
  date: string;
  organization: string;
  icon: any;
  color: string;
  bgColor: string;
  borderColor: string;
  link?: string;
}

const achievements: Achievement[] = [
  {
    id: 'agrix-winner',
    title: 'AgriX Platform Winner',
    description: 'First place in agricultural innovation competition for developing smart farming solutions',
    category: 'Competition',
    date: 'March 2024',
    organization: 'Ethiopian Innovation Challenge',
    icon: Trophy,
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'from-yellow-50 to-orange-50',
    borderColor: 'border-yellow-200',
    link: '#'
  },
  {
    id: 'bloodhero-recognition',
    title: 'Healthcare Innovation Award',
    description: 'Recognized for BloodHero Ethiopia\'s impact on blood donation coordination',
    category: 'Recognition',
    date: 'September 2023',
    organization: 'Ministry of Health Ethiopia',
    icon: Award,
    color: 'from-red-500 to-pink-500',
    bgColor: 'from-red-50 to-pink-50',
    borderColor: 'border-red-200'
  },
  {
    id: 'placement-system-grant',
    title: 'Education Technology Grant',
    description: '$25K funding for Freshman Placement System development and deployment',
    category: 'Milestone',
    date: 'June 2023',
    organization: 'Education Innovation Fund',
    icon: Target,
    color: 'from-green-500 to-teal-500',
    bgColor: 'from-green-50 to-teal-50',
    borderColor: 'border-green-200'
  },
  {
    id: 'aws-certification',
    title: 'AWS Solutions Architect',
    description: 'Certified in designing and deploying scalable cloud applications on AWS',
    category: 'Certification',
    date: 'January 2024',
    organization: 'Amazon Web Services',
    icon: Medal,
    color: 'from-blue-500 to-indigo-500',
    bgColor: 'from-blue-50 to-indigo-50',
    borderColor: 'border-blue-200',
    link: '#'
  },
  {
    id: 'unigo-beta-launch',
    title: 'UniGo Beta Launch Success',
    description: 'Successfully launched campus navigation app with 2K+ active users',
    category: 'Milestone',
    date: 'November 2023',
    organization: 'Self-Achievement',
    icon: Star,
    color: 'from-purple-500 to-violet-500',
    bgColor: 'from-purple-50 to-violet-50',
    borderColor: 'border-purple-200'
  },
  {
    id: 'tech-speaker',
    title: 'Tech Conference Speaker',
    description: 'Keynote speaker on "Building for Local Impact" at Addis Tech Conference',
    category: 'Recognition',
    date: 'August 2023',
    organization: 'Addis Tech Community',
    icon: Award,
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'from-cyan-50 to-blue-50',
    borderColor: 'border-cyan-200'
  }
];

export default function AchievementsWindow() {
  const categories = [...new Set(achievements.map(a => a.category))];

  return (
    <div className="p-6 space-y-6 max-h-96 overflow-y-auto">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
            <Trophy className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Achievements & Recognition</h2>
            <p className="text-gray-600 text-sm">Awards, certifications, and milestones in Exodus's journey</p>
          </div>
        </div>
      </div>

      {/* Achievement Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {categories.map((category, index) => {
          const count = achievements.filter(a => a.category === category).length;
          const icons = {
            'Competition': Trophy,
            'Recognition': Award,
            'Certification': Medal,
            'Milestone': Target
          };
          const Icon = icons[category as keyof typeof icons];
          
          return (
            <div key={category} className="bg-gray-50 p-3 rounded-lg text-center border border-gray-200">
              <Icon className="w-6 h-6 text-gray-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-800">{count}</p>
              <p className="text-xs text-gray-600">{category}</p>
            </div>
          );
        })}
      </motion.div>

      {/* Achievements List */}
      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2 + (index * 0.1), duration: 0.4 }}
            whileHover={{ scale: 1.02, y: -2 }}
            className={`bg-gradient-to-br ${achievement.bgColor} p-5 rounded-lg border ${achievement.borderColor} hover:shadow-lg transition-all duration-300 cursor-pointer group`}
          >
            <div className="flex items-start space-x-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-12 h-12 bg-gradient-to-br ${achievement.color} rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300`}
              >
                <achievement.icon className="w-6 h-6 text-white" />
              </motion.div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                      {achievement.title}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="secondary" className="text-xs">
                        {achievement.category}
                      </Badge>
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        <span>{achievement.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  {achievement.link && (
                    <Button variant="ghost" size="sm" className="p-1">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  )}
                </div>
                
                <p className="text-gray-700 text-sm leading-relaxed mb-2 group-hover:text-gray-800 transition-colors">
                  {achievement.description}
                </p>
                
                <p className="text-xs text-gray-600 font-medium">
                  {achievement.organization}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Future Goals */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-gradient-to-br from-indigo-50 to-purple-50 p-5 rounded-lg border border-indigo-200"
      >
        <div className="flex items-center space-x-2 mb-3">
          <Target className="w-5 h-5 text-indigo-600" />
          <h3 className="font-semibold text-indigo-800">2024 Goals</h3>
        </div>
        
        <div className="space-y-2 text-sm text-indigo-700">
          <p>🎯 Scale AgriX to reach 10,000+ farmers across Ethiopia</p>
          <p>🚀 Launch EastLink Market for B2B e-commerce</p>
          <p>🏆 Win national innovation competition</p>
          <p>📚 Complete advanced AI/ML certification</p>
          <p>🌍 Expand solutions to other East African countries</p>
        </div>
      </motion.div>
    </div>
  );
}