import React from "react";
import Balloon from '../assets/Balloon.png'

const HeroSection = () => {
  return (
    <div className="bg-black text-white">
      <div className="flex w-full h-screen">
        <div className="w-1/2 flex justify-center items-center">
          <img src={Balloon} alt="Balloon" />
        </div>
        <div className="w-120 p-6 space-y-10 ">
          <h1 className="text-4xl font-bold">
            GGJ NEXT® is the
            <br />
            Global Game Jam® event <br />
            dedicated to young creators.
          </h1>
          <h2 className="text-2xl">20 January – 26 January 2025</h2>
          <h3 className="text-2xl font-semibold leading-8">
            In 2025, Global Game Jam and Games for Change have partnered to
            create the world's largest student game jam in support of the Games
            for Change “G4C Student Challenge.” The jam collaboration will kick
            off with the 2025 Global Game Jam and run through April 18, 2025.
          </h3>
         <div className="text-2xl w-150">
             <h3 className=" font-semibold leading-8">
            The GGJ Next-G4C partnership will include two student jams:
            <ul className="list-disc list-inside">
              <li>the G4C-GGJ Next Student Jam</li>
              <li>the G4C-GGJ University Student Challenge Jam</li>
            </ul>
          </h3>
         </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
