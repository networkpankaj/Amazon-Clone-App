import React from 'react'
import "./Home.css"
import Product from './Product';

function Home() {
  return (


    <div className='home'>
        <div className="home__container">

            <img class="style__heroImage__12q9C style__cover__2N0YX" 
            src="https://m.media-amazon.com/images/S/abs-image-upload-na/b/AmazonStores/A21TJRUUN4KGV/aa672c84ff8db574d051e2a1c0dc0cdc.w3000.h600._CR0%2C0%2C3000%2C600_SX1500_.jpg" srcset="https://m.media-amazon.com/images/S/abs-image-upload-na/b/AmazonStores/A21TJRUUN4KGV/aa672c84ff8db574d051e2a1c0dc0cdc.w3000.h600._CR0%2C0%2C3000%2C600_SX840_.jpg 840w, https://m.media-amazon.com/images/S/abs-image-upload-na/b/AmazonStores/A21TJRUUN4KGV/aa672c84ff8db574d051e2a1c0dc0cdc.w3000.h600._CR0%2C0%2C3000%2C600_SX1280_.jpg 1280w, https://m.media-amazon.com/images/S/abs-image-upload-na/b/AmazonStores/A21TJRUUN4KGV/aa672c84ff8db574d051e2a1c0dc0cdc.w3000.h600._CR0%2C0%2C3000%2C600_SX1500_.jpg 1500w, https://m.media-amazon.com/images/S/abs-image-upload-na/b/AmazonStores/A21TJRUUN4KGV/aa672c84ff8db574d051e2a1c0dc0cdc.w3000.h600._CR0%2C0%2C3000%2C600_SX1920_.jpg 1920w, https://m.media-amazon.com/images/S/abs-image-upload-na/b/AmazonStores/A21TJRUUN4KGV/aa672c84ff8db574d051e2a1c0dc0cdc.w3000.h600._CR0%2C0%2C3000%2C600_SX3000_.jpg 3000w" sizes="(max-width: 840px) 100vw,(max-width: 1500px) 100vw,1500px" data-feature="cf">

            </img>

            <div className="home__row">
                <Product
                   id="12321341" 
                   title="The Lean startup: How Constant Innovation Creates Radically Successful
                   Businesses Paperback"
                   price={29.99}
                   rating={4}
                   image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                />

                <Product
                    id="49538094"
                    title="Apple iPhone 12(64GB) - White"
                    price={239.0}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/711wsjBtWeL._AC_SY200_.jpg" 
                />

            </div>

            <div className="home__row">
                <Product
                    id="4903850"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                    price={199.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" 
                />
                <Product
                    id="23445930"
                    title="Amazon Echo (3rd generation) | Smart Speaker with ALexa"
                    price={98.99}
                    rating={4}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"  
                />
                <Product
                     id="3254354345"
                     title="New Apple ipad Pro (12.9-ich, wi-fi, 128GB) - Silver (4th Generation) "
                     price={599.99}
                     rating={4}
                     image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg" 
                /> 
        
            </div>

            <div className="home__row">
                <Product 
                    id="90829332"
                    title="Samsung LC49RG90SSUXEN 49, Curved LED Gaming Monitor - Super Ultra Wide
                    Dual WQHD 5120 x 1440"
                    price={1094.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"    
                /> 

            </div>



        </div>
    </div>

    



  )
}

export default Home