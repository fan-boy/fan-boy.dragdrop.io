import React from 'react';

const TableData = (props) =>{
    return(
        <td>
        <span className = "categoriesspan">
        <div
        className="categoriesDiv"
        onDragOver={props.onDragOver}
        onDrop={props.onDrop}>
            {props.children}
        </div>
        </span>
        </td>
    )
}
export default TableData;