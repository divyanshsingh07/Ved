import { Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"
import { useTheme } from "./theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fixed bottom-6 right-6 z-50 text-gray-700 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full shadow-lg backdrop-blur-sm bg-white/80 dark:bg-zinc-900/80 border border-gray-200 dark:border-zinc-700"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
} 