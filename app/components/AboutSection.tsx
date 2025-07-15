import React from 'react'
import { motion } from "framer-motion";
import { Rocket, Sparkles, Zap } from 'lucide-react';
import FloatingCard from './FloatingCard';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                Full-Stack Developer with 3+ years of experience specializing in scalable and high-performance web applications. 
                I have extensive experience building solutions for healthcare, pharmacy, and e-commerce industries.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Currently pursuing a Master&apos;s in Computer Systems from Riga Technical University and open to job opportunities across Europe.
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Healthcare & Pharmacy",
                    desc: "Specialized in building HIPAA-compliant healthcare platforms",
                    icon: <Zap className="w-6 h-6 text-green-400" />
                  },
                  {
                    title: "E-commerce Solutions", 
                    desc: "Full-stack development for online ordering and reservation systems",
                    icon: <Rocket className="w-6 h-6 text-blue-400" />
                  },
                  {
                    title: "Performance Optimization",
                    desc: "Reduced API response times to &lt;20ms for 80,000+ users",
                    icon: <Sparkles className="w-6 h-6 text-purple-400" />
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                  >
                    {item.icon}
                    <div>
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400" dangerouslySetInnerHTML={{ __html: item.desc }} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <FloatingCard delay={0.4} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Tech Stack Highlights</h3>
              <div className="space-y-6">
                {[
                  { category: "Backend", techs: ['Node.js', 'NestJS', '.NET Core', 'Express'], color: "blue" },
                  { category: "Frontend", techs: ['React', 'Redux', 'TypeScript', 'MUI', 'Ant Design'], color: "green" },
                  { category: "Cloud & DevOps", techs: ['Docker', 'AWS', 'CI/CD', 'Redis'], color: "purple" }
                ].map((stack, index) => (
                  <motion.div
                    key={stack.category}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-semibold text-gray-300 mb-3">{stack.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {stack.techs.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className={`px-3 py-1 bg-${stack.color}-500/20 text-${stack.color}-300 rounded-full text-sm border border-${stack.color}-500/30`}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: (index * 0.2) + (techIndex * 0.1), duration: 0.4 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </FloatingCard>
          </div>
        </div>
      </section>
  )
}

export default AboutSection