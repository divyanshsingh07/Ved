import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Button } from "./ui/button"

export function ResumeDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="w-full sm:w-auto">
         Explore My Resume
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-900">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-gray-900 dark:text-zinc-100">
            Ved Prakash Tiwari
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-6 space-y-8 text-gray-700 dark:text-zinc-300">
          {/* Contact Info */}
          <div className="flex flex-wrap gap-4 text-lg">
            <span>📍 New Delhi, India</span>
            <span>📞 +91-8795507492</span>
            <span>📧 vt8795507492@gmail.com</span>
            <span>🔗 LinkedIn: <a href="https://linkedin.com/in/ved-prakash-tiwari" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-400 hover:underline">Ved Prakash Tiwari</a></span>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-zinc-100 flex items-center gap-2">
              <svg className="w-6 h-6 text-sky-600 dark:text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
              Summary
            </h2>
            <p className="text-lg">
              From Geography to Journalism — A Journey of Finding My Voice
            </p>
            <p className="text-lg">
              An aspiring media professional with a unique perspective shaped by my background in Geography and current studies at IIMC Delhi. I blend analytical thinking with creative storytelling to bring fresh insights to journalism.
            </p>
          </div>

          {/* About Me */}
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-zinc-100 flex items-center gap-2">
              <svg className="w-6 h-6 text-sky-600 dark:text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
              About Me
            </h2>
            <p className="text-lg">
              I am Ved Prakash Tiwari, an aspiring media professional with a diverse academic background. I completed my BA in Geography from Allahabad University and pursued an MA in the same field. However, realizing my true passion for communication, I decided to take a break from my MA to follow my interests. Currently, I'm pursuing a Diploma in Mass Communication at IIMC Delhi.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-zinc-100 flex items-center gap-2">
              <svg className="w-6 h-6 text-sky-600 dark:text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
              </svg>
              Education
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-2 px-4">Qualification</th>
                    <th className="text-left py-2 px-4">Institution</th>
                    <th className="text-left py-2 px-4">Year</th>
                    <th className="text-left py-2 px-4">Marks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 px-4">Diploma in Mass Communication</td>
                    <td className="py-2 px-4">Indian Institute of Mass Communication (IIMC), New Delhi</td>
                    <td className="py-2 px-4">2026 (Exp.)</td>
                    <td className="py-2 px-4">Ongoing</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 px-4">Master of Arts in Geography</td>
                    <td className="py-2 px-4">University of Allahabad</td>
                    <td className="py-2 px-4">2024</td>
                    <td className="py-2 px-4">Dropout</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 px-4">Bachelor of Arts in Geography</td>
                    <td className="py-2 px-4">Iswar Saran Degree College, University of Allahabad</td>
                    <td className="py-2 px-4">2023</td>
                    <td className="py-2 px-4">70%</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 px-4">12th Grade</td>
                    <td className="py-2 px-4">Shyam Sundar Saraswati Vidyalaya Inter College, Ayodhya</td>
                    <td className="py-2 px-4">2021</td>
                    <td className="py-2 px-4">65%</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 px-4">10th Grade</td>
                    <td className="py-2 px-4">Impulse International School, Nawabganj</td>
                    <td className="py-2 px-4">2019</td>
                    <td className="py-2 px-4">68%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Leadership Experience */}
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-zinc-100 flex items-center gap-2">
              <svg className="w-6 h-6 text-sky-600 dark:text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
              </svg>
              Leadership Experience
            </h2>
            <div className="space-y-2">
              <h3 className="text-xl font-medium">Mahamantri (General Secretary)</h3>
              <p className="text-lg">Samajwadi Party – Allahabad University Chatra Sangha</p>
              <ul className="list-disc list-inside space-y-1 text-lg">
                <li>Led student political activities and initiatives.</li>
                <li>Coordinated events and team operations.</li>
                <li>Developed strong leadership, communication, and organizing abilities.</li>
              </ul>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-zinc-100 flex items-center gap-2">
              <svg className="w-6 h-6 text-sky-600 dark:text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
              </svg>
              Skills
            </h2>
            <ul className="list-disc list-inside space-y-1 text-lg">
              <li>Communication Skills: Fluent in Hindi and English (written and verbal)</li>
              <li>Leadership & Coordination: Student leader with experience managing teams and organizing events</li>
              <li>MS Office Tools: Proficient in Word, Excel, PowerPoint; familiar with media-related equipment</li>
              <li>Problem Solving: Quick decision-maker with a solution-oriented approach</li>
              <li>Content Writing: Articles, reports, basic editorial experience</li>
              <li>Public Speaking: Confident speaker; experience in anchoring and student addresses</li>
            </ul>
          </div>

          {/* Current Focus */}
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-zinc-100 flex items-center gap-2">
              <svg className="w-6 h-6 text-sky-600 dark:text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
              </svg>
              Current Focus
            </h2>
            <p className="text-lg">
              Currently pursuing my passion in Mass Communication at IIMC Delhi, I am dedicated to developing my skills in journalism, media production, and storytelling. I aspire to be a media professional who communicates stories that resonate and make a meaningful impact.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 