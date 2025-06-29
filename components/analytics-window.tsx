'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { BarChart3, Users, Eye, Clock, TrendingUp, Globe, Smartphone, Monitor } from 'lucide-react';

interface AnalyticsData {
  totalVisitors: number;
  pageViews: number;
  avgSessionTime: string;
  bounceRate: number;
  topPages: { page: string; views: number; percentage: number }[];
  deviceStats: { device: string; percentage: number; icon: any }[];
  realtimeVisitors: number;
}

export default function AnalyticsWindow() {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    totalVisitors: 0,
    pageViews: 0,
    avgSessionTime: '0:00',
    bounceRate: 0,
    topPages: [],
    deviceStats: [],
    realtimeVisitors: 0
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading analytics data
    const loadAnalytics = async () => {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setAnalyticsData({
        totalVisitors: 2847,
        pageViews: 8934,
        avgSessionTime: '3:42',
        bounceRate: 32,
        topPages: [
          { page: 'About', views: 1247, percentage: 35 },
          { page: 'Projects', views: 892, percentage: 25 },
          { page: 'Skills', views: 634, percentage: 18 },
          { page: 'Contact', views: 445, percentage: 12 },
          { page: 'Testimonials', views: 356, percentage: 10 }
        ],
        deviceStats: [
          { device: 'Desktop', percentage: 58, icon: Monitor },
          { device: 'Mobile', percentage: 35, icon: Smartphone },
          { device: 'Tablet', percentage: 7, icon: Globe }
        ],
        realtimeVisitors: Math.floor(Math.random() * 15) + 3
      });
      
      setIsLoading(false);
    };

    loadAnalytics();

    // Update real-time visitors every 10 seconds
    const interval = setInterval(() => {
      setAnalyticsData(prev => ({
        ...prev,
        realtimeVisitors: Math.floor(Math.random() * 15) + 3
      }));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="p-6 flex items-center justify-center h-96">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading analytics data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6 max-h-96 overflow-y-auto">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Portfolio Analytics</h2>
            <p className="text-gray-600 text-sm">Real-time insights and visitor statistics</p>
          </div>
        </div>
      </div>

      {/* Real-time Visitors */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-green-800">Live Visitors</h3>
            <p className="text-2xl font-bold text-green-600">{analyticsData.realtimeVisitors}</p>
          </div>
          <div className="relative">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75" />
          </div>
        </div>
        <p className="text-green-700 text-xs mt-1">People currently viewing your portfolio</p>
      </motion.div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-center"
        >
          <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
          <p className="text-2xl font-bold text-blue-800">{analyticsData.totalVisitors.toLocaleString()}</p>
          <p className="text-blue-600 text-xs">Total Visitors</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-purple-50 p-4 rounded-lg border border-purple-100 text-center"
        >
          <Eye className="w-6 h-6 text-purple-600 mx-auto mb-2" />
          <p className="text-2xl font-bold text-purple-800">{analyticsData.pageViews.toLocaleString()}</p>
          <p className="text-purple-600 text-xs">Page Views</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-orange-50 p-4 rounded-lg border border-orange-100 text-center"
        >
          <Clock className="w-6 h-6 text-orange-600 mx-auto mb-2" />
          <p className="text-2xl font-bold text-orange-800">{analyticsData.avgSessionTime}</p>
          <p className="text-orange-600 text-xs">Avg. Session</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-red-50 p-4 rounded-lg border border-red-100 text-center"
        >
          <TrendingUp className="w-6 h-6 text-red-600 mx-auto mb-2" />
          <p className="text-2xl font-bold text-red-800">{analyticsData.bounceRate}%</p>
          <p className="text-red-600 text-xs">Bounce Rate</p>
        </motion.div>
      </div>

      {/* Top Pages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="space-y-3"
      >
        <h3 className="font-semibold text-gray-800">Most Popular Sections</h3>
        <div className="space-y-2">
          {analyticsData.topPages.map((page, index) => (
            <div key={page.page} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
                  {index + 1}
                </span>
                <span className="font-medium text-gray-800">{page.page}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${page.percentage}%` }}
                    transition={{ delay: 0.8 + (index * 0.1), duration: 0.8 }}
                    className="bg-blue-500 h-2 rounded-full"
                  />
                </div>
                <span className="text-sm font-medium text-gray-600 w-12 text-right">
                  {page.views}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Device Statistics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="space-y-3"
      >
        <h3 className="font-semibold text-gray-800">Device Breakdown</h3>
        <div className="grid grid-cols-3 gap-3">
          {analyticsData.deviceStats.map((device, index) => (
            <div key={device.device} className="bg-gray-50 p-3 rounded-lg text-center">
              <device.icon className="w-6 h-6 text-gray-600 mx-auto mb-2" />
              <p className="font-bold text-gray-800">{device.percentage}%</p>
              <p className="text-xs text-gray-600">{device.device}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Growth Insight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-lg border border-indigo-200"
      >
        <div className="flex items-center space-x-2 mb-2">
          <TrendingUp className="w-5 h-5 text-indigo-600" />
          <h4 className="font-semibold text-indigo-800">Growth Insights</h4>
        </div>
        <p className="text-indigo-700 text-sm">
          📈 Portfolio traffic has increased by 45% this month! The About and Projects sections 
          are performing exceptionally well, indicating strong interest in your background and work.
        </p>
      </motion.div>
    </div>
  );
}