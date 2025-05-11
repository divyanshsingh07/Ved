import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Button } from "./ui/button"
import { User, GraduationCap, Briefcase } from "lucide-react"

export function AboutDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="text-gray-700 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-zinc-100">
          <User className="w-4 h-4 mr-2" />
          About
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto bg-white dark:bg-zinc-900">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-gray-900 dark:text-zinc-100">
            About Me
          </DialogTitle>
        </DialogHeader>
        <div className="mt-6 space-y-8 text-xl text-gray-700 dark:text-zinc-300">
          {/* Introduction */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-full bg-sky-100 dark:bg-sky-900">
                <User className="w-6 h-6 text-sky-600 dark:text-sky-400" />
              </div>
              <h3 className="text-2xl font-semibold text-sky-600 dark:text-sky-400">Introduction</h3>
            </div>
            <p className="leading-relaxed">
              I am Ved Prakash Tiwari, an aspiring media professional with a diverse academic background. 
              I completed my BA in Geography from Allahabad University and pursued an MA in the same field. 
              However, realizing my true passion for communication, I decided to take a break from my MA to 
              follow my interests. Currently, I'm pursuing a Diploma in Mass Communication at IIMC Delhi.
            </p>
          </div>

          {/* Leadership Experience */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-full bg-sky-100 dark:bg-sky-900">
                <Briefcase className="w-6 h-6 text-sky-600 dark:text-sky-400" />
              </div>
              <h3 className="text-2xl font-semibold text-sky-600 dark:text-sky-400">Leadership Experience</h3>
            </div>
            <p className="leading-relaxed">
              In addition to my studies, I have been actively involved in student leadership, serving as the 
              Mahamantri (General Secretary) of the Samajwadi Party in the Allahabad University Chatra Sangha. 
              This role has helped me develop strong leadership, communication, and organizational skills, which 
              I aim to apply in the media industry. I am committed to shaping stories that resonate and make a 
              difference.
            </p>
          </div>

          {/* Current Focus */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-full bg-sky-100 dark:bg-sky-900">
                <GraduationCap className="w-6 h-6 text-sky-600 dark:text-sky-400" />
              </div>
              <h3 className="text-2xl font-semibold text-sky-600 dark:text-sky-400">Current Focus</h3>
            </div>
            <p className="leading-relaxed">
              Currently pursuing my passion in Mass Communication at IIMC Delhi, I am dedicated to developing 
              my skills in media production, journalism, and communication. My goal is to become a professional 
              who can effectively communicate stories that matter and make a positive impact in the media industry.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 