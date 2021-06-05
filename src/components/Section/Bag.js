import React, { Component } from 'react'
import {Datacontext} from "../Context"
import {Link} from "react-router-dom"
import '../css/Bag.css'

import SelectSizes from '../Section/Size'

export class Bag extends Component {
    static contextType = Datacontext;

    componentDidMount() {
        this.context.getTotal();
    }
    render() {
        const {bag,removeProduct,reduction,increase,total}=this.context;
        if(bag.length===0){
            
            return (<h1 style={{textAlign:"center"}}>Nothings Product</h1>)
        }
        else{
            return (
                <>
                    {
                        bag.map(item => (
                            <div className="bag__container" key={item._id}>
                                <div className="bag">
                                    <h4>Bag</h4>
                                    <div className="bag__Box">  
                                        <img src={item.src[0]} alt="..."/>
                                        <div className="bag__Row">
                                            <div className="bag__Row--content">
                                                <span className="bag__Box--title">{item.title}</span>
                                                <p>{item.description}</p>
                                                <p>{item.content}</p>
                                                <label>Quantity:</label>
                                                <button className="count" onClick={()=>reduction(item._id)}>-</button>
                                                <span className="number">{item.count}</span>
                                                <button className="count" onClick={()=>increase(item._id)}>+</button>
                                                <div className="select__size">
                                                <label style={{marginRight:"10px"}}>Size:</label>
                                                <SelectSizes sizes={item.sizes}/>   
                                                </div>
                                            </div>
                                            <div className="delete" onClick={() => removeProduct(item._id)}>remove</div>
                                        </div>
                                        <span className="price">${item.price * item.count}</span>
                                    </div>
                                </div>
                                <div className="summary">
                                    <h4>Summary</h4>
                                    < div className="summary__Box">
                                        <div className="summary__Box--subtotal">
                                            <span>Subtotal</span>
                                            <p>${ total}</p>
                                        </div>
                                        <div className="summary__Box--ship">
                                            <span>Estimated Delivery & Handling</span>
                                            <p>$.........</p>
                                        </div>
                                        <hr/>
                                        <div className="summary__Box--total">
                                            <span>Total</span>
                                            <p>${total}</p>
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