import React from "react"
import { Link } from "react-router-dom"

function Header() {

    return (
      <div className="p-20">
        <Link to="/registry">NPM Registry</Link>
      </div>
    )
  }
  
  export default Header
  