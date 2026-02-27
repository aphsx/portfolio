import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './contexts'
import { ErrorBoundary, LanguageWrapper } from './components/common'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Uses from './pages/Uses'
import ProjectDetail from './pages/ProjectDetail'

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <MainLayout>
            <Routes>
              {/* Redirect root to /th */}
              <Route path="/" element={<Navigate to="/th" replace />} />

              {/* Localized routes */}
              <Route path="/:lang" element={<LanguageWrapper />}>
                <Route index element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route path="projects/:projectId" element={<ProjectDetail />} />
                <Route path="uses" element={<Uses />} />
              </Route>

              {/* Fallback for unknown routes */}
              <Route path="*" element={<Navigate to="/th" replace />} />
            </Routes>
          </MainLayout>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App