"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface BookmarkCloverImageProps {
  className?: string;
  size?: number;
  animate?: boolean;
}

export default function BookmarkCloverImage({ 
  className = "", 
  size = 24,
  animate = false
}: BookmarkCloverImageProps) {
  const Component = animate ? motion.div : 'div';
  
  return (
    <Component
      className={`relative ${animate ? "clover-spinner" : ""} ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/bookmark_clover.png"
        alt="Bookmark Clover"
        fill
        style={{ objectFit: 'contain' }}
        priority={size > 40} // Use priority for larger images
      />
    </Component>
  );
}
