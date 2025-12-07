import { useState } from 'react'
import './Corporate.css'

const Corporate = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="corporate">
      <section className="corporate-hero">
        <div className="container">
          <h1 className="page-title">Corporate Inquiries</h1>
          <p className="page-subtitle">Wellness and Team-Building Solutions</p>
        </div>
      </section>

      <section className="corporate-content">
        <div className="container">
          <div className="corporate-intro">
            <p className="intro-text">
              GunMatrix introduces shooting as a <strong>unique wellness and team-building activity</strong> for organizations. 
              Our <strong>corporate programs</strong> are designed to help employees step away from <strong>routine stress</strong> and reconnect 
              with <strong>focus</strong>, <strong>collaboration</strong>, and <strong>teamwork</strong> in a <strong>structured and safe environment</strong>.
            </p>
          </div>

          <div className="corporate-benefits">
            <div className="benefit-item">
              <h3>Team Building</h3>
              <p>
                Foster <strong>stronger team dynamics</strong> through <strong>collaborative shooting experiences</strong> that encourage 
                <strong> communication</strong>, <strong>trust</strong>, and <strong>mutual support</strong> among colleagues.
              </p>
            </div>
            <div className="benefit-item">
              <h3>Stress Relief</h3>
              <p>
                Provide employees with an <strong>effective outlet for stress management</strong> through <strong>focused</strong>, 
                <strong> mindful shooting practice</strong> in a <strong>controlled environment</strong>.
              </p>
            </div>
            <div className="benefit-item">
              <h3>Mental Wellness</h3>
              <p>
                Enhance employee <strong>mental health</strong> and <strong>well-being</strong> through activities that improve 
                <strong> concentration</strong>, <strong>emotional regulation</strong>, and overall <strong>psychological resilience</strong>.
              </p>
            </div>
            <div className="benefit-item">
              <h3>Professional Development</h3>
              <p>
                Develop <strong>focus</strong>, <strong>discipline</strong>, and <strong>precision skills</strong> that translate directly to improved 
                <strong> workplace performance</strong> and <strong>professional growth</strong>.
              </p>
            </div>
          </div>

          <div className="corporate-programs">
            <h2 className="section-title">Our Corporate Programs</h2>
            <div className="programs-list">
              <div className="program-item">
                <h3>Half-Day Team Building Sessions</h3>
                <p>
                  <strong>Structured sessions</strong> designed for groups of <strong>10-20 participants</strong>, combining <strong>safety 
                  training</strong>, <strong>basic shooting instruction</strong>, and <strong>team-based activities</strong>.
                </p>
              </div>
              <div className="program-item">
                <h3>Full-Day Wellness Workshops</h3>
                <p>
                  <strong>Comprehensive programs</strong> that integrate shooting sports with <strong>stress management 
                  techniques</strong>, <strong>mindfulness practices</strong>, and <strong>team collaboration exercises</strong>.
                </p>
              </div>
              <div className="program-item">
                <h3>Custom Corporate Packages</h3>
                <p>
                  <strong>Tailored programs</strong> developed in collaboration with your organization to meet 
                  <strong> specific team-building objectives</strong> and <strong>wellness goals</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="corporate-testimonials">
            <h2 className="section-title">Client Collaborations</h2>
            <div className="testimonials-list">
              <div className="testimonial-item">
                <h3>Rakmo Press</h3>
                <p>
                  Hosted an <strong>interactive shooting experience</strong> that allowed employees to <strong>unwind</strong>, <strong>bond</strong>, 
                  and <strong>recharge</strong>. The session provided a <strong>unique opportunity</strong> for team members to 
                  <strong> connect outside the workplace</strong> while <strong>learning new skills</strong>.
                </p>
              </div>
              <div className="testimonial-item">
                <h3>Simran Creation</h3>
                <p>
                  Conducted a <strong>sports awareness and stress-relief day</strong>, highlighting the <strong>mental health 
                  benefits</strong> of engaging in sport. The program successfully demonstrated how shooting 
                  sports can contribute to <strong>employee wellness</strong> and <strong>team cohesion</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="corporate-contact">
            <h2 className="section-title">Inquire About Corporate Programs</h2>
            <div className="contact-details">
              <p>
                For <strong>corporate inquiries</strong>, <strong>custom program development</strong>, or to schedule a <strong>consultation</strong>, 
                please fill out the form below or contact us directly:
              </p>
              
              <form className="inquiry-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 12345 67890"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us about your requirements, number of participants, preferred dates, and any specific needs..."
                  ></textarea>
                </div>
                <button type="submit" className="submit-button" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                </button>
                {submitStatus === 'success' && (
                  <p className="form-message success">Thank you! Your inquiry has been submitted. We'll get back to you soon.</p>
                )}
                {submitStatus === 'error' && (
                  <p className="form-message error">There was an error submitting your inquiry. Please try again or contact us directly.</p>
                )}
              </form>

              <div className="contact-info">
                <p><strong>Phone:</strong> <a href="tel:+918487762866">+91 84877 62866</a></p>
                <p><strong>Email:</strong> <a href="mailto:ananyasapraal2@gmail.com">ananyasapraal2@gmail.com</a></p>
              </div>
              <p className="contact-note">
                We work closely with organizations to design programs that align with your team's 
                <strong> specific needs and objectives</strong>. All sessions are conducted under <strong>strict safety 
                protocols</strong> with <strong>qualified instructors</strong> and <strong>sports psychology support</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Corporate

