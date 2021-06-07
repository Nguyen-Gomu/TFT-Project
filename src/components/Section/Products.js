import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Datacontext} from "../Context"
import "../css/Products.css"

export class Products extends Component {

    static contextType = Datacontext;

    render() {
        const {products,addBag} = this.context;
        return (
            <div id="product">
               {
                   products.map(product =>(
                       <div className="card" key={product._id}>
                           <Link to={`/product/${product._id}`}>
                               <img src={product.src[0]} alt=""/>
                           </Link>
                           <div className="content">
                                
                                <h3>
                                    <Link to ={`/product/${product._id}`}>{product.title}</Link>
                                </h3> 
                                <p>
                                    {product.description}
                                </p> 
                                <p>
                                      {product.kind}  
                                </p>  
                                <span>
                                      ${product.price}  
                                </span>


                                <button onClick={()=> addBag(product._id)}>Add to cart</button>

                           </div>
                       </div>
                   ))
               }
            </div>
        )
    }
}

export default Products