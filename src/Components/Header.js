import React from 'react'
import './Header.css';
import logo from '../images/logo.png';
import  Button  from 'react-bootstrap/Button';
function Header() {
  return (
    <>
    <div className='header'>
     <img src= {logo} alt='' className='logo'/>
     <ul>
        <li>Features</li>
        <li>Solutions</li>
        <li>NFT Storge</li>
        <li>Pricing</li>
        <li>Developers</li>
        <li>Resource</li>

     </ul>

     <ul>
        <li>App</li>
        <li>English</li>
        <li><Button variant="outline-dark" size= "sm">Sign In</Button></li>
        <li><Button variant="primary" size="sm">Create an account</Button></li>
     </ul>

     

    </div>
    </>
  )
}

export default Header