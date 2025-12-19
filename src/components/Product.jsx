import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Product() {
    const [chocolates, setChocolates] = useState([])
    const [coldDrinks, setColdDrinks] = useState([])
    const [milk, setMilk] = useState([])
    const [accessories, setAccessories] = useState([])
    async function fetchProducts() {
        const response = await fetch(import.meta.env.VITE_API_URl)
        const data = await response.json()



        const WaferChocolates = [];
        for (let product of data) {
            if (product.category === "Wafer Chocolates") {
                WaferChocolates.push(product)
            }
        }

        const ColdDrinks = [];
        for (let product of data) {
            if (product.category === "Cold Drink Bottles") {
                ColdDrinks.push(product)
            }
        }

        const Milk = [];
        for (let product of data) {
            if (product.category === "Tetra Milk") {
                Milk.push(product)
            }
        }

        const Accessories = [];
        for (let product of data) {
            if (product.category === "Hookah Accessories") {
                Accessories.push(product)
            }
        }


        setChocolates(WaferChocolates)
        setColdDrinks(ColdDrinks)
        setMilk(Milk)
        setAccessories(Accessories)

    }

    useEffect(
        () => {
            fetchProducts()
        },
        []
    )
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='max-w-7xl mx-auto px-3 sapce-y-8'>
            <div>
                <h2 className='text-xl font-bold mb-3 mt-20 '>Wafer Chocolates</h2>

                {chocolates.length > 0 && (
                    <Slider {...settings}>
                        {
                            chocolates.map(
                                (data, index) => {
                                    return <ProductCard key={data.index} data={data} />
                                }
                            )
                        }
                    </Slider>
                )}

            </div>

            <div>
                <h2 className='text-xl font-bold mb-3 mt-20'>Cold Drinks</h2>

                {coldDrinks.length > 0 && (
                    <Slider {...settings}>
                        {
                            coldDrinks.map(
                                (data, index) => {
                                    return <ProductCard key={data.index} data={data} />
                                }
                            )
                        }
                    </Slider>
                )}

            </div>


            <div>
                <h2 className='text-xl font-bold mb-3 mt-20 '>Tetra Milk</h2>

                {milk.length > 0 && (
                    <Slider {...settings}>
                        {
                            milk.map(
                                (data, index) => {
                                    return <ProductCard key={data.index} data={data} />
                                }
                            )
                        }
                    </Slider>
                )}

            </div>

            <div>
                <h2 className='text-xl font-bold mb-3 mt-20 '>Hookah Accessories</h2>

                {accessories.length > 0 && (
                    <Slider {...settings}>
                        {
                            accessories.map(
                                (data, index) => {
                                    return <ProductCard key={data.index} data={data} />
                                }
                            )
                        }
                    </Slider>
                )}

            </div>





        </div>
    )
}
