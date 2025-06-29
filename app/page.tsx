'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BootScreen from '@/components/boot-screen';
import Desktop from '@/components/desktop';

export default function Home() {
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBooting(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {isBooting ? (
          <BootScreen key="boot" />
        ) : (
          <Desktop key="desktop" />
        )}
      </AnimatePresence>
    </div>
  );
}