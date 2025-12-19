import React from 'react'
import { FaCaretDown, FaShoppingCart, FaCaretRight } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";


export default function HeaderMobile() {
    return (
        <div className='w-full block md:hidden bg-white shadow-md border-b p-4 fixed top-0 left-0   z-50'>
            <div className='max-w-7xl mx-auto '>

                <div className='w-full ' >
                    <div className='grid grid-flow-col justify-between'>
                        <h2 className='text-2xl font-bold '>Delivery in 8 minutes</h2>
                        <FaRegUserCircle className='right-4 top-6 text-4xl' />
                    </div>
                    <p className='flex items-center gap-1 my-2'>
                        B62, Pocket B, South Cith I, Sector 30, Gurugram, Haryana 122001, India
                        <FaCaretDown />
                    </p>

                </div>

                <div className='bg-gray-200 w-full flex items-center gap-2 px-4 py-2 rounded-xl '>
                    <CiSearch className='font-bold text-2xl' />
                    <input className='bg-transparent w-full outline-none  ' placeholder='Search...' type="text" name="" id="" />

                </div>
                <div className='bg-[#0c831f] w-full flex justify-between gap-2 rounded-2xl text-white items-center px-4  py-2 fixed z-20 bottom-0 left-0  m-2'>
                    <div className='flex gap-2 items-center'>
                        <FaShoppingCart />
                        <span>items</span>
                        <span>₹ 300</span>
                    </div>
                    <div className='flex items-center gap-1 font-bold'>
                        <span>View Cart</span>
                        <FaCaretRight className='text-2xl' />
                    </div>

                </div>
            </div>
        </div>
    )
}
