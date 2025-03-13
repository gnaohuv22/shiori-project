"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: IconType;
  color: string;
  delay?: number;
}

export default function CategoryCard({ 
  title, 
  description, 
  icon: Icon, 
  color,
  delay = 0 
}: CategoryCardProps) {
  return (
    <motion.div 
      className="card p-6 h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.03 }}
    >
      <div className={`mb-4 text-4xl ${color}`}>
        <Icon />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm opacity-80">{description}</p>
    </motion.div>
  );
}
