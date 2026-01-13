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
import { DigitalPaintingPage } from './pages/DigitalPaintingPage'
import { FilmAnimationPage } from './pages/FilmAnimationPage'
import { GraphicsPage } from './pages/GraphicsPage'
import { PhotographyPage } from './pages/PhotographyPage'
import { PaintGraphitePage } from './pages/PaintGraphitePage'
import { CeramicsPage } from './pages/CeramicsPage'
import { CoRAPage } from './pages/CoRAPage'
import { ShelflifePage } from './pages/ShelflifePage'
import { ClothingLibraryPage } from './pages/ClothingLibraryPage'
import { ARGalleryPage } from './pages/ARGalleryPage'
import { HoosHousingPage } from './pages/HoosHousingPage'
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
              <Route path="work/cora" element={<CoRAPage />} />
              <Route path="work/shelflife" element={<ShelflifePage />} />
              <Route path="work/clothing-library" element={<ClothingLibraryPage />} />
              <Route path="work/ar-gallery" element={<ARGalleryPage />} />
              <Route path="work/hoos-housing" element={<HoosHousingPage />} />
              <Route path="art" element={<ArtPage />} />
              <Route path="art/digital-painting" element={<DigitalPaintingPage />} />
              <Route path="art/film-animation" element={<FilmAnimationPage />} />
              <Route path="art/graphics" element={<GraphicsPage />} />
              <Route path="art/photography" element={<PhotographyPage />} />
              <Route path="art/paint-graphite" element={<PaintGraphitePage />} />
              <Route path="art/ceramics" element={<CeramicsPage />} />
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
