import React from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Code,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import AnimatedText from "./AnimatedText";
import { useNavigationSections } from "../hooks/useNavigationSections";

const HeroSection = () => {
  const { scrollToSection } = useNavigationSections();
  return (
    <section
      id="home"
      className="min-h-screen top-10 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          {/* <div className="w-40 h-40 mx-auto mb-8 relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
            />
            <div className="absolute inset-2 bg-slate-900 rounded-full flex items-center justify-center">
              <User className="w-16 h-16 text-blue-400" />
            </div>
          </div> */}

          <AnimatedText
            text="Abhit Yadav"
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex items-center justify-center space-x-2 text-xl md:text-2xl text-blue-400 mb-6"
          >
            <Sparkles className="w-6 h-6" />
            <span>Full-Stack Developer</span>
            <Sparkles className="w-6 h-6" />
          </motion.div>

          <motion.p
            className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            3+ years of experience building scalable web applications for
            healthcare, pharmacy, and e-commerce industries. Transforming ideas
            into powerful digital solutions with cutting-edge technology.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <div className="flex items-center text-gray-300 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm">
            <MapPin className="w-5 h-5 mr-2 text-blue-400" />
            <span>Riga, Latvia</span>
          </div>
          <div className="flex items-center text-gray-300 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm">
            <Mail className="w-5 h-5 mr-2 text-purple-400" />
            <span>abhityadav0013@gmail.com</span>
          </div>
          <div className="flex items-center text-gray-300 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm">
            <Phone className="w-5 h-5 mr-2 text-pink-400" />
            <span>+371 26416482</span>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <motion.a
            href="https://linkedin.com/in/abhit-yadav-9a04bb217"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg shadow-blue-500/25"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </motion.a>
           <motion.a
            href="https://github.com/Abhityadav013"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-black-600 to-white-700 text-white rounded-xl hover:white-800 transition-all shadow-lg shadow-blue-500/25"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            <span>Github</span>
          </motion.a>
           <motion.a
            href="https://leetcode.com/__abhityadav"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-black-600 to-white-700 text-white rounded-xl hover:white-800 transition-all shadow-lg shadow-blue-500/25"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code className="w-5 h-5" />
            <span>Leetcode</span>
          </motion.a>
          <motion.button
            onClick={() => scrollToSection("contact")}
            className="flex items-center space-x-2 px-8 py-4 border border-purple-500/50 text-purple-400 rounded-xl hover:bg-purple-500/10 transition-all backdrop-blur-sm"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
            <span>Contact</span>
          </motion.button>
        </motion.div>

        <motion.div
          className="animate-bounce cursor-pointer"
          onClick={() => scrollToSection("about")}
          whileHover={{ scale: 1.2 }}
        >
          <ChevronDown className="w-8 h-8 text-blue-400 mx-auto" />
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"
        animate={{
          y: [0, 20, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </section>
  );
};

export default HeroSection;
