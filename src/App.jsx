import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AwardModal from './components/AwardModal'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Corporate from './pages/Corporate'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AwardModal />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/corporate" element={<Corporate />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

