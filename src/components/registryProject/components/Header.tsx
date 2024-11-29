import React from "react"
import { Link } from "react-router-dom"
import SearchInput from "./SearchInput"

function Header() {

    return (
      <div className="p-20 flex flex-row justify-between ">
        <Link to="/registry">NPM Registry</Link>
        <SearchInput />
      </div>
    )
  }
  
  export default Header
  