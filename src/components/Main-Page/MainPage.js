import React, { Component }from 'react';
import {Link} from 'react-router-dom'
import '../css/MainPage.css'


import clothing from '../../assets/images/hero_closther.jpg'
import shoe from '../../assets/images/hero_shoe.jpg'
import justdoit from '../../assets/images/nike-just-do-it.jpg'

import shirt from '../../assets/images/nike-shirt.jpg'
import sandal from '../../assets/images/nike-sandal.jpg'
import clothers from '../../assets/images/nike-clothers.jpg'

import man from '../../assets/images/man.jpg'
import woman from '../../assets/images/woman.jpg'

// //////

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
                    <Link href="/"><img src={justdoit} alt="" className="home__img"></img></Link>
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
                            <Link href="/"><img src={shoe} alt="" className="hero__img"/></Link>
                        </div>
                        <div className="hero__left">
                            <div className="hero__data--left">
                                <h1 className="hero__title">clothes</h1>
                                <Link href="/" className="button-right">Shop</Link>
                            </div>
                            <Link href="/"><img src={clothing} alt="" className="hero__img"/></Link>
                        </div>
                        
                    </div>
                </div>
                {/* End Hero */}
                
                {/* List Product */}
                <div className="product">
                    <h1>List Product Here</h1>
                </div>
                {/* End List Product */}

                {/* Kind Products */}
                <div className="kind">
                    <h1 className="kind__title">Summer Essentials</h1>
                    <div className="kind__container">
                        <div className="kind__data">
                            <div className="row-1">
                                <Link href="/">
                                    <img className="kind__img" src={shirt}/>
                                    <p className="kind__description">Top & T-Shirt</p>
                                </Link>
                            </div>
                            <div className="row-2">
                                <Link href="/">
                                    <img className="kind__img" src={sandal}/>
                                    <p className="kind__description">Sandals & Slides</p>
                                </Link>
                            </div>
                            <div className="row-3">
                                <Link href="/">
                                    <img className="kind__img" src={clothers}/>
                                    <p className="kind__description">Shorts</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Kind */}


                <div className="product">
                    <h1>List Product Here</h1>
                </div>

                {/* Men-Woman */}
                <div className="who">
                    <h1>WHO ARE YOU SHOPPING FOR?</h1>
                    <div className="who__container">
                        <div className="who__right">
                            <Link href="/">
                                <img className="who__img" src={man}/>
                                <p>Man</p>
                            </Link>
                        </div>
                        <div className="who__left">
                            <Link href="/">
                                <img className="who__img" src={woman}/>
                                <p>Woman</p>
                            </Link>
                        </div>
                    </div>
                </div>
                
            </section>
        )
    }
}

export default MainPage;