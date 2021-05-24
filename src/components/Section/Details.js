import React, { Component } from 'react'
import {Datacontext} from "../Context"
import {Link} from "react-router-dom"
import '../css/Details.css'
import Sizes from './Colors'

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
        return (
            <>
                {
                    product.map(item => (
                        <div className="details" key={item._id}>
                            <img src={item.src} alt="..."/>
                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>${item.price}</span>
                                </div>
                                <Sizes sizes={item.sizes}/>

                                <p>{item.description}</p>
                                <p>{item.content}</p>
                                <Link to="/bag" className="cart">
                                    Add to Bag
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }
}

export default Details