// components/Header.js
import React from 'react';
import Link from 'next/link'; 


const Header = () => {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">

<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
<a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
   
    <span className="ml-3 text-xl xl:block lg:hidden">robotic-arm
</span>
  </a>
  <nav className="flex lg:w-4/5 flex-wrap items-center text-base md:ml-auto">
    <Link href="" className="mr-8 hover:text-white">home</Link>
  
    <Link href="#gallery-section" className="mr-8 hover:text-white">Process</Link>
    <Link href="#finalOP-section" className="mr-8 hover:text-white">Final Output</Link>
    <Link href="#Team-section" className="mr-8 hover:text-white">Team</Link>
    <Link href="#Contact-section" className="mr-8  hover:text-white">Contact Us</Link>
      </nav>
 
 
</div>
</header>
  );
}

export default Header;
