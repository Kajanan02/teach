import './App.css';
import NavbarLayout from "./Components/common/navbar-layout";
import {Route, Routes} from "react-router-dom";
import Home from "./Components/Home/home";

function App() {
  return (
    <div>
     <NavbarLayout/>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </div>
  );
}

export default App;
