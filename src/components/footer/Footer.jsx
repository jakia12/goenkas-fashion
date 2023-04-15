import Link from "next/link"
import SliderIcon from "../sliderIcon/SliderIcon"
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaPinterest } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';


const Footer = () => {
    return (
        <>
            <footer className="footer sm:grid-cols- md:grid-cols-4 p-20 bg-gray-200 text-neutral-content ">
                {/* social icon */}
                <div>
                    <span className="footer-title text-base font-semibold text-[#191919] uppsercase">Find Us on</span>
                    <div className='flex items-center gap-3  justify-center'>
                        <div className="w-7 h-7 rounded-full bg-[#3b5998] hover:bg-[#3b5898e7] text-white hover:text-white flex items-center justify-center">

                            <Link href={''} className='text-sm '><FaFacebookF /></Link>
                        </div>
                        <div className="w-7 h-7 rounded-full bg-[#0077b5] hover:bg-[#0076b5e8] text-white hover:text-white flex items-center justify-center">

                            <Link href={''} className='text-sm '><FaLinkedinIn /></Link>
                        </div>
                        <div className="w-7 h-7 rounded-full bg-[#1da1f2] hover:bg-[#1da0f2e5] text-white hover:text-white flex items-center justify-center">

                            <Link href={''} className='text-sm '><FaTwitter /></Link>
                        </div>

                        <div className="w-7 h-7 rounded-full bg-[#CA3174] hover:bg-[#ca3173e2] text-white hover:text-white flex items-center justify-center">

                            <Link href={''} className='text-sm '><AiFillInstagram /></Link>
                        </div>

                    </div>

                </div>
                <div>
                    <span className="footer-title text-base font-semibold text-[#191919]">ABERDEEN BAZAR</span>
                    <Link href=" " className="link link-hover text-gray-800">Mb 80, Rk Complex 1st Floor,</Link>
                    <Link href=" " className="link link-hover text-gray-800">Berdeen Bazar, Port Blair,</Link>
                    <Link href=" " className="link link-hover text-gray-800">South Andaman,</Link>
                    <Link href=" " className="link link-hover text-gray-800">Andaman And Nicobar Island</Link>
                </div>
                <div>
                    <span className="footer-title text-base font-semibold text-[#191919]">BHATU BASTI</span>
                    <Link href=" " className="link link-hover text-gray-800">Ground Floor,</Link>
                    <Link href=" " className="link link-hover text-gray-800">Near Axis Bank, Bhatu Basti,</Link>
                    <Link href=" " className="link link-hover text-gray-800">Port Blair, South Andaman,</Link>
                    <Link href=" " className="link link-hover text-gray-800">Andaman And Nicobar Island,</Link>
                </div>
                <div>
                    <span className="footer-title text-base font-semibold text-[#191919]">BAMBOOFLAT JETTY </span>
                    <Link href=" " className="link link-hover text-gray-800">Near Bambooflat Jetty,</Link>
                    <Link href=" " className="link link-hover text-gray-800">Bambooflat,</Link>
                    <Link href=" " className="link link-hover text-gray-800">Port Blair, South Andaman,</Link>
                </div>
                <div>
                    <span className="footer-title text-base font-semibold text-[#191919]">DURGA MARKET</span>
                    <Link href=" " className="link link-hover text-gray-800">1st Floor, New Durga Market,</Link>
                    <Link href=" " className="link link-hover text-gray-800">Madhupur Road, Diglipur,</Link>
                    <Link href=" " className="link link-hover text-gray-800">North And Middle Andaman</Link>
                    <Link href=" " className="link link-hover text-gray-800">Andaman And Nicobar</Link>
                </div>
            </footer>
            {/* bottom footer */}
            <div className="bg-darkSlate py-6 text-center">
                <span className="text-gray-200 text-sm ">
                    All Rights Reserved | goenkasfashion.com |
                </span>
            </div>
        </>


    )
}

export default Footer