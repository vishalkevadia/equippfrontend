import React from 'react'
import './Loading.css'
import loadGif from './Loading (2).gif'

const Loading = () => {
  return (
    <>
      <div className="loading">
        <img className='laodGif' src={loadGif} alt="laodGif" />
      </div>
    </>
  )
}

export default Loading





