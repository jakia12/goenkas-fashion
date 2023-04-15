import { colorDots, singleSliders, sliderThumbs } from '@/DATA/Placeholder';
import SliderIcon from '@/components/sliderIcon/SliderIcon'
import Image from 'next/image';
import React, { useRef, useState } from 'react'
import { FiHeart } from 'react-icons/fi';

const ProductSingle = () => {
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef(null);
    const delay = 2000;

    return (
        <section className='bg-bgOne py-10'>
            <div className="flex items-center justify-center">
                <div className="w-1/12">
                    {/* slider icon */}
                    <SliderIcon />
                </div>
                <div className="w-10/12 bg-white rounded-md">
                    <div className="flex  justify-center gap-9  px-6 py-14">
                        <div className="w-6/12">
                            <div className="flex gap-2 justify-center">
                                <div className="w-2/12">
                                    <ul className=''>
                                        {
                                            sliderThumbs.map((thumb, idx) => (
                                                <li key={thumb.id}
                                                    className='point_r mb-2  '
                                                    onClick={() => setCurrent(idx)}
                                                >
                                                    <Image src={thumb.thumb} className='w-[5rem] h-[5rem] border border-gray-500 rounded' />
                                                </li>
                                            ))
                                        }

                                    </ul>
                                </div>
                                <div className="w-10/12">
                                    <div className="mx-auto  overflow-hidden bg-white">
                                        <div className="slideShow_slider"
                                            style={{ transform: `translate3d(${-current * 100}%, 0, 0)` }}
                                        >
                                            {
                                                singleSliders.map((sl) => (
                                                    <div className="slide_single flex items-center justify-center flex-nowrap">
                                                        <Image src={sl.img} className='w-full rounded-md border border-gray-400' />

                                                    </div>
                                                ))
                                            }
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="w-6/12">
                            <div className="py-2">

                                <h2 className="text-textPrimary font-semibold text-2xl md:text-3xl mb-5">Mens Formal</h2>

                                <button className=" text-textPrimary py-1 px-8  rounded-full  text-base  bg-white   border-2 border-textPrimary hover:text-[#fff] hover:bg-textPrimary " >
                                    Men
                                </button>

                                <p className="my-5 text-gray-500 text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                    optio, eaque rerum!</p>
                                {/* dot and size slider */}
                                <div className="flex items-center gap-9 my-5">
                                    {/* price tag */}
                                    <div>
                                        <span className='block text-sm text-gray-500 mb-2 '>price : </span>
                                        <span className="block text-lg font-medium text-textprimay">$57</span>
                                    </div>
                                    {/* color dot  slide */}
                                    <div>
                                        <span className='block text-sm text-gray-500'>Colors : </span>
                                        <ul className='flex justify-center items-center gap-2 mt-2'>
                                            {
                                                colorDots.map((col, indx) => (
                                                    <li
                                                        className={`${indx === current ? "p-1 rounded-full border-2 border-[#555]" : ""}`}
                                                    >
                                                        <div
                                                            className={`w-4 h-4 rounded-full`}
                                                            style={{ backgroundColor: `${col.color}` }}
                                                        >

                                                        </div>
                                                    </li>
                                                ))
                                            }

                                        </ul>
                                    </div>
                                </div>
                                {/* cart button and increment */}
                                <div className="flex items-center my-8 gap-5">
                                    {/* increment and decrement btn */}
                                    <div className="flex itemc-center justify-centr gap-1">
                                        <button className="w-10 h-10 rounded  bg-gray-100">+</button>
                                        <span className='w-10 h-10 rounded border border-gray-300 bg-bgOne flex items-center justify-center'>5</span>
                                        <button className="w-10 h-10 rounded  bg-gray-100">-</button>
                                    </div>

                                    {/* add to cart button */}
                                    <button className=" text-textPrimary py-2 px-7  hover: rounded text-sm  bg-white   border-2 border-textPrimary hover:text-[#fff] hover:bg-textPrimary capilatize" >
                                        Add to Cart
                                    </button>
                                    {/* add to wishlist */}
                                    <span className="text-2xl cursor-pointer text-gray-600">
                                        <FiHeart />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/12">

                </div>
            </div>
        </section>
    )
}

export default ProductSingle