import React from "react";
import {Header} from "./components/Header"
import 'boxicons';

import {BrowserRouter as Router} from "react-router-dom"
import {Pages} from './components/Pages'
import {DataProvider} from './context/DataProvider'


function App() {
  return (

    <DataProvider>
      <div className="App">
        <Router>
          <Header/>
          <Pages/>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
