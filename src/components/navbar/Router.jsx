import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../navbar/Navbar'
import Home from '../home/Home'
import Translate from '../translate/index'
import ProfileCard from '../profileCard/index';
import Animal from '../animalComponent/index';
import SearchImg from '../searchImg/index';
import Book from '../Book/index';

import BookContext from '../BookContext/index';
import Accordeon from '../dropdown/Accordeon'
import Button from '../dropdown/Button';
import Tables from '../dropdown/Tables';
import Flex from '../dropdown/Flex';
import Search from '../dropdown/Search';
import Select from '../dropdown/Select';
import Modal from '../dropdown/Modal';
import CustomNav from '../customNav/CustomNav';
import ModalPortal from '../dropdown/ModalPortal';
import SortableTable from '../dropdown/TablesSort ';
import Increment from '../dropdown/Increment';
import IncrementReducer from '../dropdown/IncrementReducer';
import MovieRedux from '../movieRedux/index'
import CarRedux from '../carRedux/carRedux';

const App = () => {

  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/translate" element={<Translate/>} />
        <Route path="/profilecard" element={<ProfileCard/>} />
        <Route path="/animal" element={<Animal/>} />
        <Route path="/searchimg" element={<SearchImg/>} />
        <Route path="/book" element={<Book/>} />
        <Route path="/bookcontext" element={<BookContext/>} />
        <Route path="/dropdown" element={<Accordeon/>} />
        <Route path="/dropdown/accordeon" element={<Accordeon/>} />
        <Route path="/dropdown/button/:id" element={<Button/>} />
        <Route path="/dropdown/flex" element={<Flex/>} />
        <Route path="/dropdown/table" element={<Tables/>} />
        <Route path="/dropdown/search" element={<Search/>} />
        <Route path="/dropdown/select" element={<Select/>} />
        <Route path="/dropdown/modal" element={<Modal/>} />
        <Route path="/dropdown/modalportal" element={<ModalPortal/>} />
        <Route path="/dropdown/sortedtable" element={<SortableTable/>} />
        <Route path="/dropdown/increment" element={<Increment/>} />
        <Route path="/dropdown/incrementreducer" element={<IncrementReducer/>} />
        <Route path="/customnav" element={<CustomNav/>} />
        <Route path="/movieredux" element={<MovieRedux/>} />
        <Route path="/carredux" element={<CarRedux/>} />
      </Routes>
    </Router>
  )
}

export default App
