import { NavLink } from "react-router-dom"

function Navbar() {

  return (
    <nav className='absolute p-2 bg-gray-800  font-semibold underline cursor-pointer'>
      <NavLink to='/' className='mx-2'>
        Home
      </NavLink>
      <NavLink to='/about' className='mx-2'>
        About
      </NavLink>
      <NavLink to='/translate' className='mx-2'>
        Translate
      </NavLink>
    </nav>
  )
}

export default Navbar
