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
            <span>📧 vedtiwari123@gmail.com</span>
            <span>🔗 LinkedIn: <a href="https://linkedin.com/in/ved-prakash-tiwari" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-400 hover:underline">Ved Prakash Tiwari</a></span>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-zinc-100">Summary</h2>
            <p className="text-lg">
              From Geography to Journalism — A Journey of Finding My Voice
            </p>
            <p className="text-lg">
              An aspiring media professional with a unique perspective shaped by my background in Geography and current studies at IIMC Delhi. I blend analytical thinking with creative storytelling to bring fresh insights to journalism.
            </p>
          </div>

          {/* About Me */}
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-zinc-100">About Me</h2>
            <p className="text-lg">
              I am Ved Prakash Tiwari, an aspiring media professional with a diverse academic background. I completed my BA in Geography from Allahabad University and pursued an MA in the same field. However, realizing my true passion for communication, I decided to take a break from my MA to follow my interests. Currently, I'm pursuing a Diploma in Mass Communication at IIMC Delhi.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-zinc-100">Education</h2>
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
                    <td className="py-2 px-4">2025 (Exp.)</td>
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
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-zinc-100">Leadership Experience</h2>
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
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-zinc-100">Skills</h2>
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
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-zinc-100">Current Focus</h2>
            <p className="text-lg">
              Currently pursuing my passion in Mass Communication at IIMC Delhi, I am dedicated to developing my skills in journalism, media production, and storytelling. I aspire to be a media professional who communicates stories that resonate and make a meaningful impact.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 