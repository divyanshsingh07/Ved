import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Button } from "./ui/button"
import { Code2 } from "lucide-react"

export function SkillsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="text-gray-700 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-zinc-100">
          <Code2 className="w-4 h-4 mr-2" />
          Skills
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto bg-white dark:bg-zinc-900">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-gray-900 dark:text-zinc-100">
            Skills
          </DialogTitle>
        </DialogHeader>
        <div className="mt-6 space-y-6 text-xl text-gray-700 dark:text-zinc-300">
          {/* Communication Skills */}
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-sky-600 dark:text-sky-400">Communication Skills</h3>
            <p className="leading-relaxed">
              Strong verbal and written communication in both Hindi and English
            </p>
          </div>

          {/* Leadership */}
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-sky-600 dark:text-sky-400">Leadership</h3>
            <p className="leading-relaxed">
              Experience as Mahamantri in student politics; team management and event coordination
            </p>
          </div>

          {/* MS Office Tools */}
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-sky-600 dark:text-sky-400">MS Office Tools</h3>
            <p className="leading-relaxed">
              Proficient in Microsoft Word, Excel, PowerPoint, and related equipment handling
            </p>
          </div>

          {/* Problem Solving */}
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-sky-600 dark:text-sky-400">Problem Solving</h3>
            <p className="leading-relaxed">
              Quick decision-making and solution-oriented mindset in high-pressure situations
            </p>
          </div>

          {/* Content Writing */}
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-sky-600 dark:text-sky-400">Content Writing</h3>
            <p className="leading-relaxed">
              Basic experience in writing articles, reports, and presentations
            </p>
          </div>

          {/* Public Speaking */}
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-sky-600 dark:text-sky-400">Public Speaking</h3>
            <p className="leading-relaxed">
              Confident speaker with experience in anchoring and addressing student gatherings
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 