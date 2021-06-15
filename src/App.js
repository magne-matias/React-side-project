import React from "react";
import {Header} from "./components/Header"
import 'boxicons';

import {BrowserRouter as Route} from "react-router-dom"
import Paginas from './components/Pages'


function App() {
  return (
    <div className="App">
      <Route>
        <Header/>
        <Paginas/>
      </Route>
    </div>
    
  );
}

export default App;
