//import logo from './logo.svg';
import './App.css'; 
// import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [alert,setalert]=useState(null);
  const showalert = (message,type)=>{
    setalert({
      msg:message,
      type:type
    }
    )
    setTimeout(() => {
      setalert(null);
    }, 1000);
  }
  return (
   <>
  
  <Navbar/>
  <div className="container my-3">
  <Alert alert={alert}/>
<div className="container">
<TextForm showalert={showalert} heading="Enter the text to analyze"/>
</div>
  
  {/* <Aboutus /> */}
 
    </div>
  
  
   </>
  );
}

export default App;
