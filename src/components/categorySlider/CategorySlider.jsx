import { categorySliders } from '@/DATA/Placeholder';
import Image from 'next/image';

import Slider from 'react-slick';
//western cat image

import western from '../../images/categorySlider/western.png';
import girlTop from '../../images/categorySlider/girl-top.png';
import sleeveImg from '../../images/categorySlider/sleeve.png';
import casual from '../../images/categorySlider/casual.png';


const CategorySlider = () => {
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

        <div className='flex items-center flex-wrap'>
            <div className="w-full sm:w-6/12 md:w-3/12">
                <div className="m-4 relative  rounded  ">
                    <Slider {...settings}>


                        <div className='relative z-10'>
                            <Image src={western} alt="" className="w-full rounded" />

                        </div>
                        <div className='relative z-10'>
                            <Image src={western} alt="" className="w-full rounded" />

                        </div>

                    </Slider >
                </div>

            </div>



            <div className="w-full sm:w-6/12 md:w-3/12">
                <div className="m-3 relative  rounded  ">
                    <Slider {...settings}>

                        <div className='relative z-10'>
                            <Image src={girlTop} alt="" className="w-full rounded" />

                        </div>
                        <div className='relative z-10'>
                            <Image src={girlTop} alt="" className="w-full rounded" />

                        </div>



                    </Slider>
                </div>

            </div>
            <div className="w-full sm:w-6/12 md:w-3/12">
                <div className="m-3 relative  rounded  ">
                    <Slider {...settings}>

                        <div className='relative z-10'>
                            <Image src={sleeveImg} alt="" className="w-full rounded" />

                        </div>
                        <div className='relative z-10'>
                            <Image src={sleeveImg} alt="" className="w-full rounded" />

                        </div>



                    </Slider>
                </div>

            </div>

            <div className="w-full sm:w-6/12 md:w-3/12">
                <div className="m-3 relative  rounded  ">
                    <Slider {...settings}>

                        <div className='relative z-10'>
                            <Image src={casual} alt="" className="w-full rounded" />

                        </div>
                        <div className='relative z-10'>
                            <Image src={casual} alt="" className="w-full rounded" />

                        </div>



                    </Slider>
                </div>

            </div>

            {/* third slider */}
            {/* < div className="w-full sm:w-6/12 md:w-3/12" >
                <Slider {...settings}>
                    <div className="m-3 relative  rounded  ">
                        <Image src={sleeveImg} alt="" className="w-full rounded" />
                        <div className="absolute top-24 left-10 cat_content z-10">
                            <h3 className="text-lg font-medium text-white py-2">
                                Sleeve Less
                            </h3>
                            <button className='bg-lightOrange text-white hover:bg-secondCol rounded-md text-sm py-1.5 px-6 border-2 border-lightOrange hover:border-[#fff] hover:text-[#fff] hover:bg-transparent ' type="submit" >
                                Buy Now
                            </button>
                        </div>
                    </div>
                    <div className="m-3 relative  rounded  ">
                        <Image src={sleeveImg} alt="" className="w-full rounded" />
                        <div className="absolute top-24 left-10 cat_content z-10">
                            <h3 className="text-lg font-medium text-white py-2">
                                Sleeve Less
                            </h3>
                            <button className='bg-lightOrange text-white hover:bg-secondCol rounded-md text-sm py-1.5 px-6 border-2 border-lightOrange hover:border-[#fff] hover:text-[#fff] hover:bg-transparent ' type="submit" >
                                Buy Now
                            </button>
                        </div>
                    </div>

                </Slider>
            </ div>
            {/* third slider */}
            {/* < div className="w-full sm:w-6/12 md:w-3/12" >
                <Slider {...settings}>
                    <div className="m-3 relative  rounded  ">
                        <Image src={casual} alt="" className="w-full rounded" />
                        <div className="absolute top-24 left-10 cat_content z-10">
                            <h3 className="text-lg font-medium text-white py-2">
                                Casual
                            </h3>
                            <button className='bg-lightOrange text-white hover:bg-secondCol rounded-md text-sm py-1.5 px-6 border-2 border-lightOrange hover:border-[#fff] hover:text-[#fff] hover:bg-transparent ' type="submit" >
                                Buy Now
                            </button>
                        </div>
                    </div>
                    <div className="m-3 relative  rounded  ">
                        <Image src={casual} alt="" className="w-full rounded" />
                        <div className="absolute top-24 left-10 cat_content z-10">
                            <h3 className="text-lg font-medium text-white py-2">
                                Casual
                            </h3>
                            <button className='bg-lightOrange text-white hover:bg-secondCol rounded-md text-sm py-1.5 px-6 border-2 border-lightOrange hover:border-[#fff] hover:text-[#fff] hover:bg-transparent ' type="submit" >
                                Buy Now
                            </button>
                        </div>
                    </div>

                </Slider>
            </ div>  */}
        </div>


    )
}

export default CategorySlider