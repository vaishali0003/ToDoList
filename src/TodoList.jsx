import React from "react";

const TodoList = (props) => {

    return (
        <>
        <div className="listItem">
        <i className="fa fa-times-circle" onClick={()=>{
        props.onSelect(props.id);
        }}
        />
            <li>{props.text}</li>
            </div>
        </>
    );
};

export default TodoList;