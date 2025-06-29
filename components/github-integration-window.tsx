'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Github, GitBranch, Star, GitCommit, Calendar, ExternalLink, Code, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GitHubData {
  profile: {
    name: string;
    username: string;
    bio: string;
    followers: number;
    following: number;
    publicRepos: number;
    totalStars: number;
  };
  recentCommits: {
    repo: string;
    message: string;
    date: string;
    sha: string;
  }[];
  topRepos: {
    name: string;
    description: string;
    language: string;
    stars: number;
    forks: number;
    updated: string;
  }[];
  contributionStats: {
    totalContributions: number;
    currentStreak: number;
    longestStreak: number;
  };
}

export default function GitHubIntegrationWindow() {
  const [githubData, setGithubData] = useState<GitHubData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate GitHub API call
    const loadGitHubData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setGithubData({
        profile: {
          name: 'Exodus Tola',
          username: 'exodus-tola',
          bio: 'Full-stack developer building impactful solutions in Ethiopia 🇪🇹',
          followers: 234,
          following: 89,
          publicRepos: 42,
          totalStars: 156
        },
        recentCommits: [
          {
            repo: 'agrix-platform',
            message: 'Add weather API integration for crop recommendations',
            date: '2 hours ago',
            sha: 'a1b2c3d'
          },
          {
            repo: 'unigo-mobile',
            message: 'Implement AR navigation features',
            date: '1 day ago',
            sha: 'e4f5g6h'
          },
          {
            repo: 'bloodhero-ethiopia',
            message: 'Fix notification system for urgent blood requests',
            date: '2 days ago',
            sha: 'i7j8k9l'
          },
          {
            repo: 'exodus-os-portfolio',
            message: 'Add GitHub integration window',
            date: '3 days ago',
            sha: 'm0n1o2p'
          }
        ],
        topRepos: [
          {
            name: 'agrix-platform',
            description: 'Smart agricultural platform for Ethiopian farmers',
            language: 'TypeScript',
            stars: 45,
            forks: 12,
            updated: '2 hours ago'
          },
          {
            name: 'bloodhero-ethiopia',
            description: 'Blood donation coordination app for Ethiopia',
            language: 'React Native',
            stars: 38,
            forks: 8,
            updated: '2 days ago'
          },
          {
            name: 'freshman-placement-system',
            description: 'Automated university placement system',
            language: 'Python',
            stars: 29,
            forks: 15,
            updated: '1 week ago'
          },
          {
            name: 'unigo-mobile',
            description: 'Campus navigation app with AR features',
            language: 'Flutter',
            stars: 22,
            forks: 6,
            updated: '1 day ago'
          }
        ],
        contributionStats: {
          totalContributions: 1247,
          currentStreak: 23,
          longestStreak: 67
        }
      });
      
      setIsLoading(false);
    };

    loadGitHubData();
  }, []);

  if (isLoading) {
    return (
      <div className="p-6 flex items-center justify-center h-96">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-gray-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading GitHub data...</p>
        </div>
      </div>
    );
  }

  if (!githubData) return null;

  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      'TypeScript': 'bg-blue-500',
      'JavaScript': 'bg-yellow-500',
      'Python': 'bg-green-500',
      'React Native': 'bg-cyan-500',
      'Flutter': 'bg-blue-400',
      'Java': 'bg-orange-500'
    };
    return colors[language] || 'bg-gray-500';
  };

  return (
    <div className="p-6 space-y-6 max-h-96 overflow-y-auto">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
            <Github className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">GitHub Activity</h2>
            <p className="text-gray-600 text-sm">Live coding activity and repository stats</p>
          </div>
        </div>
      </div>

      {/* Profile Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg border border-gray-200"
      >
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
            <Github className="w-8 h-8 text-gray-600" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">{githubData.profile.name}</h3>
            <p className="text-gray-600">@{githubData.profile.username}</p>
            <p className="text-sm text-gray-700 mt-1">{githubData.profile.bio}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-800">{githubData.profile.publicRepos}</p>
            <p className="text-xs text-gray-600">Repositories</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-800">{githubData.profile.totalStars}</p>
            <p className="text-xs text-gray-600">Total Stars</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-800">{githubData.profile.followers}</p>
            <p className="text-xs text-gray-600">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-800">{githubData.profile.following}</p>
            <p className="text-xs text-gray-600">Following</p>
          </div>
        </div>
      </motion.div>

      {/* Contribution Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-3 gap-4"
      >
        <div className="bg-green-50 p-4 rounded-lg border border-green-100 text-center">
          <Activity className="w-6 h-6 text-green-600 mx-auto mb-2" />
          <p className="text-2xl font-bold text-green-800">{githubData.contributionStats.totalContributions}</p>
          <p className="text-green-600 text-xs">Total Contributions</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-center">
          <Calendar className="w-6 h-6 text-blue-600 mx-auto mb-2" />
          <p className="text-2xl font-bold text-blue-800">{githubData.contributionStats.currentStreak}</p>
          <p className="text-blue-600 text-xs">Current Streak</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 text-center">
          <Star className="w-6 h-6 text-purple-600 mx-auto mb-2" />
          <p className="text-2xl font-bold text-purple-800">{githubData.contributionStats.longestStreak}</p>
          <p className="text-purple-600 text-xs">Longest Streak</p>
        </div>
      </motion.div>

      {/* Recent Commits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-3"
      >
        <h3 className="font-semibold text-gray-800 flex items-center space-x-2">
          <GitCommit className="w-4 h-4" />
          <span>Recent Commits</span>
        </h3>
        <div className="space-y-2">
          {githubData.recentCommits.map((commit, index) => (
            <motion.div
              key={commit.sha}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + (index * 0.1) }}
              className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <GitCommit className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{commit.message}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-xs text-blue-600 font-medium">{commit.repo}</span>
                  <span className="text-xs text-gray-500">•</span>
                  <span className="text-xs text-gray-500">{commit.date}</span>
                  <span className="text-xs text-gray-400 font-mono">{commit.sha}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Top Repositories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="space-y-3"
      >
        <h3 className="font-semibold text-gray-800 flex items-center space-x-2">
          <Code className="w-4 h-4" />
          <span>Popular Repositories</span>
        </h3>
        <div className="grid gap-3">
          {githubData.topRepos.map((repo, index) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + (index * 0.1) }}
              className="p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <h4 className="font-semibold text-gray-900">{repo.name}</h4>
                  <div className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`} />
                </div>
                <Button variant="ghost" size="sm" className="p-1">
                  <ExternalLink className="w-3 h-3" />
                </Button>
              </div>
              <p className="text-sm text-gray-600 mb-3">{repo.description}</p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center space-x-1">
                    <Star className="w-3 h-3" />
                    <span>{repo.stars}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <GitBranch className="w-3 h-3" />
                    <span>{repo.forks}</span>
                  </span>
                  <span>{repo.language}</span>
                </div>
                <span>Updated {repo.updated}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* GitHub Profile Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="text-center pt-4 border-t border-gray-200"
      >
        <Button className="flex items-center space-x-2 bg-gray-900 hover:bg-gray-800">
          <Github className="w-4 h-4" />
          <span>View Full GitHub Profile</span>
          <ExternalLink className="w-3 h-3" />
        </Button>
      </motion.div>
    </div>
  );
}