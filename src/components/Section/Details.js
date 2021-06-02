import React, { Component } from 'react'
import {Datacontext} from "../Context"
// import {Link} from "react-router-dom"
import '../css/Details.css'
import Sizes from './SizeDetails'

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
        const {addBag} = this.context;
        return (
            <>
                {
                    product.map(item => (
                        <div className="details" key={item._id}>
                            <img src={item.src} alt="..."/>
                            <div className="details__content">
                                <div className="row-detail">
                                    <h2>{item.title}</h2>
                                    <span>${item.price}</span>
                                </div>
                                <Sizes sizes={item.sizes}/>
                                <p>{item.description}</p>
                                <p>{item.content}</p>
                                <button onClick={()=> addBag(item._id)} className="cart">Add to cart</button>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }
}

export default Details