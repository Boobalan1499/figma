import React from 'react'
import './Content.css'
import deupload from '../../src/images/deupload.jpg';

function Content() {
  return (
    <>
      <div className='para'>
        <p>File Storage and Sharing for remote teams that work together on <span className='strong'> Web3</span>
        </p>
      </div>
      <p className='para2'>Deupload is a online file manager on decentralized cloud storage and IPFS that allows you storage, share, collect files privately and team collaboration without subscription.</p>
      <button className='button1'>Get started </button>
      <button className='button2'>Pricing</button>
      <img src={deupload} alt="" className='img1'></img>
      <div >
        <p className='content2' >Lightning fast. Better privacy. Fairer cost.</p>
        <p className='content3'>You can choose continue to use centralized cloud storage but we have some better reasons for you to start moving to decentralized storage because it is simply the future of the internet.</p>
      </div>
    </>
  )
}

export default Content;