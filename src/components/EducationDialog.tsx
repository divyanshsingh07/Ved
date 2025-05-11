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
            <h3 className="text-2xl font-semibold text-sky-600 dark:text-sky-400">10th Grade</h3>
            <p className="font-medium">Impulse International School, Nawabganj</p>
            <div className="space-y-1 text-lg">
              <p>Year: 2019</p>
              <p>Marks: 68%</p>
            </div>
          </div>

          {/* 12th Grade */}
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-sky-600 dark:text-sky-400">12th Grade</h3>
            <p className="font-medium">Shyam Sundar Saraswati Vidyalaya Inter College, Ayodhya</p>
            <div className="space-y-1 text-lg">
              <p>Year: 2021</p>
              <p>Marks: 65%</p>
            </div>
          </div>

          {/* B.A. */}
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-sky-600 dark:text-sky-400">Bachelor of Arts (B.A.) in Geography</h3>
            <p className="font-medium">Iswar Saran Degree College, University of Allahabad</p>
            <div className="space-y-1 text-lg">
              <p>Year of Completion: 2023</p>
              <p>Marks: 70%</p>
            </div>
          </div>

          {/* M.A. */}
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-sky-600 dark:text-sky-400">Master of Arts (M.A.) in Geography</h3>
            <p className="font-medium">University of Allahabad</p>
            <div className="space-y-1 text-lg">
              <p>Year: 2024 (Left to pursue a career in Mass Communication)</p>
              <p className="text-amber-600 dark:text-amber-400">Dropout</p>
            </div>
          </div>

          {/* Diploma */}
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-sky-600 dark:text-sky-400">Diploma in Mass Communication</h3>
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