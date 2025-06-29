'use client';

import { motion } from 'framer-motion';
import { Building2, ExternalLink, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { clientsData } from '@/lib/clients-data';
import { useState } from 'react';

export default function ClientsWindow() {
  const [selectedClient, setSelectedClient] = useState<string | null>(null);

  const selectedClientData = clientsData.find(client => client.id === selectedClient);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Building2 className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Clients & Partners</h2>
            <p className="text-gray-600 text-sm">Organizations that trust Exodus with their technology needs</p>
          </div>
        </div>
      </div>

      {/* Client Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {clientsData.map((client, index) => (
          <motion.div
            key={client.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedClient(client.id)}
            className="bg-white p-4 rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all cursor-pointer group"
          >
            <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
              <img 
                src={client.logo} 
                alt={`${client.name} logo`}
                className="w-full h-full object-contain p-2"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling!.classList.remove('hidden');
                }}
              />
              <div className="hidden text-center">
                <Building2 className="w-8 h-8 text-gray-400 mx-auto mb-1" />
                <span className="text-xs text-gray-500 font-medium">{client.name}</span>
              </div>
            </div>
            <h3 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-purple-600 transition-colors">
              {client.name}
            </h3>
            <Badge variant="secondary" className="text-xs">
              {client.industry}
            </Badge>
          </motion.div>
        ))}
      </div>

      {/* Client Details Modal */}
      {selectedClient && selectedClientData && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-lg border border-purple-200"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-lg border border-purple-200 flex items-center justify-center overflow-hidden">
                <img 
                  src={selectedClientData.logo} 
                  alt={`${selectedClientData.name} logo`}
                  className="w-full h-full object-contain p-1"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling!.classList.remove('hidden');
                  }}
                />
                <Building2 className="w-6 h-6 text-purple-400 hidden" />
              </div>
              <div>
                <h3 className="font-bold text-purple-900">{selectedClientData.name}</h3>
                <Badge variant="outline" className="text-xs">
                  {selectedClientData.industry}
                </Badge>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedClient(null)}
              className="text-purple-600 hover:text-purple-800"
            >
              ✕
            </Button>
          </div>
          
          <div className="space-y-3">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Briefcase className="w-4 h-4 text-purple-600" />
                <span className="font-semibold text-purple-800 text-sm">Project Type</span>
              </div>
              <p className="text-purple-700 text-sm">{selectedClientData.projectType}</p>
            </div>
            
            <div>
              <p className="text-purple-700 text-sm leading-relaxed">
                {selectedClientData.description}
              </p>
            </div>
            
            {selectedClientData.website && (
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <ExternalLink className="w-3 h-3" />
                <span>Visit Website</span>
              </Button>
            )}
          </div>
        </motion.div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
        <div className="text-center">
          <p className="text-2xl font-bold text-purple-600">{clientsData.length}</p>
          <p className="text-xs text-gray-600">Clients Served</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-purple-600">5+</p>
          <p className="text-xs text-gray-600">Industries</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-purple-600">100%</p>
          <p className="text-xs text-gray-600">Satisfaction</p>
        </div>
      </div>
    </div>
  );
}