'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Window from '@/components/window';
import ProjectWindow from '@/components/project-window';
import AboutWindow from '@/components/about-window';
import TerminalWindow from '@/components/terminal-window';
import DocumentsWindow from '@/components/documents-window';
import RecycleBinWindow from '@/components/recycle-bin-window';
import TestimonialsWindow from '@/components/testimonials-window';
import ClientsWindow from '@/components/clients-window';
import SkillsWindow from '@/components/skills-window';
import FunFactsWindow from '@/components/fun-facts-window';
import ContactWindow from '@/components/contact-window';
import AnalyticsWindow from '@/components/analytics-window';
import GitHubIntegrationWindow from '@/components/github-integration-window';
import AchievementsWindow from '@/components/achievements-window';
import BlogWindow from '@/components/blog-window';
import SocialMediaWindow from '@/components/social-media-window';
import ServicesWindow from '@/components/services-window';
import CaseStudyWindow from '@/components/case-study-window';
import CalendarBookingWindow from '@/components/calendar-booking-window';
import { projectsData } from '@/lib/projects-data';

interface WindowManagerProps {
  openWindows: string[];
  activeWindow: string | null;
  onCloseWindow: (id: string) => void;
  onFocusWindow: (id: string) => void;
  onBackToDesktop: () => void;
}

export default function WindowManager({
  openWindows,
  activeWindow,
  onCloseWindow,
  onFocusWindow,
  onBackToDesktop,
}: WindowManagerProps) {
  // Auto-focus the first window when opened
  useEffect(() => {
    if (openWindows.length > 0 && !activeWindow) {
      onFocusWindow(openWindows[0]);
    }
  }, [openWindows, activeWindow, onFocusWindow]);

  const getWindowContent = (windowId: string) => {
    switch (windowId) {
      case 'about':
        return <AboutWindow />;
      case 'skills':
        return <SkillsWindow />;
      case 'testimonials':
        return <TestimonialsWindow />;
      case 'clients':
        return <ClientsWindow />;
      case 'contact':
        return <ContactWindow />;
      case 'services':
        return <ServicesWindow />;
      case 'calendar-booking':
        return <CalendarBookingWindow />;
      case 'case-studies':
        return <CaseStudyWindow />;
      case 'social-media':
        return <SocialMediaWindow />;
      case 'analytics':
        return <AnalyticsWindow />;
      case 'github':
        return <GitHubIntegrationWindow />;
      case 'achievements':
        return <AchievementsWindow />;
      case 'blog':
        return <BlogWindow />;
      case 'fun-facts':
        return <FunFactsWindow />;
      case 'terminal':
        return <TerminalWindow />;
      case 'documents':
        return <DocumentsWindow />;
      case 'recycle-bin':
        return <RecycleBinWindow />;
      default:
        const project = projectsData.find(p => p.id === windowId);
        return project ? <ProjectWindow project={project} /> : null;
    }
  };

  const getWindowTitle = (windowId: string) => {
    switch (windowId) {
      case 'about':
        return 'About Exodus';
      case 'skills':
        return 'Technical Skills';
      case 'testimonials':
        return 'Testimonials';
      case 'clients':
        return 'Clients & Partners';
      case 'contact':
        return 'Contact & Collaboration';
      case 'services':
        return 'Services & Solutions';
      case 'calendar-booking':
        return 'Schedule Meeting';
      case 'case-studies':
        return 'Case Studies';
      case 'social-media':
        return 'Social Media & Community';
      case 'analytics':
        return 'Portfolio Analytics';
      case 'github':
        return 'GitHub Activity';
      case 'achievements':
        return 'Achievements & Recognition';
      case 'blog':
        return 'Tech Blog';
      case 'fun-facts':
        return 'Fun Facts & Hobbies';
      case 'terminal':
        return 'Terminal';
      case 'documents':
        return 'Documents';
      case 'recycle-bin':
        return 'Recycle Bin';
      default:
        const project = projectsData.find(p => p.id === windowId);
        return project?.name || 'Unknown';
    }
  };

  return (
    <AnimatePresence>
      {openWindows.map((windowId, index) => (
        <Window
          key={windowId}
          id={windowId}
          title={getWindowTitle(windowId)}
          isActive={activeWindow === windowId}
          onClose={() => onCloseWindow(windowId)}
          onFocus={() => onFocusWindow(windowId)}
          onBackToDesktop={onBackToDesktop}
          zIndex={activeWindow === windowId ? 50 : 40 - index}
        >
          {getWindowContent(windowId)}
        </Window>
      ))}
    </AnimatePresence>
  );
}