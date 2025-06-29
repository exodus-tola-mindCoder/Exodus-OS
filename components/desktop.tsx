'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Taskbar from '@/components/taskbar';
import DesktopIcon from '@/components/desktop-icon';
import WindowManager from '@/components/window-manager';
import QuickAccessDock from '@/components/quick-access-dock';
import { projectsData } from '@/lib/projects-data';
import { 
  User, 
  Terminal, 
  FolderOpen, 
  Trash2,
  Smartphone,
  GraduationCap,
  ShoppingCart,
  Heart,
  Users,
  BookOpen,
  Lightbulb,
  Leaf,
  Star,
  Building2,
  Code,
  Music,
  Folder,
  ArrowLeft,
  Mail,
  BarChart3,
  Github,
  Trophy,
  PenTool,
  MessageCircle,
  Zap,
  Calendar,
  FileText
} from 'lucide-react';

const iconMap = {
  'agrix': Leaf,
  'unigo': Smartphone,
  'freshman-placement': GraduationCap,
  'eastlink-market': ShoppingCart,
  'bloodhero-ethiopia': Heart,
  'peerswap': Users,
  'campus-repo': BookOpen,
  'spiritual-growth': Lightbulb,
};

export default function Desktop() {
  const [openWindows, setOpenWindows] = useState<string[]>([]);
  const [activeWindow, setActiveWindow] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileInstructions, setShowMobileInstructions] = useState(true);
  const [showTerminalSpotlight, setShowTerminalSpotlight] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Hide mobile instructions after 5 seconds
  useEffect(() => {
    if (isMobile && showMobileInstructions) {
      const timer = setTimeout(() => {
        setShowMobileInstructions(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isMobile, showMobileInstructions]);

  // Hide terminal spotlight after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTerminalSpotlight(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleIconClick = (id: string) => {
    if (!openWindows.includes(id)) {
      setOpenWindows([...openWindows, id]);
    }
    setActiveWindow(id);
    setShowTerminalSpotlight(false); // Hide spotlight when any window opens
  };

  const handleCloseWindow = (id: string) => {
    setOpenWindows(openWindows.filter(w => w !== id));
    if (activeWindow === id) {
      setActiveWindow(openWindows.filter(w => w !== id)[0] || null);
    }
  };

  const handleBackToDesktop = () => {
    setOpenWindows([]);
    setActiveWindow(null);
  };

  // Essential icons (always visible)
  const essentialIcons = [
    { id: 'about', icon: User, label: 'About', tooltip: 'Learn about Exodus - his story, vision, and background' },
    { id: 'skills', icon: Code, label: 'Skills', tooltip: 'Technical skills and technologies Exodus uses' },
    { id: 'testimonials', icon: Star, label: 'Reviews', tooltip: 'What clients and colleagues say about working with Exodus' },
    { id: 'clients', icon: Building2, label: 'Clients', tooltip: 'Organizations that trust Exodus with their projects' },
    { id: 'contact', icon: Mail, label: 'Contact', tooltip: 'Get in touch for projects and collaborations' },
    { id: 'documents', icon: FolderOpen, label: 'Files', tooltip: 'Download resume, pitch decks, and important files' },
  ];

  // Professional & Business Tools
  const professionalIcons = [
    { id: 'services', icon: Zap, label: 'Services', tooltip: 'Professional development services and solutions' },
    { id: 'calendar-booking', icon: Calendar, label: isMobile ? 'Book' : 'Book Meeting', tooltip: 'Schedule a consultation or technical discussion' },
    { id: 'case-studies', icon: FileText, label: isMobile ? 'Cases' : 'Case Studies', tooltip: 'Detailed project case studies with metrics and outcomes' },
    { id: 'social-media', icon: MessageCircle, label: isMobile ? 'Social' : 'Social Media', tooltip: 'Telegram channel with 2,500+ subscribers and other social platforms' },
    { id: 'analytics', icon: BarChart3, label: isMobile ? 'Stats' : 'Analytics', tooltip: 'Portfolio analytics and visitor insights' },
    { id: 'github', icon: Github, label: 'GitHub', tooltip: 'Live GitHub activity and repository stats' },
    { id: 'achievements', icon: Trophy, label: isMobile ? 'Awards' : 'Achievements', tooltip: 'Awards, certifications, and recognition' },
    { id: 'blog', icon: PenTool, label: 'Blog', tooltip: 'Technical articles and insights on building in Ethiopia' },
  ];

  // Project icons - show all on desktop, limited on mobile
  const projectIcons = projectsData
    .slice(0, isMobile ? 4 : projectsData.length)
    .map(project => ({
      id: project.id,
      icon: iconMap[project.id as keyof typeof iconMap] || Folder,
      label: isMobile ? project.name.split(' ')[0] : project.name, // Shorter names on mobile
      tooltip: `${project.name} - ${project.description.substring(0, 80)}...`
    }));

  // Terminal gets special treatment - always prominently placed
  const terminalIcon = { 
    id: 'terminal', 
    icon: Terminal, 
    label: 'Terminal', 
    tooltip: '🎮 FEATURED: Interactive command line interface - The heart of this portfolio!' 
  };

  // Fun/Easter egg icons
  const funIcons = [
    { id: 'fun-facts', icon: Music, label: isMobile ? 'Fun' : 'Fun Facts', tooltip: 'Personal interests and hobbies beyond coding' },
    { id: 'recycle-bin', icon: Trash2, label: isMobile ? 'Trash' : 'Recycle', tooltip: '🗑️ Abandoned projects and experiments' },
  ];

  // Create circular layout with terminal at center
  const createCircularLayout = () => {
    const allOtherIcons = [
      ...essentialIcons,
      ...professionalIcons,
      ...projectIcons,
      ...funIcons
    ];

    // For mobile, use a simpler grid layout
    if (isMobile) {
      return [
        ...essentialIcons.slice(0, 2),
        terminalIcon,
        ...essentialIcons.slice(2, 4),
        ...professionalIcons.slice(0, 4),
        ...projectIcons,
        ...funIcons
      ];
    }

    // Desktop: Create circular arrangement
    const centerIcon = terminalIcon;
    const surroundingIcons = allOtherIcons;
    
    return { centerIcon, surroundingIcons };
  };

  const layout = createCircularLayout();

  // Responsive grid configuration
  const getGridConfig = () => {
    if (isMobile) {
      return 'grid-cols-3 gap-4 px-4';
    } else {
      // For desktop, we'll use a custom circular layout
      return 'relative';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="h-screen w-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900 relative overflow-hidden transition-colors duration-300"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e0e7ff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      {/* Terminal Spotlight Effect */}
      {showTerminalSpotlight && !isMobile && openWindows.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute inset-0 pointer-events-none z-30"
        >
          {/* Spotlight overlay */}
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Spotlight circle - positioned at center */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-green-400/40 to-blue-400/40 blur-xl"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          />
          
          {/* Floating hint */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto mt-24"
          >
            <div className="bg-black/90 text-green-400 px-6 py-4 rounded-lg border border-green-500/50 shadow-2xl backdrop-blur-sm max-w-md">
              <div className="flex items-center space-x-3 mb-2">
                <Terminal className="w-6 h-6 text-green-400 animate-pulse" />
                <span className="text-lg font-bold">Featured: Interactive Terminal</span>
              </div>
              <p className="text-green-300 text-sm mb-3">
                🎮 The heart of this portfolio! Try commands like:
              </p>
              <div className="space-y-1 text-xs text-green-200 font-mono">
                <p>• <span className="text-yellow-400">matrix</span> - Enter the Matrix</p>
                <p>• <span className="text-yellow-400">hack</span> - Hacking simulation</p>
                <p>• <span className="text-yellow-400">skills</span> - Interactive skills</p>
                <p>• <span className="text-yellow-400">projects</span> - Project overview</p>
              </div>
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-center mt-3 text-green-400 text-sm"
              >
                👆 Click Terminal to start exploring!
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Quick Access Dock - Desktop only */}
      {!isMobile && <QuickAccessDock onIconClick={handleIconClick} />}

      {/* Mobile Header with Instructions */}
      {isMobile && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute top-0 left-0 right-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">EOS</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-800 dark:text-gray-200">Exodus OS</h1>
                <p className="text-xs text-gray-600 dark:text-gray-400">Interactive Portfolio</p>
              </div>
            </div>
            
            {/* Back Button - Only show when windows are open */}
            {openWindows.length > 0 && (
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBackToDesktop}
                className="flex items-center space-x-2 px-3 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-lg font-medium text-sm shadow-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </motion.button>
            )}
          </div>

          {/* Instructions - Auto-hide after 5 seconds */}
          {showMobileInstructions && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="px-4 pb-3 border-t border-gray-200/30 dark:border-gray-700/30"
            >
              <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded-lg border border-green-200/50 dark:border-green-700/50">
                <div className="flex items-center space-x-2 mb-2">
                  <Terminal className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-green-800 dark:text-green-200 font-medium text-sm">Try the Terminal!</span>
                </div>
                <div className="space-y-1 text-xs text-green-700 dark:text-green-300">
                  <p>• <strong>Terminal:</strong> Interactive command line</p>
                  <p>• <strong>Commands:</strong> matrix, hack, skills, projects</p>
                  <p>• <strong>Navigation:</strong> Single tap → info, Double tap → open</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      )}

      {/* Desktop Icons */}
      <div className={`h-full overflow-y-auto ${
        isMobile 
          ? showMobileInstructions ? 'pt-32 pb-20' : 'pt-20 pb-20'
          : 'pb-20 pt-24'
      }`}>
        <div className="min-h-full flex items-center justify-center py-6">
          {isMobile ? (
            // Mobile: Simple grid layout
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`grid ${getGridConfig()} justify-items-center w-full max-w-7xl`}
            >
              {(layout as any[]).map((iconData, index) => (
                <motion.div
                  key={iconData.id}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.1 + (index * 0.03),
                    type: "spring",
                    stiffness: 120
                  }}
                  className="w-full"
                >
                  <DesktopIcon
                    id={iconData.id}
                    icon={iconData.icon}
                    label={iconData.label}
                    tooltip={iconData.tooltip}
                    onClick={() => handleIconClick(iconData.id)}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            // Desktop: Circular layout with terminal at center
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-6xl h-full flex items-center justify-center"
            >
              {/* Center Terminal Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.5,
                  type: "spring",
                  stiffness: 120
                }}
                className={`absolute z-40 ${
                  showTerminalSpotlight ? 'z-50' : ''
                }`}
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className="relative">
                  <DesktopIcon
                    id={(layout as any).centerIcon.id}
                    icon={(layout as any).centerIcon.icon}
                    label={(layout as any).centerIcon.label}
                    tooltip={(layout as any).centerIcon.tooltip}
                    onClick={() => handleIconClick((layout as any).centerIcon.id)}
                  />
                  
                  {/* Special glow effect for terminal */}
                  {showTerminalSpotlight && (
                    <motion.div
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.7, 0.3]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-0 bg-gradient-to-r from-green-400/30 to-blue-400/30 rounded-xl blur-lg -z-10"
                    />
                  )}
                  
                  {/* Terminal highlight ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-xl border-2 border-dashed border-green-400/40 dark:border-green-500/40 -z-10"
                    style={{ transform: 'translate(-50%, -50%) scale(1.2)' }}
                  />
                </div>
              </motion.div>

              {/* Surrounding Icons in Circular Pattern */}
              {(layout as any).surroundingIcons.map((iconData: any, index: number) => {
                const totalIcons = (layout as any).surroundingIcons.length;
                const angle = (index * 360) / totalIcons;
                const radius = 280; // Distance from center
                
                const x = Math.cos((angle - 90) * Math.PI / 180) * radius;
                const y = Math.sin((angle - 90) * Math.PI / 180) * radius;

                return (
                  <motion.div
                    key={iconData.id}
                    initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
                    animate={{ opacity: 1, scale: 1, x, y }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.7 + (index * 0.05),
                      type: "spring",
                      stiffness: 100
                    }}
                    className="absolute"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <DesktopIcon
                      id={iconData.id}
                      icon={iconData.icon}
                      label={iconData.label}
                      tooltip={iconData.tooltip}
                      onClick={() => handleIconClick(iconData.id)}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </div>
      </div>

      {/* Window Manager */}
      <WindowManager
        openWindows={openWindows}
        activeWindow={activeWindow}
        onCloseWindow={handleCloseWindow}
        onFocusWindow={setActiveWindow}
        onBackToDesktop={handleBackToDesktop}
      />

      {/* Taskbar */}
      <Taskbar
        openWindows={openWindows}
        activeWindow={activeWindow}
        onWindowClick={setActiveWindow}
        onBackToDesktop={handleBackToDesktop}
      />
    </motion.div>
  );
}