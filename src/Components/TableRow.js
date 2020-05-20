import React from 'react';
import TableData from './TableData';

const TableRow = (props) =>{
    return(
        <tr>
         <TableData onDragOver = {(event) => props.onDragOver(event)}
	      onDrop={(event)=>{props.onDrop(event, "Rewards")}} >
          {props.tasks.Rewards.filter(t => t[1] === props.rewardRow)?(props.tasks.Rewards.filter(t => t[1] === props.rewardRow)[0]?props.tasks.Rewards.filter(t => t[1] === props.rewardRow)[0][0]:""):""}
        </TableData>
      
        <TableData onDragOver ={(event)=>props.onDragOver(event)}
	      onDrop={(event)=>{props.onDrop(event, "C1")}} >
          {props.tasks.C1.filter(t => t[1] === props.rewardRow)?(props.tasks.C1.filter(t => t[1] === props.rewardRow)[0]?props.tasks.C1.filter(t => t[1] === props.rewardRow)[0][0]:""):""}
        </TableData>
        <TableData onDragOver ={(event)=>props.onDragOver(event)}
	      onDrop={(event)=>{props.onDrop(event, "C2")}} >
          {props.tasks.C2.filter(t => t[1] === props.rewardRow)?(props.tasks.C2.filter(t => t[1] === props.rewardRow)[0]?props.tasks.C2.filter(t => t[1] === props.rewardRow)[0][0]:""):""}
        </TableData>
        <TableData onDragOver ={(event)=>props.onDragOver(event)}
	      onDrop={(event)=>{props.onDrop(event, "C3")}} >
          {props.tasks.C3.filter(t => t[1] === props.rewardRow)?(props.tasks.C3.filter(t => t[1] === props.rewardRow)[0]?props.tasks.C3.filter(t => t[1] === props.rewardRow)[0][0]:""):""}
        
        </TableData>
        <TableData onDragOver ={(event)=>props.onDragOver(event)}
	      onDrop={(event)=>{props.onDrop(event, "C4")}} >
          {props.tasks.C4.filter(t => t[1] === props.rewardRow)?(props.tasks.C4.filter(t => t[1] === props.rewardRow)[0]?props.tasks.C4.filter(t => t[1] === props.rewardRow)[0][0]:""):""}
        </TableData>
        <TableData onDragOver ={(event)=>props.onDragOver(event)}
	      onDrop={(event)=>{props.onDrop(event, "C5")}} >
          {props.tasks.C5.filter(t => t[1] === props.rewardRow)?(props.tasks.C5.filter(t => t[1] === props.rewardRow)[0]?props.tasks.C5.filter(t => t[1] === props.rewardRow)[0][0]:""):""}
        
          </TableData>
        </tr>
    )
}
export default TableRow;