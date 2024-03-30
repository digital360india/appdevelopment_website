
import React from "react";
import Card from "./components/card.jsx";
import Clints from "./components/Clints.jsx";
import NewAnimation from "./components/NewAnimation";
import SomeThing from "./components/SomeThing";

function App() {

  return (
    <>
      <SomeThing/>
      <div>
        <Card />
        <Clints/>
         <NewAnimation/>
      </div>
    </>
    );
}

export default App;
