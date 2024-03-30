import React, { Component } from 'react'
import axios from 'axios';
export default class Api extends Component {
    constructor(){
        super();
        this.state={ 
          apidata:[]
        }
      
    }
    componentDidMount(){
 let data= axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=172dc531071343e6a6c6f7fbc7cfd164')
 .then((Response)=>{
this.setState({apidata:Response.data})
});
this.setState({apidata:data})
    }
  render() {
    return (
      <>
<div className='container'>
    <div className='row'>
        {this.State.apidata && this.setState.apidata.map((item)=>
        <div className='col-md-4'>        

        <h1>{item.title}</h1>
        </div>
        )}



    </div>
</div>
      </>
    )
  }
}
