import React from 'react'
import './feedbox.css'
import Postnew from './newpost/Postnew'
import Posts from './Posts/Posts'
function Feedbox() {
  return (
    <div className='feedbox'>
        <div className="innerfeedbox">
        <Postnew/>
        <Posts/>
        </div>
    </div>
  )
}

export default Feedbox