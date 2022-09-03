import React from 'react'

export default function VideoPlayer() {
  return (
    <video width="750" height="500" controls >
      <source src="./Videos/video1.mp4" type="video/mp4" />
    </video>
  )
}
