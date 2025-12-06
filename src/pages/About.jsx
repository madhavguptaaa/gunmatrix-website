import './About.css'

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title">About GunMatrix</h1>
          <p className="page-subtitle">Excellence in Shooting Sports Education</p>
        </div>
      </section>

      <section className="founder">
        <div className="container">
          <div className="founder-content">
            <div className="founder-text">
              <h2 className="section-title">Our Founder</h2>
              <div className="founder-info">
                <p>
                  The academy is founded and led by <strong>Ananya Sapra</strong>, a national-level 
                  pistol shooter, experienced coach, and trained sports psychologist. With over a 
                  decade of competitive shooting experience and multiple medals at state and national 
                  levels, she brings unparalleled expertise to GunMatrix.
                </p>
                <p>
                  Ananya's achievements extend beyond her personal accomplishments. She has trained 
                  athletes who have represented the country internationally and now serve in defence 
                  and professional forces. Her unique combination of competitive experience, coaching 
                  expertise, and sports psychology training enables her to provide holistic development 
                  to students at all levels.
                </p>
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
    </div>
  )
}

export default About

