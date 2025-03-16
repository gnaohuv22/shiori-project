"use client";

import { motion, useScroll } from 'framer-motion';
import React, { memo } from 'react';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-2 bg-primary/50 z-9999 origin-left pointer-events-none will-change-transform"
      style={{ 
        scaleX: scrollYProgress,
        position: 'fixed',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden'
      }}
    />
  );
}

export default memo(ScrollProgress);
