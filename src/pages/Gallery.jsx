import { useState, useEffect } from 'react'
import './Gallery.css'

const Gallery = () => {
  const [images, setImages] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Function to load images and videos from public/gallery folder
    const loadImages = async () => {
      setIsLoading(true)
      try {
        // All images and videos from the gallery folder
        const mediaFiles = [
          { file: 'IMG_2856.jpeg', title: 'State-of-the-art Facility', size: 'large', type: 'image' },
          { file: '0ce2ee4b-b3d8-4e75-9d26-219f39b0b217.MP4', title: 'Training Video', size: 'large', type: 'video' },
          { file: 'IMG_2857.jpeg', title: 'Precision Training', size: 'small', type: 'image' },
          { file: 'IMG_2858.jpeg', title: 'Academy Event', size: 'medium', type: 'image' },
          { file: 'IMG_2859.jpeg', title: 'Student Practice', size: 'large', type: 'image' },
          { file: '201eec45-210e-4b79-a7e8-2e8caeaab9a5.MP4', title: 'Competition Highlights', size: 'medium', type: 'video' },
          { file: 'IMG_2860.jpeg', title: 'Training Equipment', size: 'small', type: 'image' },
          { file: 'IMG_2861.jpeg', title: 'Group Training', size: 'medium', type: 'image' },
          { file: 'IMG_2862.jpeg', title: 'Shooting Range', size: 'large', type: 'image' },
          { file: 'IMG_2903.jpeg', title: 'Advanced Training', size: 'small', type: 'image' },
          { file: '2f42d820-e8e8-4a28-9422-ef4c3ead5bca.MP4', title: 'Academy Tour', size: 'large', type: 'video' },
          { file: 'IMG_3131.jpeg', title: 'Competition Prep', size: 'medium', type: 'image' },
          { file: 'IMG_3152.jpeg', title: 'Technical Session', size: 'large', type: 'image' },
          { file: 'IMG_3303.jpeg', title: 'Academy Gathering', size: 'small', type: 'image' },
          { file: 'IMG_6099.JPG', title: 'Competition Day', size: 'medium', type: 'image' },
          { file: '9e76537e-cb4e-49a7-b79e-6dbfe6f33359.MP4', title: 'Training Session', size: 'medium', type: 'video' },
          { file: 'IMG_7817.jpg', title: 'Academy Grounds', size: 'large', type: 'image' },
          { file: 'IMG_8172.jpeg', title: 'Student Achievement', size: 'small', type: 'image' },
          { file: 'IMG_8216.jpeg', title: 'Elite Coaching', size: 'medium', type: 'image' },
          { file: 'IMG_8217.jpeg', title: 'Professional Guidance', size: 'large', type: 'image' },
          { file: '313c1633-96c9-4451-9206-3b50e033e9b2.JPG', title: 'Range View', size: 'small', type: 'image' },
          { file: '427ee849-4650-4fc8-b5c6-e0e52d2e7ddc.JPG', title: 'Success Story', size: 'medium', type: 'image' },
          { file: '9d9694b1-dbca-4736-8110-cbb383a6f0e0.JPG', title: 'Team Event', size: 'large', type: 'image' }
        ]

        const imageData = mediaFiles.map((item, index) => ({
          id: index + 1,
          src: `/gallery/${item.file}`,
          alt: `GunMatrix Academy - ${item.title}`,
          title: item.title,
          size: item.size,
          type: item.type
        }))

        setImages(imageData)
        setIsLoading(false)
      } catch (error) {
        console.error('Error loading media:', error)
        setIsLoading(false)
      }
    }

    loadImages()
  }, [])

  const openLightbox = (image) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  const navigateImage = (direction) => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id)
    let newIndex

    if (direction === 'next') {
      newIndex = (currentIndex + 1) % images.length
    } else {
      newIndex = (currentIndex - 1 + images.length) % images.length
    }

    setSelectedImage(images[newIndex])
  }

  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/gallery/9e76537e-cb4e-49a7-b79e-6dbfe6f33359.MP4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">Visual Journey</div>
          <h1 className="page-title">Our Gallery</h1>
          <p className="page-subtitle">Capturing Excellence, Discipline, and Achievement at GunMatrix Academy</p>
        </div>
      </section>

      <section className="gallery-content">
        <div className="container">
          {isLoading ? (
            <div className="loading-state">
              <div className="loader"></div>
              <p>Loading gallery...</p>
            </div>
          ) : images.length === 0 ? (
            <div className="no-images">
              <div className="no-images-icon">📸</div>
              <h3>No Images Found</h3>
              <p>Please check back later.</p>
            </div>
          ) : (
            <div className="gallery-grid-collage">
              {images.map((image, index) => (
                <div
                  key={image.id}
                  className={`gallery-item gallery-item-${image.size}`}
                  onClick={() => openLightbox(image)}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {image.type === 'video' ? (
                    <video src={image.src} muted loop playsInline />
                  ) : (
                    <img src={image.src} alt={image.alt} loading="lazy" />
                  )}
                  <div className="gallery-overlay">
                    <div className="overlay-content">
                      <span className="view-icon">🔍</span>
                      <h3 className="image-title">{image.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
              <span>×</span>
            </button>
            <button
              className="lightbox-nav lightbox-prev"
              onClick={() => navigateImage('prev')}
              aria-label="Previous image"
            >
              ‹
            </button>
            <div className="lightbox-image-container">
              {selectedImage.type === 'video' ? (
                <video src={selectedImage.src} controls autoPlay loop />
              ) : (
                <img src={selectedImage.src} alt={selectedImage.alt} />
              )}
            </div>
            <button
              className="lightbox-nav lightbox-next"
              onClick={() => navigateImage('next')}
              aria-label="Next image"
            >
              ›
            </button>
            <div className="lightbox-info">
              <h3 className="lightbox-title">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
