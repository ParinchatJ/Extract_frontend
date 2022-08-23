import React from "react";
import buttonImage from '/assets/akar-icons_circle-plus-fill.png'
import "./ButtonAddAct.css";

function ButtonAddAct() {
    const buttonSize = {
        height: '70px'
    }
  return (
    <div>
      <a href='/new'>
        <img src={buttonImage} alt="" style={buttonSize}/>
      </a>
    </div>
  );
}

export default ButtonAddAct;
