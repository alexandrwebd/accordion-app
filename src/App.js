import React from 'react'
import {AccordionWrapper} from './components/AccordionWrapper'
import './App.css';
import {AccordionState} from "./context/accordion/accordionState";

function App() {
  return (
      <AccordionState >
        <div className="App">
          <AccordionWrapper />
        </div>
      </AccordionState>
  )
}

export default App;
