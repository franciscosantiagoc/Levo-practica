import './App.css';
import Home from './components/Home/Home'
import Register from './components/Register/Register'
import ListMessages from './components/ListMessages/ListMessages'
import { Route, Routes } from "react-router-dom";
function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/list" element={<ListMessages/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
