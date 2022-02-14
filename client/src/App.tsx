import './App.css';
import Register from './components/Register/Register'
import ListMessages from './components/ListMessages/ListMessages'
import { Route, Routes } from "react-router-dom";
function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ListMessages/>}/>
      </Routes>
    </div>
  );
}

export default App;
