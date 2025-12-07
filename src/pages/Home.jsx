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
          <div className="award-highlight-full">
            <span className="award-text">
              Awarded as <strong>Best Young Entrepreneur</strong> by <strong className="cm-highlight">CM Delhi Rekha Gupta</strong> for contribution of GunMatrix in sports
            </span>
          </div>
          <div className="hero-main">
            <div className="hero-video-section">
              <div className="hero-video-wrapper">
                <video 
                  className="hero-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/gunmatrix intro video.MP4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="hero-text-section">
              <h1 className="hero-subtitle">More Than a Shooting Range</h1>
              <p className="hero-description">
                GunMatrix is a transformative space where <strong>focus</strong>, <strong>confidence</strong>, <strong>discipline</strong>, and <strong>inner calm</strong> are built through the art and science of shooting. We blend <strong>professional sports training</strong> with <strong>psychological excellence</strong> to create a truly transformative journey.
              </p>
              <div className="hero-cta">
                <a href="#programs" className="cta-button primary">Explore Programs</a>
                <a href="#about" className="cta-button secondary">Learn More</a>
              </div>
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
                GunMatrix is a <strong>professionally managed shooting academy</strong> dedicated to nurturing 
                <strong> skill</strong>, <strong>discipline</strong>, and <strong>confidence</strong> through the sport of shooting. The academy 
                offers <strong>structured training programs</strong> for beginners, recreational shooters, and 
                <strong> state- and national-level athletes</strong>, with a strong emphasis on <strong>safety</strong>, <strong>technical 
                precision</strong>, <strong>mental strength</strong>, and <strong>ethical sportsmanship</strong>.
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
              <h3>Competitive Excellence</h3>
              <p>Structured training for <strong>state and national-level athletes</strong> with <strong>elite coaching</strong></p>
              <div className="card-shine"></div>
            </div>
            <div className="feature-card glass-card">
              <h3>Recreational Wellness</h3>
              <p>Shooting as a means to <strong>reduce stress</strong> and improve <strong>mental well-being</strong></p>
              <div className="card-shine"></div>
            </div>
            <div className="feature-card glass-card">
              <h3>Educational Programs</h3>
              <p>Collaboration with schools to introduce shooting as a <strong>constructive sport</strong></p>
              <div className="card-shine"></div>
            </div>
            <div className="feature-card glass-card">
              <h3>Safety First</h3>
              <p>Strong emphasis on <strong>safety</strong>, <strong>technical precision</strong>, and <strong>ethical sportsmanship</strong></p>
              <div className="card-shine"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

