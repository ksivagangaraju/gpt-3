import './index.css'

const Footer = () => (
    <div className='footer-bg-container'>
        <div className='footer-container'>
            <h1 className='header-heading footer-heading'>Do you want to step in to the future before others</h1>
            <button type='button' className='footer-button'>Request Early Access</button>
            <div className='footer-links-box-container'>
                <div className='footer-links-container'>
                    <img src='https://res.cloudinary.com/dpmyvq5te/image/upload/v1686632321/GPT-3/GPT-31_yfnaqy.png' alt='logo' style={{height: 30, marginBottom: 25}} />
                    <p className='footer-link'>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
                </div>
                <div className='footer-links-container'>
                    <p className='footer-links'>Links</p>
                    <a href='/' className='footer-link'>Overons</a>
                    <a href='/' className='footer-link'>Social Media</a>
                    <a href='/' className='footer-link'>Counters</a>
                    <a href='/' className='footer-link'>Contact</a>
                </div>
                <div className='footer-links-container'>
                    <p className='footer-links'>Company</p>
                    <a href='/' className='footer-link'>Terms & Conditions</a>
                    <a href='/' className='footer-link'>Privacy Policy</a>
                    <a href='/' className='footer-link'>Contact</a>
                </div>
                <div className='footer-links-container'>
                    <p className='footer-links'>Get in touch</p>
                    <a href='/' className='footer-link'>Crechterwoord K12 182 DK Alknjkcb</a>
                    <a href='/' className='footer-link'>085-132567</a>
                    <a href='/' className='footer-link'>info@payme.net</a>
                </div>
            </div>
            <p className='footer-address'>© 2021 GPT-3. All rights reserved.</p>
        </div>
    </div>
)

export default Footer