'use client';

import { motion } from 'framer-motion';
import { Code, Zap, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { skillsData } from '@/lib/skills-data';

export default function SkillsWindow() {
  const categories = [...new Set(skillsData.map(skill => skill.category))];

  return (
    <div className="p-6 space-y-6 max-h-96 overflow-y-auto">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
            <Code className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Technical Skills</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Technologies and tools Exodus uses to build amazing products</p>
          </div>
        </div>
      </div>

      {/* Skills by Category */}
      <div className="space-y-6">
        {categories.map((category, categoryIndex) => {
          const categorySkills = skillsData.filter(skill => skill.category === category);
          
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="space-y-3"
            >
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center space-x-2">
                <Zap className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span>{category}</span>
              </h3>
              
              <div className="grid gap-3">
                {categorySkills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-4 rounded-lg border border-green-100 dark:border-green-800 hover:border-green-200 dark:hover:border-green-700 transition-colors"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">{skill.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100">{skill.name}</h4>
                          {skill.projects.length > 2 && (
                            <Badge variant="secondary" className="text-xs bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200">
                              <Award className="w-3 h-3 mr-1" />
                              Expert
                            </Badge>
                          )}
                        </div>
                        
                        <p className="text-gray-700 dark:text-gray-300 text-sm mb-3 leading-relaxed">
                          {skill.description}
                        </p>
                        
                        <div className="space-y-2">
                          <p className="text-green-700 dark:text-green-300 text-sm font-medium">
                            💡 {skill.experience}
                          </p>
                          
                          <div className="flex flex-wrap gap-1">
                            {skill.projects.slice(0, 3).map((project, index) => (
                              <Badge key={index} variant="outline" className="text-xs border-green-200 dark:border-green-700 text-green-700 dark:text-green-300">
                                {project}
                              </Badge>
                            ))}
                            {skill.projects.length > 3 && (
                              <Badge variant="outline" className="text-xs border-green-200 dark:border-green-700 text-green-700 dark:text-green-300">
                                +{skill.projects.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Skills Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800"
      >
        <div className="flex items-center space-x-2 mb-3">
          <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <h3 className="font-semibold text-blue-800 dark:text-blue-200">Skills Summary</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{skillsData.length}</p>
            <p className="text-xs text-blue-700 dark:text-blue-300">Technologies</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{categories.length}</p>
            <p className="text-xs text-blue-700 dark:text-blue-300">Categories</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">3+</p>
            <p className="text-xs text-blue-700 dark:text-blue-300">Years Experience</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">8+</p>
            <p className="text-xs text-blue-700 dark:text-blue-300">Projects Built</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}