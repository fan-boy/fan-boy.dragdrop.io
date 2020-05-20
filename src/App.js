import React from 'react';
import './App.css';
import DragabbleDiv from './Components/DraggableDiv/DragabbleDiv';
import TableRow from './Components/TableRow';

class App extends React.Component {
  state = {
    tasks: [
        {id: "1", taskName:"R1",category:"Rewards", number:5},
        {id: "2", taskName:"R2", category:"Rewards", number:5},
        {id: "3", taskName:"R3", category:"Rewards", number:5},
        {id: "4", taskName:"R4", category:"Rewards", number:5},
        {id: "5", taskName:"R5", category:"Rewards", number:5}
    ]
  }
  onDragStart = (event, taskName , category) => {
    console.log('dragstart on div: ', taskName);
    event.dataTransfer.setData("taskName", taskName);
    event.dataTransfer.setData("originatingCategory",category);
}
onDragOver = (event) => {
    event.preventDefault();
}

onDrop = (event, cat) => {
    let taskName = event.dataTransfer.getData("taskName");
    let originatingColumn = event.dataTransfer.getData("originatingCategory");
    let oldNumber;
    let tasks = this.state.tasks;
    let oldTasks = this.state.tasks;
    //Check if it already exits for that column.

    let existingTasks = this.state.tasks.filter(t => t.taskName === taskName && t.category === cat);

    if(existingTasks.length === 0 || cat ==="Rewards"){    
    let task = this.state.tasks.find((t) => t.taskName === taskName && t.category ===originatingColumn);


    let taskIndex = this.state.tasks.findIndex((t) => t.taskName === taskName && t.category ===originatingColumn);
    if (task.taskName === taskName) {
      oldNumber = task.number;  
      if(task.category === "Rewards" && taskName !== "Rewards" && cat !== "Rewards"){
          task.number = task.number - 1;
        
        } else if (cat === "Rewards"){
          task.number = task.number + 1;
        }
        
        task.category = cat;
      }
    tasks[taskIndex] = task;  
    tasks.filter(t => {
      if(t.taskName === taskName){
        t.number = tasks[taskIndex].number;
      }
      return t;
    });
    let number = tasks.find(p => p.taskName === taskName).number;
    let existingRewardTasks = oldTasks.filter(t => t.taskName === taskName && t.category === "Rewards");
    if(taskName !=="Rewards" && number !== 0 && number <= oldNumber && originatingColumn === "Rewards"){
    tasks.push({
      id:(tasks[tasks.length -1].id + 1).toString(),
      taskName: taskName,
      category:"Rewards",
      number:tasks.find(p => p.taskName === taskName ).number
    });
  }else if(cat === "Rewards"  && number >= oldNumber){
    
    tasks.splice(taskIndex,1);
    if(existingRewardTasks.length === 1){
      tasks.push({
        id:(tasks[tasks.length -1].id + 1).toString(),
        taskName: taskName,
        category:"Rewards",
        number:tasks.find(p => p.taskName === taskName ).number
      });
    }
  }
  this.setState({
    ...this.state,
    tasks
  });
}
}
onClickClose = (id) =>{
  let rewards = this.state.tasks;
  let selectedReward = rewards.find(p => p.id === id);
  let selectedIndex = rewards.findIndex(p => p.id === id);
  rewards.splice(selectedIndex,1);
  if (selectedReward.number === 0){
    rewards.push({
      id:rewards[rewards.length -1].id +1,
      taskName: selectedReward.taskName,
      category:"Rewards",
      number:0
    })
  }
  rewards.filter(t => {
    if(t.taskName === selectedReward.taskName){
      t.number = selectedReward.number +1;
    }
    return t;
  });
  this.setState({
    ...this.state,
    rewards
  });
}

  render(){
    var tasks = {
      Rewards: [],
      C1: [],
      C2:[],
      C3:[],
      C4:[],
      C5:[]
    }

  this.state.tasks.forEach ((task) => {
    
    tasks[task.category].push([
      
      <DragabbleDiv
      key = {task.id}
      keyValue = {task.id}
      onDragStart = {(event) => this.onDragStart(event, task.taskName, task.category)}
      number = {task.number}
      type = {task.category}
      onClickClose = {this.onClickClose}
      >
        {task.taskName}
      </DragabbleDiv>
      ,task.taskName,task.category]
      
    );
  });

    return (
      <div className="drag-container">
      <table className = "categories">
        <tbody>
        <tr>
          <th colSpan = {1}>Rewards</th>
          <th colSpan = {5}>Categories</th>
        </tr>
        <tr>
          <td>
          </td>
          <td>C1 </td>
          <td>C2</td>
          <td>C3</td>
          <td>C4</td>
          <td>C5</td>
        </tr>
        
        <TableRow
         onDrop = {this.onDrop}
         onDragOver = {this.onDragOver}
         rewardRow = "R1"
         tasks = {tasks}
        ></TableRow>
        <TableRow
         onDrop = {this.onDrop}
         onDragOver = {this.onDragOver}
         rewardRow = "R2"
         tasks = {tasks}
        ></TableRow>  
        <TableRow
         onDrop = {this.onDrop}
         onDragOver = {this.onDragOver}
         rewardRow = "R3"
         tasks = {tasks}
        ></TableRow>
        <TableRow
         onDrop = {this.onDrop}
         onDragOver = {this.onDragOver}
         rewardRow = "R4"
         tasks = {tasks}
        ></TableRow>
        <TableRow
         onDrop = {this.onDrop}
         onDragOver = {this.onDragOver}
         rewardRow = "R5"
         tasks = {tasks}
        ></TableRow>
        </tbody>
      </table>        
    </div>
    );
  }
}

export default App;
