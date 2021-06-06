import React, { Component }from 'react';
import {Link} from 'react-router-dom'
import '../css/MainPage.css'


import clothing from '../../assets/images/hero_closther.jpg'
import shoe from '../../assets/images/hero_shoe.jpg'
import justdoit from '../../assets/images/nike-just-do-it.jpg'

export class MainPage extends Component{
    render() {
        return (
            <section className="home" id="home">
                {/* Start Home */}
                <div className="home__container">
                    <div className="home__data">
                        <h1 className="home__title">YOUR WORKHORSE <br/> WITH WINGS</h1>
                        <p className="home__description">nearly four decade and millions of miles later,<br/> the Pegasus 38 is really to run</p>
                        <Link href="/" className="button">Shop</Link>
                    </div>
                    <img src={justdoit} alt="" className="home__img"></img>
                </div>
                {/* End Home */}

                {/* Start Hero */}
                <div className="hero">
                    <h1 className="hero__Logo">Trending Now</h1>
                    <div className="hero__container">
                        <div className="hero__right">
                            <div className="hero__data--right">
                                <h1 className="hero__title">Shoes</h1>
                                <Link href="/" className="button">Shop</Link>
                            </div>
                            <img src={shoe} alt="" className="hero__img"/>
                        </div>
                        <div className="hero__left">
                            <div className="hero__data--left">
                                <h1 className="hero__title">clothes</h1>
                                <Link href="/" className="button-right">Shop</Link>
                            </div>
                            <img src={clothing} alt="" className="hero__img"/>
                        </div>
                        
                    </div>
                </div>
                {/* End Hero */}
                

            </section>
        )
    }
}

export default MainPage;