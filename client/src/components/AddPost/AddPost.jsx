/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Chat from './images/chat.png'
import Heart from './images/heart.png'
import More from './images/more.png'
import Saved from './images/saved.png'
import Send from './images/send.png'
import User from './images/user.png'
import Image from './images/image.jpg'

export default function AddPost() {
  const [desc, setDesc] = useState('')
  const [date, setDate] = useState()
  const [time, setTime] = useState()
  const [selectedImage, setSelectedImage] = useState()

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setSelectedImage(event.target.result)
      };
      reader.readAsDataURL(e.target.files[0])
    }
  }

  return (
    <div className="add-post">
        <div className="add-post-left">
            <input type='file' id='upl-img-input' onChange={handleImageChange} />
            <label htmlFor="upl-img-input" id='upl-img-label'>Upload Image</label>
            <textarea className='add-post-textarea' value={desc} onChange={(e)=>setDesc(e.target.value)} placeholder="Description"/>
            <input type='date' value={date} onChange={(e) => setDate(e.target.value)}/>
            <input type='time' value={time} onChange={(e) => setTime(e.target.value)}/>
            <button>Schedule Post</button>
        </div>
        <div className="add-post-right">
            <div className="insta-up">
              <div>
                <img src={User} alt="User" />
                <h6>Username <span>• {date ? date : "2 d"} {time && time}</span></h6> 
              </div>
              <img src={More} alt="More" />
            </div>
            {selectedImage ? <img src={selectedImage} alt="Selected" /> : <img src={Image} />}
            <div className="insta-mid">
              <div>
                <img src={Heart} alt="Heart" />
                <img src={Chat} alt="Chat" />
                <img src={Send} alt="Send" />
              </div>
              <img src={Saved} alt="Saved" />
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
  );
}
