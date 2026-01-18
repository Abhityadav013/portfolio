import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, Code, Cpu, GraduationCap, Mail, Menu, User, X } from "lucide-react";
import { useNavigationSections } from "../hooks/useNavigationSections";

const navItems = [
  { id: "home", label: "Home", icon: User },
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: Code },
  { id: "skills", label: "Skills", icon: Cpu },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "contact", label: "Contact", icon: Mail },
];



const NavigationSection = () => {
  const { activeSection, isMenuOpen, setIsMenuOpen } = useNavigationSections();
  // New state to store the section to scroll to after modal closes
  const [pendingScrollSection, setPendingScrollSection] = React.useState<string | null>(null);

  // Listen for modal close to trigger scroll
  React.useEffect(() => {
    if (!isMenuOpen && pendingScrollSection) {
      // Wait for the exit animation to finish (match AnimatePresence exit duration)
      const timeout = setTimeout(() => {
        const element = document.getElementById(pendingScrollSection);
        if (element) element.scrollIntoView({ behavior: "smooth" });
        setPendingScrollSection(null);
      }, 350); // match exit animation duration
      return () => clearTimeout(timeout);
    }
  }, [isMenuOpen, pendingScrollSection]);
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-black/20 backdrop-blur-xl border-b border-white/10 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Abhit Yadav
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center flex-1">
            <div className="flex items-center justify-center flex-1 space-x-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    const element = document.getElementById(item.id);
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-blue-400 bg-blue-500/20 shadow-lg shadow-blue-500/25"
                      : "text-gray-300 hover:text-blue-400 hover:bg-white/5"
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </div>
            <motion.button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center space-x-2 px-4 py-2 rounded-xl border border-blue-500/40 text-blue-300 hover:bg-blue-500/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Let&apos;s Talk</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.35 }}
              className="fixed inset-0 z-50 flex flex-col md:hidden bg-black/90 backdrop-blur-xl overflow-y-auto"
              style={{ minHeight: '100vh' }}
            >
              {/* X Close Button */}
              <button
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-white z-50"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-7 h-7" />
              </button>
              <div className="w-full max-w-md mx-auto px-4 pt-16 pb-8 space-y-2 overflow-y-auto">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setPendingScrollSection(item.id);
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-4 rounded-lg text-lg transition-all duration-200 ${
                      activeSection === item.id
                        ? "text-blue-400 bg-blue-500/20"
                        : "text-gray-300 hover:text-blue-400 hover:bg-white/5"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <item.icon className="w-6 h-6" />
                    <span>{item.label}</span>
                  </motion.button>
                ))}
                <motion.button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setPendingScrollSection("contact");
                  }}
                  className="w-full flex items-center justify-center px-4 py-4 rounded-lg text-lg text-blue-300 border border-blue-500/40 hover:bg-blue-500/10 transition-all duration-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  Let&apos;s Talk
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default NavigationSection;
