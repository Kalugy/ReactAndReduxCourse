import { NavLink } from "react-router-dom"

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
    </nav>
  )
}

export default Navbar
