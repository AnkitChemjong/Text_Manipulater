//import logo from './logo.svg';
import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";

function App() {
  const [alert,setAlert]=useState("");
  const showAlert=(message,type)=>{
     setAlert({
      msg:message,
      type:type
     })
     setTimeout(()=>setAlert(null),2000);
  }
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="gray";
      showAlert("Dark mode is selected!","success")
      document.title='Text Manipulater-DarkMode'
      // setInterval(()=>document.title="Download our app",4000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light mode is selected!","success")
      document.title='Text Manipulater-LightMode'

    }
  }

  return (
    <>
      <Router>
     <Navbar title="Ankit Chemjong" aboutText="My about" Text="Text Form" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert} mode={mode}/>
     <div className="container my-3">
       <Routes>
       <Route exact path="/" element={<Home/>}/>
          <Route exact path="/About" element={<About/>}/>
          
          <Route exact path="/TextForm" element={ <TextForm showAlert={showAlert} heading="Enter a text as you want!" mode={mode}/>}/>
        </Routes>
     </div>
      </Router>
    </>
  );
}

export default App;
