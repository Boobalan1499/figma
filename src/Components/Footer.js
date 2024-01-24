import React from 'react'
import './Footer.css';
import batch from '../images/batch.png';
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa6";
import { AiFillMediumCircle } from "react-icons/ai";

function Footer() {
  return (
    <div className='footer'>
        <div className='row15'>
        <div className='file4'>
            <p className='what'>What is deupload?</p>
            <p className='para10'>Deupload is a cloud storage services based on Blockchain and Web3 technology, designed to help teams collaborate and file sharing in a completely private like never before.</p>
            <img src={batch} alt='' className='batch'/>
        </div>
        <div className='file5'>
            <h3 className='pro'>Products</h3>
            <ul className='products'>
                <li>Features</li>
                <li>Solutions</li>
                <li>Pricing</li>
                <li>Token</li>
                <li>Security</li>
                <li>Comparison</li>
            </ul>
        </div>
        <div className='file6'>
        <h3 className='res'>Resource</h3>
            <ul className='resource'>
                <li>Whitepaper</li>
                <li>Developer</li>
                <li>Brand Kits</li>
                <li>Compliance</li>
                <li>Privacy Policy</li>
                <li>Terms of service</li>
            </ul>

        </div>
        <div className='file7'>
        <h3 className='com'>Community</h3>
            <ul className='community'>
                <li>Guide</li>
                <li>Blog</li>
                <li>FAQs</li>
                <li>Forum</li>
                <li>Help center</li>
                <li>Support desk</li>
            </ul>

        </div>
       
        </div>
        <div className='file8'>
            
        <p className='copy'>&copy; 2022 Deupload. Powered by Conikal LLC</p>
        <div className='social'>
            <ul className='soc'>
                <li><FaFacebook className='soc'/></li>
                <li><AiFillTwitterCircle className='soc'/></li>
                <li><FaYoutube className='soc'/></li>
                <li><AiFillMediumCircle className='soc'/></li>

            </ul>
        </div>
        </div>
    </div>
  )
}

export default Footer