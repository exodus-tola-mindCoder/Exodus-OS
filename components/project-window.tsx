'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, FileText, Award, Users, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Project } from '@/lib/projects-data';

interface ProjectWindowProps {
  project: Project;
}

export default function ProjectWindow({ project }: ProjectWindowProps) {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{project.name}</h2>
          <p className="text-gray-600 text-lg leading-relaxed">{project.description}</p>
        </div>
        <div className="text-right">
          <Badge variant="outline" className="mb-2">
            {project.status}
          </Badge>
          <p className="text-sm text-gray-500">{project.year}</p>
        </div>
      </div>

      {/* Problem & Solution */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-red-50 p-4 rounded-lg border border-red-100">
          <h3 className="font-semibold text-red-800 mb-2">Problem</h3>
          <p className="text-red-700 text-sm">{project.problem}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-100">
          <h3 className="font-semibold text-green-800 mb-2">Solution</h3>
          <p className="text-green-700 text-sm">{project.solution}</p>
        </div>
      </div>

      {/* Tech Stack */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-3">Tech Stack</h3>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <Badge key={index} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      {project.metrics && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {project.metrics.users && (
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-blue-50 p-3 rounded-lg text-center border border-blue-100"
            >
              <Users className="w-6 h-6 text-blue-600 mx-auto mb-1" />
              <p className="text-2xl font-bold text-blue-800">{project.metrics.users}</p>
              <p className="text-xs text-blue-600">Users</p>
            </motion.div>
          )}
          {project.metrics.funding && (
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-green-50 p-3 rounded-lg text-center border border-green-100"
            >
              <DollarSign className="w-6 h-6 text-green-600 mx-auto mb-1" />
              <p className="text-2xl font-bold text-green-800">{project.metrics.funding}</p>
              <p className="text-xs text-green-600">Funding</p>
            </motion.div>
          )}
          {project.metrics.awards && (
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-yellow-50 p-3 rounded-lg text-center border border-yellow-100"
            >
              <Award className="w-6 h-6 text-yellow-600 mx-auto mb-1" />
              <p className="text-2xl font-bold text-yellow-800">{project.metrics.awards}</p>
              <p className="text-xs text-yellow-600">Awards</p>
            </motion.div>
          )}
        </div>
      )}

      {/* Images Placeholder */}
      <div className="bg-gray-100 p-8 rounded-lg border border-gray-200">
        <p className="text-center text-gray-500">Project Screenshots & Demo</p>
        <p className="text-center text-sm text-gray-400 mt-2">
          Image gallery will be added here
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
        {project.links.github && (
          <Button variant="outline" className="flex items-center space-x-2">
            <Github className="w-4 h-4" />
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3" />
          </Button>
        )}
        {project.links.live && (
          <Button className="flex items-center space-x-2">
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </Button>
        )}
        {project.links.pitch && (
          <Button variant="outline" className="flex items-center space-x-2">
            <FileText className="w-4 h-4" />
            <span>Pitch Deck</span>
            <ExternalLink className="w-3 h-3" />
          </Button>
        )}
      </div>
    </div>
  );
}