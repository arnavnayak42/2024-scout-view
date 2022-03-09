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

export const ClearContext = React.createContext();
// const beforeUnloadListener = (event) => {
// 	event.preventDefault();
// 	return (event.returnValue = 'Are you sure you want to exit?');
// };
// window.addEventListener('beforeunload', beforeUnloadListener, {
// 	capture: true,
// });
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
	};
	setComment = (data) => {
		this.comment = data;
	};
	setAutoData = (data) => {
		this.data.auto = data;
	};
	setTeleopData = (data) => {
		this.data.teleop = data;
	};
	setEndgameData = (data) => {
		this.data.endgame = data;
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
		let currentData = this.state.dataset;
		currentData.setEndgameData(data);
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
	updateComment = (data) => {
		let currentData = this.state.dataset;
		console.log(data.target.value);
		currentData.setComment(data.target.value);
		let tab = this.state.activeTab;
		this.setState({
			activeTab: tab,
			dataset: currentData,
			clearCount: this.state.clearCount,
		});
	};
	resetLmao = () => {
		console.log('RESETTING');
		console.log(this.state.clearCount);
		let currentData = this.state.dataset;
		currentData.reset();
		let tab = this.state.activeTab;
		this.setState({
			activeTab: tab,
			dataset: currentData,
			clearCount: this.state.clearCount + 1,
		});
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
					/>
					<Autonomous
						send={this.updateAutoData}
						style={{ display: 'none' }}
						tabSwitch={this.goToTeleop}
						dataUpdate={this.state.dataset.setAutoData}
						updateScout={this.updateScout}
						data={this.dataset}
					/>
					<Teleoperated
						sendTeleop={this.updateTeleopData}
						sendEndgame={this.updateEndgameData}
						tabSwitch={this.goToExport}
						data={this.dataset}
						style={{ display: 'none' }}
					/>
					<Export
						style={fullscreen}
						data={this.state.dataset}
						reset={this.resetLmao}
						style={{ display: 'none' }}
					/>
					<Comment
						style={{ display: this.state.activeTab == 1 ? 'none' : 'none' }}
						sendComment={this.updateComment}
					></Comment>

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
}
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
	marginTop: '20%',
};
const fullscreen = {
	height: '100%',
};
export default App;
