import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Translate from './components/translate/index'
import ProfileCard from './components/profileCard/index';
import Animal from './components/animalComponent/index';
import SearchImg from './components/searchImg/index';
const App = () => {

  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/translate" element={<Translate/>} />
        <Route path="/profilecard" element={<ProfileCard/>} />
        <Route path="/animal" element={<Animal/>} />
        <Route path="/searchimg" element={<SearchImg/>} />

      </Routes>
    </Router>
  )
}

export default App
