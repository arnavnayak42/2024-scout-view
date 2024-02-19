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
import BooleanStat from './components/BooleanStat';
import PlusMinusStat from './components/PlusMinusStat';
import SwitchStat from './components/SwitchStat';
import Button from 'react-bootstrap/Button';
import { PreMadeComments } from './components/layout/PreMadeComments';

export const ClearContext = React.createContext();
const beforeUnloadListener = (event) => {
	event.preventDefault();
	return (event.returnValue = 'Are you sure you want to exit?');
};
window.addEventListener('beforeunload', beforeUnloadListener, {
	capture: true,
});
class DataSet {
	constructor() {
		this.data = { auto: [], teleop: [], endgame: [] };
		this.comment = '';
		this.matchNum = 0;
		this.teamNum = 0;
		this.scout = '';
	}
	reset = () => {
		this.data = { auto: [], teleop: [], endgame: [] };
		this.comment = '';
		this.matchNum = 0;
		this.teamNum = 0;
		this.scout = '';
		console.log('clearing');
	};
	// setComment = (data) => {
	// 	this.comment = data;
	// };
	setAutoData = (data) => {
		this.data.auto = data;
	};
	// setPremadeComments = (data) => {
	// 	this.data.teleop = data;
	// }

	setTeleopData = (data) => {
		this.data.teleop = data;
	};
	setAllEndgameData = (data) => {
		let premade = ["-1", false, false, false, false, false];//js a default array for premade comments
		let endgame = ["-1", "-1"];//js a default array for the data from the endgame
		let totEndgame = [];
		let origEndgame = this.data.endgame;
		if(data.length == 6){
			console.log("changing premade");
			premade = this.setPreMadeComments(data);
			endgame = origEndgame.slice(0,2);
		}
		else{
			console.log("changing the other data");
			premade = origEndgame.slice(2,(premade.length + endgame.length));//i don't like this, there should be a better way - jeevan
			endgame = data;
		}
		totEndgame = endgame.concat(premade);
		console.log("totEndgame");
		console.log(totEndgame);
		this.data.endgame = totEndgame;
	}
	// setEndgameData = (data) => {
	// 	this.data.endgame = data;
	// 	// this.data.endgame.push(data);
	// 	console.log("endgame data app.js");
	// 	console.log(this.data.endgame);
	// };
	setPreMadeComments = (data) => {
		let edited = [];
		for (let i = 0; i < data.length; i++){
			edited.push({id: data[i].id + 2, value: data[i].value});//the 2 is based on the # of fields in endgame
			// data[i].id += 3
		}
		console.log("edited premade data");
		console.log(edited);
		return edited;
	};
	setScout = (data) => {
		this.scout = data;
	};
	setMatchNum = (matchNum) => {
		this.matchNum = matchNum;
	};
	setTeamNum = (teamNum) => {
		this.teamNum = teamNum;
	};
}
let compiledDataSet = new DataSet();
class App extends Component {
	state = {
		activeTab: 1,
		dataset: compiledDataSet,
		clearCount: 0,
	};
	updateAutoData = (data) => {
		let currentData = this.state.dataset;
		currentData.setAutoData(data);
		let tab = this.state.activeTab;
		this.setState({
			activeTab: tab,
			dataset: currentData,
			clearCount: this.state.clearCount,
		});
	};

	updatePreMadeComments = (data) => {
		let currentData = this.state.dataset;
		currentData.setAllEndgameData(data); 
		let tab = this.state.activeTab;
		this.setState({
			activeTab: tab,
			dataset: currentData,
			clearCount: this.state.clearCount
		});
	};

	updateTeleopData = (data) => {
		let currentData = this.state.dataset;
		currentData.setTeleopData(data);
		let tab = this.state.activeTab;
		this.setState({
			activeTab: tab,
			dataset: currentData,
			clearCount: this.state.clearCount,
		});
	};
	updateEndgameData = (data) => {
		console.log("data passed into updateEndgameData");
		console.log(data);
		let currentData = this.state.dataset;
		console.log("the current state during updateEndgameData");
		console.log(currentData);
		currentData.setAllEndgameData(data);
		let tab = this.state.activeTab;
		this.setState({
			activeTab: tab,
			dataset: currentData,
			clearCount: this.state.clearCount,
		});
	};
	updateScout = (data) => {
		let currentData = this.state.dataset;
		console.log(data.target.value);
		currentData.setScout(data.target.value);
		let tab = this.state.activeTab;
		this.setState({
			activeTab: tab,
			dataset: currentData,
			clearCount: this.state.clearCount,
		});
	};
	updateMatchNum = (data) => {
		let currentData = this.state.dataset;
		console.log(data.target.value);
		currentData.setMatchNum(data.target.value);
		let tab = this.state.activeTab;
		this.setState({
			activeTab: tab,
			dataset: currentData,
			clearCount: this.state.clearCount,
		});
	};
	updateTeamNum = (data) => {
		let currentData = this.state.dataset;
		console.log(data.target.value);
		currentData.setTeamNum(data.target.value);
		let tab = this.state.activeTab;
		this.setState({
			activeTab: tab,
			dataset: currentData,
			clearCount: this.state.clearCount,
		});
	};
	updateClearCount = () => {
		this.setState({ ...this.state, clearCount: this.state.clearCount + 1 });
	};
	// updateComment = (data) => {
	// 	let currentData = this.state.dataset;
	// 	console.log(data.target.value);
	// 	currentData.setComment(data.target.value);
	// 	let tab = this.state.activeTab;
	// 	this.setState({
	// 		activeTab: tab,
	// 		dataset: currentData,
	// 		clearCount: this.state.clearCount,
	// 	});
	// };
	resetLmao = () => {
		console.log('RESETTING');
		console.log(this.state.clearCount);
		let currentData = this.state.dataset;
		currentData.reset();
		console.log("resetted data");
		console.log(currentData);
		let tab = this.state.activeTab;
		console.log('bye bye text boxes');
		console.log(document.getElementsByClassName('textField'));
		document.getElementsByClassName('textField')[0].value = '';
		document.getElementsByClassName('textField')[1].value = '';
		document.getElementsByClassName('textField')[2].value = '';
		document.getElementsByClassName('textField')[3].value = '';
		// document.getElementsByClassName('textField')[4].value = '';
		this.setState({
			activeTab: tab,
			dataset: new DataSet(),
			clearCount: this.state.clearCount + 1,
		});
		//clearing all of the text boxes
		console.log('clears: ' + this.state.clearCount);
		console.log("resetted state");
		console.log(this.state);
	};
	render() {
		return (
			// div with comment
			<ClearContext.Provider value={this.state.clearCount}>
				<div style={{ backgroundColor: 'rgb(32,12,12)' }}>
					<GetMatch
						style={{ display: 'none' }}
						sendTeam={this.updateTeamNum}
						sendMatch={this.updateMatchNum}
						goToAuto={this.goToAuto}
						teamNum={this.teamNum}
						matchNum={this.matchNum}
					/>
					<div style={margins}/>
					<Autonomous
						send={this.updateAutoData}
						style={{ display: 'none' }}
						tabSwitch={this.goToTeleop}
						dataUpdate={this.state.dataset.setAutoData}
						updateScout={this.updateScout}
						data={this.dataset}
					/>
					<div style={margins}/>
					<Teleoperated
						sendTeleop={this.updateTeleopData}
						sendEndgame={this.updateEndgameData}
						tabSwitch={this.goToExport}
						data={this.dataset}
						style={{ display: 'none' }}
					/>
					{/* <h3 style={centerText}>The following questions are OPTIONAL fields</h3>
					<h4 style={centerText}>However, please still fill out the comments box</h4>
					<PreMadeComments
						style={{ display: 'none' }}
						sendPreMade = {this.updatePreMadeComments}
					/>
					<Comment
						style={{ display: this.state.activeTab == 1 ? 'none' : 'none' }}
						sendComment={this.updateComment}
					></Comment> */}
					<Export
						style={fullscreen}
						data={this.state.dataset}
						reset={this.resetLmao}
						// style={{ display: 'none' }}
					/>
					<h3 style={centerText}>The following questions are OPTIONAL fields</h3>
					<h4 style={centerText}>However, please still fill out the comments box</h4>
					<PreMadeComments
						style={{ display: 'none' }}
						sendPreMade = {this.updatePreMadeComments}
					/>
					{/* <Comment
						style={{ display: this.state.activeTab == 1 ? 'none' : 'none' }}
						// sendComment={this.updateComment}
					></Comment> */}
					<Button
						variant='success'
						size='lg'
						style={clearButton}
						onClick={this.resetLmao}
					>
						Clear
					</Button>
					{/* <div style={space}></div> */}
				</div>
			</ClearContext.Provider>
		);
	}
	handleSelect = (selectedTab) => {
		this.setState({
			activeTab: selectedTab,
			clearCount: this.state.clearCount,
		});
	};
	goToAuto = () => {
		this.setState({
			activeTab: 2,
			clearCount: this.state.clearCount,
		});
	};
	goToTeleop = () => {
		this.setState({
			activeTab: 3,
			clearCount: this.state.clearCount,
		});
	};
	goToExport = () => {
		this.setState({
			activeTab: 4,
			clearCount: this.state.clearCount,
		});
	};
	// gotoComment

	static getTab = () => {
		return this.state.activeTab;
	  }
}
const centerText = {
	textAlign: 'center'
};
const space = {
	paddingTop: '25vh',
	width: '100%',
	backgroundColor: 'rgb(32,12,12)',
};
const clearButton = {
	textAlign: 'center',
	margin: 'auto',
	width: window.innerWidth,
	height: window.innerHeight * 0.2,
	// marginBottom: '5%',
	marginTop: '15%',
};
const fullscreen = {
	height: '100%',
};
const margins = {
	topMargin: '20px',
}

export default App;
