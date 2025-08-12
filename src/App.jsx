import Rickandmorty from "./components/Rickandmorty"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import CharacterDetail from "./components/CharacterDetail";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import Nasa from "./components/Nasa";


function App() {
  
  return (
    <>
      <Router>
         <Navbar />
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/rickandmorty" element={<Rickandmorty />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/nasa" element={<Nasa />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
      </Routes>
     </Router>
    </>
  )
}

export default App
