import React from 'react'
import { Link } from 'react-router-dom'
import {HashLink} from "react-router-hash-link";
const Header = () => {
  return (
    <nav>
        <h1>TechBee</h1>
        <main>
            <HashLink to={"/#home"}>Home  </HashLink>
            <HashLink to={"/#about"}>About Us</HashLink>
            <Link to={"/contact"}>Contact Us  </Link>
            <HashLink to={"/#brands"}>Brand  </HashLink>
            <Link to={"/services"}>Services  </Link>
           
        </main>

    </nav>
  )
}

export default Header