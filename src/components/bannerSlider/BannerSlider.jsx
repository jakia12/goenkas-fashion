import { bannerSliders, dots } from '@/DATA/Placeholder';

import Slider from 'react-slick';
import slider1 from '../../images/slider1.jpg';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import SliderIcon from '../sliderIcon/SliderIcon';

const BannerSlider = () => {

    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
    const delay = 2000;

    //show autoplay
    // function resetTimeout() {
    //     if (timeoutRef.current) {
    //         clearTimeout(timeoutRef.current);
    //     }
    // }

    // useEffect(() => {
    //     resetTimeout();
    //     timeoutRef.current = setTimeout(
    //         () =>
    //             setIndex((prevIndex) =>
    //                 prevIndex === bannerSliders.length - 1 ? 0 : prevIndex + 1
    //             ),
    //         delay
    //     );

    //     return () => {
    //         resetTimeout();
    //     };
    // }, [index]);


    //custom number dots




    return (
        <section className='bg-bgOne'>
            <div className="flex justify-center">
                <div className="w-2/12 md:w-1/12 ">
                    <div className="flex items-center flex-col gap-y-10 justify-center">
                        {/* slider dot number */}
                        <ul className='mt-12'>
                            {
                                ["01", "02", "03"].map((dot, idx) => (
                                    <li key={dot.id}
                                        className='point_r'
                                        onClick={() => setIndex(idx)}
                                    >
                                        <div className="flex items-center justify-center flex-col  point_r">
                                            <div>
                                                <h3 className={`${idx === index ? "text-2xl font-semibold text-textPrimary" : "text-base font-normal text-gray-400"}`}>{dot}</h3>
                                                <div className="flex items-center justify-center my-2">
                                                    <div className="w">
                                                        <div className={`w-[1px] h-9  ${idx === index ? "bg-textPrimary" : "bg-gray-400"}`}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }

                        </ul>

                        {/* slider icon */}
                        <SliderIcon />
                    </div>
                </div>
                <div className="w-10/12">
                    <div className='mx-auto  overflow-hidden bg-white'>

                        <div className="slideShow_slider  "
                            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                        >
                            {
                                bannerSliders.map((slider) => (
                                    <div className=' slide flex items-center justify-center flex-nowrap' >

                                        <div className="md:flex items-center justify-center flex-wrap md:flex-nowrap"
                                        //  style={{
                                        //     background: `linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)),url(${slider.backImg.src})`,
                                        //     backgroundPosition: 'center center',
                                        //     backgroundSize: 'cover',
                                        //     backgroundRepeat: 'no-repeat'
                                        // }}
                                        >
                                            {/* slider content */}
                                            <div className="text-center md:text-left px-5 mb-4 md:mb-0">
                                                <h1 className='lg:text-5xl text-3xl font-medium text-textPrimary  capitalize  pb-4 ' >{slider.title}</h1>
                                                <div className=" sl_p">
                                                    <p className="text-textPrimary mb-4">{slider.subTitle}</p>
                                                </div>

                                                <button className=" text-textPrimary py-1.5 px-7  hover: rounded text-base  bg-white   border-2 border-textPrimary hover:text-[#fff] hover:bg-textPrimary " >
                                                    Shop Now
                                                </button>
                                            </div>

                                            {/* slider image */}
                                            <Image src={slider.img} alt="" />

                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="w-none md:w-1/12"></div>
            </div>



        </section>

    )
}

export default BannerSlider