import React from 'react';
import './Content5.css';
import { TiTick } from "react-icons/ti";

function Content5() {
  return (
    <>
    <div className='container5'>
        <div className='box10'>
            <h3 className='title5'>Simple. <span className='fair'>Fair pricing.</span></h3>
            <p className='pay'>Pay for what you use. There is no minimum charge. Always know what you’ll pay.</p>
        </div>
    </div>
    <div className='container6'>
        
        <div className='row7'>
        <div className='col-md-2'>
        <div className='box11'>
       
  <div className="box-body5">
    <h5 className="box-title8">Storage</h5>
  <p className="box-text8">Access a complete decentralized storage with simple, pay-as-you-go pricing</p>
  <h5 className='dollar'>$0.008<br/><span className='gb'>per GB/month</span></h5>
  <button className='minutes'>Get started in minutes</button>
  <p className='line1'><TiTick className='tick'/>Everything you need to storage & share files</p>
  <p className='line2'><TiTick className='tick'/>No fees for API requests or data retrievals</p>
  <p className='line3'><TiTick className='tick'/>No setup fees, monthly fees, or hidden fees</p>

  </div>

</div>
</div>
<div className='col-md-2'>
        <div className='box12'>
       
  <div className="box-body6">
    <h5 className="box-title9"> Transfer</h5>
  
    <p className="box-text9">Pay only for what you use. There is no minimum charge. You pay for all bandwidth into and out of Deupload.</p> 
     <button className='inbound'>Inbound</button>
     <p className='dollar1'>$0.006 <span className='gb1'>GB/month</span></p>
     <button className='outbound'>Outbound</button>
     <p className='dollar2'>$0.006 <span className='gb2'>GB/month</span></p>
  </div>

</div>
</div>
    
        </div>
        <p className='never'>Never pay for unused storage again. Never pay expensive seats for team member again.</p>. 
<p className='never1'>Only pay for what you use. Don’t get stalled by contracts, capacity planning, or price modeling.</p>

    <button className='pricing'>Pricing calculator</button>
    <button className='comparison'>Comparison</button>
    </div>
    </>
  )
}

export default Content5