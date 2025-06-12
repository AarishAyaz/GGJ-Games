import React from 'react'

const Header = () => {
  return (
    <div>
       <div className="w-full bg-black text-white py-4 px-100 flex justify-between items-center">
      <h1 className="text-3xl mr-8 font-bold">GGJ NEXT <sup>®</sup></h1>
      <div className="flex gap-12 items-center">
        {['About', 'Teach', 'Curriculum', 'The Jam', 'Jam Map'].map(text => (
          <a key={text} href="" className="hover:underline">{text}</a>
        ))}
        <img src="https://flagcdn.com/gb.svg" alt="EN" className="w-5 h-3" />
      </div>
    </div>
    </div>
  )
}

export default Header
