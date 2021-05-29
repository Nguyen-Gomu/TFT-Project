import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import "./css/Footer.css"

export class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <h1 className="logo-footer">
                            <Link to="/">PK-K</Link>
                    </h1>
                    <div className="row">
                        <div className="col-1">
                            <p className="item-title">Service & Support</p>
                            <Link className="item-content">
                                pkgomu@gamil.com
                            </Link>
                            <Link className="item-content">
                                012345678910
                            </Link>
                            <Link className="item-content">
                                Location
                            </Link>
                        </div>
                        <div className="col-1">
                            <p className="item-title">Info</p>
                            <Link className="item-content">
                                Consignment Terms
                            </Link>
                            <Link className="item-content">
                                Connect with Us
                            </Link>
                            <Link className="item-content">
                                Delivery and Returns
                            </Link>
                        </div>
                        <div className="col-1">
                            <p className="item-title">Follow Us</p>
                            <Link className="item-content">
                                facebook
                            </Link>
                            <Link className="item-content">
                                Instagram
                            </Link>
                            <Link className="item-content">
                                Twitter
                            </Link>
                        </div>
                    </div>
                    <div className="copyright">
                        Copyright © 2018 PKGOMU.VN
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;