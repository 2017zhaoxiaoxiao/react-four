import React from 'react'
import { TabBar } from 'antd-mobile';
import Near from './container/Near';
 import Home from './container/Home';
import Order from './container/Order';
import My from './container/My';
const requireContext = require.context('./img/tab', true, /^\.\/.*\.png$/)
const images = requireContext.keys().map(requireContext)
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
    };
  }
  render() {
    return (
        <div style={{ 
            position: 'fixed', 
            height: '100%', 
            width: '100%', 
            top: 0 
        }}>
            <TabBar
            unselectedTintColor="#fff"
            tintColor="#000"
            barTintColor="#bc0400"
           
            >
            <TabBar.Item
                title="首页"
                key="home"
                icon={<div style={{
                width: '22px',
                height: '22px',
                background: `url(${images[1]}) center center /  21px 21px no-repeat` }}
                />
                }
                selectedIcon={<div style={{
                width: '22px',
                height: '22px',
                background: `url(${images[0]}) center center /  21px 21px no-repeat `}}
                />
                }
                selected={this.state.selectedTab === 'blueTab'}
                onPress={() => {
                    this.setState({
                        selectedTab: 'blueTab',
                    });
                }}
            >
            <Home/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background:  `url(${images[3]}) center center /  21px 21px no-repeat `}}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background:  `url(${images[2]}) center center /  21px 21px no-repeat`}}
              />
            }
            title="附近"
            key="fujin"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
          >
        <Near/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${images[5]}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${images[4]}) center center /  21px 21px no-repeat`}}
              />
            }
            title="订单"
            key="dingdan"
          
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            <Order/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${images[7]}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${images[6]}) center center /  21px 21px no-repeat`}}
              />
            }
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
          <My/>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
