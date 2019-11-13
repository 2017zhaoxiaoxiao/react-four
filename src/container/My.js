import React, { Component } from 'react'
import { NavBar} from 'antd-mobile';
import my from '../img/my.png'
import { Tabs } from 'antd-mobile';

import { NoticeBar, Icon } from 'antd-mobile';
const requireContext=require.context('../img/images', true, /^\.\/.*\.png$/);
const img = requireContext.keys().map(requireContext);

const tabs = [
    { title: '我的钱包', key: 't1' },
    { title: '我的红包', key: 't2' },
    { title: '商家代金卷', key: 't3' },
  ];
export default class My extends Component {
    render() {
        return (
            <div style={{width:"100%",backgroundColor:'#e5e5e5'}}>
                 <NavBar
                   style={{backgroundColor:'#bc0400',color:'#fff',height:200,width:"100%"}}
               >
                <img src={my} style={{width:'410px'}}/>
                  
                   
               </NavBar> 
               <Tabs tabs={tabs}
                    initialPage={1}
                    tabBarBackgroundColor={'#a90400'}
                    tabBarActiveTextColor={'#fff'}
                    tabBarInactiveTextColor={'#fff'}
                 >
                   
                </Tabs>
                <div style={{width:'100%'}}>
                    <NoticeBar icon={null} mode="link" style={{height:70,color:'#000',fontSize:'20px',backgroundColor:'#fff'}}>
                        <img src={img[6]} style={{marginTop:0,marginRight:10,height:20}}/>
                        我的收货地址
                    </NoticeBar>
                    <NoticeBar icon={null} mode="link" style={{height:70,color:'#000',fontSize:'18px',backgroundColor:'#fff'}}>
                    <img src={img[0]} style={{marginTop:0,marginRight:10,height:20}}/>
                        我的收藏
                    </NoticeBar>
                    <NoticeBar icon={null} mode="link" style={{height:70,color:'#000',fontSize:'18px',backgroundColor:'#fff'}}>
                    <img src={img[1]} style={{marginTop:0,marginRight:10,height:20}}/>
                        我的评论
                    </NoticeBar>
                    <NoticeBar icon={null} mode="link" style={{height:70,color:'#000',fontSize:'18px',backgroundColor:'#fff'}}>
                    <img src={img[2]} style={{marginTop:0,marginRight:10,height:20}}/>
                        我的退款
                    </NoticeBar>
                    <NoticeBar icon={null} mode="link" action={<span style={{ color: '#000' }}>8</span>} style={{height:70,color:'#000',fontSize:'18px',backgroundColor:'#fff'}} >
                   
                    <img src={img[3]} style={{marginTop:0,marginRight:10,height:20}}/>
                        我的消息
                    </NoticeBar>
                    <NoticeBar icon={null} mode="link" style={{height:70,color:'#000',fontSize:'18px',backgroundColor:'#fff'}}>
                    <img src={img[4]} style={{marginTop:0,marginRight:10,height:20}}/>
                        帮助与反馈
                    </NoticeBar>
                    <NoticeBar icon={null} mode="link" style={{height:70,color:'#000',fontSize:'18px',backgroundColor:'#fff'}}>
                    <img src={img[5]} style={{marginTop:0,marginRight:10,height:20}}/>
                        更多
                    </NoticeBar>
                </div>
                <div style={{width:'100%',height:'50px',textAlign:'center'}}>
                    <p style={{marginTop:'20px'}}>客服电话<span style={{color:'#a90400'}}>400-820-8888</span></p>
                </div>
            </div>
        )
    }
}
