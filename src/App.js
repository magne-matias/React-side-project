import React from "react";
import {Header} from "./components/Header"
import 'boxicons';

import {BrowserRouter as Route} from "react-router-dom"
import Pages from './components/Pages'


function App() {
  return (
    <div className="App">
      <Route>
        <Header/>
        <Pages/>
      </Route>
    </div>
    
  );
}

export default App;
