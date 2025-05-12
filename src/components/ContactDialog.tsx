import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Button } from "./ui/button"
import { Mail} from "lucide-react"

export function ContactDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="text-gray-700 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-zinc-100">
          <Mail className="w-4 h-4 mr-2" />
          Contact
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto bg-white dark:bg-zinc-900">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-gray-900 dark:text-zinc-100">
            Contact Me
          </DialogTitle>
        </DialogHeader>
        <div className="mt-6 space-y-8 text-xl text-gray-700 dark:text-zinc-300">
          {/* Email */}
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-sky-100 dark:bg-sky-900">
              <svg className="w-6 h-6 text-sky-600 dark:text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-semibold text-sky-600 dark:text-sky-400">Email</h3>
              <a 
                href="mailto:ved8795@gmail.com" 
                className="text-gray-700 hover:text-sky-600 dark:text-zinc-300 dark:hover:text-sky-400 transition-colors"
              >
                vt8795507492@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-sky-100 dark:bg-sky-900">
              <svg className="w-6 h-6 text-sky-600 dark:text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM19 12h2c0-4.9-4-8.9-9-8.9v2c3.9 0 7 3.1 7 6.9zm-4 0h2c0-2.8-2.2-5-5-5v2c1.7 0 3 1.3 3 3z"/>
              </svg>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-semibold text-sky-600 dark:text-sky-400">Phone</h3>
              <div className="flex items-center gap-4">
                <a 
                  href="tel:+918795507492" 
                  className="text-gray-700 hover:text-sky-600 dark:text-zinc-300 dark:hover:text-sky-400 transition-colors flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/>
                  </svg>
                  +91 8795507492
                </a>
                <a 
                  href="https://wa.me/918795507492" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-sky-600 dark:text-zinc-300 dark:hover:text-sky-400 transition-colors flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.52 3.48A11.87 11.87 0 0012 0C5.38 0 0 5.38 0 12c0 2.11.55 4.15 1.6 5.97L0 24l6.22-1.6A11.93 11.93 0 0012 24c6.62 0 12-5.38 12-12 0-3.2-1.25-6.22-3.48-8.52zM12 22a9.9 9.9 0 01-5.1-1.43l-.36-.22-3.68.94.98-3.58-.24-.37A9.96 9.96 0 012 12c0-5.53 4.47-10 10-10 2.65 0 5.17 1.03 7.07 2.93A9.94 9.94 0 0122 12c0 5.53-4.47 10-10 10zm5.09-7.58c-.28-.14-1.66-.82-1.92-.91-.26-.1-.44-.14-.63.14-.18.27-.28-.14-1.17-.43-2.23-1.38-.82-.73-1.38-1.64-1.54-1.91-.16-.28-.02-.43.12-.57.13-.13.3-.33.45-.49.15-.17.2-.29.3-.48.1-.18.05-.36-.02-.5-.07-.14-.63-1.52-.87-2.08-.23-.56-.47-.48-.65-.49-.17-.01-.36-.01-.56-.01s-.51.07-.78.36c-.27.28-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.19 2.11 3.21 5.12 4.51.71.3 1.26.48 1.69.61.71.23 1.36.2 1.87.12.57-.09 1.66-.68 1.9-1.33.23-.64.23-1.19.16-1.33-.07-.13-.25-.21-.53-.35z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-sky-100 dark:bg-sky-900">
              <svg className="w-6 h-6 text-sky-600 dark:text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-semibold text-sky-600 dark:text-sky-400">LinkedIn</h3>
              <a 
                href="https://linkedin.com/in/ved-prakash-tiwari" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-sky-600 dark:text-zinc-300 dark:hover:text-sky-400 transition-colors"
              >
                Ved Prakash Tiwari
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 