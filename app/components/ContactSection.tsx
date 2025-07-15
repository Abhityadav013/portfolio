import React from 'react'
import { motion } from "framer-motion";
import { Globe, Linkedin, Mail, Phone } from 'lucide-react';
import FloatingCard from './FloatingCard';
const ContactSection = () => {
  return (
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              I&apos;m currently open to job opportunities across Europe. Let&apos;s connect and discuss how I can contribute to your team.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                href: "mailto:abhityadav0013@gmail.com",
                icon: Mail,
                title: "Email",
                content: "abhityadav0013@gmail.com",
                color: "blue"
              },
              {
                href: "tel:+37126416482",
                icon: Phone,
                title: "Phone", 
                content: "+371 26416482",
                color: "green"
              },
              {
                href: "https://linkedin.com/in/abhit-yadav-9a04bb217",
                icon: Linkedin,
                title: "LinkedIn",
                content: "Connect with me",
                color: "purple"
              }
            ].map((contact, index) => (
              <FloatingCard key={index} delay={index * 0.2}>
                <motion.a
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex flex-col items-center p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group h-full"
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className={`w-16 h-16 bg-${contact.color}-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-${contact.color}-500/30`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <contact.icon className={`w-8 h-8 text-${contact.color}-400`} />
                  </motion.div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {contact.title}
                  </h3>
                  <p className="text-gray-400 text-center group-hover:text-gray-300 transition-colors">
                    {contact.content}
                  </p>
                </motion.a>
              </FloatingCard>
            ))}
          </div>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 flex items-center justify-center space-x-2">
              <Globe className="w-4 h-4" />
              <span>Based in Riga, Latvia • Open to opportunities across Europe</span>
            </p>
          </motion.div>
        </div>
      </section>
  )
}

export default ContactSection