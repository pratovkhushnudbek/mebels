'use client'
import Image from 'next/image'
import React, {useState} from 'react'


interface cart{
    id: number,
    name: string,
    price: number,
    liked: boolean,
    image: string,
    reference: boolean,
}
const data:cart[]=[
    {
        id: 1,
        name: "White Swan Chair ",
        price: 40,
        liked: true,
        image: "/cart-img1.png",
        reference: false,
    },
    {
        id: 2,
        name: "White Swan Chair ",
        price: 50,
        liked: false,
        image: "/cart-img2.png",
        reference: false,
    },
    {
        id: 3,
        name: "White Swan Chair ",
        price: 70,
        liked: false,
        image: "/cart-img3.png",
        reference: false
    },
]


const Popular:React.FC = () => {
    const [currentCard, setCurrentCard]=useState<number>(1)
    const [test, setTest]=useState<boolean>(true)

    const nextSlide = () => {
        setCurrentCard((currentCard + 1) % data.length);
    };
    
    const prevSlide = () => {
        setCurrentCard((currentCard - 1 + data.length) % data.length);
    };

    const handleLike=(n:number)=>{
        data[n].liked=!data[n].liked
        setTest(!test)
    }
  return (
    <div className='popular' id='popular-section'>
      <div className="info">
        <h2>Our Popular Furniture</h2>
        <p>All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials and choices for our customers.</p>
      </div>
      <div className="btn-slider ">
        <img onClick={prevSlide} src="/arrow-left-circle-line.svg" alt="left" />
        <img onClick={nextSlide} src="/arrow-right-circle-line.svg" alt="right" />
      </div>
      <div className="carts-mobile">
      <div className="cart tablet-cart">
            <img className='picture' src={data[(currentCard + 1) % data.length].image} alt="Picture of chair" />
            <div className='cart-info'>
                <div className="cart-info-top">
                    <h6>{data[(currentCard + 1) % data.length].name}</h6>
                    <section>
                        {data[(currentCard + 1) % data.length].liked?
                        <img onClick={()=>{handleLike((currentCard + 1) % data.length)}} src='/liked-heart.svg' alt='liked'/>:
                        <img onClick={()=>{handleLike((currentCard + 1) % data.length)}} src='/disliked-heart.svg' alt='disliked'/>}
                        <img src="/share-icon.svg" alt="share" />
                    </section>
                </div>
                <div className="cart-info-bottom">
                    <span>${data[(currentCard + 1) % data.length].price}</span>
                    <button>Buy Now</button>
                </div>
            </div>
        </div>
        <div className="cart">
            <img className='picture' src={data[currentCard].image} alt="Picture of chair" />
            <div className='cart-info'>
                <div className="cart-info-top">
                    <h6>{data[currentCard].name}</h6>
                    <section>
                        {data[currentCard].liked?
                        <img onClick={()=>{handleLike(currentCard)}} src='/liked-heart.svg' alt='liked'/>:
                        <img onClick={()=>{handleLike(currentCard)}} src='/disliked-heart.svg' alt='disliked'/>}
                        <img src="/share-icon.svg" alt="share" />
                    </section>
                </div>
                <div className="cart-info-bottom">
                    <span>${data[currentCard].price}</span>
                    <button>Buy Now</button>
                </div>
            </div>
        </div>
        <div className="cart desktop-cart">
            <img className='picture' src={data[(currentCard - 1 + data.length) % data.length].image} alt="Picture of chair" />
            <div className='cart-info'>
                <div className="cart-info-top">
                    <h6>{data[(currentCard - 1 + data.length) % data.length].name}</h6>
                    <section>
                        {data[(currentCard - 1 + data.length) % data.length].liked?
                        <img onClick={()=>{handleLike((currentCard - 1 + data.length) % data.length)}} src='/liked-heart.svg' alt='liked'/>:
                        <img onClick={()=>{handleLike((currentCard - 1 + data.length) % data.length)}} src='/disliked-heart.svg' alt='disliked'/>}
                        <img src="/share-icon.svg" alt="share" />
                    </section>
                </div>
                <div className="cart-info-bottom">
                    <span>${data[(currentCard - 1 + data.length) % data.length].price}</span>
                    <button>Buy Now</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Popular
