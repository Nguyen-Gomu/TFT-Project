import React, { Component } from 'react'

export const Datacontext = React.createContext();



export class DataProvider extends Component {

    state ={
        products:[
            {
                "_id":"1",
                "title":"Nike Jordan 1",
                "src":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7a0735a2-3926-4e15-9f39-5616ce97c107/air-jordan-7-shoe.png",
                "description":"Description",
                "content":"Content",
                "price":23,
                "kind":"Shoes",
                "sizes": ["EU 40", "EU 40.5", "EU 41", "EU 42","EU 42.5","EU 43","EU 44","EU 44.5","EU 45","EU 45.5","EU 46","EU 47.5"],
                "count":1,
                "quantities":["1","2","3","4","5","6","7","7","8","9","10"]

            },
            {
                "_id":"2",
                "title":"Nike Jordan 2",
                "src":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1589aaae-3b50-4b7c-a74e-066bf4a1c7c0/jordan-why-not-zer03-se-pf-basketball-shoe-rZMTBN.png",
                "description":"description",
                "content":"content",
                "price":23,
                "kind":"Shoes",
                "sizes": ["EU 40", "EU 40.5", "EU 41", "EU 42","EU 42.5","EU 43","EU 44","EU 44.5","EU 45","EU 45.5","EU 46","EU 47.5"],
                "count":1,
                "quantities":["1","2","3","4","5","6","7","7","8","9","10"]
                

            },
            {
                "_id":"3",
                "title":"Nike Jordan 3",
                "src":"https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/6a611a8c-55f4-4b8d-94b1-2cdf74040716/zion-1-zna-basketball-shoe-bHGvxg.png",
                "description":"description",
                "content":"content",
                "price":23,
                "kind":"Shoes",
                "sizes": ["EU 40", "EU 40.5", "EU 41", "EU 42","EU 42.5","EU 43","EU 44","EU 44.5","EU 45","EU 45.5","EU 46","EU 47.5"],
                "count":1,
                "quantities":["1","2","3","4","5","6","7","7","8","9","10"]


            },
            {
                "_id":"4",
                "title":"Nike Jordan 4",
                "src":"https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/63a5e8d4-b2dd-4f0a-8861-ec8c864dfddf/jordan-one-take-ii-pf-basketball-shoe-m666jq.png",
                "description":"description",
                "content":"content",
                "price":23,
                "kind":"Shoes",
                "sizes": ["EU 40", "EU 40.5", "EU 41", "EU 42","EU 42.5","EU 43","EU 44","EU 44.5","EU 45","EU 45.5","EU 46","EU 47.5"],
                "count":1,
                "quantities":["1","2","3","4","5","6","7","7","8","9","10"]


            },
            {
                "_id":"5",
                "title":"Nike Jordan 5",
                "src":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c334515b-612d-4470-a886-7c3a85bd050d/air-jordan-13-xcK6vg.png",
                "description":"description",
                "content":"content",
                "price":23,
                "kind":"Shoes",
                "sizes": ["EU 40", "EU 40.5", "EU 41", "EU 42","EU 42.5","EU 43","EU 44","EU 44.5","EU 45","EU 45.5","EU 46","EU 47.5"],
                "count":1,
                "quantities":["1","2","3","4","5","6","7","7","8","9","10"]


            },
            {
                "_id":"6",
                "title":"Nike Jordan 6",
                "src":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b3d843c9-3b00-4d52-ac78-b83913fda1c4/jordan-ma2-still-loading-shoe-qw1Z6m.png",
                "description":"description",
                "content":"content",
                "price":23,
                "kind":"Shoes",
                "sizes": ["EU 40", "EU 40.5", "EU 41", "EU 42","EU 42.5","EU 43","EU 44","EU 44.5","EU 45","EU 45.5","EU 46","EU 47.5"],
                "count":1,
                "quantities":["1","2","3","4","5","6","7","7","8","9","10"]


            },
            {
                "_id":"7",
                "title":"Nike Jordan 7",
                "src":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c3c57da5-7511-4340-b8ad-6306ec087356/air-jordan-xxxv-pf-basketball-shoe-QrRrHz.png",
                "description":"description",
                "content":"content",
                "price":23,
                "kind":"Shoes",
                "sizes": ["EU 40", "EU 40.5", "EU 41", "EU 42","EU 42.5","EU 43","EU 44","EU 44.5","EU 45","EU 45.5","EU 46","EU 47.5"],
                "count":1,
                "quantities":["1","2","3","4","5","6","7","7","8","9","10"]


            },
            {
                "_id":"8",
                "title":"Nike Jordan 8",
                "src":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4869db67-36f8-4352-90b9-de762256d4f2/jordan-react-elevation-pf-basketball-shoe-WhWgxz.png",
                "description":"description",
                "content":"content",
                "price":23,
                "kind":"Shoes",
                "sizes": ["EU 40", "EU 40.5", "EU 41", "EU 42","EU 42.5","EU 43","EU 44","EU 44.5","EU 45","EU 45.5","EU 46","EU 47.5"],
                "count":1,
                "quantities":["1","2","3","4","5","6","7","7","8","9","10"]


            }

        ],
        bag:[]
    };

    addBag =(id)=>{
        const {products,bag} = this.state;
        const data = products.filter(product => {
            return product._id === id
        })
        this.setState({bag: [...bag,...data]});
    }



    render() {

        const {products,bag} =this.state;
        const {addBag} = this;

        return (
            <Datacontext.Provider value={{products,addBag,bag}}>
                {this.props.children}
            </Datacontext.Provider>
        )
    }
}
