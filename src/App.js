import React, { useState } from "react";
import './App.css';
import Navbar from './Components/Navbar';
import ShowProduct from './Components/ShowProduct';
import CreteNew from './Components/CreteNew';
var initial_product =
{
  productName: "Washing machine",
  material: [{ name: "smoke" }, { name: "plastic" }, { name: "drum" }]
}

function App() {
  const [build, setBuild] = useState([initial_product]);
  function addNewbuild(data) {
    setBuild((prev) => {
      return [
        ...prev,
        data
      ]
    })
    console.log(build);
  }

  function Removebuild(data) {
    setBuild((prev) => {
      var temp = []
      prev.forEach(info => {
        if (info !== data) {
          temp.push(info);
        }
      })
      return temp;
    })
  }

  return (
    <div className="App">
      <Navbar />
      <br />
      <CreteNew addNewbuild={addNewbuild} />
      <br />
      {
        !build.length ?
          <div className="container">
            <br />
            <h2>You have no product please create one!</h2>
          </div>
          :
          <ShowProduct product={build} Removebuild={Removebuild} />
      }

    </div>
  );
}

export default App;
