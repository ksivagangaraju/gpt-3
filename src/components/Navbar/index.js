import { useState } from 'react';
import {HiMenuAlt2} from 'react-icons/hi';
import {MdClose} from 'react-icons/md';
import './index.css';

const Navbar = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    return (
        <div className='navbar-container'>
            <div className='nav-links-container'>
                <img src='https://res.cloudinary.com/dpmyvq5te/image/upload/v1686632321/GPT-3/GPT-31_yfnaqy.png' alt='GPT-3' style={{marginRight: 68}} />
                <ul className='nav-links'>
                    <li><a href='/' className='nav-link'>Home</a></li>
                    <li><a href='#whatIsGPT3' className='nav-link'>What is GPT-3</a></li>
                    <li><a href='#openAI' className='nav-link'>Open AI</a></li>
                    <li><a href='#caseStudies' className='nav-link'>Case Studies</a></li>
                    <li><a href='#library' className='nav-link'>Library</a></li>
                </ul>
            </div>
            <div className='sign-in-out-and-menu-container'>
                <div className='sign-in-out-container'>
                    <button type='button' className='sign-in'>Sign in</button>
                    <button type='button' className='sign-out'>Sign out</button>
                </div>
                <div className='responsive-nav-links-and-sign-in-out'>
                    {isOpenMenu ?
                        <button type='button' className='menu-button' onClick={() => setIsOpenMenu(false)}>
                            <MdClose className='menu-icon' />
                        </button> : 
                        <button type='button' className='menu-button' onClick={() => setIsOpenMenu(true)}>
                            <HiMenuAlt2 className='menu-icon' />
                        </button>
                    }
                    {isOpenMenu && 
                        <ul className='responsive-nav-sign-container'>
                            <li><a href='#home' className='nav-link'>Home</a></li>
                            <li><a href='#whatIsGPT3' className='nav-link'>What is GPT-3</a></li>
                            <li><a href='#openAI' className='nav-link'>Open AI</a></li>
                            <li><a href='#caseStudies' className='nav-link'>Case Studies</a></li>
                            <li><a href='#library' className='nav-link'>Library</a></li>
                            <li className='responsive-sign' style={{textAlign: 'center', marginTop: 15}}><button type='button' className='sign-in'>Sign in</button></li>
                            <li className='responsive-sign'><button type='button' className='sign-out' style={{height: 48}}>Sign out</button></li>
                        </ul>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar