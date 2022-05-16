import React, { Component } from 'react';
import MyfirstComponent from './components/myfirstComponent';
import "./App.css"
// import myfirstComponent from './components/myfirstComponent';
import Navbar from './components/navbar';
class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
          This is a react component
          <br>
          </br><div style={{background:"red",color:"white",padding:"5 px",}}>
              Welcome Back:
              
              <MyfirstComponent></MyfirstComponent>
              
              
          </div>
      </div>
    );
  }
}

export default App;