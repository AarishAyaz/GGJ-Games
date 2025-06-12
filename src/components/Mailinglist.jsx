import React from 'react'

const Mailinglist = () => {
  return (
    <div>
       <div className="w-full text-center text-white py-12">
      <h2 className="text-xl font-bold mb-2">Sign up to our mailing list</h2>
      <h4 className="mb-6">Get updates from GGJ NEXT. Find out when new courses come online and when we host new events directly to your inbox.</h4>
      <div className="flex justify-center items-center gap-4 mb-10">
        <input type="email" className="px-6 py-2 bg-white text-black" placeholder="Enter your email" />
        <a href="" className="bg-white text-black  px-4 py-2 rounded">SUBSCRIBE</a>
      </div>
      <h1 className="text-3xl font-bold mb-2">GGJ NEXT isn’t possible without our generous sponsors.</h1>
      <h4 className="mb-4">Learn how your company can become a part of this excellent educational event.</h4>
      <a href="" className="bg-white text-black px-4 py-2 rounded">SPONSOR GGJ NEXT</a>
    </div>
    </div>
  )
}

export default Mailinglist
