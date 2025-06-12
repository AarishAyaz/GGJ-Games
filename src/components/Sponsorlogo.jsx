import React from 'react'
import sponsor from '../assets/sponsorlogo.png'
const Sponsorlogo = () => {
  return (
    <div>
          <div className="w-full bg-cover bg-center bg-no-repeat text-center" style={{ backgroundImage: 'url(clouds-white.svg)' }}>
      <img src= {sponsor} alt="G4C Logo" className="mx-auto mt-20 h-50" />
    </div>
    </div>
  )
}

export default Sponsorlogo
