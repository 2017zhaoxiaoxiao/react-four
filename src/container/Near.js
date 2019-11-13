import React, { Component } from 'react'
import { NavBar,SearchBar} from 'antd-mobile';
import NearbyFood from './NearbyFood';
export default class Near extends Component {
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
              
            >
                    
                <SearchBar
                    placeholder="找附近的吃喝玩乐"
                    style={{backgroundColor:"#fff",width:"200px",borderRadius:100,height:'30px'}}
                    ref={ref => this.manualFocusInst = ref}
                />
                    
                
                </NavBar>
                <div style={{width:"100%",height:50}}>
                    <select id="first" οnchange="setSecond(this.value)" style={{backgroundColor:'#fff',color:'#000',width:'33.3%',height:50}}>
                        <option  value="1">1000米</option>
                        <option value="1">1500米</option>
                        <option value="2"></option>
                    </select>
                    <select id="first" οnchange="setSecond(this.value)" style={{backgroundColor:'#fff',color:'#000',width:"33.3%",height:50}}>
                        <option value="1">全部餐厅</option>
                        <option value="1"></option>
                        <option value="2"></option>
                    </select>
                    <select id="first" οnchange="setSecond(this.value)" style={{backgroundColor:'#fff',color:'#000',width:"33.3%",height:50,}}>
                        <option value="1">默认排序</option>
                        <option value="1"></option>
                        <option value="2"></option>
                    </select>
                    


                </div>
                <NearbyFood/>
           </div>
        )
    }
}
