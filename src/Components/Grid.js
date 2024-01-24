import React from 'react'
import './Grid.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import keyhole from '../images/keyhole.jpg';
import { FaArrowRightLong } from "react-icons/fa6";
import nodes from '../images/nodes.jpg';
import block from '../images/block.jpg';

function Grid() {



  return (
    <div className='container'>
    <div className='row'>
        <div className='col-md-3'>
        <div className="card1" >
        <img src={keyhole} alt='' className='hole'/>
  <div className="card-body">
    <h5 className="card-titles">Lightweight</h5>
  
    <p className="card-text">Designed to be lightweight to help you enhance team collaboration by organizing and sharing files in your projects without stress.</p>
    <p className="sub">Product features <FaArrowRightLong/></p>
  </div>

</div>
        </div>

        <div className='col-md-3'>
        <div className="card2" >
        <img src={nodes} alt='' className='node'/>
  
  <div className="card-body">
    <h5 className="card-titles">Decentralization</h5>
    <p className="card-text">Store data securely on over 13k nodes worldwide instead of just a few vulnerable data centers with privacy and lightning speed by design.</p>
    <p className="sub">How it works <FaArrowRightLong/></p>
  </div>
</div>
        </div>

        <div className='col-md-3'>
        <div className="card3" >
  <img src={block}  alt="" className='block'/>
  <div className="card-body">
    <h5 className="card-titles">No subscription</h5>
    <p className="card-text">With Pay-as-you-go pricing, now you only pay for the resource you use without being charged a flat monthly fee even if you don’t use it up.</p>
    <p className="sub">Metered billing<FaArrowRightLong/></p>
  </div>
</div>
        </div>
    </div>
</div>

  
)
  }

export default Grid