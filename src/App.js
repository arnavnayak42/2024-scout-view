import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import GetMatch from './components/layout/GetMatch';
import Autonomous from './components/layout/Autonomous';
import Teleoperated from './components/layout/Teleoperated';
import Export from './components/layout/Export';
import Comment from './components/layout/Comment';
class DataSet{
  constructor(){
      this.data = {auto:[],teleop:[],endgame:[]};
      this.comment = "";
      this.matchNum = 0;
      this.teamNum = 0;
      this.scout = "";
  }
  setComment = (data) => {
    this.comment = data;
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
  setMatchNum = (matchNum) => {
      this.matchNum = matchNum;
  }
  setTeamNum = (teamNum) => {
      this.teamNum = teamNum;
  }
}
let compiledDataSet = new DataSet();
class App extends Component{
  state = {
    activeTab: 1,
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
  updateScout = (data) => {
    let currentData = this.state.dataset;
    console.log(data.target.value);
    currentData.setScout(data.target.value);
    let tab = this.state.activeTab
    this.setState({activeTab:tab,dataset:currentData});
  }
  updateMatchNum = (data) => {
    let currentData = this.state.dataset;
    console.log(data.target.value);
    currentData.setMatchNum(data.target.value);
    let tab = this.state.activeTab
    this.setState({activeTab:tab,dataset:currentData});
  }
  updateTeamNum = (data) => {
    let currentData = this.state.dataset;
    console.log(data.target.value);
    currentData.setTeamNum(data.target.value);
    let tab = this.state.activeTab
    this.setState({activeTab:tab,dataset:currentData});
  }
  updateComment = (data) => {
    let currentData = this.state.dataset;
    console.log(data.target.value);
    currentData.setComment(data.target.value);
    let tab = this.state.activeTab
    this.setState({activeTab:tab,dataset:currentData});
  }
  render(){
    console.log("render baby");
    if(this.state.activeTab != 1){
      return ( // div with comment
        <div> 
          <Tabs className = "myClass" activeKey={this.state.activeTab} onSelect={this.handleSelect} style = {fullscreen}>
              <Tab title="Scout View" disabled></Tab>
              <Tab title="Get Match"  eventKey={1}><GetMatch style = {fullscreen} sendTeam = {this.updateTeamNum} sendMatch = {this.updateMatchNum}/></Tab>
              <Tab title="Autonomous"  eventKey={2}><Autonomous send = {this.updateAutoData}style = {fullscreen} tabSwitch = {this.goToTeleop} dataUpdate = {this.state.dataset.setAutoData} updateScout = {this.updateScout}/></Tab>
              <Tab title="Teleoperated"  eventKey={3}><Teleoperated sendTeleop = {this.updateTeleopData} sendEndgame = {this.updateEndgameData}/></Tab>
              <Tab title="Export"  eventKey={4}><Export style = {fullscreen} data = {this.state.dataset}/></Tab>
          </Tabs>
          <Comment sendComment = {this.updateComment}></Comment>
          <div style = {space}></div>
          </div>
      );
    } else { // div without comment 
      return (
        <div>
          <Tabs className = "myClass" activeKey={this.state.activeTab} onSelect={this.handleSelect} style = {fullscreen}>
              <Tab title="Scout View" disabled></Tab>
              <Tab title="Get Match"  eventKey={1}><GetMatch style = {fullscreen} sendTeam = {this.updateTeamNum} sendMatch = {this.updateMatchNum}/></Tab>
              <Tab title="Autonomous"  eventKey={2}><Autonomous send = {this.updateAutoData}style = {fullscreen} tabSwitch = {this.goToTeleop} dataUpdate = {this.state.dataset.setAutoData} updateScout = {this.updateScout}/></Tab>
              <Tab title="Teleoperated"  eventKey={3}><Teleoperated sendTeleop = {this.updateTeleopData} sendEndgame = {this.updateEndgameData}/></Tab>
              <Tab title="Export"  eventKey={4}><Export style = {fullscreen} data = {this.state.dataset}/></Tab>
          </Tabs>
          </div>
      );   
    }
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
  getTab = () => {
    return this.state.activeTab;
  }
}
const space = {
  marginTop: '15vh',
  width:'100%'
}
const fullscreen ={
    height: '100%'
}
export default App;

