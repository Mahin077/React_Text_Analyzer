import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Nav/>
    <Routes>
      <Route exact path='/' element={<Home operationName={"wordCounter"} />}/>
      <Route exact path='/uppercase' element={<Home operationName={"uppercase"}btName={"Upper Case"}/>}/>
      <Route exact path='/lowercase' element={<Home operationName={"lowercase"} btName={"Lower Case"}/>}/>
      <Route exact path='/removeextraspace' element={<Home operationName={"removeExtraSpace"}/>}/>
      <Route exact path='/replacewords' element={<Home operationName={"replaceWords"}/>}/>
      <Route exact path='/convertwords' element={<Home operationName={"convertWords"}/>}/>
      <Route exact path='/wordcounter' element={<Home operationName={"wordCounter"}/>}/>   
    </Routes>
    </Router>
    </>
  );
}

export default App;
