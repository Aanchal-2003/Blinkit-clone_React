import React from 'react'
import { CiClock1 } from "react-icons/ci";

export default function ProductCard({data}) {
    return (
        <div className='shadow-md bg-white rounded-2xl me-2 p-4'>
            <img src={data.images[0]} alt="" />

            <div className='flex flex-col gap-2 '>
                <button className='px-2 w-[40%] py-1 text-[10px] font-bold flex items-center gap-1 shadow bg-gray-100'>
                    <CiClock1 />
                    8 MINS
                </button>
                <h3 className='text-[15px] font-sans'>
                    {data.name}
                </h3>
                <p className='text-gray-500'>{data.inventory} piece</p>
                <div className='flex items-center justify-between'>
                    <span>₹{data.price}</span>
                    <button className='border border-green-700 rounded-xl px-3 font-bold text-green-700 py-1'>ADD</button>
                </div>

            </div>
        </div>
    )
}
