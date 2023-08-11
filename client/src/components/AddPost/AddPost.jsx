/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Chat from './images/chat.png'
import Heart from './images/heart.png'
import Image from './images/image.jpg'
import More from './images/more.png'
import Saved from './images/saved.png'
import Send from './images/send.png'
import User from './images/user.png'

export default function AddPost() {
  const [desc, setDesc] = useState('')
  return (
    <div className="add-post">
        <div className="add-post-left">
            <input type='file' id='upl-img-input'/>
            <label htmlFor="upl-img-input" id='upl-img-label'>Upload Image</label>
            <textarea className='add-post-textarea' value={desc} onChange={(e)=>setDesc(e.target.value)} placeholder="Description"/>
            <input type='date' />
            <input type='time' />
            <button>Schedule Post</button>
        </div>
        <div className="add-post-right">
            <div className="insta-up">
              <div>
                <img src={User} />
                <h6>Username <span>• 2 d</span></h6> 
              </div>
              <img src={More} />
            </div>
            <img src={Image} />
            <div className="insta-mid">
              <div>
                <img src={Heart} />
                <img src={Chat} />
                <img src={Send} />
              </div>
              <img src={Saved} />
            </div>
            <div className="insta-down">
              <p><span>Username</span> {
              desc ? desc : `Lorem ipsum, dolor sit amet 
              consectetur adipisicing elit. Autem molestiae at laboriosam 
              necessitatibus nemo aliquid eum velit atque, praesentium 
              consequuntur illo ex, voluptatem beatae quia. 
              Id aperiam ut voluptatem temporibus?`}</p>
            </div>
        </div>
    </div>
  )
}
