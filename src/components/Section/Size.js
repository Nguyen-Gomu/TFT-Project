import React, { Component } from 'react'
import '../css/Details.css'

export class SelectSizes extends Component {
    render() {
        const {sizes} = this.props;
        return (
            <div className="size-select">
                <select >
                {
                    sizes.map((size,index) =>(
                        <option key={index}  style={{color:"black"}}>{size}</option>
                    )) 
                }
                </select>
            </div>
        )
    }
}

export default SelectSizes
