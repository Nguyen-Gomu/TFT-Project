import React, { Component } from 'react'
import {Datacontext} from "../Context"
import {Link} from "react-router-dom"
import '../css/Bag.css'
// import Sizes from './SizeDetails'

import SelectSizes from '../Section/Size'
import SelectQuantity from '../Section/Quantity'

export class Bag extends Component {
    static contextType = Datacontext;
    render() {
        const {bag,removeProduct,reduction,increase}=this.context;
        if(bag.length===0){
            
            return (<h1 style={{textAlign:"center"}}>Nothings Product</h1>)
        }
        else{
            return (
                <>
                    {
                        bag.map(item => (
                            <div className="details" key={item._id}>
                                <div className="bag">
                                    <h4>Bag</h4>
                                    <div className="bagBox">  
                                        <img src={item.src} alt="..."/>
                                        <div className="bagRow">
                                            <h2>{item.title}</h2>
                                            <p>{item.description}</p>
                                            <p>{item.content}</p>
                                                
                                            <div className="row-2">
                                                
                                                <div className="select_quantity">
                                                    <label>Quantity:</label>
                                                    {/* <SelectQuantity quantities={item.quantities}/> */}
                                                    <button className="count" onClick={()=>reduction(item._id)}>-</button>
                                                    <span>{item.count}</span>
                                                    <button className="count" onClick={()=>increase(item._id)}>+</button>
                                                </div>
                                                <div className="select_size">
                                                    <label>Size:</label>
                                                    <SelectSizes sizes={item.sizes}/>   
                                                </div>
                                            </div>
                                            <div className="delete" onClick={() => removeProduct(item._id)}>remove</div>
                                        </div>
                                        <span>${item.price * item.count}</span>
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
                                        <Link to="/product" className="cart" to="/checkout">
                                            Guest Checkout
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
        
}

export default Bag