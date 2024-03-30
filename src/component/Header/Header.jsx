import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Navigation ,Autoplay} from 'swiper/modules';
import axios from 'axios';
export default class Header extends Component {
  
  constructor(){
    super();
this.state = { 
  news:null
}
  }
componentDidMount(){
   axios.get('https://newsapi.org/v2/top-headlines?pagesize=1&sources=bbc-news&apiKey=172dc531071343e6a6c6f7fbc7cfd164').then((response)=>{
    let {articles}= response.data;
    console.log(articles);
    this.setState({news:articles})
  }).catch((error)=>{
alert(error)
  })
}
  

render (){
  return(
    <>
<Swiper 
modules={[Navigation,Autoplay]}
navigation
Autoplay ={{delay:5000}}
>

{this.State.news&&this.setState.news.map((e)=>
<SwiperSlide key={true}>
<img src={e.urlToImage}className='w-100' alt={e.title}title={e.title}/>

</SwiperSlide>
)
}

</Swiper>
</>
  )
}
}