import React from 'react'
import texture from '../img/Texture.png'

const Texture = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 opacity-80"
      style={{
        backgroundImage: `url(${texture})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
      }}>

    </div>
  )
}

export default Texture