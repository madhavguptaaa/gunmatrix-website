import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const location = useLocation()
  const [displayText, setDisplayText] = useState('')
  const fullText = 'GUNMATRIX'

  useEffect(() => {
    const fullText = 'GUNMATRIX'
    let currentIndex = 0
    let isTyping = true

    const typeText = () => {
      const typingInterval = setInterval(() => {
        if (isTyping) {
          // Typing phase
          if (currentIndex <= fullText.length) {
            setDisplayText(fullText.slice(0, currentIndex))
            currentIndex++
          } else {
            // Wait 2 seconds before erasing
            setTimeout(() => {
              isTyping = false
            }, 2000)
          }
        } else {
          // Erasing phase
          if (currentIndex > 0) {
            currentIndex--
            setDisplayText(fullText.slice(0, currentIndex))
          } else {
            // Reset and start typing again
            isTyping = true
          }
        }
      }, isTyping ? 150 : 100) // Faster erasing

      return typingInterval
    }

    const interval = typeText()
    return () => clearInterval(interval)
  }, [])

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <img src="/logo-white.png" alt="GunMatrix Logo" className="navbar-logo" />
          <span className="navbar-brand-text">{displayText}</span>
          <span className="typing-cursor">|</span>
        </Link>
        <div className="navbar-links">
          <Link
            to="/"
            className={location.pathname === '/' ? 'active' : ''}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={location.pathname === '/about' ? 'active' : ''}
          >
            About
          </Link>
          <Link
            to="/gallery"
            className={location.pathname === '/gallery' ? 'active' : ''}
          >
            Gallery
          </Link>
          <Link
            to="/corporate"
            className={location.pathname === '/corporate' ? 'active' : ''}
          >
            Corporate Inquiries
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar


