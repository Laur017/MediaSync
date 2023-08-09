/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Facebook from './images/fb.png'
import Facebook1 from './images/fb1.png'
import Instagram from './images/inst.png'
import Instagram1 from './images/inst1.png'
import Tweeter from './images/tweet1.png'
import Tweeter1 from './images/tweet.png'
import Picture from './images/picture.png'
import Calendar from './images/calendar.png'
import Story from './images/story.png'
import Connect from './images/connect.png'
import { useNavigate } from 'react-router-dom'

export default function MainPage() {
    const [active, setActive] = useState(1)
    const navigate = useNavigate()
  return (
    <div className='main-page'>
        <div className="main-page-left">
            <img src={active === 1 ? Instagram1 : Instagram} onClick={()=>setActive(1)}/>
            <img src={active === 2 ? Facebook1 : Facebook} onClick={()=>setActive(2)}/>
            <img src={active === 3 ? Tweeter1 : Tweeter} onClick={()=>setActive(3)}/>
        </div>
        <div className="main-page-right">
            <div className="main-polar" onClick={()=>navigate('/add-post')}>
                <img src={Picture} />
                <h4>Add Post</h4>
            </div>
            <div className="main-polar">
                <img src={Story} />
                <h4>Add Story</h4>
            </div>
            <div className="main-polar">
                <img src={Calendar} />
                <h4>Calendar</h4>
            </div>
            <div className="main-polar">
                <img src={Connect} />
                <h4>Connect account</h4>
            </div>
        </div>
    </div>
  )
}
