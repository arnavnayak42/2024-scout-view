import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import GetMatch from './components/layout/GetMatch';
import Autonomous from './components/layout/Autonomous';
import Teleoperated from './components/layout/Teleoperated';
class App extends Component{
  state = {
    activeTab: 2
  }
  render(){
    console.log("render baby");
    return (
        <Tabs className = "myClass" activeKey={this.state.activeTab} onSelect={this.handleSelect} style = {fullscreen}>
            <Tab title="Scout View" disabled></Tab>
            <Tab title="Get Match"  eventKey={1}><GetMatch style = {fullscreen}/></Tab>
            <Tab title="Autonomous"  eventKey={2}><Autonomous style = {fullscreen} tabSwitch = {this.goToTeleop}/></Tab>
            <Tab title="Teleoperated"  eventKey={3}><Teleoperated /></Tab>
            <Tab title="Export"  eventKey={4}></Tab>
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
