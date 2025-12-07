import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Enhanced smooth scroll implementation
if (typeof window !== 'undefined') {
  // Enhanced smooth scroll function with easing
  const smoothScrollTo = (element, target, duration = 800) => {
    target = Math.round(target)
    duration = Math.round(duration)
    if (duration < 0) {
      return Promise.reject("bad duration")
    }
    if (duration === 0) {
      element.scrollTop = target
      return Promise.resolve()
    }

    const start_time = Date.now()
    const start_element = element.scrollTop
    const distance = target - start_element

    // Easing function for smooth acceleration/deceleration
    const easeInOutCubic = (t) => {
      return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2
    }

    return new Promise((resolve) => {
      const scroll_frame = () => {
        const now = Date.now()
        const elapsed = now - start_time
        const progress = Math.min(elapsed / duration, 1)
        const eased = easeInOutCubic(progress)
        const frame = Math.round(start_element + distance * eased)

        element.scrollTop = frame

        if (progress < 1) {
          requestAnimationFrame(scroll_frame)
        } else {
          resolve()
        }
      }

      requestAnimationFrame(scroll_frame)
    })
  }

  // Enhanced window scrollTo with smooth behavior
  const originalScrollTo = window.scrollTo
  window.scrollTo = function(options) {
    if (typeof options === 'object' && options.behavior === 'smooth') {
      const target = options.top !== undefined ? options.top : window.pageYOffset
      smoothScrollTo(document.documentElement, target, 800)
    } else {
      originalScrollTo.apply(window, arguments)
    }
  }

  // Smooth scroll for anchor links
  document.addEventListener('DOMContentLoaded', () => {
    const handleAnchorClick = (e) => {
      const link = e.target.closest('a[href^="#"]')
      if (!link) return

      const href = link.getAttribute('href')
      if (href === '#' || href === '') return

      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)
      
      if (targetElement) {
        e.preventDefault()
        const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 100
        smoothScrollTo(document.documentElement, offsetTop, 800)
      }
    }

    document.addEventListener('click', handleAnchorClick)
  })
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

