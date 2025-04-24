import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import SecondsCounter from './components/SecondsCounter';
import RegresiveCounter from './components/RegresiveCounter';
import AlarmForm from './components/AlarmForm';
import ActionButtons from './components/ActionButtons';

let time=0;
let rtime=1000;
var stopflag=0;

function stopper(){
  stopflag=1;
}
function resumer(){
  stopflag=0;
}
function reseter(){
  rtime=1000;
  time=0;
}

const stopValue="Stop";
const resumeValue="Resume";
const resetValue="Reset";


function contador(){
  ReactDOM.createRoot(document.getElementById('AlarmForm')).render(<AlarmForm />);

  ReactDOM.createRoot(document.getElementById('SimpleCounter')).render(<SecondsCounter seconds={time} />);
  (stopflag==0) && time++;

 ReactDOM.createRoot(document.getElementById('RegresiveCounter')).render(<RegresiveCounter seconds={rtime} />);
  (stopflag==0) && rtime--;

  ReactDOM.createRoot(document.getElementById('StopButton')).render(<ActionButtons btnvalue={stopValue} fnaction={stopper} />);
  ReactDOM.createRoot(document.getElementById('ResumeButton')).render(<ActionButtons btnvalue={resetValue} fnaction={reseter} />);
  ReactDOM.createRoot(document.getElementById('ResetButton')).render(<ActionButtons btnvalue={resumeValue} fnaction={resumer} />);
  
}
setInterval(contador, 1000);
