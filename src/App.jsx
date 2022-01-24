import React from 'react';
import ReactDOM from 'react-dom';

const App=()=>{
  return (
    <>
    <div className="main-div">
      <div className="small-div">
        <h1 className="head">ToDo List</h1>
        <br />
        <div className="top">
          <input type="text" placeholder='Add an item' />
          <button>+</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;