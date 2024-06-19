import React from "react";
import ButtonPanel from "./components/ButtonPanel";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import { useState } from "react";
function App() {
  const [productN, setproductN] = useState('all');
  return (
      <div className="App">
        <Header />
        <ButtonPanel send = {(name)=> {setproductN(name)}} />
        <Gallery productN={productN} />
      </div>
  );
}

export default App;
