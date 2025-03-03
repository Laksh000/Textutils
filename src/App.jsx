import { useState } from 'react'
import './App.css'
import About from './components/About'
import Form from './components/Form'
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import ColorPicker from './components/ColorPicker'
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link
 } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [selectedColor, setSelectedColor] = useState("#CCCCCC");

  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {

    if(mode == 'light'){

      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode active", "success");
    } else {

      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode active", "success");
    
    }
  }

  return (
    
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <ColorPicker onChangeColor = {setSelectedColor}/>
    <Alert alert={alert}/>
    <Routes>
        <Route path="/about" element={<About mode={mode}/>}></Route>
        <Route path="/" element={<Form heading="Enter your text below" mode={mode} showAlert={showAlert} colorS={selectedColor}/>}></Route>
    </Routes>
    </Router>
    </>
  )
}

export default App
