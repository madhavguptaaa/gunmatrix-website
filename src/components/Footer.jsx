import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-about">
            <h3 className="footer-title">GunMatrix Academy</h3>
            <p className="footer-description">
              Excellence in shooting sports training and development. Building champions through discipline, precision, and dedication.
            </p>
            <div className="footer-social">
              <h4 className="footer-heading">Follow Us</h4>
              <a href="https://instagram.com/gunmatrixacademy" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/corporate">Corporate Inquiries</a></li>
            </ul>
          </div>

          <div className="footer-section footer-contact-section">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <span className="contact-label">Email:</span>
                <a href="mailto:info@gunmatrix.com">info@gunmatrix.com</a>
              </li>
              <li>
                <span className="contact-label">Phone:</span>
                <a href="tel:+91XXXXXXXXXX">+91 XXX XXX XXXX</a>
              </li>
              <li>
                <span className="contact-label">Address:</span>
                <span>GunMatrix Academy, City, India</span>
              </li>
              <li>
                <span className="contact-label">Hours:</span>
                <span>Mon-Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

          <div className="footer-section footer-map">
            <h4 className="footer-heading">Location</h4>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2087607273647!2d77.37136931508047!3d28.627981982421896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM3JzQwLjciTiA3N8KwMjInMjYuOSJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="GunMatrix Academy Location"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} GunMatrix Academy. All rights reserved.</p>
          <p className="footer-tagline">Precision • Discipline • Excellence</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
