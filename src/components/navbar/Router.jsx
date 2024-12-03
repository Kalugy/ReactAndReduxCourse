import { createBrowserRouter, BrowserRouter as Router, Route, Routes, RouterProvider } from 'react-router-dom';
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
import CarRedux2 from '../carRedux2/carRedux2';
import UserRedux from '../userRedux/userRedux';
import UserReduxExample from '../userReduxExample/UserReduxExample';
import TypeScript from '../typeScriptIntro/typeScript';

import HomePage from '../registryProject/pages/Home/HomePage';
import SearchPage from '../registryProject/pages/Search/SearchPage';
import SearchLoader from '../registryProject/pages/Search/SearchLoader'
import DetailsPage from '../registryProject/pages/Details/DetailsPage';
import Root from '../registryProject/pages/Root';
import MainRoot from './MainRoot'
import detailsLoader from '../registryProject/pages/Details/DetailsLoader';
import homeLoader from '../registryProject/pages/Home/homeLoader';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot />, // Navbar is now applied globally
    children: [
      { path: "/", element: <Home /> },
      { path: "/translate", element: <Translate /> },
      { path: "/profilecard", element: <ProfileCard /> },
      { path: "/animal", element: <Animal /> },
      { path: "/searchimg", element: <SearchImg /> },
      { path: "/book", element: <Book /> },
      { path: "/bookcontext", element: <BookContext /> },
      { path: "/dropdown", element: <Accordeon /> },
      { path: "/dropdown/accordeon", element: <Accordeon /> },
      { path: "/dropdown/button/:id", element: <Button /> },
      { path: "/dropdown/flex", element: <Flex /> },
      { path: "/dropdown/table", element: <Tables /> },
      { path: "/dropdown/search", element: <Search /> },
      { path: "/dropdown/select", element: <Select /> },
      { path: "/dropdown/modal", element: <Modal /> },
      { path: "/dropdown/modalportal", element: <ModalPortal /> },
      { path: "/dropdown/sortedtable", element: <SortableTable /> },
      { path: "/dropdown/increment", element: <Increment /> },
      { path: "/dropdown/incrementreducer", element: <IncrementReducer /> },
      { path: "/customnav", element: <CustomNav /> },
      { path: "/movieredux", element: <MovieRedux /> },
      { path: "/carredux", element: <CarRedux /> },
      { path: "/carreduxv2", element: <CarRedux2 /> },
      { path: "/userredux", element: <UserRedux /> },
      { path: "/userreduxcourse", element: <UserReduxExample /> },
      { path: "/typescript", element: <TypeScript /> },
      {
        path: "/registry",
        element: <Root />,
        children: [
          { index: true, 
            element: <HomePage />,
            loader: homeLoader
          },
          { path: "search", 
            element: <SearchPage />, 
            loader: SearchLoader,
          },
          { path: "packages/:name", 
            element: <DetailsPage />,
            loader: detailsLoader
          }
        ]
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} ></RouterProvider>
}

// const App = () => {
//   return (
//     <Router>
//       <Navbar/>

//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/translate" element={<Translate/>} />
//         <Route path="/profilecard" element={<ProfileCard/>} />
//         <Route path="/animal" element={<Animal/>} />
//         <Route path="/searchimg" element={<SearchImg/>} />
//         <Route path="/book" element={<Book/>} />
//         <Route path="/bookcontext" element={<BookContext/>} />
//         <Route path="/dropdown" element={<Accordeon/>} />
//         <Route path="/dropdown/accordeon" element={<Accordeon/>} />
//         <Route path="/dropdown/button/:id" element={<Button/>} />
//         <Route path="/dropdown/flex" element={<Flex/>} />
//         <Route path="/dropdown/table" element={<Tables/>} />
//         <Route path="/dropdown/search" element={<Search/>} />
//         <Route path="/dropdown/select" element={<Select/>} />
//         <Route path="/dropdown/modal" element={<Modal/>} />
//         <Route path="/dropdown/modalportal" element={<ModalPortal/>} />
//         <Route path="/dropdown/sortedtable" element={<SortableTable/>} />
//         <Route path="/dropdown/increment" element={<Increment/>} />
//         <Route path="/dropdown/incrementreducer" element={<IncrementReducer/>} />
//         <Route path="/customnav" element={<CustomNav/>} />
//         <Route path="/movieredux" element={<MovieRedux/>} />
//         <Route path="/carredux" element={<CarRedux/>} />
//         <Route path="/carreduxv2" element={<CarRedux2/>} />
//         <Route path="/userredux" element={<UserRedux/>} />
//         <Route path="/userreduxcourse" element={<UserReduxExample/>} />
//         <Route path="/typescript" element={<TypeScript/>} />
//         <Route path="/registry" element={<Root />}>
//           <Route index element={<HomePage />} />
//           <Route path="search" element={<SearchPage />} />
//           <Route path="packages/:name" element={<DetailsPage />} />
//         </Route>
//       </Routes>
//     </Router>
//   )
// }

export default App
