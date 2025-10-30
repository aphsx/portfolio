import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, LanguageProvider } from './contexts'
import { ErrorBoundary, Navbar, Footer } from './components/common'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Uses from './pages/Uses'
import ProjectDetail from './pages/ProjectDetail'

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <LanguageProvider>
          <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors flex flex-col">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:projectId" element={<ProjectDetail />} />
                <Route path="/uses" element={<Uses />} />
              </Routes>
            </main>
            <Footer />
          </div>
          </Router>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App