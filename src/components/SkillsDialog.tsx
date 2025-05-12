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
        <div className="mt-6 space-y-6 text-xl text-gray-700 dark:text-zinc-300">
  <div className="space-y-4">
    <h2 className="text-3xl font-semibold text-sky-600 dark:text-sky-400">Skills</h2>
    <ul className="list-disc list-inside space-y-3 text-lg">
      <li className="flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg p-2 transition-all duration-200">
        <span className="font-semibold flex items-center text-blue-500">
          <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
          </svg>
          Communication Skills:
        </span>
        <span>Fluent in Hindi and English (written and verbal) - 4.5/5</span>
      </li>
      <li className="flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg p-2 transition-all duration-200">
        <span className="font-semibold flex items-center text-green-500">
          <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
          </svg>
          Leadership & Coordination:
        </span>
        <span>Student leader with experience managing teams and organizing events - 4/5</span>
      </li>
      <li className="flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg p-2 transition-all duration-200">
        <span className="font-semibold flex items-center text-red-500">
          <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
          </svg>
          MS Office Tools:
        </span>
        <span>Proficient in Word, Excel, PowerPoint; familiar with media-related equipment - 4/5</span>
      </li>
      <li className="flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg p-2 transition-all duration-200">
        <span className="font-semibold flex items-center text-yellow-500">
          <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
          </svg>
          Problem Solving:
        </span>
        <span>Quick decision-maker with a solution-oriented approach - 4.5/5</span>
      </li>
      <li className="flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg p-2 transition-all duration-200">
        <span className="font-semibold flex items-center text-purple-500">
          <svg className="w-5 h-5 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
          </svg>
          Content Writing:
        </span>
        <span>Articles, reports, basic editorial experience - 4/5</span>
      </li>
      <li className="flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg p-2 transition-all duration-200">
        <span className="font-semibold flex items-center text-indigo-500">
          <svg className="w-5 h-5 text-indigo-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
          Public Speaking:
        </span>
        <span>Confident speaker; experience in anchoring and student addresses - 4.5/5</span>
      </li>
    </ul>
  </div>
</div>
</div>
      </DialogContent>
    </Dialog>
  )
} 