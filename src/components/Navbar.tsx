import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home,
  Briefcase,
  Menu,
  X
} from "lucide-react";
import { AboutDialog } from "./AboutDialog";
import { EducationDialog } from "./EducationDialog";
import { SkillsDialog } from "./SkillsDialog";
import { ContactDialog } from "./ContactDialog";



export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-md" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
          <Link
  to="/"
  className="text-3xl font-extrabold text-gray-900 dark:text-zinc-100 font-serif shadow-sm"
>
  VED
</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => {
                if (item.name === "Home" || item.name === "Portfolio") {
                  const Icon = item.name === "Home" ? Home : Briefcase;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center gap-2 text-gray-700 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-zinc-100 px-3 py-2 text-sm font-medium relative group ${location.pathname === item.href ? 'font-bold text-sky-600 dark:text-sky-400' : ''}`}
                    >
                      <Icon className="w-4 h-4" />
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </Link>
                  );
                }
                if (item.name === "About") {
                  return <AboutDialog key={item.name} />;
                }
                if (item.name === "Education") {
                  return <EducationDialog key={item.name} />;
                }
                if (item.name === "Skills") {
                  return <SkillsDialog key={item.name} />;
                }
                if (item.name === "Contact") {
                  return <ContactDialog key={item.name} />;
                }
                return null;
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white dark:bg-zinc-900"
        >
          <div className="flex flex-col gap-2 px-2 pt-2 pb-3">
            {navItems.map((item) => {
              if (item.name === "Home" || item.name === "Portfolio") {
                const Icon = item.name === "Home" ? Home : Briefcase;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center gap-2 px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-zinc-100 ${location.pathname === item.href ? 'font-bold text-sky-600 dark:text-sky-400' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                );
              }
              if (item.name === "About") {
                return (
                  <div key={item.name} className="px-3 py-2">
                    <AboutDialog />
                  </div>
                );
              }
              if (item.name === "Education") {
                return (
                  <div key={item.name} className="px-3 py-2">
                    <EducationDialog />
                  </div>
                );
              }
              if (item.name === "Skills") {
                return (
                  <div key={item.name} className="px-3 py-2">
                    <SkillsDialog />
                  </div>
                );
              }
              if (item.name === "Contact") {
                return (
                  <div key={item.name} className="px-3 py-2">
                    <ContactDialog />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
} 