import React from "react";
import {Header} from "./components/Header"
import 'boxicons';

import {BrowserRouter as Router} from "react-router-dom"
import {Pages} from './components/Pages'


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Pages/>
      </Router>
    </div>
    
  );
}

export default App;
