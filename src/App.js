import React,{useState} from "react";
import Navbar from "./Components/Navbar";
import TextArea from "./Components/TextArea";
import Mode from "./Components/Mode";
import About from "./Components/About";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
function App(){
  let [mode,setMode]=useState("Dark Mode");
  let[bg_style,setbg_style]=useState({backgroundColor: "rgb(10, 14, 48)"})
  
  let btnSty={
    backgroundColor:mode==="Lite Mode"? "":"#0d0c0c91",
    color: mode==="Lite Mode"?"":"white",
  }

  let modeHandler=()=>{
      if(mode==="Dark Mode"){
          setMode("Lite Mode");
          document.body.style.backgroundColor="rgb(10, 14, 48)";
          document.body.style.color="white";
          setbg_style({backgroundColor:"white"});  
      }else{
          document.body.style.color="black";
          document.body.style.backgroundColor="white";
          setMode("Dark Mode");
          setbg_style({backgroundColor:"rgb(10,14,48)"});
      }
      
  }

  return(
    <>
    <Router>

   <Navbar mode={mode}/>
   <Routes>
   <Route path="/" element={<TextArea mode={mode} btnSty={btnSty}/>}>
   </Route>
   <Route path="/about" element={<About/>}>
   </Route>
   </Routes>
    </Router>
   

   <Mode modeHandler={modeHandler} mode={mode} bg_style={bg_style}/>
    </>
  )
}
export default App;