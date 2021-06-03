import React, { Component } from 'react'
import {Datacontext} from "../Context"
import '../css/Details.css'
import Sizes from './SizeDetails'

export class Details extends Component {
    static contextType = Datacontext;

    state={
        product:[

        ],
        index:0
    }




    myRef = React.createRef();

    handleTab = index =>{
      this.setState({index: index})
      const images = this.myRef.current.children;
      for(let i=0; i<images.length; i++){
        images[i].className = images[i].className.replace("active", "");
      }
      images[index].className = "active";
    };



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
        const {index} = this.state;
        this.myRef.current.children[index].className = "active";
    }

    componentDidMount() {
        this.getProduct();
    }


    render() {
        const {product,index} = this.state;
        const {addBag} = this.context;
        return (
            <>
                {
                    product.map(item => (
                        <div className="details" key={item._id}>
                            <div className="big-img">
                                {/* <img src={item.src} alt="..."/> */}
                            <img src={item.src[index]} alt=""/>
                            </div>
                            <div className="details__content">
                                <div className="row-detail">
                                    <h2>{item.title}</h2>
                                    <span>${item.price}</span>
                                </div>
                                <div className="thumb" ref={this.myRef}>
                                    {
                                        item.src.map((img,index) =>(
                                            <img src={img} alt="" key={index} onClick={() =>this.handleTab(index)}
                                            />
                                        ))
                                    }
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