import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {useRouter} from 'next/navigation';
import Img from "./img";
const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
<div>
  <img src="bg.jpg" alt="" className="w-screen h-screen"/>
</div>
      
    <div className="absolute top-0 left-0 right-0 w-full h-screen flex flex-col items-center justify-center px-4">
      <h2 className="text-5xl font-semibold  mb-8 sm:mb-16 text-white">Sign In</h2>
      <div className="w-full max-w-sm">
        <label htmlFor="email" className="block font-bold mb-2 text-white font-sans">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          placeholder='Enter the Email'
          onChange={handleEmailChange}
          className="border rounded-md py-2 px-4 w-full bg-[#F4F4F4] text-black"
          required
        />
      </div>
      {email && (
        <button className="mt-5 sm:mt-16 bg-[#5582fe] hover:bg-[#2648a4] ease-out duration-500 px-8 py-2 rounded text-white w-full max-w-sm"  onClick={() => router.push('/img')}>
        Log In
      </button>
      )}
      
    </div>
    </div>

  );
};

export default SignIn;
