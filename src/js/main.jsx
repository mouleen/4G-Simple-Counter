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
let time=0;
let rtime=1000;


function contador(){
  ReactDOM.createRoot(document.getElementById('root')).render(<SecondsCounter seconds={time} />);
  time++;

 ReactDOM.createRoot(document.getElementById('RegresiveCounter')).render(<RegresiveCounter seconds={rtime} />);
  rtime--;
}

setInterval(contador, 1000);