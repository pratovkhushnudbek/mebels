import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="all-links">
        <div className='column'>
            <div>
                <h3>DudeShape</h3>
                <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed eiusmod tempor incididunt ut labore .</p>
            </div>
            <div className='following'>
                <h3>Follow Us :</h3>
                <ul>
                    <li>
                        <a href="#">
                            <img src="/facebook-icon.svg" alt="Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="/twitter-icon.svg" alt="Twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="/instagram-icon.svg" alt="Instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="/youtube-icon.svg" alt="YouTube" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className='column'>
            <h4>Take a tour</h4>
            <nav>
                <a href="#">Features</a>
                <a href="#popular-section">Pricing</a>
                <a href="#">Product</a>
                <a href="#subscribe-section">Support</a>
            </nav>
        </div>
        <div className='column'>
            <h4>Our company</h4>
            <nav>
                <a href="#about-section">About Us</a>
                <a href="#customers-section">Blog</a>
                <a href="#">Media</a>
                <a href="#subscribe-section">Contact Us</a>
            </nav>
        </div>
        <div className='column'>
            <h4>Subscribe</h4>
            <p>Subscribe to get the latest news from us</p>
            <form>
                <input type="email" placeholder='Email Address...' required />
                <button type='submit'>
                    <img src="/email-forward-icon.svg" alt="►>" />
                </button>
            </form>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright @ 2021. Crafted with love.</p>
      </div>
    </footer>
  )
}

export default Footer
