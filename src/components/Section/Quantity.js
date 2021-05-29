import React, { Component } from 'react'
import '../css/Details.css'

export class SelectQuantity extends Component {
    render() {
        const {quantities} = this.props;
        return (
            <div className="size-select">
                <select>
                {
                    quantities.map((quantity,index) =>(
                        <option key={index} style={{color:"black"}}>{quantity}</option>
                    )) 
                }
                </select>
            </div>
        )
    }
}

export default SelectQuantity
