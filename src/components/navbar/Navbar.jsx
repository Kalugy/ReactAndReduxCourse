import { NavLink } from "react-router-dom"

import Dropdown from "../dropdown/index"

function Navbar() {

  return (
    <nav className='absolute p-2 bg-gray-800  font-semibold underline cursor-pointer'>
      <NavLink to='/' className='mx-2'>
        Home
      </NavLink>
      <NavLink to='/translate' className='mx-2'>
        Translate
      </NavLink>
      <NavLink to='/profilecard' className='mx-2'>
        Profile Card
      </NavLink>
      <NavLink to='/animal' className='mx-2'>
        Animal app
      </NavLink>
      <NavLink to='/searchimg' className='mx-2'>
        Search Img
      </NavLink>
      <NavLink to='/book' className='mx-2'>
        Books Store
      </NavLink>
      <NavLink to='/bookcontext' className='mx-2'>
        Books Context
      </NavLink>
      <NavLink to='/customnav' className='mx-2'>
        CustomNav
      </NavLink>
      <NavLink to='/dropdown' className='mx-2'>
        <Dropdown />
      </NavLink>
      <NavLink to='/movieredux' className='mx-2'>
        MoviesRedux
      </NavLink>
      <NavLink to='/carredux' className='mx-2'>
        CarRedux
      </NavLink>
      <NavLink to='/carreduxv2' className='mx-2'>
        CarRedux2
      </NavLink>
    </nav>
  )
}

export default Navbar
