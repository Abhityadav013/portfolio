import { Calendar, MapPin } from 'lucide-react'
import React from 'react'
import FloatingCard from './FloatingCard'
import { motion } from "framer-motion";

  const education = [
    {
      degree: 'Master in Computer Systems',
      institution: 'Riga Technical University',
      period: '2025 – Present',
      location: 'Riga, Latvia',
      status: 'Current'
    },
    {
      degree: 'B.Tech',
      institution: 'Maharishi Dayanand University',
      period: '2017 – 2021',
      location: 'Rohtak, India',
      status: 'Completed'
    }
  ];

const EducationSection = () => {
  return (
         <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Education
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </motion.div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <FloatingCard key={index} delay={index * 0.2}>
                <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                      <p className="text-lg text-blue-400 mb-3">{edu.institution}</p>
                      <div className="flex items-center text-gray-400 mb-2">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    <div className="flex flex-col lg:items-end space-y-2">
                      <div className="flex items-center text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{edu.period}</span>
                      </div>
                      <motion.span
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                          edu.status === 'Current' 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                            : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        }`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {edu.status}
                      </motion.span>
                    </div>
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>
  )
}

export default EducationSection