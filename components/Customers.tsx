import React from 'react'

const Customers:React.FC = () => {
  return (
    <div className='customers' id='customers-section'>
      <div className='article'>
        <h2>Our customers are very importan to us</h2>
        <p>All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials and choices for our customers.</p>
        <div className='profile'>
            <img src="/avatar-image.jpg" alt="Avatar" />
            <p>Mh Jibon</p>
            <section>
                <img src="/star-icon.svg" alt="Star" />
                <span>4.8</span>
            </section>
        </div>
      </div>
    </div>
  )
}

export default Customers
