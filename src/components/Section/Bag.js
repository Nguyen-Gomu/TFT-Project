import React, { Component } from 'react'
import {Datacontext} from "../Context"
import {Link} from "react-router-dom"
import '../css/Details.css'
import Sizes from './Colors'

import SelectSizes from './Size'
import SelectQuantity from './Quantity'

export class Details extends Component {
    static contextType = Datacontext;

    state={
        product:[

        ]
    }

    getProduct=() => {
        if(this.props.match.params.id){
            const res=this.context.products;
            const data =res.filter(item =>{
                return item._id === this.props.match.params.id
            })
            this.setState({product:data})
        }
    }


    componentDidMount(){
        this.getProduct();
    }

    render() {
        const {product} = this.state;
        const {size} = this.props;
        return (
            <>
                {
                    product.map(item => (
                        <div className="details" key={item._id}>
                            <div className="bag">
                                <h4>Bag</h4>
                                <div className="bagBox">  
                                    <img src={item.src} alt="..."/>
                                        <div className="row">
                                            <h2>{item.title}</h2>
                                            <p>{item.description}</p>
                                            <p>{item.content}</p>
                                            
                                            <div className="row-2">
                                                <div className="select_size">
                                                    <label>Size:</label>
                                                    <SelectSizes sizes={item.sizes}/>   
                                                </div>
                                                <div className="select_quantity">
                                                    <label>Quantity:</label>
                                                    <p>{item.quantity}</p>
                                                    <SelectQuantity quantities={item.quantities}/>
                                                </div>
                                            </div>
                                        </div>
                                        <span>${item.price}</span>
                                </div>
                                <hr/>
                            </div>
                            <div className="summary">
                                <h4>Summary</h4>
                                < div className="summaryBox">
                                    <div className="subtotal">
                                        <span>Subtotal</span>
                                        <p>$.........</p>
                                    </div>
                                    <div className="ship">
                                        <span>Estimated Delivery & Handling</span>
                                        <p>$.........</p>
                                    </div>
                                    <hr/>
                                    <div className="total">
                                        <span>Total</span>
                                        <p>$.........</p>
                                    </div>
                                    <hr/>
                                    <Link to="/product" className="cart">
                                        Guest Checkout
                                    </Link>
                                    <Link to="/bag" className="cart">
                                        Add to Bag
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }
}

export default Details