import React from 'react'
import logo from '../assets/troll-face.png'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <img className='logo' src={logo} />
            <h1>Meme Generator</h1>
            <h3>React Course - Project 3</h3>
        </nav>
    )
}