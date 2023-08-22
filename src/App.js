import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About'
import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const toggleMode = ()=>{            // to enable or disable dark mode
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(24 24 24)';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Router>
    <Nav mode={mode} toggleMode={toggleMode}/>
    <Routes>
      <Route exact path='/' element={<Home operationName={"wordCounter"} mode={mode} title={"Write your text inside the box to find out total words and characters of your given text"}/>}/>
      <Route exact path='/uppercase' element={<Home operationName={"uppercase"} mode={mode} btName={"Upper Case"} title={"Write your text inside the box and press the button to convert the text into uppercase"}/>}/>
      <Route exact path='/lowercase' element={<Home operationName={"lowercase"} mode={mode} btName={"Lower Case"} title={"Write your text inside the box and press the button to convert the text into lowercase"}/>}/>
      <Route exact path='/removeextraspace' element={<Home operationName={"removeExtraSpace"} mode={mode} btName={"Remove Extra Space"} title={"Write your text inside the box and press the button to remove all the extra spaces from your text"}/>}/>
      <Route exact path='/replacewords' element={<Home operationName={"replaceWords"} mode={mode} btName={"Replace Words"} title={"Write your text inside the upper box and write the old word that you want to replace and the new word that you want to replace to and then press the button"}/>}/>
      <Route exact path='/convertwords' element={<Home operationName={"convertWords"} mode={mode} btName={"Convert to Words"} title={"Write your text inside the box and press the button to see all the words in new lines"}/>}/>
      <Route exact path='/wordcounter' element={<Home operationName={"wordCounter"} mode={mode} title={"Write your text inside the box to find out total words and characters of your given text"}/>}/>   
      <Route exact path='/about' element={<About mode={mode}/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
