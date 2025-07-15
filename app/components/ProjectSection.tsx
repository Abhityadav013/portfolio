import React from 'react'
import { motion } from "framer-motion";
import FloatingCard from './FloatingCard';
import { CheckCircle, ExternalLink } from 'lucide-react';

 const projects = [
    {
      title: 'IndianTadka.eu',
      subtitle: 'German Client Project',
      description: 'Complete online food ordering and table reservation platform with client interface and admin dashboard for order management.',
      technologies: ['Next.js 15', 'TailwindCSS', 'MUI', 'Node.js', 'TypeScript'],
      link: 'https://indiantadka.eu/',
      flag: '🇩🇪',
      status: 'Live'
    },
    {
      title: 'Informed (Libera)',
      subtitle: 'Vocational Rehab Platform',
      description: 'Reduced API response time to &lt;20ms for 80,000+ users using MongoDB & Redis. Implemented monorepo (Nx) setup and DocuSign automation.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'Nx', 'DocuSign'],
      achievements: ['80,000+ users', '<20ms response time', 'Monorepo architecture']
    },
    {
      title: 'MicroProduct (OptumRx)',
      subtitle: 'Healthcare Components',
      description: 'Developed reusable React components with 95% test coverage and built a shared frontend library for cross-project development.',
      technologies: ['React', 'Jest', 'Cucumber', 'TypeScript', 'Component Library'],
      achievements: ['95% test coverage', 'Reusable components', 'Shared library']
    },
    {
      title: 'MyArthritisRx & IndigoRx',
      subtitle: 'Healthcare Platform',
      description: 'Migrated from Sitecore to modern stack with AI-based coaching plans, user registration, and Stripe payment integration.',
      technologies: ['ASP.NET Core', 'React', 'Redux', 'Saga', 'Stripe', 'AI Integration'],
      achievements: ['Full migration', 'AI coaching', 'Payment integration']
    }
  ];
export const ProjectSection = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <FloatingCard key={index} delay={index * 0.2} className="group">
                <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 h-full hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      {project.flag && <span className="text-xl">{project.flag}</span>}
                    </div>
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">Live</span>
                      </motion.a>
                    )}
                  </div>
                  
                  <p className="text-sm text-blue-400 mb-4 font-medium">{project.subtitle}</p>
                  <p className="text-gray-300 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: project.description }} />
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600/50"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.1, duration: 0.3 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {project.achievements && (
                    <div>
                      <h4 className="font-semibold text-white mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            className="flex items-center text-sm text-gray-300"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                            viewport={{ once: true }}
                          >
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>
  )
}
