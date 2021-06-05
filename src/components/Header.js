import React, { Component } from 'react'
// import Menu from './svg/bars-solid.svg'
// import Close from './svg/times-solid.svg'
// import CartIcon from './svg/shopping-cart-solid.svg'
import {Link} from 'react-router-dom'
import './css/Header.css'
import {Datacontext} from "./Context"



export class Header extends Component {
    static contextType = Datacontext;

    state = {
        toggle: false
    }

    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }


    render() {
        const {toggle} = this.state;
        const {bag} = this.context;
        return (
            <header>
                <div className="header__container">
                    <div className="nav-icons">
                        <div className="menu" onClick={this.menuToggle}>
                            <i class="fas fa-bars"></i>
                        </div>
                        <div className="logo">
                            <h1><Link to="/">PK-K</Link></h1>
                        </div>
                        <nav>
                            <div className="nav-right">
                                <span>{bag.length}</span>
                                <Link to="/bag">
                                    <i class="fas fa-shopping-cart"></i>
                                </Link>
                                <Link to="/signin">
                                    <i class="fas fa-user"></i>
                                </Link>
                                <Link to="/" onClick={this.menuToggle}>
                                    <i class="fas fa-search"></i>
                                </Link>
                            </div>
                        </nav>
                    </div>
                    <nav className="nav-menu">
                        <ul className={toggle ? "toggle" : ""}>
                            <li className="close" onClick={this.menuToggle}>
                                <i class="fas fa-times"></i>
                            </li>
                            <li><Link to="/">FEATURES</Link></li>
                            <li>
                                <Link to="/product" id="footwear">Footwear</Link>
                                <div className="menu__sub">
                                    <ul>
                                        <li><Link to="/">Newest Sneakers</Link></li>
                                        <li><Link to="/">Lifestyle</Link></li>
                                        <li><Link to="/">Running</Link></li>
                                        <li><Link to="/">Basketball</Link></li>
                                        <li><Link to="/">Gym & Training</Link></li>
                                        <li><Link to="/">Sandal</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link to="/contact">Apparel</Link>
                                <div className="menu__sub">
                                    <ul>
                                        <li><Link to="/">CONIC®</Link></li>
                                        <li><Link to="/">Hoodies</Link></li>
                                        <li><Link to="/">Shorts</Link></li>    
                                        <li><Link to="/">Pants</Link></li>
                                        <li><Link to="/">Outerwears</Link></li>
                                        <li><Link to="/">Tees</Link></li>
                                        <li><Link to="/">Shirts</Link></li>
                                        <li><Link to="/">Jackets</Link></li>
                                        <li><Link to="/">Sweaters</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link to="/about">Accessories</Link>
                                <div className="menu__sub">
                                    <ul>
                                        <li><Link to="/">Watch</Link></li>
                                        <li><Link to="/">Socks</Link></li>
                                        <li><Link to="/">Cap</Link></li>    
                                        <li><Link to="/">Backpack and Bag</Link></li>
                                        <li><Link to="/">Shoe Care</Link></li>
                                        <li><Link to="/">Glasses</Link></li>
                                        <li><Link to="/">Miscellaneous</Link></li>
                                        <li><Link to="/">Bearbricks</Link></li>
                                        <li><Link to="/">Face Mask</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li><Link to="/login">Used</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className={toggle ? "toggle" : ""}>
                    <div className="Search__right">
                        <div className="text__right">
                            <span id="close__icon" onClick={this.menuToggle}><i class="fas fa-times"></i></span>
                        </div>
                        <form className="search__form">
                            <input type="text" className="ipt__search" placeholder="Search"></input>
                            <button className="arrow__left">
                                <i class="fas fa-arrow-left"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </header>
        )
    }
}


export default Header