import { bannerSliders } from '@/DATA/Placeholder';
import React from 'react'
import Slider from 'react-slick';
import slider1 from '../../images/slider1.jpg';

const BannerSlider = () => {



    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,

        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        // fade: true,
    };

    return (
        <div>
            <Slider {...settings}>

                {
                    bannerSliders.map((slider) => (
                        <div className='slider_wrapper' >

                            <div className="slider_content sl-h" style={{
                                background: `linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)),url(${slider.backImg.src})`,
                                backgroundPosition: 'center center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}>
                                <div className="content_wraper text-center px-5">
                                    <div className="flex justify-center">
                                        <h1 className='lg:text-5xl text-3xl font-medium text-white  uppercase  pb-4 ' >{slider.title}</h1>
                                    </div>
                                    <div className="flex justify-center">
                                        <p className="text-white lg:max-w-3xl max-w-xl text-center">{slider.subTitle}</p>
                                    </div>

                                    <div className="pt-6 flex items-center justify-center gap-4">
                                        <span className="text-white py-1.5 px-6 border-2 border-[#111] rounded bg-[#111]">${slider.startPrice}</span>
                                        <button className=" text-white py-1.5 px-6  hover: rounded text-base  bg-lightOrange hover:bg-secondCol border-2 border-lightOrange hover:border-[#fff] hover:text-[#fff] hover:bg-transparent " >
                                            Shop Now
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>

        </div>

    )
}

export default BannerSlider