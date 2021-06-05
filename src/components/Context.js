import React, { Component } from 'react'

export const Datacontext = React.createContext();



export class DataProvider extends Component {

    state ={
        products:[
            {
                "_id":"1",
                "title":"Nike Jordan 1",
                "src":["https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b9bc37ba-c4e3-4fdd-b7c5-f62de33cbbe8/air-jordan-1-mid-shoe-BNc6lg.png",
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f92015c1-2dc1-4e19-bda5-6c97104daacf/air-jordan-1-mid-shoe-BNc6lg.png",
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c2204e6b-ee95-4f60-8dd5-c1a404376964/air-jordan-1-mid-shoe-BNc6lg.png",
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/83375a1b-0052-496f-9137-0f0d7d6e7454/air-jordan-1-mid-shoe-BNc6lg.png"
            ],
                "description":"description",
                "content":"Style: CW1648-004",
                "price":23,
                "kind":"Shoes",
                "sizes": ["EU 40", "EU 40.5", "EU 41", "EU 42","EU 42.5","EU 43","EU 44","EU 44.5","EU 45","EU 45.5","EU 46","EU 47.5"],
                "count":1,
                "quantities":["1","2","3","4","5","6","7","7","8","9","10"]

            },
            {
                "_id":"2",
                "title":"Nike Jordan 2",
                "src":["https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/070f84af-efa3-4c95-9cbc-dc6c6841c0e3/zion-1-basketball-shoe-bJ0hLJ.png",
                    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/0a4242ce-1143-4fa1-a148-16dc71edeb67/zion-1-basketball-shoe-bJ0hLJ.png",
                    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/651a3d1a-e264-4b0e-a7d3-fc58e863d387/zion-1-basketball-shoe-bJ0hLJ.png",
                    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/2f76eaf7-c1e5-45a3-ae7d-c5f6a28a8824/zion-1-basketball-shoe-bJ0hLJ.png",
                    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/764576b5-6e94-4813-a79c-4370fa1b5062/zion-1-basketball-shoe-bJ0hLJ.png",
                    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9d4ca92d-75b6-4901-b0d3-9d8cc8044d69/zion-1-basketball-shoe-bJ0hLJ.png"],
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
                "src":["https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/62e3e780-5922-4637-b313-868444cf7151/jordan-adg-3-mens-golf-shoe-CxdNRV.png",
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/19d259a0-7d90-4064-9b72-a00a67a9c820/jordan-adg-3-mens-golf-shoe-CxdNRV.png",
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/86a3b829-4302-47d5-a1a5-4119486f8907/jordan-adg-3-mens-golf-shoe-CxdNRV.png",
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/dc38eaca-ef32-4cb6-a7ed-e75ac60a102b/jordan-adg-3-mens-golf-shoe-CxdNRV.png"],
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
                "src":["https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4b394abc-9a8b-4f05-bd0b-3c473f7a6c72/jordan-why-not-zer04-family-basketball-shoe-MkFHlx.png",
                    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e17599a3-5dff-4866-a35a-45fa79abddad/jordan-why-not-zer04-family-basketball-shoe-MkFHlx.png",
                    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/935d623f-c8e3-46c9-ad74-6609d78265af/jordan-why-not-zer04-family-basketball-shoe-MkFHlx.png",
                    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/3ef4f27a-24f0-41b5-ab50-9ccfa907685c/jordan-why-not-zer04-family-basketball-shoe-MkFHlx.png"],
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
                "src":["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d6f66b63-127f-4856-a4ed-2fc54f2aa4d6/jordan-adg-2-mens-golf-shoe-lcbnnm.png",
                    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/26970b18-e001-4219-afd2-248b861704cd/jordan-adg-2-mens-golf-shoe-lcbnnm.png",
                    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/12f7423d-2f55-477a-81af-df794ec51559/jordan-adg-2-mens-golf-shoe-lcbnnm.png",
                    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/621c14bb-f851-407a-9da2-34bb79d69342/jordan-adg-2-mens-golf-shoe-lcbnnm.png",
                    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/157fbadb-0932-4956-9d37-33a93d063dfa/jordan-adg-2-mens-golf-shoe-lcbnnm.png"],
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
                "src":["https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f99a1e42-2e96-4bc9-9a44-ef2985e83dde/jordan-air-cadence-mens-shoe-CCZftP.png",
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/30952408-b811-4cd3-ac64-529ff6ca406e/jordan-air-cadence-mens-shoe-CCZftP.png",
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f5df49db-0498-469c-80b7-7e54d7728ca2/jordan-air-cadence-mens-shoe-CCZftP.png",
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9c8ba8b3-9ff0-405e-82c9-7a96bf848563/jordan-air-cadence-mens-shoe-CCZftP.png",
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/857b02c6-58dc-464d-97b8-1efb9473b408/jordan-air-cadence-mens-shoe-CCZftP.png"],
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
                "src":["https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8e500cf3-a78f-4579-8f45-17050e20317c/jordan-one-take-ii-basketball-shoe-dcsGDx.png",
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/74001d44-7a91-43d5-ba6f-4c481ded4738/jordan-one-take-ii-basketball-shoe-dcsGDx.png",
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/53cccc64-e1b3-4ece-b573-a68d3628fb49/jordan-one-take-ii-basketball-shoe-dcsGDx.png",
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/2de91ea0-7d6a-46e9-8248-429cf43d887a/jordan-one-take-ii-basketball-shoe-dcsGDx.png",
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/87e6f840-bd4f-4c5f-bc6a-0354c9bfaaf4/jordan-one-take-ii-basketball-shoe-dcsGDx.png"],
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
                "src":["https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/47922912-39af-49e3-ac43-d11aac1ac7ba/air-jordan-1-mid-shoe-nwV1GK.png",
                    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b1defe9a-c870-4b09-9f60-38abf5572d8a/air-jordan-1-mid-shoe-nwV1GK.png",
                    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/98065153-663f-41e3-9424-a70bc08f989d/air-jordan-1-mid-shoe-nwV1GK.png",
                    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/1f70fb23-c76e-407b-90e8-ec7e43e6356c/air-jordan-1-mid-shoe-nwV1GK.png"],
                "description":"description",
                "content":"content",
                "price":23,
                "kind":"Shoes",
                "sizes": ["EU 40", "EU 40.5", "EU 41", "EU 42","EU 42.5","EU 43","EU 44","EU 44.5","EU 45","EU 45.5","EU 46","EU 47.5"],
                "count":1,
                "quantities":["1","2","3","4","5","6","7","7","8","9","10"]


            }

        ],
        bag:[

        ],
        total:0

    };

    // select images - page detail products (start)

    
  
    // componentDidMount(){
        // const {index} = this.state;
        // this.myRef.current.children[index].className = "active";
    // }
    // end

    addBag =(id)=>{
        const {products,bag} = this.state;
        const check = bag.every(item=>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product => {
                return product._id === id
            })
            this.setState({bag: [...bag,...data]});
        }else{
            alert("The product has been added to Bag.")
        }
    }



    reduction = id => {
        const {bag} = this.state;
        bag.forEach(item => {
            if(item._id===id){
                item.count===1 ? item.count=1 : item.count-=1;
            }
        })
        this.setState({bag:bag});
        this.getTotal();
    }

    increase = id => {
        const {bag} = this.state;
        bag.forEach(item => {
            if(item._id===id){
                item.count === 10 ? alert("het hang") : item.count +=1; 
            }
        })
        this.setState({bag:bag});
        this.getTotal();
    }


    removeProduct = id=>{
        if(window.confirm("Are you sure ?")){
            const {bag} = this.state;
            bag.forEach((item,index)=>{
                if(item._id === id){
                    bag.splice(index, 1);
                }
            })
            this.setState({bag:bag});
            this.getTotal();
        }
    }


    getTotal = ()=>{
        const{bag} = this.state;
        const res = bag.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };


    componentDidUpdate(){
        localStorage.setItem('dataBag',JSON.stringify(this.state.bag))
        localStorage.setItem('dataTotal',JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataBag = JSON.parse(localStorage.getItem('dataBag'));
        if(dataBag !== null){
            this.setState({bag:dataBag});
        }

        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total:dataTotal});
        }
    }
    


    render() {

        const {products,bag,total} =this.state;
        const {addBag,removeProduct,getTotal,reduction,increase} = this;

        return (
            <Datacontext.Provider value={{products,addBag,bag,removeProduct,getTotal,reduction,increase,total}}>
                {this.props.children}
            </Datacontext.Provider>
        )
    }
}
