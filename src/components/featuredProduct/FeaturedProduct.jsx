import { featuredCategories } from '@/DATA/Placeholder'
import Image from 'next/image'

import { RiShoppingBagLine } from 'react-icons/ri';
import Slider from 'react-slick';

const FeaturedProduct = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,

        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
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
        // <div className="flex items-center flex-wrap">

        <Slider {...settings}>
            {
                featuredCategories.map((prod) => (
                    <div className="w-full sm:w-6/12 md:w-3/12">
                        <div className="m-3 border border-gray-200 rounded prod_card ">
                            <div className="relative overflow-hidden">
                                <Image src={prod.productImg} className='w-full' />
                                {/* button group */}
                                <div className="absolute top-4 left-4 ">
                                    {prod.isHotDeal === true && <button className="py-1 px-3 bg-lightOrange text-sm text-white rounded-sm block">
                                        Hot
                                    </button>}
                                    {
                                        prod.isSale === true ?
                                            (<span className="py-1 px-3 bg-teal-400 text-sm text-white rounded-sm block mt-2">
                                                Sale
                                            </span>)
                                            :
                                            ('')
                                    }


                                </div>
                                {/* wishlist button */}
                                <div className="absolute top-4 right-4  cart_bag">
                                    <button className='bg-white border border-gray-200 shadow-xl shadow-gray-300 text-textPrimary text-lg w-10 h-10 rounded-full flex items-center justify-center'><RiShoppingBagLine /></button>
                                </div>

                                {/* quick view button */}
                                <div className="absolute -bottom-[100%] w-full left-0 right-0 bg-[#191919] text-center py-4 quick_view cursor-pointer">
                                    <span className='text-white text-base font-medium uppercase'>Quick View</span>
                                </div>
                            </div>
                            {/* card footer */}
                            <div className="p-3 overflow-hidden">
                                <span className="text-sm text-gray-600 my-2 capitalize">{prod.category}</span>
                                <h3 className="text-base text-medium text-textPrimary mb-1">{prod.prodName}</h3>
                                {/* rating icon */}

                                <div class="flex items-center">
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
                                </div>

                                {/* product price */}
                                <span className="text-lg font-semibold text-textPrimary my-2 pb-2">${prod.price}</span>

                            </div>

                        </div>
                    </div>
                ))
            }

        </Slider>


    )
}

export default FeaturedProduct