import { useState } from 'react'
import './About.css'

const About = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title">Why GunMatrix Is Truly Different</h1>
          <p className="page-subtitle">Psychology-Led Excellence in Shooting Sports</p>
        </div>
      </section>

      <section className="different-section">
        <div className="container">
          <div className="different-content">
            <p className="different-intro">
              At GunMatrix, we challenge the traditional idea of shooting academies by placing <strong>mental well-being</strong>, <strong>enjoyment</strong>, and <strong>inclusivity</strong> at the core of everything we do.
            </p>
            
            <div className="different-points">
              <div className="different-point glass-card">
                <h3 className="point-title">1. Psychology-Led Shooting Training</h3>
                <p>
                  Unlike conventional ranges, GunMatrix has a qualified sports psychologist on board, ensuring that:
                </p>
                <ul className="point-list">
                  <li><strong>Performance anxiety</strong> is addressed early</li>
                  <li><strong>Focus</strong> and <strong>emotional regulation</strong> are trained systematically</li>
                  <li><strong>Mental health</strong> of every shooter is prioritised alongside physical technique</li>
                </ul>
                <p className="point-highlight">We believe that a <strong>strong mind creates a steady hand</strong>, and <strong>mental training</strong> is fundamental to achieving excellence in shooting sports.</p>
              </div>

              <div className="different-point glass-card">
                <h3 className="point-title">2. Shooting as a Recreational & Life-Enriching Activity</h3>
                <p>
                  GunMatrix actively promotes shooting as a recreational sport for all ages. You don't have to be an athlete to enjoy shooting.
                </p>
                <ul className="point-list">
                  <li>Children develop <strong>focus</strong> and <strong>discipline</strong></li>
                  <li>Young adults build <strong>confidence</strong> and <strong>stress resilience</strong></li>
                  <li>Working professionals experience <strong>deep stress relief</strong></li>
                  <li>Seniors rediscover <strong>concentration</strong> and <strong>mindfulness</strong></li>
                </ul>
                <p className="point-highlight">
                  Shooting at GunMatrix provides an <strong>engaging and empowering experience</strong> — a space where everyone can explore the sport <strong>without pressure or judgment</strong>, fostering <strong>personal growth</strong> and <strong>well-being</strong>.
                </p>
              </div>

            </div>

            <div className="vision-section glass-card">
              <h3 className="vision-title">The Vision Forward</h3>
              <p className="vision-text">
                Ananya believes that <strong>mental strength</strong>, <strong>emotional balance</strong>, and <strong>enjoyment of sport</strong> are the true markers of success. Through GunMatrix, her mission is to create a space where sport <strong>heals</strong>, <strong>empowers</strong>, and <strong>inspires</strong>—while building <strong>champions both on and off the range</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="founder">
        <div className="container">
          <div className="founder-content">
            <h2 className="section-title">GUNMATRIX – Founder Profile: Ananya Sapra</h2>
            <div className="founder-subtitle">
              <strong>Sports Psychologist</strong> | <strong>Founder – Gunmatrix</strong> | <strong>National-Level Pistol Shooter</strong><br />
              <strong>Masters in Applied Psychology (Hons)</strong> | <strong>NIS Diploma in Sports Psychology</strong>
            </div>
            <div className="founder-top-section">
              <div className="founder-photos-gallery">
                <div className="founder-photo-wrapper" onClick={() => setSelectedImage('/founder-photo-1.jpeg')}>
                  <img src="/founder-photo-1.jpeg" alt="Ananya Sapra" className="founder-photo" />
                </div>
                <div className="founder-photo-wrapper" onClick={() => setSelectedImage('/founder-photo-2.jpeg')}>
                  <img src="/founder-photo-2.jpeg" alt="Ananya Sapra" className="founder-photo" />
                </div>
                <div className="founder-photo-wrapper" onClick={() => setSelectedImage('/founder-photo-3.png')}>
                  <img src="/founder-photo-3.png" alt="Ananya Sapra" className="founder-photo" />
                </div>
                <div className="founder-photo-wrapper" onClick={() => setSelectedImage('/founder-photo.jpeg')}>
                  <img src="/founder-photo.jpeg" alt="Ananya Sapra" className="founder-photo" />
                </div>
              </div>
              <div className="founder-about-box">
                <h3 className="founder-section-title">About Ananya</h3>
                <p>
                  <strong>Ananya Sapra</strong> is a <strong>performance-driven sports psychologist</strong> and former <strong>national-level pistol shooter</strong> with over <strong>three years of experience</strong> helping athletes build <strong>elite-level mental strength</strong>.
                </p>
                <p>
                  Her approach blends <strong>high-performance sport insight</strong> + <strong>applied psychology</strong>, creating <strong>practical systems</strong> athletes can use to train <strong>mental readiness</strong>, boost <strong>resilience</strong>, and achieve <strong>peak results</strong>.
                </p>
                <p>
                  Having competed nationally, she understands the <strong>pressure</strong>, <strong>discipline</strong>, and <strong>emotional intensity</strong> of competitive sport. Through Gunmatrix, she empowers <strong>emerging athletes</strong> and <strong>elite performers</strong> to unlock their potential with <strong>mental training</strong>, <strong>psychological clarity</strong>, and <strong>evidence-based support</strong>.
                </p>
                <p>
                  Ananya's unique perspective comes from her <strong>dual expertise</strong> as both a <strong>competitive athlete</strong> and a <strong>trained psychologist</strong>. This combination allows her to bridge the gap between <strong>theoretical knowledge</strong> and <strong>real-world application</strong>, providing athletes with <strong>actionable strategies</strong> that work under <strong>high-pressure situations</strong>.
                </p>
                <p>
                  Her commitment to <strong>athlete development</strong> extends beyond the shooting range. She has been instrumental in creating <strong>comprehensive training programs</strong> that address not just <strong>technical skills</strong>, but also <strong>mental fortitude</strong>, <strong>emotional regulation</strong>, and <strong>long-term career sustainability</strong> in sports.
                </p>
                <p>
                  Ananya's work has been recognized at the <strong>highest levels</strong>, earning her the <strong>Young Entrepreneur of the Year</strong> award from the <strong>Chief Minister of Delhi</strong>. Her contributions to <strong>sports psychology</strong> and <strong>athlete development</strong> continue to shape the future of <strong>competitive shooting</strong> in India.
                </p>
                <p>
                  With a <strong>Masters in Applied Psychology (Hons)</strong> and an <strong>NIS Diploma in Sports Psychology</strong>, Ananya brings <strong>academic rigor</strong> and <strong>professional certification</strong> to her practice. Her educational background, combined with her <strong>hands-on experience</strong> as a competitive shooter, enables her to understand both the <strong>psychological challenges</strong> and <strong>performance demands</strong> that athletes face.
                </p>
              </div>
            </div>
            
            <div className="founder-details-box">
              <div className="founder-info">
                <h3 className="founder-section-title">Athlete Outcomes & Business-Driven Strategy</h3>
                <p>Ananya has designed <strong>strategic performance pathways</strong> that have enabled athletes to:</p>
                <ul className="founder-list">
                  <li>Qualify for <strong>National Championships</strong></li>
                  <li>Win <strong>Khelo India</strong> & <strong>Senior Nationals</strong> medals</li>
                  <li>Represent <strong>India at the ISSF World Cup</strong></li>
                  <li>Improve <strong>technical consistency</strong>, <strong>match temperament</strong>, and <strong>mental readiness</strong> through <strong>structured systems</strong> she developed for tracking performance and mindset growth.</li>
                </ul>

                <h3 className="founder-section-title">Core Expertise</h3>
                <ul className="founder-list">
                  <li>Performance anxiety & match-pressure management</li>
                  <li>Injury recovery & psychological rehabilitation</li>
                  <li>Team dynamics, cohesion & conflict resolution</li>
                  <li>Resilience under public scrutiny</li>
                  <li>Confidence building for youth athletes</li>
                  <li>Burnout prevention & motivation systems</li>
                  <li>Athlete identity formation & mindset upgrades</li>
                </ul>

                <h3 className="founder-section-title">Therapies Integrated Into Sports Performance</h3>
                <ul className="founder-list">
                  <li>Acceptance & Commitment Therapy (ACT)</li>
                  <li>Cognitive Behavioral Therapy (CBT)</li>
                  <li>Mindfulness-based athletic training</li>
                  <li>Solution-Focused Brief Therapy</li>
                  <li>Visualization & mental rehearsal frameworks</li>
                  <li>Reflective goal-setting systems</li>
                  <li>One-on-one mental-skills coaching</li>
                </ul>

                <h3 className="founder-section-title">Signature Training Themes</h3>
                <ul className="founder-list">
                  <li>Thriving Under Pressure – mastering competition stress</li>
                  <li>Mental Recovery During Injury</li>
                  <li>Team Cohesion & Conflict Resolution</li>
                  <li>Digital Pressure & Social Media Criticism</li>
                  <li>Youth Athlete Development Programs</li>
                </ul>

                <h3 className="founder-section-title">Recognition & Impact</h3>
                <ul className="founder-list">
                  <li>Awarded <strong>Young Entrepreneur of the Year</strong> by the <strong>CM of New Delhi</strong></li>
                  <li><strong>Psychological support provider</strong> for <strong>NCOE para-athletes</strong></li>
                  <li><strong>Letter of Recommendation</strong> from the <strong>Para Committee of India</strong></li>
                  <li>Conducts <strong>athlete development sessions</strong> at <strong>Delhi Sports University</strong></li>
                  <li>Regularly invited for <strong>mental-training workshops</strong> by academies, universities, and sports organizations</li>
                </ul>

                <div className="founder-contact">
                  <h3 className="founder-section-title">Contact</h3>
                  <p><strong>Phone:</strong> <a href="tel:+918487762866">+91 84877 62866</a></p>
                  <p><strong>Email:</strong> <a href="mailto:ananyasapraal2@gmail.com">ananyasapraal2@gmail.com</a></p>
                </div>
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
                <strong>Structured introduction</strong> to shooting sports with emphasis on <strong>safety</strong>, <strong>basic techniques</strong>, 
                and <strong>fundamental skills</strong>. Perfect for those new to the sport.
              </p>
              <ul>
                <li><strong>Safety protocols</strong> and procedures</li>
                <li><strong>Basic shooting techniques</strong></li>
                <li><strong>Equipment familiarization</strong></li>
                <li><strong>Foundation building</strong></li>
              </ul>
            </div>
            <div className="program-card">
              <h3>Recreational Shooting</h3>
              <p>
                <strong>Stress-free shooting experience</strong> for <strong>mental well-being</strong>. Ideal for students, working 
                professionals, and enthusiasts seeking <strong>relaxation</strong> and <strong>focus improvement</strong>.
              </p>
              <ul>
                <li><strong>No competition pressure</strong></li>
                <li><strong>Stress reduction techniques</strong></li>
                <li><strong>Concentration enhancement</strong></li>
                <li><strong>Emotional balance building</strong></li>
              </ul>
            </div>
            <div className="program-card">
              <h3>Competitive Training</h3>
              <p>
                <strong>Elite-level coaching</strong> for <strong>state and national-level athletes</strong>. <strong>Advanced techniques</strong>, 
                <strong> mental strength training</strong>, and <strong>competition preparation</strong>.
              </p>
              <ul>
                <li><strong>Advanced technical training</strong></li>
                <li><strong>Mental strength development</strong></li>
                <li><strong>Competition strategy</strong></li>
                <li><strong>Performance optimization</strong></li>
              </ul>
            </div>
            <div className="program-card">
              <h3>School Programs</h3>
              <p>
                <strong>Collaborative programs</strong> with educational institutions to introduce shooting as a 
                <strong> constructive sport</strong> that enhances <strong>focus</strong>, <strong>self-control</strong>, and <strong>personality development</strong>.
              </p>
              <ul>
                <li><strong>Curriculum integration</strong></li>
                <li><strong>Character development</strong></li>
                <li><strong>Focus and discipline training</strong></li>
                <li><strong>Safe learning environment</strong></li>
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
              <p><strong>Uncompromising commitment</strong> to <strong>safety protocols</strong> and procedures in all training activities</p>
            </div>
            <div className="value-item">
              <h3>Precision</h3>
              <p><strong>Technical excellence</strong> and <strong>attention to detail</strong> in every aspect of shooting sports</p>
            </div>
            <div className="value-item">
              <h3>Discipline</h3>
              <p>Building <strong>character</strong> through <strong>structured training</strong> and <strong>ethical sportsmanship</strong></p>
            </div>
            <div className="value-item">
              <h3>Inclusivity</h3>
              <p>Welcoming individuals at <strong>all levels</strong>, from <strong>beginners to elite athletes</strong></p>
            </div>
            <div className="value-item">
              <h3>Mental Strength</h3>
              <p>Developing <strong>psychological resilience</strong> alongside <strong>physical skills</strong></p>
            </div>
            <div className="value-item">
              <h3>Wellness</h3>
              <p>Promoting shooting as a means to improve <strong>mental health</strong> and <strong>overall well-being</strong></p>
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="image-modal-close" onClick={() => setSelectedImage(null)}>×</button>
            <img src={selectedImage} alt="Ananya Sapra" className="image-modal-img" />
          </div>
        </div>
      )}
    </div>
  )
}

export default About

