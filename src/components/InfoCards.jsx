import React from 'react'
import one from '../assets/img1.png'
import two from '../assets/img2.png'
import three from '../assets/img3.png'
const InfoCards = () => {
const cards = [
  {
    img: one,
    title: "GGJ Next",
    desc: "GGJ Next is a jam for kids 10-18 who are interested in learning the creation of video games",
    link: "FIND OUT MORE!"
  },
  {
    img: two,
    title: "G4C-GGJ University Student Challenge Jam",
    desc: "Tackle a social impact topic for the chance to turn your jam game into a $10K scholarship",
    link: "LEARN MORE"
  },
  {
    img: three,
    title: "Apply for Stipend",
    desc: "As we seek to grow GGJ Next around the globe, stipends are available for most countries.",
    link: "LEARN MORE"
  }
];

  return (
    <div>
      <div className="w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(clouds-white.svg)' }}>
      <div className="flex justify-center items-center text-white gap-10 py-12 px-4">
        {cards.map(({ img, title, desc, link }, idx) => (
          <div key={idx} className="w-1/3 text-center w-80 mx-auto   space-y-6">
            <img src={img} alt={title} className="mx-auto w-16" />
            <h2 className="text-xl font-bold">{title}</h2>
            <h4 className="text-lg">{desc}</h4>
            <a href="" className="inline-block bg-black text-white px-4 py-2 rounded">{link}</a>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default InfoCards
