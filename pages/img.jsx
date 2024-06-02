import React from 'react';
import Typewriter from 'typewriter-effect';
const Img = () => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <img src="logo.jpg" alt="" className="relative w-screen h-screen rounded-xl" />
      </div>

      <div className="absolute left-40 right-0 top-40">
      <div className="relative -top-32">
<h1 className="text-6xl">Let's meet our 

<Typewriter
  options={{
    strings: [ "NFT's" , "Creations"],
    autoStart: true,
    loop: true,
  }}
/>
</h1>
</div>
        <img src="QR.jpg" alt="" className=" w-[18rem] rounded-xl" />
        <p className="text-3xl ml-16 mt-4 text-[#7c311a] ">Scan the QR</p>
      </div>
      
    </div>
  );
};

export default Img;
