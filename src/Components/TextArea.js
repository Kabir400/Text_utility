import "./TextArea.css";
import React,{useState} from "react";
function TextArea(props){
   let [copy,setCopy]=useState("Copy");
  let [value,setValue]=useState("");
  let changeHandler=(e)=>{
        setValue(e.target.value);
  }
 let uppercaseHandler=()=>{
    setValue(value.toUpperCase());
 }
 let lowercaseHandler=()=>{
    setValue(value.toLowerCase())

 }
 let cleartextHandler=()=>{
    setValue("");
 }
 const copytextHandler = () => {
   navigator.clipboard.writeText(value);
   setCopy("Copied");
   document.querySelector(".copy").addEventListener("mouseleave",(e)=>{
      setCopy("Copy");
    });
    document.querySelector(".copy").addEventListener("mouseover",(e)=>{
       setCopy("Copy");
     })
}
    return(
    
        <div className="textarea-div">
        <h2 className="textarea-h2" style={{color:props.mode==="Dark Mode"?"black":"white"}}>Entre text to analize</h2>
        <textarea className="textarea" placeholder="Entre the text here" value={value} onChange={changeHandler} style={{backgroundColor:props.mode==="Dark Mode"?"white":"#454545",color:props.mode==="Dark Mode"?"black":"white"}} />
        <div className="area-btn">
        <button disabled={value.length===0} className="textarea-button uppercase" style={props.btnSty}onClick={uppercaseHandler}>Uppercase</button>
        <button disabled={value.length===0} className="textarea-button lowercase" style={props.btnSty}onClick={lowercaseHandler}>Lowercase</button>
        <button disabled={value.length===0} className="textarea-button clear" style={props.btnSty}onClick={cleartextHandler}>Clear Text</button>
        <button disabled={value.length===0} className="textarea-button copy" style={props.btnSty} onClick={copytextHandler}>{copy}</button>
        </div>
<div className="textarea-section">
<h2>Your text summary</h2>
<p>{value.length} carecters and {value.split(/\s+/).filter((e)=>{return e!==""}).length} words</p>
<h2>Preview</h2>
<p>{value}</p>
</div>
 </div>
           

    


    )
}
export default TextArea;