'use client';
import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
        <div class="w-full h-screen">
            <div>
                <Spline scene="https://prod.spline.design/Y-viCDafQAAkobas/scene.splinecode" />
                {/* className='border-2 rounded-2xl border-violet-700' */}
            </div>
            
            <div class="flex items-center justify-center w-full h-[85vh] relative">
                <div class="text-center z-10 bg-[#0f0f0f] bottom-0 right-0 rounded-lg absolute p-4 mr-4">
                    <h1 class="text-3xl font-semibold text-white lg:text-4xl">FRONTEND DEVELOPER</h1>
                    <button class="w-full px-5 py-2 mt-4 text-sm font-medium font-JetBrains text-white capitalize transition-colors duration-300 transform bg-red-700 rounded-md lg:w-auto hover:bg-violet-500 focus:outline-none focus:bg-violet-500">Start project</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;