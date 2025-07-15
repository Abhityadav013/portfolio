import React from 'react';
import { motion } from 'framer-motion';

interface SkillOrbProps {
  skill: string;
  color: string;
  delay: number;
}

export default function SkillOrb({ skill, color, delay }: SkillOrbProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotateY: -180 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ 
        delay, 
        duration: 0.6, 
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.1, 
        rotateY: 10,
        rotateX: 10,
        transition: { duration: 0.3 }
      }}
      className="relative group cursor-pointer perspective-1000"
    >
      <motion.div
        className="relative w-24 h-24 rounded-full flex items-center justify-center text-white font-semibold text-xs text-center p-2 shadow-lg transform-gpu"
        style={{
          background: `linear-gradient(135deg, ${color}40, ${color}80)`,
          border: `2px solid ${color}60`,
          boxShadow: `0 8px 32px ${color}30`,
        }}
        animate={{
          boxShadow: [
            `0 8px 32px ${color}30`,
            `0 12px 40px ${color}50`,
            `0 8px 32px ${color}30`
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-50"
          style={{
            background: `conic-gradient(from 0deg, ${color}60, transparent, ${color}60)`
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner glow */}
        <motion.div
          className="absolute inset-2 rounded-full"
          style={{
            background: `radial-gradient(circle, ${color}20, transparent)`
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Skill text */}
        <span className="relative z-10 drop-shadow-lg">
          {skill}
        </span>
        
        {/* Hover effect overlay */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: `linear-gradient(135deg, ${color}20, ${color}40)`
          }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      
      {/* Floating particles effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: color,
              left: `${20 + i * 10}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-10, -20, -10],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}