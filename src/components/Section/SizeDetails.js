import React, { Component } from 'react'
import '../css/Details.css'

export class Sizes extends Component {
    render() {
        const {sizes} = this.props;
        return (
            <div className="size__css">
                <p>Select Size</p>
                {
                    sizes.map((size,index) =>(
                        <button className="btn" key={index} style={{color:"black"}}>{size}</button>
                    )) 
                }
            </div>
        )
    }
}

export default Sizes
