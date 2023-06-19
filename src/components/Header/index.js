import './index.css'

const Header = () => (
    <div className='header-container'>
        <div className='header'>
            <div className='header-content'>
                <h1 className='header-heading'>Let’s Build Something amazing with GPT-3 OpenAI</h1>
                <p className='header-para'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <div className='header-input-container'>
                    <input type='text' placeholder='Your Email Address' className='header-input' />
                    <button type='button' className='header-input-button'>Get Started</button>
                </div>
                <div className='header-group'>
                    <img src='https://res.cloudinary.com/dpmyvq5te/image/upload/v1686975456/GPT-3/Group_811_dvv9cw.png' alt='group' style={{height: 38, marginRight: 21}} />
                    <p className='header-people-para'>1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>
            <div className='header-illustration'>
                <img src='https://res.cloudinary.com/dpmyvq5te/image/upload/v1686975826/GPT-3/Header_Illustration1_ni7t0u.png' alt='illustration' style={{width: '100%'}} />
            </div>
        </div>
        <div className='companies-container'>
            <img src='https://res.cloudinary.com/dpmyvq5te/image/upload/v1686997224/GPT-3/Comapnies_Logo1_rwrsox.png' alt='companies logos' className='companies-logos' />
        </div>
    </div>
)

export default Header