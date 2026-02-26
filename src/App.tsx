import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './contexts'
import { ErrorBoundary, Navbar, Footer, LanguageWrapper } from './components/common'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Uses from './pages/Uses'
import ProjectDetail from './pages/ProjectDetail'

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors flex flex-col">
            <Navbar />
            <main className="flex-1">
              <Routes>
                {/* Redirect root to /en or /th */}
                <Route path="/" element={<Navigate to="/en" replace />} />

                {/* Localized routes */}
                <Route path="/:lang" element={<LanguageWrapper />}>
                  <Route index element={<Home />} />
                  <Route path="projects" element={<Projects />} />
                  <Route path="projects/:projectId" element={<ProjectDetail />} />
                  <Route path="uses" element={<Uses />} />
                </Route>

                {/* Fallback for unknown routes */}
                <Route path="*" element={<Navigate to="/en" replace />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  )
}


export default App