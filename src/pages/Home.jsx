import { Link } from 'react-router-dom'
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
            <div className="feature-card" style={{ backgroundImage: 'url(/gallery/IMG_8172.jpeg)' }}>
              <div className="feature-overlay"></div>
              <div className="feature-content">
                <h3>Competitive Excellence</h3>
                <p>Structured training for state and national-level athletes with elite coaching</p>
              </div>
            </div>
            <div className="feature-card" style={{ backgroundImage: 'url(/gallery/IMG_3131.jpeg)' }}>
              <div className="feature-overlay"></div>
              <div className="feature-content">
                <h3>Recreational Wellness</h3>
                <p>Shooting as a means to reduce stress and improve mental well-being</p>
              </div>
            </div>
            <div className="feature-card" style={{ backgroundImage: 'url(/gallery/IMG_6099.JPG)' }}>
              <div className="feature-overlay"></div>
              <div className="feature-content">
                <h3>Educational Programs</h3>
                <p>Collaboration with schools to introduce shooting as a constructive sport</p>
              </div>
            </div>
            <div className="feature-card" style={{ backgroundImage: 'url(/gallery/IMG_3303.jpeg)' }}>
              <div className="feature-overlay"></div>
              <div className="feature-content">
                <h3>Safety First</h3>
                <p>Strong emphasis on safety, technical precision, and ethical sportsmanship</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="highlights">
        <div className="container">
          <h2 className="section-title">Academy Highlights</h2>
          <div className="highlights-grid">
            <Link to="/gallery" className="highlight-item">
              <img src="/gallery/IMG_3152.jpeg" alt="Technical Training Session" loading="lazy" />
              <div className="highlight-overlay">
                <h3>Professional Training</h3>
              </div>
            </Link>
            <Link to="/gallery" className="highlight-item">
              <img src="/gallery/IMG_8216.jpeg" alt="Elite Coaching" loading="lazy" />
              <div className="highlight-overlay">
                <h3>Expert Coaching</h3>
              </div>
            </Link>
            <Link to="/gallery" className="highlight-item">
              <img src="/gallery/IMG_6099.JPG" alt="Competition Day" loading="lazy" />
              <div className="highlight-overlay">
                <h3>Competitions</h3>
              </div>
            </Link>
            <Link to="/gallery" className="highlight-item">
              <img src="/gallery/IMG_7817.jpg" alt="State-of-the-art Facility" loading="lazy" />
              <div className="highlight-overlay">
                <h3>Modern Facilities</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

