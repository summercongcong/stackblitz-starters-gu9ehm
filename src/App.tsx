import * as React from 'react';
import { useRef } from 'react';
import './style.css';

export default function App() {
  const videoRef = useRef()

  return (
    <video
      ref={videoRef}
      onClick={e => {
        e.stopPropagation()
        e.preventDefault()
        return false
      }}
      preload="auto"
      autoPlay={false}
      style={{objectFit: 'cover'}}>
      <source src="https://ict-resources.oss-cn-hangzhou.aliyuncs.com/ict-tools-mp/videos/video.mp4" />
    </video>
  );
}
