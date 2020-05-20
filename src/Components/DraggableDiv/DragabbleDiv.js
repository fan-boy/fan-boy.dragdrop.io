import React from 'react';

class DragabbleDiv extends React.Component{
render(){
    let cssClass = this.props.classname;
    let type = this.props.type;
    let key = this.props.keyValue;
    let className = "draggable";
    if(cssClass && cssClass.length > 0){
        className = className + " " +cssClass
    }
    return(
        <div key={key} 
        onDragStart = {this.props.onDragStart}
        draggable
        className={className}
        >{this.props.children}
        {type !== "Rewards"? <span onClick = {() => this.props.onClickClose(key)} className = "close">x</span>:""}
        </div>
        );
}
}

export default DragabbleDiv;