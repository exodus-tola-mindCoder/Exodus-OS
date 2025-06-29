'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, ExternalLink, Github, Users, TrendingUp, Calendar, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: {
    label: string;
    value: string;
    change?: string;
  }[];
  timeline: {
    phase: string;
    duration: string;
    description: string;
  }[];
  technologies: string[];
  images: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

const caseStudies: CaseStudy[] = [
  {
    id: 'agrix-case-study',
    title: 'AgriX: Transforming Ethiopian Agriculture',
    subtitle: 'How we built a platform that increased farmer yields by 30%',
    overview: 'AgriX is a comprehensive agricultural platform that connects Ethiopian farmers with modern farming techniques, weather data, and direct market access. The platform addresses critical challenges in the agricultural sector through technology.',
    challenge: 'Ethiopian farmers faced significant challenges: lack of access to modern agricultural knowledge, unreliable weather information, unfair pricing from middlemen, and limited market connections. These issues resulted in poor yields and economic hardship for farming communities.',
    solution: 'We developed a mobile-first platform with offline capabilities, providing weather forecasts, crop management advice, market prices, and direct buyer connections. The solution uses AI for personalized recommendations and supports local languages (Amharic and Afaan Oromo).',
    results: [
      'Increased average crop yields by 30%',
      'Connected 5,000+ farmers to direct markets',
      'Reduced post-harvest losses by 25%',
      'Improved farmer income by average of $200/season',
      'Achieved 95% user satisfaction rate'
    ],
    metrics: [
      { label: 'Active Users', value: '5,000+', change: '+150%' },
      { label: 'Yield Increase', value: '30%', change: 'avg' },
      { label: 'Market Connections', value: '500+', change: '+200%' },
      { label: 'Revenue Impact', value: '$1M+', change: 'generated' }
    ],
    timeline: [
      {
        phase: 'Research & Discovery',
        duration: '4 weeks',
        description: 'Conducted field research with 100+ farmers across 5 regions'
      },
      {
        phase: 'MVP Development',
        duration: '8 weeks',
        description: 'Built core features with offline functionality and local language support'
      },
      {
        phase: 'Pilot Testing',
        duration: '6 weeks',
        description: 'Tested with 50 farmers, gathered feedback, and iterated'
      },
      {
        phase: 'Full Launch',
        duration: '4 weeks',
        description: 'Scaled to 1,000+ users with marketing and partnerships'
      }
    ],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Python', 'TensorFlow', 'AWS', 'Socket.io'],
    images: ['/case-studies/agrix-1.jpg', '/case-studies/agrix-2.jpg', '/case-studies/agrix-3.jpg'],
    testimonial: {
      quote: 'AgriX has transformed how I farm. The weather predictions and crop advice helped me increase my yield by 40% this season.',
      author: 'Ato Bekele Tadesse',
      position: 'Farmer, Oromia Region'
    }
  }
];

interface CaseStudyWindowProps {
  caseStudyId?: string;
}

export default function CaseStudyWindow({ caseStudyId }: CaseStudyWindowProps) {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(
    caseStudyId ? caseStudies.find(cs => cs.id === caseStudyId) || null : null
  );

  if (selectedStudy) {
    return (
      <div className="p-6 space-y-6 max-h-96 overflow-y-auto">
        {/* Back Button */}
        <Button 
          variant="outline" 
          onClick={() => setSelectedStudy(null)}
          className="mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Case Studies
        </Button>

        {/* Header */}
        <div className="space-y-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-2">
              {selectedStudy.title}
            </h1>
            <p className="text-lg text-gray-600">{selectedStudy.subtitle}</p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {selectedStudy.metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200 text-center"
              >
                <p className="text-2xl font-bold text-blue-800">{metric.value}</p>
                <p className="text-sm text-blue-600">{metric.label}</p>
                {metric.change && (
                  <p className="text-xs text-green-600 mt-1">{metric.change}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Overview */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Project Overview</h2>
          <p className="text-gray-700 leading-relaxed">{selectedStudy.overview}</p>
        </div>

        {/* Challenge & Solution */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 p-4 rounded-lg border border-red-100">
            <h3 className="font-semibold text-red-800 mb-3 flex items-center">
              🎯 The Challenge
            </h3>
            <p className="text-red-700 text-sm leading-relaxed">{selectedStudy.challenge}</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-100">
            <h3 className="font-semibold text-green-800 mb-3 flex items-center">
              💡 Our Solution
            </h3>
            <p className="text-green-700 text-sm leading-relaxed">{selectedStudy.solution}</p>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Project Timeline</h2>
          <div className="space-y-3">
            {selectedStudy.timeline.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4 p-3 bg-gray-50 rounded-lg"
              >
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-semibold text-gray-900">{phase.phase}</h4>
                    <Badge variant="outline" className="text-xs">{phase.duration}</Badge>
                  </div>
                  <p className="text-gray-600 text-sm">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Results & Impact</h2>
          <div className="grid gap-2">
            {selectedStudy.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-100"
              >
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-green-800 text-sm font-medium">{result}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        {selectedStudy.testimonial && (
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-lg border border-blue-200">
            <div className="text-center">
              <p className="text-blue-800 italic text-lg mb-3">
                "{selectedStudy.testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-blue-900">{selectedStudy.testimonial.author}</p>
                <p className="text-blue-600 text-sm">{selectedStudy.testimonial.position}</p>
              </div>
            </div>
          </div>
        )}

        {/* Tech Stack */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {selectedStudy.technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6 max-h-96 overflow-y-auto">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Award className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Case Studies</h2>
            <p className="text-gray-600 text-sm">Deep dives into successful projects and their impact</p>
          </div>
        </div>
      </div>

      {/* Case Studies List */}
      <div className="space-y-4">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedStudy(study)}
            className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-lg border border-purple-200 cursor-pointer hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-purple-900 mb-2">{study.title}</h3>
                <p className="text-purple-700 text-sm mb-3">{study.subtitle}</p>
                <p className="text-purple-600 text-sm leading-relaxed">{study.overview}</p>
              </div>
              <Button variant="ghost" size="sm" className="text-purple-600">
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-4">
              {study.metrics.slice(0, 3).map((metric, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-lg font-bold text-purple-800">{metric.value}</p>
                  <p className="text-xs text-purple-600">{metric.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Coming Soon */}
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center">
        <h4 className="font-semibold text-gray-800 mb-2">More Case Studies Coming Soon</h4>
        <p className="text-gray-600 text-sm">
          Detailed analysis of BloodHero Ethiopia, UniGo, and other impactful projects.
        </p>
      </div>
    </div>
  );
}