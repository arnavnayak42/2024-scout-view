import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import GetMatch from './components/layout/GetMatch';
import Autonomous from './components/layout/Autonomous';
import Teleoperated from './components/layout/Teleoperated';
import Export from './components/layout/Export'
class DataSet{
  constructor(){
      this.data = {auto:[],teleop:[],endgame:[]};
      this.matchNum = 0;
      this.teamNum = 0;
      this.scout = "";
  }
  setAutoData = (data) => {
      this.data.auto = data;
  }
  setTeleopData = (data) => {
      this.data.teleop = data;

  }
  setEndgameData = (data) => {
      this.data.endgame = data;
  }
  setScout = (data) => {
      this.scout = data
  } 
  setMatchData = (matchNum,teamNum) => {
      this.matchNum = matchNum;
      this.teamNum = teamNum;
  }
}
let compiledDataSet = new DataSet();
class App extends Component{
  state = {
    activeTab: 4,
    dataset: compiledDataSet
  }
  updateAutoData = (data) => {
    let currentData = this.state.dataset;
    currentData.setAutoData(data);
    let tab = this.state.activeTab
    this.setState({activeTab:tab,dataset:currentData});
  }
  updateTeleopData = (data) => {
    let currentData = this.state.dataset;
    currentData.setTeleopData(data);
    let tab = this.state.activeTab
    this.setState({activeTab:tab,dataset:currentData});
  }
  updateEndgameData = (data) => {
    let currentData = this.state.dataset;
    currentData.setEndgameData(data);
    let tab = this.state.activeTab
    this.setState({activeTab:tab,dataset:currentData});
  }
  render(){
    console.log("render baby");
    return (
        <Tabs className = "myClass" activeKey={this.state.activeTab} onSelect={this.handleSelect} style = {fullscreen}>
            <Tab title="Scout View" disabled></Tab>
            <Tab title="Get Match"  eventKey={1}><GetMatch style = {fullscreen}/></Tab>
            <Tab title="Autonomous"  eventKey={2}><Autonomous send = {this.updateAutoData}style = {fullscreen} tabSwitch = {this.goToTeleop} dataUpdate = {this.state.dataset.setAutoData}/></Tab>
            <Tab title="Teleoperated"  eventKey={3}><Teleoperated sendTeleop = {this.updateTeleopData} sendEndgame = {this.updateEndgameData}/></Tab>
            <Tab title="Export"  eventKey={4}><Export style = {fullscreen} data = {this.state.dataset}/></Tab>
        </Tabs>
    );
  }
  handleSelect = (selectedTab) => {
    this.setState({
      activeTab: selectedTab
    });
  }
  goToTeleop = () => {
    this.setState({
      activeTab: 3
    }); 
  }
}
const fullscreen ={
    height: '100%'
}
export default App;

