let data = new DataSet();
let dataPoints = 7;
for(let i = 0; i < dataPoints;i++){
    data.addAutoData({
        entryName: "",
        id: i,
        value: "None"
    })
}
class DataSet{
    constructor(){
        this.data = {auto:[],teleop:[],endgame:[]};
        this.matchNum;
        this.teamNum;
        this.autoData = [];
        this.scout;
    }
    addAutoData = (data) => {
        data.auto.push(data);
    }
    addTeleopData = (data) => {
        data.teleop.push(data);

    }
    addEndgameData = (data) => {
        data.endgame.push(data);
    }
    setMatchData = (matchNum,teamNum) => {
        this.matchNum = matchNum;
        this.teamNum = teamNum;
    }
}