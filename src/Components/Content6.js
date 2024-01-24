import React from 'react';
import './Content6.css';
import { FaUserPen } from "react-icons/fa6";
import { FaUpload } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";
import { BiBuildings } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import Frame from '../images/Frame.jpg';
function Content6() {
  return (
    <>
    <div className='content6'>
        <h3 className='how'>How it works?</h3>
        <p className='para5'>Deupload removes complexity and offers a simple interface that allows users to take advantage of the vast array of decentralized storage with better security, performance, and pricing.</p>
   
    </div>
    <div className='content7'>
        <div className='file1'>
        <FaUserPen className='pen'/>
        <p className='account'>Create an account</p>
        <p className='account1'>Create an Deupload account and start uploading your files to Decentralized Storage.</p>
        </div>
        <div className='file2'>
        <FaUpload className='upload'/>
        <p className='account'>Upload your files</p>
        <p className='account1'>Your file is encrypted and split into pieces then distributed to the nodes around the world.</p>
  </div>
        <div className='file3'>
        <FaLink className='link'/>
        <p className='account'>Share file instantly</p>
        <p className='account1'>Send your file via email or shareable link with password protect and expiration time.</p>
  </div>
    
    </div>
    <div className='content8'>
        <p className='ready'>Ready to get started?</p>
        <p className='ready1'>File storage and sharing on decentralized storage that suits any business size.</p>
        <button className='create'>Create an account</button>
    </div>
    <div className='content9'>
        <div className='row11'>
            <div className='col-md-6'>
                <div className='box13'>
                    <div className='box-body13'>
                        <FaUserTie className='tie'></FaUserTie>
                        <h3 className='box-title13'>Are you individual?</h3>
                        
                        <p className='box-text13'>Syncing, backing up, and sharing your photos, videos and documents in total privacy couldn’t be easier.</p>
                        <p className='box-link1'>Start now <FaArrowRightLong/></p>
                    </div>
                </div>
                </div>
                <div className='col-md-6'>
                <div className='box14'>
                    <div className='box-body14'>
                        <BiBuildings className='bi'></BiBuildings>
                        <h3 className='box-title14'>Are you business?</h3>
                        
                        <p className='box-text14'>Work efficiently with teammates and clients, stay in sync on projects, and keep company data safe—all in one place on decentralized network.</p>
                        <p className='box-link1'>See pricing <FaArrowRightLong/></p>
                        <img src ={Frame} alt='' className='frame'></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Content6