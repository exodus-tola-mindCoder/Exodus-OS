'use client';

import { motion } from 'framer-motion';
import { Trash2, RotateCcw, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const deletedItems = [
  {
    name: 'Old Portfolio v1',
    type: 'Web Project',
    deletedDate: '2024-01-15',
    reason: 'Outdated design and functionality',
  },
  {
    name: 'Crypto Trading Bot',
    type: 'Python Script',
    deletedDate: '2024-02-03',
    reason: 'Market conditions changed, project discontinued',
  },
  {
    name: 'Social Media Clone',
    type: 'MERN Stack App',
    deletedDate: '2024-03-10',
    reason: 'Pivoted to more impactful projects',
  },
];

export default function RecycleBinWindow() {
  return (
    <div className="p-6 space-y-4">
      <div className="border-b border-gray-200 pb-4">
        <div className="flex items-center space-x-3">
          <Trash2 className="w-6 h-6 text-gray-600" />
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Recycle Bin</h2>
            <p className="text-gray-600 text-sm">Abandoned projects and experiments</p>
          </div>
        </div>
      </div>

      {deletedItems.length === 0 ? (
        <div className="text-center py-12">
          <Trash2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">Recycle Bin is empty</p>
          <p className="text-gray-400 text-sm">No abandoned projects here!</p>
        </div>
      ) : (
        <div className="space-y-3">
          {deletedItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200"
            >
              <div className="flex items-center space-x-4">
                <Trash2 className="w-6 h-6 text-red-500" />
                <div>
                  <h3 className="font-medium text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.reason}</p>
                  <div className="flex items-center space-x-2 text-xs text-gray-500 mt-1">
                    <span>{item.type}</span>
                    <span>•</span>
                    <span>Deleted: {item.deletedDate}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex items-center space-x-1">
                  <RotateCcw className="w-3 h-3" />
                  <span>Restore</span>
                </Button>
                <Button variant="destructive" size="sm" className="flex items-center space-x-1">
                  <X className="w-3 h-3" />
                  <span>Delete Forever</span>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
        <p className="text-yellow-800 text-sm">
          🗑️ <strong>Easter Egg:</strong> Not every idea makes it to production. These are the projects that taught me valuable lessons along the way!
        </p>
      </div>
    </div>
  );
}