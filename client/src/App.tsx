import './App.css';
import Register from './components/Register/Register'
import { Route, Routes } from "react-router-dom";
function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
