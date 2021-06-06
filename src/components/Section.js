import React, { Component } from 'react'

import Products from './Section/Products'
import Details from './Section/Details'

import Bag from "./Section/Bag"

import SignIn from './User/Signin/Signin'
import SignUp from './User/Signup/Signup'
import  Checkout from './Checkout/Checkout'

import {Route} from 'react-router-dom'

export class Section extends Component {
    render() {
        return (
            <section>
                <Route path="/kim" component={Products} exact/>
                <Route path="/product" component={Products} exact/>
                <Route path="/product/:id" component={Details}/>
                <Route path="/bag" component={Bag}/>
                <Route path="/signin" component={SignIn}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/checkout" component={Checkout}/>
            </section>
        )
    }
}

export default Section
