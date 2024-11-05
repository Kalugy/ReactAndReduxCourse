import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Translate from './components/translate/index'

const App = () => {

  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/translate" element={<Translate/>} />
      </Routes>
    </Router>
  )
}

export default App
