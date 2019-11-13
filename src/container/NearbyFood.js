import { ListView } from 'antd-mobile';
import ReactDOM from 'react-dom';
import React, { Component } from 'react'
const requireContext = require.context('../img/nearby', true, /^\.\/.*\.png$/);
const img = requireContext.keys().map(requireContext);

const data = [
  {
    img:img[3],
    title: '肯德基餐厅',
    des:'人均￥50  起送￥50',
    time:'送餐事件：10:00-20:00',
    col:img[6]
  }
  ,
  {
    img:img[2],
    title: '星巴克咖啡厅',
    des:'人均￥50  起送￥50',
    time:'送餐事件：10:00-20:00',
    col:img[6]
  } ,
  {
    img:img[1],
    title: '必胜客欢乐餐厅',
    des:'人均￥50  起送￥50',
    time:'送餐事件：10:00-20:00',
    col:img[6]
  },
  {
    img:img[0],
    title: '麦当劳餐厅',
    des:'人均￥50  起送￥50',
    time:'送餐事件：10:00-20:00',
    col:img[5]
  }
  
  
];
const NUM_SECTIONS = 5;
const NUM_ROWS_PER_SECTION = 5;
let pageIndex = 0;

const dataBlobs = {};
let sectionIDs = [];
let rowIDs = [];
function genData(pIndex = 0) {
  for (let i = 0; i < NUM_SECTIONS; i++) {
    const ii = (pIndex * NUM_SECTIONS) + i;
    const sectionName = `Section ${ii}`;
    sectionIDs.push(sectionName);
    dataBlobs[sectionName] = sectionName;
    rowIDs[ii] = [];

    for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
      const rowName = `S${ii}, R${jj}`;
      rowIDs[ii].push(rowName);
      dataBlobs[rowName] = rowName;
    }
  }
  sectionIDs = [...sectionIDs];
  rowIDs = [...rowIDs];
}

 export default class NearbyFood extends React.Component {
  constructor(props) {
    super(props);
    const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
    const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

    const dataSource = new ListView.DataSource({
      getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    this.state = {
      dataSource,
      isLoading: true,
      height: document.documentElement.clientHeight * 3 / 4,
    };
  }

  componentDidMount() {
   
    const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
    
    setTimeout(() => {
      genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
        isLoading: false,
        height: hei,
      });
    }, 600);
  }

  

  onEndReached = (event) => {
   
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log('reach end', event);
    this.setState({ isLoading: true });
    setTimeout(() => {
      genData(++pageIndex);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
        isLoading: false,
      });
    }, 1000);
  }

  render() {
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
    let index = data.length - 1;
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
     
      return (
        <div key={rowID} style={{ padding: '0 15px' }}>
         
          <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
            <img style={{height:'140px', marginRight: '15px' }} src={obj.img} alt="" />
            <div style={{ lineHeight: 1 }}>
              <p style={{float:'float',margin:0,marginBottom:8, fontWeight: 'bold' ,fontSize:'18px'}}>{obj.title}</p>
              <img style={{float:'float',marginLeft:'100px',width:50,height:30}} src={obj.col}/>
              <img style={{height:30,width:400}} src={img[4]}/> 
              <p style={{marginTop:"10px"}}>{obj.des}</p>
              <p style={{marginTop:"10px"}}>{obj.time}</p>
             
  
            </div> 
          </div>
        </div>
      );
    };

    return (
      <ListView
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        renderRow={row}
        renderSeparator={separator}
        style={{
          height: this.state.height,
          overflow: 'auto',
        }}
        pageSize={4}
        onScroll={() => { console.log('scroll'); }}
        scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    );
  }
}