import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { LoadingScreen } from './components/LoadingScreen'
import { ScrollToTop } from './components/ScrollToTop'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ArtPage } from './pages/ArtPage'
import { ContactPage } from './pages/ContactPage'
import { NotFoundPage } from './pages/NotFoundPage'
import "./index.css"

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  console.log("App rendered, isLoaded:", isLoaded);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => {
        console.log("LoadingScreen completed");
        setIsLoaded(true);
      }} />}
      
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="work" element={<ProjectsPage />} />
              <Route path="art" element={<ArtPage />} />
              <Route path="contact" element={<ContactPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
