import { useState, useEffect } from 'react'
import './AwardModal.css'

const AwardModal = () => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        // Show modal after a short delay when page loads
        const timer = setTimeout(() => {
            setIsOpen(true)
        }, 800)

        return () => clearTimeout(timer)
    }, [])

    const closeModal = () => {
        setIsOpen(false)
    }

    if (!isOpen) return null

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2 className="modal-title">Best Young Entrepreneur Award</h2>
                </div>

                <div className="modal-body">
                    <div className="modal-images-grid">
                        <div className="modal-image-container">
                            <img
                                src="/founder-photo-2.jpeg"
                                alt="Ananya Sapra receiving award from CM Delhi"
                                className="modal-image"
                            />
                        </div>
                        <div className="modal-image-container">
                            <img
                                src="/founder-photo-3.png"
                                alt="Ananya Sapra - Founder of GunMatrix"
                                className="modal-image"
                            />
                        </div>
                    </div>

                    <div className="modal-text">
                        <p className="modal-description">
                            Awarded as <strong>Best Young Entrepreneur</strong> by CM Delhi <strong>Rekha Gupta</strong> for the outstanding contribution of GunMatrix in promoting sports excellence and youth development.
                        </p>
                        <div className="modal-signature">
                            <div className="signature-content">
                                <p className="signature-name">Ananya Sapra</p>
                                <p className="signature-title">Founder, GunMatrix Academy</p>
                            </div>
                            <button className="cta-button" onClick={closeModal}>
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AwardModal
