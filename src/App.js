import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react'
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
// npm install react-router-dom   => to install router in react

function App() {
  const [mode, setMode] = useState("light");
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })

      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#1e272e";
      showAlert("Dark Mode has been enabled","success");
    }else{
      setMode("light");
      document.body.style.backgroundColor="#fff";
      showAlert("Light Mode has been enabled","success");

    }
  }
    return (
        <>
        <Router>
          <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
          <Alert alert={alert}/>
          <div className="container my-3">

            <Routes>
              <Route exact path="/about" element={<About showAlert={showAlert}  mode={mode} toggleMode={toggleMode}/>}/>} />

              <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter , Character Counter , Remove Extra Spaces" mode={mode} toggleMode={toggleMode}/>} />
                
            </Routes>

          </div>
        </Router>
        </>
    );
}

export default App;