'use client';

import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const documents = [
  {
    name: 'Resume_Exodus_Tola.pdf',
    type: 'PDF Document',
    size: '2.4 MB',
    description: 'Comprehensive resume with experience and skills',
    icon: FileText,
  },
  {
    name: 'Portfolio_Pitch_Deck.pdf',
    type: 'PDF Document', 
    size: '8.1 MB',
    description: 'Visual presentation of projects and achievements',
    icon: FileText,
  },
  {
    name: 'Technical_Portfolio.pdf',
    type: 'PDF Document',
    size: '5.2 MB',
    description: 'Detailed technical documentation of projects',
    icon: FileText,
  },
];

export default function DocumentsWindow() {
  return (
    <div className="p-6 space-y-4">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-xl font-semibold text-gray-900">Documents</h2>
        <p className="text-gray-600 text-sm">Important files and resources</p>
      </div>

      <div className="space-y-3">
        {documents.map((doc, index) => (
          <motion.div
            key={doc.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center space-x-4">
              <doc.icon className="w-8 h-8 text-red-600" />
              <div>
                <h3 className="font-medium text-gray-900">{doc.name}</h3>
                <p className="text-sm text-gray-600">{doc.description}</p>
                <div className="flex items-center space-x-2 text-xs text-gray-500 mt-1">
                  <span>{doc.type}</span>
                  <span>•</span>
                  <span>{doc.size}</span>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="flex items-center space-x-1">
                <ExternalLink className="w-3 h-3" />
                <span>View</span>
              </Button>
              <Button size="sm" className="flex items-center space-x-1">
                <Download className="w-3 h-3" />
                <span>Download</span>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-blue-800 text-sm">
          💡 <strong>Note:</strong> Click "Download" to save documents locally, or "View" to open in a new tab.
        </p>
      </div>
    </div>
  );
}