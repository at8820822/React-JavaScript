import React,{useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("");
    const  handleUpClick=()=>{
    console.log("this is click" + text);
        let newText=text.toLocaleUpperCase();
        setText(newText)}
        const  handleLoClick=()=>{
          console.log("this is click" + text);
              let newText=text.toLocaleLowerCase();
              setText(newText)}
  const handleOnChange=(event )=>{
    setText(event.target.value)
  }

  return (
   <>
   <div className="container my-3">
       
<h1>{props.heading} </h1>
<div className="mb-4">

 <textarea className="form-control" value={text}  onChange={handleOnChange} id="mybox" rows="8"></textarea>
</div>
  
   <button className="btn btn-primary mx-1" onClick= {handleUpClick} >Convert uper case</button>
  
   <button className="btn btn-primary mx-1" onClick= {handleLoClick} >Convert lower case</button>
   </div>
 <div className="container my-2">
  <h1>your text summary</h1>
  <p>{text.split(" ").length} Words and {text.length}Characters</p>
  <p>{0.008*text.split(" ").length} minutes read </p>
  <h2>Preview</h2>
  <p>{text}</p>
 </div>
   
   
   </>
  )
  }
