import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='dashboard' element={ <Dashboard/>}/>

      </Routes>
    
    </div>
  );
}

export default App;
