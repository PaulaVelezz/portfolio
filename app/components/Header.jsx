import Link from 'next/link';
import React from 'react';
import Links from './Links';
import Image from 'next/image';


const Header = () => {
  return (
    <header className='font-JetBrains'>
        <div className="flex align-middle justify-between mt-2 pl-3 pr-5 gap-5">
        <Link
          href="/"
          className="text-3xl font-bold z-10 bg-black rounded-lg p-3 ml-4"
        > 
        {/* <Image 
          src="/images/logo-t.png" 
          alt="logo" 
          width={100} 
          height={100}
          /> */}
          PaulaVelez
        </Link>

        <div className="flex w-auto h-13 backdrop-blur-sm bg-black rounded-lg pl-6 pr-6 items-center z-10 mr-3">
          <nav className="font-medium tracking-wide">
            <Links />
          </nav>
        </div>
        </div>
    </header>
  );
}

export default Header;