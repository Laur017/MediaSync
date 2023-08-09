/* eslint-disable no-unused-vars */
import React from 'react'
import Dropzone from 'react-dropzone'

export default function AddPost() {
  return (
    <div className="add-post">
        <div className="add-post-left">
            <input type='file' id='upl-img-input'/>
            <label htmlFor="upl-img-input" id='upl-img-label'>Upload Image</label>
            <textarea className='add-post-textarea'/>
            <input type='date' />
            <input type='time' />
            <button>Schedule Post</button>
        </div>
        <div className="add-post-right">
            
        </div>
    </div>
  )
}
