import React from "react";
import {Header} from "./components/Header"
import {ProductsList} from "./components/Products/index"
import 'boxicons';

function App() {
  return (
    <div className="App">
      <Header/>
      <ProductsList/>
    </div>
    
  );
}

export default App;
