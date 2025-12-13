import { useState } from 'react'
import './Corporate.css'

const Corporate = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        inquiryType: 'training',
        message: ''
    })

    const [submitted, setSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState(null)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError(null)

        try {
            const response = await fetch('http://localhost:3001/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.contactPerson,
                    email: formData.email,
                    phone: formData.phone,
                    company: formData.companyName,
                    inquiryType: formData.inquiryType,
                    message: formData.message
                }),
            })

            const data = await response.json()

            if (response.ok) {
                setSubmitted(true)
                setTimeout(() => {
                    setSubmitted(false)
                    setFormData({
                        companyName: '',
                        contactPerson: '',
                        email: '',
                        phone: '',
                        inquiryType: 'training',
                        message: ''
                    })
                }, 4000)
            } else {
                setError(data.message || 'Failed to submit inquiry. Please try again.')
            }
        } catch (err) {
            console.error('Error submitting form:', err)
            setError('Unable to connect to server. Please ensure the server is running or contact us directly.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="corporate-page">
            <section className="corporate-hero">
                <video
                    className="hero-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/gallery/2f42d820-e8e8-4a28-9422-ef4c3ead5bca.MP4" type="video/mp4" />
                </video>
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <div className="hero-badge">Corporate Partnerships</div>
                    <h1 className="page-title">Corporate Inquiries</h1>
                    <p className="page-subtitle">
                        Elevate your organization with professional shooting programs, team building activities, and corporate wellness initiatives
                    </p>
                </div>
            </section>

            <section className="corporate-benefits">
                <div className="container">
                    <h2 className="section-title">Why Choose GunMatrix for Your Organization</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <div className="benefit-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" />
                                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                                </svg>
                            </div>
                            <h3>Corporate Training Programs</h3>
                            <p>Customized shooting programs designed for corporate teams, focusing on precision, discipline, and mental focus</p>
                            <div className="benefit-highlight"></div>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="currentColor" />
                                </svg>
                            </div>
                            <h3>Team Building Activities</h3>
                            <p>Unique team-building experiences that enhance collaboration, communication, and trust among team members</p>
                            <div className="benefit-highlight"></div>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3>Wellness & Stress Relief</h3>
                            <p>Shooting as a recreational activity to help employees reduce stress and improve mental well-being</p>
                            <div className="benefit-highlight"></div>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 8h10M7 12h10M7 16h10M5 4h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                            <h3>Corporate Events & Competitions</h3>
                            <p>Organize corporate shooting competitions and events to boost morale and create memorable experiences</p>
                            <div className="benefit-highlight"></div>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3>Educational Workshops</h3>
                            <p>Safety-focused workshops and seminars on shooting sports, discipline, and mental conditioning</p>
                            <div className="benefit-highlight"></div>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 3v18M15 6v15M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                            <h3>Flexible Packages</h3>
                            <p>Tailored programs and pricing to suit your organization's specific needs and budget</p>
                            <div className="benefit-highlight"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="inquiry-form-section">
                <div className="container">
                    <div className="form-wrapper">
                        <div className="form-info">
                            <h2>Let's Start a Conversation</h2>
                            <p>Fill out the form and our team will get back to you within 24 hours to discuss how we can create a customized program for your organization.</p>

                            <div className="contact-details">
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Email</h4>
                                        <p><a href="mailto:gunmatrixshootingacademy@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>gunmatrixshootingacademy@gmail.com</a></p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Phone</h4>
                                        <p><a href="https://wa.me/919818268256?text=Hi%2C%20I%20am%20reaching%20out%20to%20you%20from%20your%20website" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>+91 9818268256</a></p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Address</h4>
                                        <p>GunMatrix Shooting Academy, LPS Global School, Sector 51, Noida</p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Hours</h4>
                                        <p>Mon-Sun: 5:30 PM - 9:30 PM (Friday Off)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="form-container">
                            <form onSubmit={handleSubmit} className="corporate-form">
                                <div className="form-group">
                                    <label htmlFor="companyName">Company Name *</label>
                                    <input
                                        type="text"
                                        id="companyName"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your company name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="contactPerson">Contact Person *</label>
                                    <input
                                        type="text"
                                        id="contactPerson"
                                        name="contactPerson"
                                        value={formData.contactPerson}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address *</label>
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

                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number *</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            placeholder="+91 XXXXX XXXXX"
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="inquiryType">Type of Inquiry *</label>
                                    <select
                                        id="inquiryType"
                                        name="inquiryType"
                                        value={formData.inquiryType}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="training">Corporate Training Program</option>
                                        <option value="team-building">Team Building Event</option>
                                        <option value="wellness">Wellness Program</option>
                                        <option value="competition">Corporate Competition</option>
                                        <option value="workshop">Educational Workshop</option>
                                        <option value="other">Other</option>
                                    </select>
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
                                        placeholder="Tell us about your requirements, expected number of participants, preferred dates, or any specific needs..."
                                    ></textarea>
                                </div>

                                {error && (
                                    <div className="error-message">
                                        <span className="error-icon">⚠️</span>
                                        {error}
                                    </div>
                                )}

                                {submitted && (
                                    <div className="success-message">
                                        <span className="checkmark">✓</span>
                                        Your inquiry has been submitted successfully! We'll contact you soon.
                                    </div>
                                )}

                                <button type="submit" className="submit-btn" disabled={isSubmitting || submitted}>
                                    {isSubmitting ? (
                                        <>
                                            <span className="spinner"></span> Sending...
                                        </>
                                    ) : submitted ? (
                                        <>
                                            <span className="checkmark">✓</span> Submitted Successfully!
                                        </>
                                    ) : (
                                        <>
                                            Send Inquiry <span className="arrow">→</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Transform Your Team?</h2>
                        <p>Join leading organizations that trust GunMatrix for professional shooting programs and team development</p>
                        <div className="cta-buttons">
                            <a href="#inquiry-form" className="cta-btn primary">Get Started</a>
                            <a href="/gallery" className="cta-btn secondary">View Gallery</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Corporate
