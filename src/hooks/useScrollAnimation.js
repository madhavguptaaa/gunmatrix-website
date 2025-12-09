import { useEffect, useRef } from 'react'

export const useScrollAnimation = (options = {}) => {
  const elementRef = useRef(null)
  const optionsRef = useRef(options)

  useEffect(() => {
    optionsRef.current = options
  }, [options])

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observerOptions = {
      threshold: optionsRef.current.threshold || 0.1,
      rootMargin: optionsRef.current.rootMargin || '0px 0px -100px 0px',
      ...optionsRef.current
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
          if (optionsRef.current.once !== false) {
            observer.unobserve(entry.target)
          }
        }
      })
    }, observerOptions)

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return elementRef
}

