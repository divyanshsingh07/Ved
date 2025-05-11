import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Button } from "./ui/button"
import { Mail, Phone, Linkedin } from "lucide-react"

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
              <Mail className="w-6 h-6 text-sky-600 dark:text-sky-400" />
            </div>
            <div className="space-y-1">
            <div className="flex items-center gap-3">
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 13.065L0 6v12h24V6l-12 7.065zm12-9.045V6L12 13.065 0 6V4.02l12 7.065 12-7.065z" />
  </svg>
  <div>
    <h3 className="text-2xl font-semibold text-sky-600 dark:text-sky-400">Email</h3>
    <a 
      href="mailto:ved8795@gmail.com" 
      className="text-gray-700 hover:text-sky-600 dark:text-zinc-300 dark:hover:text-sky-400 transition-colors"
    >
      ved8795@gmail.com
    </a>
  </div>
</div>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-sky-100 dark:bg-sky-900">
              <Phone className="w-6 h-6 text-sky-600 dark:text-sky-400" />
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-semibold text-sky-600 dark:text-sky-400">Phone</h3>
              <a href="https://wa.me/918795507492" target="_blank" rel="noopener noreferrer">
  <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.52 3.48A11.87 11.87 0 0012 0C5.38 0 0 5.38 0 12c0 2.11.55 4.15 1.6 5.97L0 24l6.22-1.6A11.93 11.93 0 0012 24c6.62 0 12-5.38 12-12 0-3.2-1.25-6.22-3.48-8.52zM12 22a9.9 9.9 0 01-5.1-1.43l-.36-.22-3.68.94.98-3.58-.24-.37A9.96 9.96 0 012 12c0-5.53 4.47-10 10-10 2.65 0 5.17 1.03 7.07 2.93A9.94 9.94 0 0122 12c0 5.53-4.47 10-10 10zm5.09-7.58c-.28-.14-1.66-.82-1.92-.91-.26-.1-.44-.14-.63.14-.18.27-.28-.14-1.17-.43-2.23-1.38-.82-.73-1.38-1.64-1.54-1.91-.16-.28-.02-.43.12-.57.13-.13.3-.33.45-.49.15-.17.2-.29.3-.48.1-.18.05-.36-.02-.5-.07-.14-.63-1.52-.87-2.08-.23-.56-.47-.48-.65-.49-.17-.01-.36-.01-.56-.01s-.51.07-.78.36c-.27.28-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.19 2.11 3.21 5.12 4.51.71.3 1.26.48 1.69.61.71.23 1.36.2 1.87.12.57-.09 1.66-.68 1.9-1.33.23-.64.23-1.19.16-1.33-.07-.13-.25-.21-.53-.35z"/>
    </svg>
    Message on WhatsApp
  </button>
</a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-sky-100 dark:bg-sky-900">
              <Linkedin className="w-6 h-6 text-sky-600 dark:text-sky-400" />
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