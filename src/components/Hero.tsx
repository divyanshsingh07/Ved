import { motion } from "framer-motion";
import { Card } from "../components/ui/card";
import { AspectRatio } from "../components/ui/aspect-ratio";
import { Linkedin, Instagram, Facebook } from "lucide-react";
import { XIcon } from "./icons/XIcon";
import vedImage from "../assets/ved.png";
import { ThemeToggle } from "./theme-toggle";
import Footer from "./Footer";
import { ContactDialog } from "./ContactDialog";
import { ResumeDialog } from "./ResumeDialog";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/ved-prakash-tiwari",
    color: "hover:text-blue-600 dark:hover:text-blue-400"
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/vedprakashtiwari442",
    color: "hover:text-pink-600 dark:hover:text-pink-400"
  },
  {
    name: "X",
    icon: XIcon,
    href: "https://x.com/vedprak28774071",
    color: "hover:text-gray-900 dark:hover:text-gray-100"
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com/your-profile",
    color: "hover:text-blue-700 dark:hover:text-blue-500"
  }
];

export function Hero() {
  return (
    <section className="w-full h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 px-4 sm:px-6 lg:px-8 pt-24 transition-colors duration-300">
      <ThemeToggle />
      <div className="max-w-7xl mx-auto h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left"
          >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mt-12 sm:mt-0">
  Ved Prakash Tiwari
</h1>
            <p className="text-xl text-muted-foreground dark:text-gray-300">
              From Geography to Journalism — A Journey of Finding My Voice
            </p>
            <p className="text-lg text-muted-foreground dark:text-gray-400">
              An aspiring media professional with a unique perspective shaped by my background in Geography and current studies at IIMC Delhi. I blend analytical thinking with creative storytelling to bring fresh insights to journalism.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <ResumeDialog />
              <div className="w-full sm:w-auto">
                <ContactDialog />
              </div>
            </div>
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-4 pt-4 justify-center lg:justify-start"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-600 dark:text-gray-400 transition-colors duration-300 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-first lg:order-last flex justify-center h-full"
          >
            <Card className="overflow-hidden w-full h-full max-h-[80vh] dark:bg-gray-800">
              <AspectRatio ratio={3/4} className="h-full">
                <img
                  src={vedImage}
                  alt="Ved Prakash Tiwari"
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </Card>
          </motion.div>

          {/* Footer for small screens only */}
          <div className="block lg:hidden col-span-full w-full">
            <Footer />
          </div>
        </div>
        {/* Footer for large screens only */}
        <div className="hidden lg:block w-full mt-8">
          <Footer />
        </div>
      </div>
    </section>
  );
} 