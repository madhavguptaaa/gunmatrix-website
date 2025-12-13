import { useState } from 'react'
import './About.css'

const About = () => {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setShowModal(false)
    document.body.style.overflow = 'auto'
  }

  return (
    <div className="about">
      <section className="about-hero">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/gallery/0ce2ee4b-b3d8-4e75-9d26-219f39b0b217.MP4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="page-title">About GunMatrix</h1>
          <p className="page-subtitle">Excellence in Shooting Sports Education</p>
        </div>
      </section>

      <section className="founder">
        <div className="container">
          <div className="founder-content">
            <h2 className="section-title">Our Founder</h2>
            <div className="founder-layout">
              <div className="founder-images-grid">
                <div className="founder-image-container" onClick={openModal}>
                  <img
                    src="/founder-photo.jpeg"
                    alt="Ananya Sapra - Founder of GunMatrix"
                    className="founder-image"
                  />
                  <div className="image-hover-overlay">
                    <span className="view-icon">🔍</span>
                  </div>
                </div>
                <div className="founder-image-container" onClick={openModal}>
                  <img
                    src="/founder-photo-3.png"
                    alt="Ananya Sapra - Professional"
                    className="founder-image"
                  />
                  <div className="image-hover-overlay">
                    <span className="view-icon">🔍</span>
                  </div>
                </div>
              </div>
              <div className="founder-text">
                <div className="founder-info">
                  <p>
                    The academy is founded and led by <span className="highlight-founder">Ananya Sapra</span>, a distinguished <span className="highlight-important">national-level
                      pistol shooter</span>, experienced coach, and trained <span className="highlight-important">sports psychologist</span>. With over a
                    decade of competitive shooting experience and multiple medals at state and national
                    levels, she brings unparalleled expertise and passion to GunMatrix Academy.
                  </p>
                  <p>
                    Her journey in shooting sports began at a young age, where her natural talent and
                    dedication quickly propelled her to compete at the <span className="highlight-important">highest levels</span>. Throughout her competitive
                    career, she has represented her state in numerous <span className="highlight-important">national championships</span>, consistently
                    demonstrating exceptional skill and mental fortitude. Her achievements include multiple
                    podium finishes in prestigious tournaments and recognition as one of the top pistol shooters
                    in her category.
                  </p>
                  <p>
                    Beyond her personal accomplishments, she has established herself as a highly sought-after
                    coach and mentor. She has trained athletes who have gone on to <span className="highlight-important">represent the country
                      internationally</span> and now serve with distinction in defence and professional forces. Her
                    coaching philosophy emphasizes not just technical excellence, but also the development of
                    <span className="highlight-important">mental strength, discipline, and character</span>—qualities that extend far beyond the shooting range.
                  </p>
                  <p>
                    What truly sets her apart is her unique combination of expertise. As a trained <span className="highlight-important">sports
                      psychologist</span>, she understands the critical role of <span className="highlight-important">mental conditioning</span> in athletic performance
                    and personal development. This holistic approach enables her to provide comprehensive training
                    that addresses both the physical and psychological aspects of shooting sports, helping students
                    achieve their full potential while building confidence and emotional resilience.
                  </p>
                  <p>
                    Under her leadership, GunMatrix Academy has become a <span className="highlight-important">premier destination</span> for shooting
                    sports education, welcoming everyone from curious beginners to aspiring champions. Her vision
                    is to make shooting accessible as both a competitive sport and a recreational activity that
                    promotes mental well-being, focus, and personal growth. Through her dedication and innovative
                    training methods, she continues to inspire and transform the lives of countless students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="expertise-section">
        <div className="container">
          <h2 className="section-title">Athlete Outcomes & Business-Driven Strategy</h2>
          <p className="expertise-intro">
            She has designed strategic performance pathways that have enabled athletes to:
          </p>
          <div className="outcomes-grid">
            <div className="outcome-card">
              <div className="outcome-icon-wrapper">🏆</div>
              <div className="outcome-content">
                <h3>National Level</h3>
                <p>Qualify for <span className="highlight-important">National Championships</span></p>
              </div>
            </div>
            <div className="outcome-card">
              <div className="outcome-icon-wrapper">🥇</div>
              <div className="outcome-content">
                <h3>Medal Wins</h3>
                <p>Win <span className="highlight-important">Khelo India & Senior Nationals</span> medals</p>
              </div>
            </div>
            <div className="outcome-card">
              <div className="outcome-icon-wrapper">🌍</div>
              <div className="outcome-content">
                <h3>International</h3>
                <p>Represent India at the <span className="highlight-important">ISSF World Cup</span></p>
              </div>
            </div>
            <div className="outcome-card">
              <div className="outcome-icon-wrapper">📈</div>
              <div className="outcome-content">
                <h3>Structured Growth</h3>
                <p>Improve <span className="highlight-important">technical consistency</span> & <span className="highlight-important">mental readiness</span></p>
              </div>
            </div>
          </div>

          <div className="expertise-grid">
            <div className="expertise-card">
              <h3>Core Expertise</h3>
              <ul>
                <li>Performance anxiety & match-pressure management</li>
                <li>Injury recovery & psychological rehabilitation</li>
                <li>Team dynamics, cohesion & conflict resolution</li>
                <li>Resilience under public scrutiny</li>
                <li>Confidence building for youth athletes</li>
                <li>Burnout prevention & motivation systems</li>
                <li>Athlete identity formation & mindset upgrades</li>
              </ul>
            </div>

            <div className="expertise-card">
              <h3>Therapies Integrated Into Sports Performance</h3>
              <ul>
                <li>Acceptance & Commitment Therapy (ACT)</li>
                <li>Cognitive Behavioral Therapy (CBT)</li>
                <li>Mindfulness-based athletic training</li>
                <li>Solution-Focused Brief Therapy</li>
                <li>Visualization & mental rehearsal frameworks</li>
                <li>Reflective goal-setting systems</li>
                <li>One-on-one mental-skills coaching</li>
              </ul>
            </div>

            <div className="expertise-card">
              <h3>Signature Training Themes</h3>
              <ul>
                <li>Thriving Under Pressure – mastering competition stress</li>
                <li>Mental Recovery During Injury</li>
                <li>Team Cohesion & Conflict Resolution</li>
                <li>Digital Pressure & Social Media Criticism</li>
                <li>Youth Athlete Development Programs</li>
              </ul>
            </div>

            <div className="expertise-card">
              <h3>Recognition & Impact</h3>
              <ul>
                <li>Awarded Young Entrepreneur of the Year by the CM of New Delhi</li>
                <li>Psychological support provider for NCOE para-athletes</li>
                <li>Letter of Recommendation from the Para Committee of India</li>
                <li>Conducts athlete development sessions at Delhi Sports University</li>
                <li>Regularly invited for mental-training workshops by academies, universities, and sports organizations</li>
              </ul>
            </div>
          </div>

          <div className="contact-info-section">
            <h3>Contact</h3>
            <div className="contact-details-grid">
              <div className="contact-item-detail">
                <strong>Phone:</strong> <a href="https://wa.me/919818268256?text=Hi%2C%20I%20am%20reaching%20out%20to%20you%20from%20your%20website" target="_blank" rel="noopener noreferrer">+91 9818268256</a>
              </div>
              <div className="contact-item-detail">
                <strong>Email:</strong> <a href="mailto:gunmatrixshootingacademy@gmail.com?subject=Reaching out to you from your website">gunmatrixshootingacademy@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="programs">
        <div className="container">
          <h2 className="section-title">Training Programs</h2>
          <div className="programs-grid">
            <div className="program-card">
              <h3>Beginner Programs</h3>
              <p>
                Structured introduction to shooting sports with emphasis on safety, basic techniques,
                and fundamental skills. Perfect for those new to the sport.
              </p>
              <ul>
                <li>Safety protocols and procedures</li>
                <li>Basic shooting techniques</li>
                <li>Equipment familiarization</li>
                <li>Foundation building</li>
              </ul>
            </div>
            <div className="program-card">
              <h3>Recreational Shooting</h3>
              <p>
                Stress-free shooting experience for mental well-being. Ideal for students, working
                professionals, and enthusiasts seeking relaxation and focus improvement.
              </p>
              <ul>
                <li>No competition pressure</li>
                <li>Stress reduction techniques</li>
                <li>Concentration enhancement</li>
                <li>Emotional balance building</li>
              </ul>
            </div>
            <div className="program-card">
              <h3>Competitive Training</h3>
              <p>
                Elite-level coaching for state and national-level athletes. Advanced techniques,
                mental strength training, and competition preparation.
              </p>
              <ul>
                <li>Advanced technical training</li>
                <li>Mental strength development</li>
                <li>Competition strategy</li>
                <li>Performance optimization</li>
              </ul>
            </div>
            <div className="program-card">
              <h3>School Programs</h3>
              <p>
                Collaborative programs with educational institutions to introduce shooting as a
                constructive sport that enhances focus, self-control, and personality development.
              </p>
              <ul>
                <li>Curriculum integration</li>
                <li>Character development</li>
                <li>Focus and discipline training</li>
                <li>Safe learning environment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-content">
            <div className="value-item">
              <h3>Safety</h3>
              <p>Uncompromising commitment to safety protocols and procedures in all training activities</p>
            </div>
            <div className="value-item">
              <h3>Precision</h3>
              <p>Technical excellence and attention to detail in every aspect of shooting sports</p>
            </div>
            <div className="value-item">
              <h3>Discipline</h3>
              <p>Building character through structured training and ethical sportsmanship</p>
            </div>
            <div className="value-item">
              <h3>Inclusivity</h3>
              <p>Welcoming individuals at all levels, from beginners to elite athletes</p>
            </div>
            <div className="value-item">
              <h3>Mental Strength</h3>
              <p>Developing psychological resilience alongside physical skills</p>
            </div>
            <div className="value-item">
              <h3>Wellness</h3>
              <p>Promoting shooting as a means to improve mental health and overall well-being</p>
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="founder-modal" onClick={closeModal}>
          <div className="founder-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close">
              <span>×</span>
            </button>
            <div className="founder-modal-images">
              <div className="modal-image-wrapper">
                <img
                  src="/founder-photo.jpeg"
                  alt="Ananya Sapra - Founder of GunMatrix"
                />
              </div>
              <div className="modal-image-wrapper">
                <img
                  src="/founder-photo-3.png"
                  alt="Ananya Sapra - Professional"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default About

