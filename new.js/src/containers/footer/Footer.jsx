import React from 'react'
import './footer.css'
import gpt3logo from '../../assets/GPT-3.svg'

function Footer(){

    return (
        <div className='gpt3__footer section__pdding'>
            <div className='gpt3__footer-heading'>
                <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
            </div>

            <div className='gpt3__footer-btn'>
                <p>Request Early Access</p>
            </div>
            <div className='gpt3__footer-links'>
                <div className='gpt3__footer-links_logo'>
                    <img src={gpt3logo} alt="" />
                    <p> Get in touchCrechterwoord K12 182 DK 
                        Alknjkcb085-132567info@payme.net</p>
                </div>
                <div className='gpt3__footer-links_div'>
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Socialmedia</p>  
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className='gpt3__footer-links_div'>
                    <h4>Company</h4>
                    <p>Overons</p>
                    <p>Socialmedia</p>  
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className='gpt3__footer-links_div'>
                    <h4>Get In Touch</h4>
                    <p>Overons</p>
                    <p>Socialmedia</p>  
                    <p>Counters</p>   
                </div>
                <div className='gpt3__footer-copyright'>
                    <p>&copy; 2021 GPT-3. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer