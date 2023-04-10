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
                                        <h1 className='lg:text-6xl text-4xl font-medium text-white  uppercase  pb-4 ' >{slider.title}</h1>
                                    </div>

                                    <p className="text-white lg:max-w-3xl max-w-xl">{slider.subTitle}</p>
                                    <div className="pt-6">

                                        <button className=" text-white py-3 px-6   rounded-lg text-lg  bg-firstCol hover:bg-secondCol" >
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