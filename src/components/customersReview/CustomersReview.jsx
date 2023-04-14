
import Slider from 'react-slick';
import cust1 from '../../images/client-image/cust1.png';
import cust2 from '../../images/client-image/cust2.png';
import cust3 from '../../images/client-image/cust3.png';
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';


const CustomersReview = () => {
    var settings = {
        dots: true,
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
        <Slider {...settings}>
            <div className="flex items-center justify-center flex-col">
                <div className="text-center ">
                    {/* slider image */}
                    <div className="flex justify-center">
                        <Image
                            src={cust1}
                            alt="Client image"
                            className="w-[110px] h-[110px] rounded-full border-[4px] border-white border_shadow"
                        />
                    </div>
                    {/* slider text */}
                    <div className="p-7 mb-6 mt-8 mx-auto bg-white md:max-w-xl rounded-md relative arrow_top shadow-lg shadow-gray-200">
                        <p className="text-[15px]  text-[#484848] font-normal">
                            Veritati
                            obcaecati tenetur iure eius earum ut molestias
                            architecto voluptate aliquam nihil, eveniet aliquid culpa
                            officia aut! Impedit sit sunt
                        </p>
                    </div>
                    {/* slider icon */}
                    <span className="text-main text-2xl text-center flex justify-center pb-5 pt-2">
                        <FaQuoteLeft />
                    </span>

                    {/* slider title and subtitle */}
                    <div className="">
                        <h3 className="text-gray-800 font-medium text-[20px]">
                            Richard Jackson
                        </h3>
                        <span className="text-[16px] text-gray-800 font-normal mb-3">
                            Sales Manager
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center flex-col">
                <div className="text-center ">
                    {/* slider image */}
                    <div className="flex justify-center">
                        <Image
                            src={cust2}
                            alt="Client image"
                            className="w-[110px] h-[110px] rounded-full border-[4px] border-white border_shadow"
                        />
                    </div>
                    {/* slider text */}
                    <div className="p-7 mb-6 mt-8 mx-auto bg-white md:max-w-xl rounded-md relative arrow_top shadow-lg shadow-gray-200">
                        <p className="text-[15px]  text-[#484848] font-normal">
                            Veritatis obcaecati tenetur iure eius earum ut molestias
                            architecto voluptate aliquam nihil, eveniet aliquid culpa
                            officia aut! Impedit sit sunt
                        </p>
                    </div>
                    {/* slider icon */}
                    <span className="text-main text-2xl text-center flex justify-center pb-5 pt-2">
                        <FaQuoteLeft />
                    </span>

                    {/* slider title and subtitle */}
                    <div className="">
                        <h3 className="text-gray-800 font-medium text-[22px]">
                            Bijoy Dutto
                        </h3>
                        <span className="text-[16px] text-gray-800 font-normal mb-3">
                            Businessman
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center flex-col">
                <div className="text-center ">
                    {/* slider image */}
                    <div className="flex justify-center">
                        <Image
                            src={cust3}
                            alt="Client image"
                            className="w-[110px] h-[110px] rounded-full border-[4px] border-white border_shadow"
                        />
                    </div>
                    {/* slider text */}
                    <div className="p-7 mb-6 mt-8 mx-auto bg-white md:max-w-xl rounded-md relative arrow_top shadow-lg shadow-gray-200">
                        <p className="text-[15px]  text-[#484848] font-normal">
                            Veritatis obcaecati tenetur iure eius earum ut molestias
                            architecto voluptate aliquam nihil, eveniet aliquid culpa
                            officia aut! Impedit sit sunt
                        </p>
                    </div>
                    {/* slider icon */}
                    <span className="text-main text-2xl text-center flex justify-center pb-5 pt-2">
                        <FaQuoteLeft />
                    </span>

                    {/* slider title and subtitle */}
                    <div className="">
                        <h3 className="text-gray-800 font-medium text-[22px]">
                            Richard Jackson
                        </h3>
                        <span className="text-[16px] text-gray-800 font-normal mb-3">
                            Designer
                        </span>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default CustomersReview