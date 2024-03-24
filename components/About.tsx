

const About:React.FC = () => {
  return (
    <div className="about" id="about-section">
        <div>
            <h2>About Us</h2>
            <p>All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials </p>
            <div className="feature">
                <div>
                    <img src="/best-quality-icon.svg" alt="Quality" />
                    <h6>Best Quality</h6>
                    <p>All of our furniture uses the best materials and choices</p>
                </div>
                <div>
                    <img src="/100-secure-icon.svg" alt="Secure" />
                    <h6>100% Secure</h6>
                    <p>All of our furniture uses the best materials and choices</p>
                </div>
                <div>
                    <img src="/free-shipping-icon.svg" alt="Shipping" />
                    <h6>Free Shipping</h6>
                    <p>All of our furniture uses the best materials and choices</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
