import Navbar from "./compoenents/Navbar";
import Home from "./compoenents/Home";
import Service from "./compoenents/Services";
import Menu from "./compoenents/Menu";
import { Routes, Route } from 'react-router-dom';
import About from "./compoenents/About";
import Main from "./compoenents/Main";
function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Routes>
      <Route path="/" element = {<Main/>}/>
      <Route path="home" element={<Home/>} />
      <Route path="Services" element={<Service/>} />
      <Route path="menu" element={<Menu/>} />
      <Route path="About" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
