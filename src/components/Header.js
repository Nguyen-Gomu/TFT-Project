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
        const {cart} = this.context;
        return (
            <header>
                <div className="nav-icons">
                    <div className="menu" onClick={this.menuToggle}>
                        <i class="fas fa-bars"></i>
                    </div>
                    <div className="logo">
                        <h1><Link to="/">PK-K</Link></h1>
                    </div>
                    <nav>
                        <div className="nav-right">
                            <Link to="/cart">
                                <i class="fas fa-shopping-cart"></i>
                            </Link>
                            <Link to="/uer">
                                <i class="fas fa-user"></i>
                            </Link>
                            <Link to="/search">
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
                        <li><Link to="/product">Footwear</Link></li>
                        <li><Link to="/contact">Apparel</Link></li>
                        <li><Link to="/about">Accessories</Link></li>
                        <li><Link to="/login">Used</Link></li>
                    </ul>
                </nav>

                {/* <nav className={toggle ? "toggle" : ""} >
                    <ul className="nav-menu">
                        <li className="close" onClick={this.menuToggle}>
                            <i class="fas fa-times"></i>
                        </li>
                        <li><Link to="/">FEATURES</Link></li>
                        <li><Link to="/product">Footwear</Link></li>
                        <li><Link to="/contact">Apparel</Link></li>
                        <li><Link to="/about">Accessories</Link></li>
                        <li><Link to="/login">Used</Link></li>
                    </ul>
                </nav> */}

            </header>
        )
    }
}


export default Header