import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { ThemeProvider } from "./components/theme-provider"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Portfolio from "./pages/Portfolio"

const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <section id="home">
              <Hero />
            </section>
          } />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App