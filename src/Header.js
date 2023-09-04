import React from 'react'
import { FaAdjust, FaBook } from "react-icons/fa";

function Header({ toggleTheme }) {

  return (
    <header>
        <div className="theme">
          <FaAdjust onClick={toggleTheme}/>
        </div>
        <div className="top">
            <h1 className='flex align-center justify-center'>
              <FaBook />
              My <span className="green">&nbsp;Courses&nbsp;</span> - List App
            </h1>
        </div>
    </header>
  )
}

export default Header