import React, { Component } from 'react'

export class Sizes extends Component {
    render() {
        const {sizes} = this.props;
        return (
            <div className="colors">
                <p>Select Size</p>
                {
                    sizes.map((size,index) =>(
                        <button key={index} style={{color:"black"}}>{size}</button>
                    )) 
                }
            </div>
        )
    }
}

export default Sizes
