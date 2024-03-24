import React from 'react'

const Subscribe:React.FC = () => {
  return (
    <div className='subscribe' id='subscribe-section'>
      <h2>Subscribe to get the latest news about us</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore at dolore.</p>
      <form>
        <img src="/email-icon.svg" alt="Email" />
        <input type="email" placeholder='Enter your email...' required  />
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Subscribe
