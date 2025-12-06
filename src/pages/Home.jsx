import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <div className="animated-bg"></div>
          <div className="hero-particles"></div>
        </div>
        <div className="hero-content">
          <div className="hero-badge">Elite Training Academy</div>
          <h1 className="hero-title">
            <span className="title-main">Gun</span>
            <span className="title-accent">Matrix</span>
          </h1>
          <div className="hero-divider"></div>
          <p className="hero-subtitle">Professional Shooting Academy</p>
          <p className="hero-description">
            Where precision meets discipline, and excellence becomes a habit. 
            Nurturing champions through world-class training and unwavering dedication.
          </p>
          <div className="hero-cta">
            <a href="#programs" className="cta-button primary">Explore Programs</a>
            <a href="#about" className="cta-button secondary">Learn More</a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Trained Athletes</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">National Medals</div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
        </div>
      </section>

      <section className="video-section">
        <div className="container">
          <div className="video-wrapper glass-card">
            <h2 className="video-title">Experience Our Range</h2>
            <div className="video-container">
              <video 
                className="intro-video"
                controls
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/gunmatrix intro video.MP4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="video-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="overview" id="about">
        <div className="container">
          <div className="overview-content glass-card">
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

      <section className="features" id="programs">
        <div className="container">
          <h2 className="section-title">Our Approach</h2>
          <div className="features-grid">
            <div className="feature-card glass-card">
              <div className="feature-icon">🎯</div>
              <h3>Competitive Excellence</h3>
              <p>Structured training for state and national-level athletes with elite coaching</p>
              <div className="card-shine"></div>
            </div>
            <div className="feature-card glass-card">
              <div className="feature-icon">🧘</div>
              <h3>Recreational Wellness</h3>
              <p>Shooting as a means to reduce stress and improve mental well-being</p>
              <div className="card-shine"></div>
            </div>
            <div className="feature-card glass-card">
              <div className="feature-icon">🏫</div>
              <h3>Educational Programs</h3>
              <p>Collaboration with schools to introduce shooting as a constructive sport</p>
              <div className="card-shine"></div>
            </div>
            <div className="feature-card glass-card">
              <div className="feature-icon">🛡️</div>
              <h3>Safety First</h3>
              <p>Strong emphasis on safety, technical precision, and ethical sportsmanship</p>
              <div className="card-shine"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

