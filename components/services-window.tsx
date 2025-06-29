'use client';

import { motion } from 'framer-motion';
import { Code, Smartphone, Cloud, Users, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  pricing: string;
  duration: string;
  icon: any;
  color: string;
  bgColor: string;
  borderColor: string;
  popular?: boolean;
}

const services: Service[] = [
  {
    id: 'web-development',
    title: 'Full-Stack Web Development',
    description: 'Custom web applications built with modern technologies and best practices',
    features: [
      'Responsive design for all devices',
      'Modern React/Next.js frontend',
      'Scalable backend architecture',
      'Database design and optimization',
      'API development and integration',
      'Performance optimization'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'],
    pricing: 'Starting at $2,000',
    duration: '4-8 weeks',
    icon: Code,
    color: 'from-blue-500 to-indigo-500',
    bgColor: 'from-blue-50 to-indigo-50',
    borderColor: 'border-blue-200',
    popular: true
  },
  {
    id: 'mobile-development',
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications for iOS and Android',
    features: [
      'React Native development',
      'Cross-platform compatibility',
      'Native performance optimization',
      'Offline functionality',
      'Push notifications',
      'App store deployment'
    ],
    technologies: ['React Native', 'Expo', 'Firebase', 'Redux', 'Native APIs'],
    pricing: 'Starting at $3,000',
    duration: '6-10 weeks',
    icon: Smartphone,
    color: 'from-green-500 to-teal-500',
    bgColor: 'from-green-50 to-teal-50',
    borderColor: 'border-green-200'
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Infrastructure & DevOps',
    description: 'Scalable cloud solutions and deployment automation',
    features: [
      'AWS/GCP cloud setup',
      'CI/CD pipeline configuration',
      'Docker containerization',
      'Database migration',
      'Monitoring and logging',
      'Security best practices'
    ],
    technologies: ['AWS', 'Docker', 'GitHub Actions', 'Terraform', 'Nginx'],
    pricing: 'Starting at $1,500',
    duration: '2-4 weeks',
    icon: Cloud,
    color: 'from-purple-500 to-violet-500',
    bgColor: 'from-purple-50 to-violet-50',
    borderColor: 'border-purple-200'
  },
  {
    id: 'consulting',
    title: 'Technical Consulting',
    description: 'Strategic guidance for your technology decisions and architecture',
    features: [
      'Technology stack recommendations',
      'Architecture design and review',
      'Code review and optimization',
      'Team mentoring and training',
      'Project planning and estimation',
      'Best practices implementation'
    ],
    technologies: ['Various based on needs'],
    pricing: '$100/hour',
    duration: 'Flexible',
    icon: Users,
    color: 'from-orange-500 to-red-500',
    bgColor: 'from-orange-50 to-red-50',
    borderColor: 'border-orange-200'
  }
];

const processSteps = [
  {
    step: 1,
    title: 'Discovery & Planning',
    description: 'Understanding your requirements, goals, and constraints'
  },
  {
    step: 2,
    title: 'Design & Architecture',
    description: 'Creating wireframes, system design, and technical specifications'
  },
  {
    step: 3,
    title: 'Development & Testing',
    description: 'Building your solution with regular updates and quality assurance'
  },
  {
    step: 4,
    title: 'Deployment & Support',
    description: 'Launching your project and providing ongoing maintenance'
  }
];

export default function ServicesWindow() {
  return (
    <div className="p-6 space-y-6 max-h-96 overflow-y-auto">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Services & Solutions</h2>
            <p className="text-gray-600 text-sm">Professional development services tailored for your needs</p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid gap-4">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-gradient-to-br ${service.bgColor} p-5 rounded-lg border ${service.borderColor} hover:shadow-lg transition-all duration-300 relative`}
          >
            {service.popular && (
              <div className="absolute -top-2 -right-2">
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs">
                  Most Popular
                </Badge>
              </div>
            )}
            
            <div className="flex items-start space-x-4">
              <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center shadow-md`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-2">What's Included:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-xs text-gray-700">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-xs text-gray-600 italic">
                          +{service.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.technologies.slice(0, 4).map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {service.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{service.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-lg font-bold text-gray-900">{service.pricing}</p>
                    <p className="text-xs text-gray-600">Timeline: {service.duration}</p>
                  </div>
                  <Button size="sm" className="flex items-center space-x-1">
                    <span>Get Quote</span>
                    <ArrowRight className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Process */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="space-y-4"
      >
        <h3 className="font-semibold text-gray-800">How We Work</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + (index * 0.1) }}
              className="text-center p-3 bg-gray-50 rounded-lg border border-gray-200"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-2">
                {step.step}
              </div>
              <h4 className="font-semibold text-gray-900 text-sm mb-1">{step.title}</h4>
              <p className="text-xs text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-gradient-to-br from-indigo-50 to-purple-50 p-5 rounded-lg border border-indigo-200 text-center"
      >
        <h4 className="font-bold text-indigo-900 mb-2">Ready to Start Your Project?</h4>
        <p className="text-indigo-700 text-sm mb-4">
          Let's discuss your requirements and create a solution that drives real impact.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 justify-center">
          <Button className="bg-indigo-600 hover:bg-indigo-700">
            Schedule Free Consultation
          </Button>
          <Button variant="outline" className="border-indigo-300 text-indigo-700 hover:bg-indigo-50">
            View Portfolio
          </Button>
        </div>
      </motion.div>
    </div>
  );
}