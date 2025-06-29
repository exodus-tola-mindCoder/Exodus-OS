'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { BookOpen, Calendar, Clock, Eye, Heart, MessageCircle, Share2, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  publishDate: string;
  readTime: string;
  views: number;
  likes: number;
  comments: number;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 'building-agrix',
    title: 'Building AgriX: Lessons from Developing for Ethiopian Farmers',
    excerpt: 'The journey of creating a smart agricultural platform that bridges the gap between traditional farming and modern technology.',
    content: `When I started building AgriX, I thought I understood the challenges Ethiopian farmers faced. I was wrong. 

The real learning began when I spent weeks in rural areas, talking to farmers, understanding their daily routines, and observing how they make decisions about their crops.

Here's what I learned:

1. **Technology must be accessible**: Many farmers don't have smartphones, and those who do often have limited data. Our solution needed to work on basic phones and use minimal data.

2. **Local language matters**: Providing information in Amharic and Afaan Oromo wasn't just nice-to-have—it was essential for adoption.

3. **Trust is everything**: Farmers needed to see real results from their neighbors before adopting new technologies.

The technical challenges were significant too. We had to build offline-first functionality, optimize for low-bandwidth connections, and integrate with local weather APIs that weren't always reliable.

But the impact has been worth it. Seeing farmers increase their yields by 30% using our recommendations, or connecting directly with buyers to get fair prices—that's what makes all the late nights worthwhile.`,
    category: 'Product Development',
    tags: ['AgriX', 'Agriculture', 'Mobile Development', 'User Research'],
    publishDate: '2024-02-15',
    readTime: '8 min read',
    views: 1247,
    likes: 89,
    comments: 23,
    featured: true
  },
  {
    id: 'ethiopian-tech-ecosystem',
    title: 'The Ethiopian Tech Ecosystem: Challenges and Opportunities',
    excerpt: 'An insider\'s perspective on building technology solutions in Ethiopia and the unique opportunities in the local market.',
    content: `Ethiopia's tech ecosystem is at an inflection point. With a young, growing population and increasing internet penetration, we're seeing unprecedented opportunities for local innovation.

However, building tech in Ethiopia comes with unique challenges:

**Infrastructure**: Internet connectivity is still limited in rural areas, and power outages are common. This forces us to build more resilient, offline-capable applications.

**Payment Systems**: Traditional banking is limited, but mobile money is growing rapidly. We've had to get creative with payment integration.

**Talent**: There's incredible talent here, but many developers lack exposure to modern frameworks and best practices. Mentorship and knowledge sharing are crucial.

**Market Understanding**: International solutions often don't work here. We need to build for local contexts, languages, and use cases.

Despite these challenges, I'm optimistic. Projects like AgriX, BloodHero Ethiopia, and the Freshman Placement System show that we can build world-class solutions that solve real local problems.

The key is to think globally but build locally.`,
    category: 'Industry Insights',
    tags: ['Ethiopia', 'Tech Ecosystem', 'Entrepreneurship', 'Local Development'],
    publishDate: '2024-01-20',
    readTime: '6 min read',
    views: 892,
    likes: 67,
    comments: 15
  },
  {
    id: 'react-native-tips',
    title: 'React Native Performance Tips for African Markets',
    excerpt: 'Optimizing mobile apps for low-end devices and poor network conditions common in African markets.',
    content: `Building mobile apps for African markets requires a different approach than developing for Silicon Valley. Here are the key optimizations I've learned:

**Device Considerations:**
- Target Android API 21+ to support older devices
- Optimize for devices with 1-2GB RAM
- Use smaller image sizes and efficient formats
- Implement lazy loading for all non-critical components

**Network Optimization:**
- Implement aggressive caching strategies
- Use compression for all API responses
- Build offline-first functionality
- Provide clear feedback for network states

**Battery Optimization:**
- Minimize background processes
- Use efficient animations (avoid complex transforms)
- Implement smart sync strategies
- Reduce location tracking frequency

**User Experience:**
- Design for one-handed use (many users have basic phones)
- Use familiar UI patterns
- Provide clear error messages in local languages
- Implement progressive disclosure

These optimizations helped UniGo achieve 95% crash-free sessions and maintain good performance even on 2GB RAM devices.`,
    category: 'Technical',
    tags: ['React Native', 'Performance', 'Mobile Development', 'Africa'],
    publishDate: '2023-12-10',
    readTime: '10 min read',
    views: 1456,
    likes: 124,
    comments: 31
  },
  {
    id: 'ai-for-agriculture',
    title: 'Integrating AI in Agricultural Solutions: A Practical Approach',
    excerpt: 'How we used machine learning to provide crop recommendations and weather predictions in AgriX.',
    content: `AI in agriculture isn't just about fancy algorithms—it's about solving real problems for farmers who need practical, actionable insights.

For AgriX, we focused on three key AI applications:

**1. Crop Recommendation System**
Using historical weather data, soil conditions, and market prices, we built a recommendation engine that suggests the best crops for each farmer's specific location and season.

**2. Weather Prediction**
We combined local weather station data with satellite imagery to provide hyper-local weather forecasts, crucial for farming decisions.

**3. Pest and Disease Detection**
Farmers can take photos of their crops, and our image recognition model identifies potential issues and suggests treatments.

The key was keeping it simple and explainable. Farmers need to understand why the AI is making certain recommendations.

We also had to work with limited data—there isn't much agricultural data available for Ethiopia, so we had to get creative with data collection and model training.`,
    category: 'AI & Machine Learning',
    tags: ['AI', 'Machine Learning', 'Agriculture', 'Computer Vision'],
    publishDate: '2023-11-05',
    readTime: '7 min read',
    views: 743,
    likes: 56,
    comments: 12
  }
];

export default function BlogWindow() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());

  const handleLike = (postId: string) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  if (selectedPost) {
    return (
      <div className="p-6 space-y-6 max-h-96 overflow-y-auto">
        {/* Back Button */}
        <Button 
          variant="outline" 
          onClick={() => setSelectedPost(null)}
          className="mb-4"
        >
          ← Back to Blog
        </Button>

        {/* Article Header */}
        <div className="space-y-4">
          <div>
            <Badge variant="secondary" className="mb-2">
              {selectedPost.category}
            </Badge>
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">
              {selectedPost.title}
            </h1>
          </div>

          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{selectedPost.publishDate}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{selectedPost.readTime}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye className="w-4 h-4" />
              <span>{selectedPost.views} views</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {selectedPost.tags.map(tag => (
              <Badge key={tag} variant="outline" className="text-xs">
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-sm max-w-none">
          <div className="text-gray-700 leading-relaxed whitespace-pre-line">
            {selectedPost.content}
          </div>
        </div>

        {/* Article Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleLike(selectedPost.id)}
              className={`flex items-center space-x-1 ${
                likedPosts.has(selectedPost.id) ? 'text-red-600' : 'text-gray-600'
              }`}
            >
              <Heart className={`w-4 h-4 ${likedPosts.has(selectedPost.id) ? 'fill-current' : ''}`} />
              <span>{selectedPost.likes + (likedPosts.has(selectedPost.id) ? 1 : 0)}</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center space-x-1 text-gray-600">
              <MessageCircle className="w-4 h-4" />
              <span>{selectedPost.comments}</span>
            </Button>
          </div>
          <Button variant="ghost" size="sm" className="flex items-center space-x-1 text-gray-600">
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </Button>
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
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Tech Blog</h2>
            <p className="text-gray-600 text-sm">Insights, tutorials, and thoughts on building technology in Ethiopia</p>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      {blogPosts.filter(post => post.featured).map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-lg border border-blue-200 cursor-pointer hover:shadow-lg transition-all duration-300"
          onClick={() => setSelectedPost(post)}
        >
          <div className="flex items-start justify-between mb-3">
            <Badge className="bg-blue-600 text-white">Featured</Badge>
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>{post.views}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Heart className="w-4 h-4" />
                <span>{post.likes}</span>
              </div>
            </div>
          </div>
          
          <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-700 transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 text-xs text-gray-600">
              <span>{post.publishDate}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <Badge variant="secondary">{post.category}</Badge>
          </div>
        </motion.div>
      ))}

      {/* Other Posts */}
      <div className="space-y-4">
        <h3 className="font-semibold text-gray-800">Recent Posts</h3>
        <div className="space-y-3">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (index * 0.1) }}
              className="bg-white p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200 cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="flex items-start justify-between mb-2">
                <Badge variant="outline" className="text-xs">
                  {post.category}
                </Badge>
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-3 h-3" />
                    <span>{post.views}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="w-3 h-3" />
                    <span>{post.likes}</span>
                  </div>
                </div>
              </div>
              
              <h4 className="font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                {post.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-2">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{post.publishDate} • {post.readTime}</span>
                <div className="flex items-center space-x-1">
                  <MessageCircle className="w-3 h-3" />
                  <span>{post.comments}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Blog Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-gray-50 p-4 rounded-lg border border-gray-200"
      >
        <h4 className="font-semibold text-gray-800 mb-3">Blog Statistics</h4>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-gray-800">{blogPosts.length}</p>
            <p className="text-xs text-gray-600">Articles</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">
              {blogPosts.reduce((sum, post) => sum + post.views, 0).toLocaleString()}
            </p>
            <p className="text-xs text-gray-600">Total Views</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">
              {blogPosts.reduce((sum, post) => sum + post.likes, 0)}
            </p>
            <p className="text-xs text-gray-600">Total Likes</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}