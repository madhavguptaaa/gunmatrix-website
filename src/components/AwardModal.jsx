import { useState, useEffect } from 'react'
import './AwardModal.css'

const AwardModal = () => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        // Show modal after a short delay when page loads
        const timer = setTimeout(() => {
            setIsOpen(true)
        }, 500)

        return () => clearTimeout(timer)
    }, [])

    const closeModal = () => {
        setIsOpen(false)
    }

    if (!isOpen) return null

    return (
        <div className="modal-overlay">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={closeModal}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>

                <div className="modal-header">
                    <h2 className="modal-title">Best Young Entrepreneur Award</h2>
                </div>

                <div className="modal-body">
                    <div className="modal-image-container">
                        <img
                            src="/founder-photo-2.jpeg"
                            alt="Ananya Sapra receiving award from CM Delhi"
                            className="modal-image"
                        />
                    </div>

                    <div className="modal-text">
                        <p className="modal-description">
                            Awarded as <strong>Best Young Entrepreneur</strong> by CM Delhi <strong>Rekha Gupta</strong> for the outstanding contribution of GunMatrix in promoting sports excellence and youth development.
                        </p>
                        <div className="modal-signature">
                            <p className="signature-name">Ananya Sapra</p>
                            <p className="signature-title">Founder, GunMatrix Academy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AwardModal
