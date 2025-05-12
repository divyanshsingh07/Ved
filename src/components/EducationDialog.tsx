import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Button } from "./ui/button"
import { GraduationCap } from "lucide-react"

export function EducationDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="text-gray-700 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-zinc-100">
          <GraduationCap className="w-4 h-4 mr-2" />
          Education
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto bg-white dark:bg-zinc-900">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-gray-900 dark:text-zinc-100">
            Education
          </DialogTitle>
        </DialogHeader>
        <div className="mt-6 space-y-8 text-xl text-gray-700 dark:text-zinc-300">
          {/* 10th Grade */}
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-sky-600 dark:text-sky-400 flex items-center">
              <svg className="w-6 h-6 mr-2 text-sky-600 dark:text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              10th Grade
            </h3>
            <p className="font-medium">Impulse International School, Nawabganj</p>
            <div className="space-y-1 text-lg">
              <p>Year: 2019</p>
              <p>Marks: 68%</p>
            </div>
          </div>

          {/* 12th Grade */}
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-sky-600 dark:text-sky-400 flex items-center">
              <svg className="w-6 h-6 mr-2 text-sky-600 dark:text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              12th Grade
            </h3>
            <p className="font-medium">Shyam Sundar Saraswati Vidyalaya Inter College, Ayodhya</p>
            <div className="space-y-1 text-lg">
              <p>Year: 2021</p>
              <p>Marks: 65%</p>
            </div>
          </div>

          {/* B.A. */}
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-sky-600 dark:text-sky-400 flex items-center">
              <svg className="w-6 h-6 mr-2 text-sky-600 dark:text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              Bachelor of Arts (B.A.) in Geography
            </h3>
            <p className="font-medium">Iswar Saran Degree College, University of Allahabad</p>
            <div className="space-y-1 text-lg">
              <p>Year of Completion: 2023</p>
              <p>Marks: 70%</p>
            </div>
          </div>

          {/* M.A. */}
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-sky-600 dark:text-sky-400 flex items-center">
              <svg className="w-6 h-6 mr-2 text-sky-600 dark:text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              Master of Arts (M.A.) in Geography
            </h3>
            <p className="font-medium">University of Allahabad</p>
            <div className="space-y-1 text-lg">
              <p>Year: 2024 (Left to pursue a career in Mass Communication)</p>
              <p className="text-amber-600 dark:text-amber-400">Dropout</p>
            </div>
          </div>

          {/* Diploma */}
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-sky-600 dark:text-sky-400 flex items-center">
              <svg className="w-6 h-6 mr-2 text-sky-600 dark:text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              Diploma in Mass Communication
            </h3>
            <p className="font-medium">Indian Institute of Mass Communication (IIMC), New Delhi</p>
            <div className="space-y-1 text-lg">
              <p>Year: 2025 (Expected)</p>
              <p className="text-emerald-600 dark:text-emerald-400">Ongoing</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 