import React from 'react';
//import ReactDOM  from 'react-dom';
//import crown from '../../../src/Image/crown.png';
import './FloatingDiv.css';

function FloatingDiv(props) {
  return (
    <div className="floatingdiv">
        <img src={props.image} alt="" />
        <span>
            {props.txt1} <br />
            {props.txt2}
        </span>   
    </div>
  )
}

export default FloatingDiv