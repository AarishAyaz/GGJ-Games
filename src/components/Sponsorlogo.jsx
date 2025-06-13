import React from 'react'
import sponsor from '../assets/sponsorlogo.png'
import cloud from '../assets/Cloud2.png'

const Sponsorlogo = () => {
  return (
    <div>
          <div className="w-full h-[600px] flex justify center items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${cloud})` }}>
      <img src= {sponsor} alt="G4C Logo" className="mx-auto mt-80 h-50" />
    </div>
    </div>
  )
}

export default Sponsorlogo
