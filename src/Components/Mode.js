import React, { useState } from "react";
import "./Mode.css";
export default function Mode(props){
return(
 <div className="Mode-btn" onClick={props.modeHandler} style={props.bg_style}></div>

)
}