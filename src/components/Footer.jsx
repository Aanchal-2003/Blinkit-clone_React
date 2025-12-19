import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";




export default function Footer() {
    return (
        <div className='w-full  bg-gray-100'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-2  p-12 mt-20'>
                    <div className='grid grid-cols-3  '>
                        <span className='col-span-full font-bold '>Unseful Link</span>
                        <div>
                            <ul className='text-gray-500 grid  gap-2'>
                                <li>Blog</li>
                                <li>Privacy</li>
                                <li>Terms</li>
                                <li>FAQs</li>
                                <li>Security</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='text-gray-500 hidden md:grid   gap-2'>
                                <li>Partner</li>
                                <li>Franchise</li>
                                <li>Seller</li>
                                <li>Warehouse</li>
                                <li>Deliver</li>
                                <li>Resources</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='text-gray-500 hidden sm:grid gap-2'>
                                <li>Recipes</li>
                                <li>Bistro</li>
                                <li>District</li>
                            </ul>
                        </div>
                    </div>
                    <div className='grid grid-cols-3'>
                        <span className='col-span-full font-bold mb-4'>Categroies</span>
                        <div>
                            <ul className='text-gray-500 grid gap-2'>
                                <li>Vegetables & Fruits</li>
                                <li>Cold Drinks & Juices</li>
                                <li>Bakery & Biscuits</li>
                                <li>Dry Fruits, Masala & Oil</li>
                                <li>Paan Corner</li>
                                <li>Pharma & Wellness</li>
                                <li>Personal Care</li>
                                <li>Kitchen & Dining</li>
                                <li>Stationery Needs</li>
                                <li>Print Store</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='text-gray-500 hidden md:grid gap-2'>
                                <li>Dairy & Breakfast</li>
                                <li>Instant & Frozen Food</li>
                                <li>Sweet Tooth</li>
                                <li>Sauces & Spreads</li>
                                <li>Organic & Premium</li>
                                <li>Cleaning Essentials</li>
                                <li>Pet Care</li>
                                <li>Fashion & Accessories</li>
                                <li>Books</li>
                                <li>E-Gift Cards</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='text-gray-500 hidden sm:grid gap-2'>
                                <li>Munchies</li>
                                <li>Tea, Coffee & Milk Drinks</li>
                                <li>Atta, Rice & Dal</li>
                                <li>Chicken, Meat & Fish</li>
                                <li>Baby Care</li>
                                <li>Home Furnishing & Decor</li>
                                <li>Beauty & Cosmetics</li>
                                <li>Electronics & Electricals</li>
                                <li>Toys & Games</li>
                                <li>Rakhi Gifts</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-3 p-12'>
                    <div>
                        <span className='text-gray-500 hidden md:grid gap-2  '>© Blink Commerce Private Limited, 2016-2025</span>
                    </div>
                    <div className='grid-cols-3 gap-1 hidden md:grid'>
                        <span className='text-gray-500 grid gap-2 font-bold'>Download App</span>
                        <img src="https://blinkit.com/d61019073b700ca49d22.png" alt="" />
                        <img src="https://blinkit.com/8ed033800ea38f24c4f0.png" alt="" />
                    </div>
                    <div className='grid grid-flow-col justify-center gap-3 '>
                        <FaFacebook className='w-10 h-10' />
                        <FaSquareXTwitter className='w-10 h-10' />
                        <FaInstagramSquare className='w-10 h-10' />
                        <FaLinkedin className='w-10 h-10' />
                        <FaSquareThreads className='w-10 h-10' />
                    </div>
                </div>
                <div>
                    <span className='p-12 text-gray-500 grid gap-2   '>“Blinkit” is owned & managed by "Blink Commerce
                        Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, to
                        “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private
                        Limited”.</span>
                </div>
            </div>
        </div>
    )
}