import React from 'react'
import './Content2.css';
import filesha from '../images/filesha.jpg';
import filereq from '../images/filereq.jpg';

function Content2() {
  return (
    <>
    <div className='container1'>
     <p className='design'>Lightweight design, ready to use for <span className='special'> team productivity</span>.</p>

    </div>
    <div className='container2'>
    <div className='row1'>
        <div className='col-md-2'>
            <div className='box4'>
       
  <div className="box-body">
    <h5 className="box-title1">File Sharing</h5>
  
    <p className="box-text1">Securely share files within or outside your organization, and control access, track edits, and analyze the shared content stats.</p>
    <img src= {filesha} alt='' className='filesha'/>
  </div>

</div>
</div>

        <div className='col-md-2'>
        <div className="box5" >
       
  <div className="box-body">
    <h5 className="box-title2">Collect Files</h5>
  
    <p className="box-text2">You can collect and receive files in a secure environment, even if the other person doesn’t have a Deupload account.</p>
    <img src ={filereq} alt='' className='filereq'/>
  </div>

</div>
        </div>
        </div>
</div>

    </>
  )
}

export default Content2;