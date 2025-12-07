import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const location = useLocation()
  const [typingState, setTypingState] = useState('typing')

  useEffect(() => {
    let completeTimer
    let restartTimer
    
    const startTyping = () => {
      setTypingState('typing')
      // Complete typing animation after it finishes
      completeTimer = setTimeout(() => {
        setTypingState('typing-complete')
      }, 1200)
      
      // Restart typing after 5 seconds
      restartTimer = setTimeout(() => {
        startTyping()
      }, 5000)
    }
    
    startTyping()
    
    return () => {
      if (completeTimer) clearTimeout(completeTimer)
      if (restartTimer) clearTimeout(restartTimer)
    }
  }, [])

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/">
            <img src="/logo.png" alt="GunMatrix Logo" className="navbar-logo" />
            <span className={`navbar-brand-text ${typingState}`}>GunMatrix</span>
          </Link>
        </div>
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

