import { Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
        {/* Basic Details */}
        <div className="flex flex-col items-center sm:items-start gap-1 text-gray-700 dark:text-zinc-300 text-sm">
          <span>Email: <a href="mailto:vedtiwari123@gmail.com" className="hover:text-sky-600 dark:hover:text-sky-400">vedtiwari123@gmail.com</a></span>
          <span>Phone: <a href="tel:+918795507492" className="hover:text-sky-600 dark:hover:text-sky-400">+91-8795507492</a></span>
          <span>Location: New Delhi, India</span>
        </div>
        {/* Social Media Links */}
        <div className="flex gap-4 items-center">
  <a
    href="https://www.linkedin.com/in/ved-parkash-tiwari-b80548342/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="text-gray-500 hover:text-sky-600 dark:text-zinc-400 dark:hover:text-sky-400"
  >
    <Linkedin className="w-6 h-6" />
  </a>
  <a
    href="https://www.instagram.com/vedprakashtiwari442"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="text-gray-500 hover:text-pink-600 dark:text-zinc-400 dark:hover:text-pink-400"
  >
    <Instagram className="w-6 h-6" />
  </a>
</div>
        {/* Personal Line and Copyright */}
        <div className="flex flex-col items-center sm:items-end gap-1 text-gray-500 dark:text-zinc-400 text-xs">
          <span>Developed with <span className="text-red-500">❤️</span> by <a href="https://www.instagram.com/arshthakur07/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-600 dark:hover:text-sky-400">Divyansh</a></span>
          <span>© 2025 Ved Prakash Tiwari. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
} 