import React from 'react'
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  return (
    <div className='w-full hidden md:block bg-white shadow-md border-b p-4 sticky top-0 z-20'>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className='flex  items-center gap-1 justify-between pe-4 '>
                <span className='text-[#FFCC33] font-bold text-5xl leading-none'>
                    blink
                </span>
                <span className='text-[#4CAF50] font-bold text-5xl leading-none'>
                    it
                </span>
            </div>

            <div  >
                <h2>Delivery in 8 minutes</h2>
                <p className='flex items-center gap-1'>
                    B62, Pocket B, South Cith I, Secto...
                    <FaCaretDown />
                </p>
            </div>

            <div className='bg-gray-200 w-md flex items-center gap-2 px-4 py-2 rounded-xl '>
                <CiSearch className='font-bold text-2xl' />
                <input className='bg-transparent w-full outline-none  ' placeholder='Search...' type="text" name="" id="" />

            </div>
            <div className='text-[#363636] '>Login</div>
            <div className='bg-[#0c831f] flex justify-center gap-2 rounded-2xl text-white items-center px-4 py-2'>
                <FaShoppingCart />
                <span>items</span>
                <span>₹ 300</span>

            </div>
        </div>  
    </div>
  )
}
