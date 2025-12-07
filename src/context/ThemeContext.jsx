import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first, then system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) {
        return savedTheme
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return 'dark' // Default to dark
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    // Update document class (website theme)
    document.documentElement.setAttribute('data-theme', theme)
    
    // Favicon is handled separately based on browser theme, not website theme
    localStorage.setItem('theme', theme)
  }, [theme])
  
  // Initialize favicon based on browser theme (separate from website theme)
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const updateFavicon = () => {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const favicon = document.getElementById('favicon')
      if (favicon) {
        favicon.href = isDark ? '/logo-white.png' : '/logo.png'
      }
      
      // Also update apple-touch-icon
      const appleIcon = document.querySelector('link[rel="apple-touch-icon"]')
      if (appleIcon) {
        appleIcon.href = isDark ? '/logo-white.png' : '/logo.png'
      }
    }
    
    // Update on mount
    updateFavicon()
    
    // Listen for browser theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', updateFavicon)
    
    return () => {
      mediaQuery.removeEventListener('change', updateFavicon)
    }
  }, [])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
