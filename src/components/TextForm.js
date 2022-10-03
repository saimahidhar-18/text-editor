
import React, { useState } from 'react';
export default function TextForm(props) {
  const handleclick=()=>{
    //console.log("you clicked uppercase");
    let newtext=text.toUpperCase();
    setText(newtext);
  }
  const handleclicklower=()=>{
    //console.log("you clicked uppercase");
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showalert("converted to lower case","success");
  }
  const handleonchange=(event)=>{
    //console.log("on change");
    setText(event.target.value);
  }
  const handleclearlower=()=>{
    //console.log("on change");
    setText("");
    props.showalert("text cleared","success");
  }
  const [text,setText] = useState("enter text here2");
  // settext("saimahidahr");

  return (
    <>
      <div className="mb-3">
        <label for="mybox" className="form-label">{props.heading}</label>
        <textarea className="form-control" value={text} onChange={handleonchange} id="mybox" rows="8"></textarea>
      </div>
    {/* </div>/<button class="btn btn-primary">submit</button> */}
      <button className="btn btn-primary mx-2" onClick={handleclick}>
        convert to upper case
      </button>
      <button className="btn btn-primary mx-2" onClick={handleclicklower}>
        convert to lowercase
      </button>
      <button className="btn btn-primary" onClick={handleclearlower}>
        cleartext
      </button>
      <div className="container">
        <h2>count words</h2>
        <p>{text.split(" ").length}words and {text.length} characters</p>
      </div>
      <div className="container">
        <h2>text preview</h2>
        <p>{text}</p>
      </div>


   
    </>
 
    
    
  )
}
