import React from 'react'
import HeaderMobile from './components/HeaderMobile'
import Header from './components/Header'
import Category from './components/Category'
import Product from './components/Product'
import Footer from './components/Footer'


export default function App() {
  return (
    <>
    <HeaderMobile className='block md:hidden' />
    <Header className='hidden md:block' />
    

    <div className='max-w-7xl mx-auto pt-[170px] md:pt-0 px-4'>
      <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg" alt="" />
    </div>

    <div className='max-w-7xl mx-auto hidden md:flex gap-4 p-5  '>
      <div>
        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg" alt="" />
      </div>
      <div>
        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg" alt="" />
      </div>
      <div>
        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-03/babycare-WEB.jpg" alt="" />
      </div>
    </div>
    <Category />
    <Product />
    <Footer />
    </>

  )
}
