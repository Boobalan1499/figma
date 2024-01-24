import React from 'react'
import './Header.css';
import logo from '../images/logo.png';
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
        <li><button className='sign1'>Sign In</button></li>
        <li><button className='primary'>Create an account</button></li>
     </ul>

     

    </div>
    </>
  )
}

export default Header