import React from 'react'
import './App.css'

import Card from "./components/card.jsx";
import Clints from "./components/Clints.jsx";
import NewAnimation from "./components/NewAnimation";
import SomeThing from "./components/SomeThing";


import Contact from './components/pages/Contact'


function App() {

  return (
    <>
   <Contact/>

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
