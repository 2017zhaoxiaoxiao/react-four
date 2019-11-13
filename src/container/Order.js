import React, { Component } from 'react'
import { NavBar} from 'antd-mobile';
export default class Order extends Component {
    render() {
        return (
            <div style={{width:"100%",backgroundColor:'#e5e5e5'}}>
                 <NavBar
                   style={{backgroundColor:'#bc0400',color:'#fff',width:"100%"}} 
                >
                    我的订单
                   
               </NavBar> 
               <div style={{width:"100%",height:100,border:"solid 1px #e5e5e5",backgroundColor:'#fff',padding:30 }}>
                   <p style={{fontSize:'20px',margin:0,float:'left'}}>我的订单</p>
                   <p style={{fontSize:'20px',margin:0,marginLeft:160,float:'left'}}>全部订单>></p>
               </div>
            </div>
        )
    }
}
