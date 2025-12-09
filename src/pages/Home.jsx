import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/gunmatrix intro video.MP4" type="video/mp4" />
        </video>
        <div className="hero-content">
          <h1 className="hero-title">GunMatrix</h1>
          <p className="hero-subtitle">Professional Shooting Academy</p>
          <p className="hero-description">
            Nurturing skill, discipline, and confidence through the sport of shooting
          </p>
          <p className="hero-tagline">
            Where precision meets excellence • Elite training for champions • Building mental strength and technical mastery
          </p>
        </div>
      </section>

      <section className="overview">
        <div className="container">
          <div className="overview-content">
            <h2 className="section-title">About GunMatrix</h2>
            <div className="overview-text">
              <p>
                GunMatrix is a professionally managed shooting academy dedicated to nurturing
                skill, discipline, and confidence through the sport of shooting. The academy
                offers structured training programs for beginners, recreational shooters, and
                state- and national-level athletes, with a strong emphasis on safety, technical
                precision, mental strength, and ethical sportsmanship. GunMatrix also collaborates
                with schools to introduce shooting as a constructive sport that enhances focus,
                self-control, and overall personality development.
              </p>
              <p>
                What truly sets GunMatrix apart is its belief that shooting is not only a
                competitive sport but also a valuable recreational activity. Alongside elite-level
                coaching, the academy actively promotes shooting for recreation and mental
                well-being. It welcomes students, working professionals, and enthusiasts who wish
                to experience shooting as a means to reduce stress, improve concentration, and
                build emotional balance—without the pressure of competition. This inclusive
                approach allows individuals to engage with the sport at their own pace while
                enjoying its psychological and lifestyle benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Our Approach</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                </svg>
              </div>
              <h3>Competitive Excellence</h3>
              <p>Structured training for state and national-level athletes with elite coaching</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Recreational Wellness</h3>
              <p>Shooting as a means to reduce stress and improve mental well-being</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M3 8H21" stroke="currentColor" strokeWidth="2" />
                  <circle cx="8" cy="14" r="1.5" fill="currentColor" />
                  <circle cx="12" cy="14" r="1.5" fill="currentColor" />
                  <circle cx="16" cy="14" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <h3>Educational Programs</h3>
              <p>Collaboration with schools to introduce shooting as a constructive sport</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L3 7L12 12L21 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M3 17L12 22L21 17" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M3 12L12 17L21 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Safety First</h3>
              <p>Strong emphasis on safety, technical precision, and ethical sportsmanship</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

