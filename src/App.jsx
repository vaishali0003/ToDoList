import React, { useState } from 'react';
import TodoList from './TodoList';
const App=()=>{

  const [inputList,setInputList]=useState('');
  const[Items,setItems]=useState([]);

  const itemEvent=(e)=>{
    setInputList(e.target.value);
  }

const listOfItems=()=>{
  setItems((oldItems)=>{
    return [...oldItems,inputList];
  });
  setInputList('');
};

const deleteItem=(id)=>{
  console.log('this item got deleted');

  setItems((oldItems)=>{
    return oldItems.filter((arrElem,index)=>{
      return index!=id;
    })
  })
}

  return (
    <>
    <div className="main-div">
      <div className="small-div">
        <h1 className="head">ToDo List</h1>
        <br />
        <div className="top">
          <input type="text" placeholder='Add an item' onChange={itemEvent} value={inputList}/>
          <button onClick={listOfItems}>+</button>
        </div>
        <ul>
          {Items.map((itemVal,index)=>{
            return (
              <TodoList 
              key={index}
              id={index}
              text={itemVal}
              onSelect={deleteItem}
            />
            )
          })}
        </ul>
      </div>
    </div>
    </>
  );
}

export default App;