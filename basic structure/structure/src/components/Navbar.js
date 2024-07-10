import React from 'react'
import "../components/navbar.css"
export const Navbar = () => {
  return (
        <>
            <h1>Hello From React</h1>
            <p>This is the Paragraph</p>
            <nav className='navbar'>
                <a href="#" className='logo'>React App</a>
                <a href="#" className='navbar'>Home</a>
                <a href="#" className='navbar'>About</a>
                <a href="#" className='navbar'>Contact Us</a>
                <a href="#" className='navbar'>Register</a>

            </nav>
        </>
  )
}

export default Navbar;