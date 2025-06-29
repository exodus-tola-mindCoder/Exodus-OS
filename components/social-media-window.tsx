'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { MessageCircle, Users, TrendingUp, Calendar, ExternalLink, Bell, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface TelegramStats {
  subscribers: number;
  posts: number;
  engagement: number;
  growth: string;
}

interface SocialChannel {
  id: string;
  name: string;
  platform: string;
  followers: string;
  description: string;
  link: string;
  icon: any;
  color: string;
  bgColor: string;
  verified?: boolean;
}

export default function SocialMediaWindow() {
  const [telegramStats, setTelegramStats] = useState<TelegramStats>({
    subscribers: 0,
    posts: 0,
    engagement: 0,
    growth: '0%'
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading Telegram stats
    const loadStats = async () => {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setTelegramStats({
        subscribers: 2547,
        posts: 156,
        engagement: 87,
        growth: '+12%'
      });
      
      setIsLoading(false);
    };

    loadStats();
  }, []);

  const socialChannels: SocialChannel[] = [
    {
      id: 'telegram',
      name: 'Exodus Tech Updates',
      platform: 'Telegram',
      followers: '2,500+',
      description: 'Daily tech insights, project updates, and Ethiopian tech ecosystem news',
      link: 'https://t.me/exodus_tech',
      icon: MessageCircle,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      verified: true
    },
    {
      id: 'linkedin',
      name: 'Exodus Tola',
      platform: 'LinkedIn',
      followers: '1,200+',
      description: 'Professional updates, industry insights, and networking',
      link: 'https://linkedin.com/in/exodus-tola',
      icon: Users,
      color: 'from-blue-600 to-blue-700',
      bgColor: 'from-blue-50 to-blue-100',
      verified: true
    },
    {
      id: 'twitter',
      name: '@ExodusTola',
      platform: 'Twitter/X',
      followers: '850+',
      description: 'Quick thoughts, tech trends, and community engagement',
      link: 'https://twitter.com/exodus_tola',
      icon: Share2,
      color: 'from-gray-800 to-black',
      bgColor: 'from-gray-50 to-gray-100'
    }
  ];

  const recentPosts = [
    {
      id: 1,
      content: '🚀 AgriX just reached 5,000 active farmers! The impact of technology on Ethiopian agriculture is incredible to witness.',
      platform: 'Telegram',
      timestamp: '2 hours ago',
      engagement: 45
    },
    {
      id: 2,
      content: 'Building for local markets requires deep understanding of user behavior. Here\'s what I learned from 100+ farmer interviews...',
      platform: 'LinkedIn',
      timestamp: '1 day ago',
      engagement: 23
    },
    {
      id: 3,
      content: '💡 New blog post: "React Native Performance Tips for African Markets" - sharing lessons from building UniGo and other mobile apps.',
      platform: 'Telegram',
      timestamp: '3 days ago',
      engagement: 67
    }
  ];

  if (isLoading) {
    return (
      <div className="p-6 flex items-center justify-center h-96">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading social media data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6 max-h-96 overflow-y-auto">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Social Media & Community</h2>
            <p className="text-gray-600 text-sm">Connect with Exodus across different platforms</p>
          </div>
        </div>
      </div>

      {/* Telegram Channel Highlight */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-lg border border-blue-200 relative overflow-hidden"
      >
        <div className="absolute top-2 right-2">
          <Badge className="bg-blue-600 text-white text-xs">
            Featured Channel
          </Badge>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <h3 className="text-lg font-bold text-blue-900">Exodus Tech Updates</h3>
              <Badge variant="outline" className="text-xs text-blue-700 border-blue-300">
                ✓ Verified
              </Badge>
            </div>
            <p className="text-blue-800 text-sm mb-3">
              Join 2,500+ subscribers for daily tech insights, project updates, and Ethiopian tech ecosystem news
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-700">{telegramStats.subscribers.toLocaleString()}</p>
                <p className="text-xs text-blue-600">Subscribers</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-700">{telegramStats.posts}</p>
                <p className="text-xs text-blue-600">Posts</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-700">{telegramStats.engagement}%</p>
                <p className="text-xs text-blue-600">Engagement</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">{telegramStats.growth}</p>
                <p className="text-xs text-blue-600">Growth</p>
              </div>
            </div>
            
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              <MessageCircle className="w-4 h-4 mr-2" />
              Join Telegram Channel
              <ExternalLink className="w-3 h-3 ml-2" />
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Other Social Channels */}
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-800">Other Platforms</h3>
        <div className="grid gap-3">
          {socialChannels.slice(1).map((channel, index) => (
            <motion.div
              key={channel.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (index * 0.1) }}
              className={`bg-gradient-to-br ${channel.bgColor} p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 bg-gradient-to-br ${channel.color} rounded-lg flex items-center justify-center`}>
                    <channel.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold text-gray-900">{channel.name}</h4>
                      {channel.verified && (
                        <Badge variant="outline" className="text-xs">✓</Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{channel.followers} followers</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Follow
                </Button>
              </div>
              <p className="text-sm text-gray-700 mt-2">{channel.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="space-y-3"
      >
        <h3 className="font-semibold text-gray-800">Recent Posts</h3>
        <div className="space-y-3">
          {recentPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + (index * 0.1) }}
              className="bg-white p-4 rounded-lg border border-gray-200"
            >
              <div className="flex items-start justify-between mb-2">
                <Badge variant="secondary" className="text-xs">
                  {post.platform}
                </Badge>
                <span className="text-xs text-gray-500">{post.timestamp}</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                {post.content}
              </p>
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>{post.engagement} engagements</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Newsletter Signup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200"
      >
        <div className="flex items-center space-x-2 mb-3">
          <Bell className="w-5 h-5 text-green-600" />
          <h4 className="font-semibold text-green-800">Stay Updated</h4>
        </div>
        <p className="text-green-700 text-sm mb-3">
          Get weekly updates about new projects, blog posts, and insights from the Ethiopian tech ecosystem.
        </p>
        <div className="flex space-x-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-3 py-2 border border-green-300 rounded-lg text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <Button size="sm" className="bg-green-600 hover:bg-green-700">
            Subscribe
          </Button>
        </div>
      </motion.div>
    </div>
  );
}