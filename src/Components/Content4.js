import React from 'react'
import './Content4.css';
import door from '../images/door.jpg';
import { FaRegHardDrive } from "react-icons/fa6";
import { FaLeaf } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import code from '../images/code.png';

function Content4() {
  return (
    <div className='container3'>
        <div className='row3'>
            <div className='col-md-6'>
                <div className='boo'>
            <p className='privacy'>Decentralized storage built for better privacy.</p>
           
           <p className='store'>Store data securely on over 13k nodes worldwide instead of just a few vulnerable data centers with privacy. Every file is encrypted, split into pieces, and stored on a global network of nodes, making data breaches and downtime a thing of the past.</p>
            </div>
            <div className='box7'>
         <div className="box-body">
          <img src={door} alt='' className='door'/>
         <h5 className="box-title5">Private by design</h5>
         <p className="box-text5">We believe data privacy is a human right, which is why Deupload is built on a decentralized architecture that makes data breaches a thing of the past.</p>
        
       </div>
     
     </div>
     
     <div className='part'>
             <FaRegHardDrive className='icon1'/>
             <p className='upgrade'>
              Upgrade your storage.
             </p>
             <p className='better'>Better security, performance and cost, Deupload is the better way to store data.</p>
            <a className = 'link1' href='link1'>Learn use cases <FaArrowRightLong className='link2'/></a>
             <FaLeaf className='icon2'/>
             <p className='carbon'>Carbon neutral storage.</p>
             <p className='better2'>Utilizing existing unused storage capacity on recycled hardware around the world.</p>
             <a className = 'link3' href='link3'>Environment impact <FaArrowRightLong className='link4'/></a>
         </div>
         <div className='box8'>
     <div className="box-body">
          <IoShieldCheckmarkSharp className='icon3'/>
         <h5 className="box-title6">Distributed network</h5>
         <p className="box-text6">An object is never in one place. Data is split into 80 pieces, and distributed to uncorrelated Nodes. When you call for the data, it’s automatically reconstituted in an instant.</p>
        
       </div>
     
     </div>
     <div className='box9'>
     <div className="box-body">
          <img src={code} alt='' className='code'/>
         <h5 className="box-title7">Worldwide availability</h5>
         <p className="box-text7">Data is stored on Nodes that are selected by reputation and local latency. The fastest Nodes from this set are chosen to store pieces, ensuring quick access to your data.</p>
        
       </div>
     
     </div>
         
     </div>
            </div>
        </div>
    
  )
}

export default Content4