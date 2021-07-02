import React from 'react'
import Header from '../component/Header'
import Slider from "../component/slider"
import Productbr from '../component/Productbr'
import Product1 from "../img/man.jpg"
import Product from "../component/Product"
import "../style/home.css"
function Home() {
    return (
        <div>
            <Header />
            <div className="slider__div"><Slider/></div>
            <div className="home">
                <div className="home__container">
              


                    <div className="home__row">
                        <Productbr
                            title="Book"
                            image={Product1}
                            link="books"
                        />
                         <Productbr
                            title="Book"
                            image={Product1}
                            link="books"
                        />
                         <Product
                            title="Book"
                            price={25}
                            image={Product1}
                          
                        />
                       
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home
