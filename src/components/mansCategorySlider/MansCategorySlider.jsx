
import Slider from 'react-slick';
import casual from '../../images/mansCategory/casual.png';
import formal from '../../images/mansCategory/formal.png';
import partyWear from '../../images/mansCategory/partyWear.png';
import tShirt from '../../images/mansCategory/tShirt.png';
import Image from 'next/image';

const MansCategorySlider = () => {
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
        <div className='flex items-center justify-center flex-wrap'>
            <div className="w-full sm:w-6/12 md:w-3/12">
                <div className="m-3 relative  rounded  ">
                    <Slider {...settings}>
                        <div className="relative z-10">
                            <Image src={casual} alt="" className="w-full rounded" />
                            <div className="absolute top-24 left-10 cat_content z-10">
                                <h3 className="text-lg font-medium text-white bg-[#111] px-4 py-1 rounded-lg mb-2 ">
                                    Casual
                                </h3>
                                <button className='bg-lightOrange text-white hover:bg-secondCol rounded-md text-sm py-1.5 px-6 border-2 border-lightOrange hover:border-[#fff] hover:text-[#fff] hover:bg-transparent ' type="submit" >
                                    Buy Now
                                </button>
                            </div>
                        </div>

                        <div className="relative">
                            <Image src={casual} alt="" className="w-full rounded" />
                            <div className="absolute top-24 left-10 cat_content z-10">
                                <h3 className="text-lg font-medium text-white bg-[#111] px-4 py-1 rounded-lg mb-2 ">
                                    Casual
                                </h3>
                                <button className='bg-lightOrange text-white hover:bg-secondCol rounded-md text-sm py-1.5 px-6 border-2 border-lightOrange hover:border-[#fff] hover:text-[#fff] hover:bg-transparent ' type="submit" >
                                    Buy Now
                                </button>
                            </div>
                        </div>

                    </Slider>
                </div>

            </div>
            {/* seconde slider */}
            <div className="w-full sm:w-6/12 md:w-3/12">
                <div className="m-3 relative  rounded  ">
                    <Slider {...settings}>
                        <div className="relative z-10">
                            <Image src={partyWear} alt="" className="w-full rounded" />
                            <div className="absolute top-24 left-10 cat_content z-10">
                                <h3 className="text-lg font-medium text-white bg-[#111] px-4 py-1 rounded-lg mb-2 ">
                                    Party Wear
                                </h3>
                                <button className='bg-lightOrange text-white hover:bg-secondCol rounded-md text-sm py-1.5 px-6 border-2 border-lightOrange hover:border-[#fff] hover:text-[#fff] hover:bg-transparent ' type="submit" >
                                    Buy Now
                                </button>
                            </div>
                        </div>

                        <div className="relative">
                            <Image src={partyWear} alt="" className="w-full rounded" />
                            <div className="absolute top-24 left-10 cat_content z-10">
                                <h3 className="text-lg font-medium text-white bg-[#111] px-4 py-1 rounded-lg mb-2 ">
                                    Party Wear
                                </h3>
                                <button className='bg-lightOrange text-white hover:bg-secondCol rounded-md text-sm py-1.5 px-6 border-2 border-lightOrange hover:border-[#fff] hover:text-[#fff] hover:bg-transparent ' type="submit" >
                                    Buy Now
                                </button>
                            </div>
                        </div>

                    </Slider>
                </div>

            </div>
            {/* third slider */}

            <div className="w-full sm:w-6/12 md:w-3/12">
                <div className="m-3 relative  rounded  ">
                    <Slider {...settings}>
                        <div className="relative z-10">
                            <Image src={formal} alt="" className="w-full rounded" />
                            <div className="absolute top-24 left-10 cat_content z-10">
                                <h3 className="text-lg font-medium text-white bg-[#111] px-4 py-1 rounded-lg mb-2 ">
                                    Formal
                                </h3>
                                <button className='bg-lightOrange text-white hover:bg-secondCol rounded-md text-sm py-1.5 px-6 border-2 border-lightOrange hover:border-[#fff] hover:text-[#fff] hover:bg-transparent ' type="submit" >
                                    Buy Now
                                </button>
                            </div>
                        </div>

                        <div className="relative ">
                            <Image src={formal} alt="" className="w-full rounded" />
                            <div className="absolute top-24 left-10 cat_content z-10">
                                <h3 className="text-lg font-medium text-white bg-[#111] px-4 py-1 rounded-lg mb-2 ">
                                    Formal
                                </h3>
                                <button className='bg-lightOrange text-white hover:bg-secondCol rounded-md text-sm py-1.5 px-6 border-2 border-lightOrange hover:border-[#fff] hover:text-[#fff] hover:bg-transparent ' type="submit" >
                                    Buy Now
                                </button>
                            </div>
                        </div>

                    </Slider>
                </div>

            </div>

            {/* fourth slider */}
            <div className="w-full sm:w-6/12 md:w-3/12">
                <div className="m-3 relative  rounded  ">
                    <Slider {...settings}>
                        <div className="relative z-10">
                            <Image src={tShirt} alt="" className="w-full rounded" />
                            <div className="absolute top-24 left-10 cat_content z-10">
                                <h3 className="text-lg font-medium text-white bg-[#111] px-4 py-1 rounded-lg mb-2 ">
                                    T-shirt
                                </h3>
                                <button className='bg-lightOrange text-white hover:bg-secondCol rounded-md text-sm py-1.5 px-6 border-2 border-lightOrange hover:border-[#fff] hover:text-[#fff] hover:bg-transparent ' type="submit" >
                                    Buy Now
                                </button>
                            </div>
                        </div>

                        <div className="relative ">
                            <Image src={tShirt} alt="" className="w-full rounded" />
                            <div className="absolute top-24 left-10 cat_content z-10">
                                <h3 className="text-lg font-medium text-white bg-[#111] px-4 py-1 rounded-lg mb-2 ">
                                    T-shirt
                                </h3>
                                <button className='bg-lightOrange text-white hover:bg-secondCol rounded-md text-sm py-1.5 px-6 border-2 border-lightOrange hover:border-[#fff] hover:text-[#fff] hover:bg-transparent ' type="submit" >
                                    Buy Now
                                </button>
                            </div>
                        </div>

                    </Slider>
                </div>

            </div>



        </div>
    )
}

export default MansCategorySlider