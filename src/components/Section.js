import React, { Component } from 'react'

import Products from './Section/Products'
import Details from './Section/Bag'

import Bag from './Section/Details'

import {Route} from 'react-router-dom'

export class Section extends Component {
    render() {
        return (
            <section>
                <Route path="/product" component={Products} exact/>
                <Route path="/product/:id" component={Details}/>
                <Route path="/Bag" component={Bag}/>
            </section>
        )
    }
}

export default Section
