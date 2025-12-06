import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Enhanced smooth scroll implementation
if (typeof window !== 'undefined') {
  // Smooth scroll function for browsers that don't support scroll-behavior
  const smoothScrollTo = (element, target, duration) => {
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

    const smooth_step = (start, end, point) => {
      if (point <= 0) return start
      if (point >= 1) return end
      return start + (end - start) * (point * point * (3 - 2 * point))
    }

    return new Promise((resolve) => {
      const previous_top = element.scrollTop

      const scroll_frame = () => {
        if (element.scrollTop !== previous_top) {
          resolve()
          return
        }

        const now = Date.now()
        const point = Math.min(1, (now - start_time) / duration)
        const frame = Math.round(smooth_step(start_element, target, point))

        element.scrollTop = frame

        if (frame === target) {
          resolve()
          return
        }

        setTimeout(scroll_frame, 0)
      }

      scroll_frame()
    })
  }

  // Apply smooth scroll to window
  const originalScrollTo = window.scrollTo
  if (!('scrollBehavior' in document.documentElement.style)) {
    window.scrollTo = function(options) {
      if (typeof options === 'object' && options.behavior === 'smooth') {
        smoothScrollTo(document.documentElement, options.top || window.pageYOffset, 500)
      } else {
        originalScrollTo.apply(window, arguments)
      }
    }
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

