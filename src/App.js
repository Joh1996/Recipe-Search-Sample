import React from "react";
import UserForm from "./Components/UserForm";
import Popup from "reactjs-popup";
import "./App.css";
import RecipeTables from './Components/RecipeTables'

function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-header">API CALL TEST</h1>
      </header>
      {/* <Popup trigger={<button>Click ME</button>} modal> */}
        {/* <h>HELLO</h> */}
        <UserForm />
      {/* </Popup> */}
    </div>
  );
}

export default App;
