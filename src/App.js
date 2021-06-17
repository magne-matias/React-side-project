import React from "react";
import 'boxicons';
import {BrowserRouter as Router} from "react-router-dom"

import {Pages} from './components/Pages'
import {Header} from "./components/Header"
import {Carrito} from './components/Carrito'

import {DataProvider} from './context/DataProvider'


function App() {
  return (

    <DataProvider>
      <div className="App">
        <Router>
          <Header/>
          <Pages/>
          <Carrito/>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
