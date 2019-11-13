import React, { Component } from 'react'
import { NavBar,SearchBar,Carousel,Grid } from 'antd-mobile';
import code from '../img/二维码.png';
import info from '../img/消息.png';
import Xianyu from './Xianyu';
const requireContext = require.context('../img/grid', true, /^\.\/.*\.png$/);
const requireContext1=require.context('../img/carousel', true, /^\.\/.*\.png$/);
const img = requireContext.keys().map(requireContext);
const img2=requireContext1.keys().map(requireContext1);
const data = Array.from(new Array(9)).map((_val, i) => ({
    icon:img[i]
   
  }));
export default class Home extends Component {
    render() {
        return (
            <div style={{width:"100%",backgroundColor:'#e5e5e5'}}>
                <NavBar
                   style={{backgroundColor:'#bc0400',color:'#fff',width:"100%"}} 
                   leftContent={[
                    <select id="first" οnchange="setSecond(this.value)" style={{backgroundColor:'#bc0400',color:'#fff',width:80,borderStyle:'none'}}>
                        <option value="1">石家庄</option>
                        <option value="1">广西</option>
                        <option value="2">广东</option>
                    </select>
                   ]} 
                   rightContent={[
                    <img style={{width:26,height:26,float:"right"}} src={code} alt=""/> ,
                    <img style={{width:26,height:26,float:"right"}}src={info} alt=""/>,
                ]}
               >
                    
                    <SearchBar
                        placeholder="搜索商家、品类或商圈"
                        style={{backgroundColor:"#fff",width:"200px",borderRadius:100,height:'30px'}}
                        ref={ref => this.manualFocusInst = ref}
                    />
                    
                   
               </NavBar>
               <Carousel
                    autoplay={true}
                    infinite
                >
                    {[0,1,2,3,4,5].map((val,key) => (
                        <a
                            key={val}
                            style={{ display: 'inline-block', width: '100%', height: 200 }}
                        >
                            <img
                                src={img2[key]}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                
                            />
                        </a>
                            ))}
                </Carousel>
                <Grid style={{width:'100%'}} data={data} isCarousel={true}  renderItem={dataItem => (
        <div style={{ padding: '12.5px' }}>
          <img src={dataItem.icon} style={{ width: '60px', height: '60px' }} alt="" />
         
        </div>
      )} />     
                <div style={{width:'100%',height:40,padding:'10px 20px 10px 20px'}}>
                    <select  οnchange="setSecond(this.value)" style={{backgroundColor:'#e5e5e5',color:'#000',width:150,borderStyle:'none',fontSize:'18px'}}>
                        <option value="1">商品分类</option>
                        <option value="1">生鲜</option>
                        <option value="2">甜点</option>
                    </select>
                    <select οnchange="setSecond(this.value)" style={{backgroundColor:'#e5e5e5',color:'#000',width:150,float:"right",borderStyle:'none',fontSize:'18px'}}>
                        <option value="1">排序</option>
                        <option value="1">倒叙</option>
                        <option value="2">正序</option>
                    </select>
                </div> 
                <Xianyu/> 
            </div>
        )
    }
}
