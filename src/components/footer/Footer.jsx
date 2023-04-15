import Link from "next/link"
import SliderIcon from "../sliderIcon/SliderIcon"
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaPinterest } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import Link from 'next/link';

const Footer = () => {
    return (
        <>
            <footer className="footer sm:grid-cols- md:grid-cols-4 p-20 bg-gray-200 text-neutral-content ">
                {/* social icon */}
                <div>
                    <span className="footer-title text-base font-semibold text-[#191919] uppsercase">Find Us on</span>
                    <div className='flex items-center gap-y-3 flex-col justify-center'>
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
                    <span className="footer-title text-xl font-semibold text-[#191919]">ABERDEEN BAZAR</span>
                    <Link href=" " className="link link-hover text-gray-800">MB 80, RK COMPLEX 1st FLOOR,</Link>
                    <Link href=" " className="link link-hover text-gray-800">BERDEEN BAZAR, PORT BLAIR,</Link>
                    <Link href=" " className="link link-hover text-gray-800">SOUTH ANDAMAN,</Link>
                    <Link href=" " className="link link-hover text-gray-800">ANDAMAN AND NICOBAR ISLAND</Link>
                </div>
                <div>
                    <span className="footer-title text-xl font-semibold text-[#191919]">BHATU BASTI</span>
                    <Link href=" " className="link link-hover text-gray-800">GROUND FLOOR,</Link>
                    <Link href=" " className="link link-hover text-gray-800">NEAR AXIS BANK, BHATU BASTI,</Link>
                    <Link href=" " className="link link-hover text-gray-800">PORT BLAIR, SOUTH ANDAMAN,</Link>
                    <Link href=" " className="link link-hover text-gray-800">ANDAMAN AND NICOBAR ISLAND,</Link>
                </div>
                <div>
                    <span className="footer-title text-xl font-semibold text-[#191919]">BAMBOOFLAT JETTY </span>
                    <Link href=" " className="link link-hover text-gray-800">NEAR BAMBOOFLAT JETTY,</Link>
                    <Link href=" " className="link link-hover text-gray-800">BAMBOOFLAT,</Link>
                    <Link href=" " className="link link-hover text-gray-800">PORT BLAIR, SOUTH ANDAMAN,</Link>
                </div>
                <div>
                    <span className="footer-title text-xl font-semibold text-[#191919]">DURGA MARKET</span>
                    <Link href=" " className="link link-hover text-gray-800">1st FLOOR, NEW DURGA MARKET,</Link>
                    <Link href=" " className="link link-hover text-gray-800">MADHUPUR ROAD, DIGLIPUR,</Link>
                    <Link href=" " className="link link-hover text-gray-800">NORTH AND MIDDLE ANDAMAN</Link>
                    <Link href=" " className="link link-hover text-gray-800">ANDAMAN AND NICOBAR</Link>
                </div>
            </footer>
            {/* bottom footer */}
            <div className="bg-darkSlate py-6 text-center">
                <span className="text-gray-200 text-base">
                    All rights reserved | goenkasfashion.com |
                </span>
            </div>
        </>


    )
}

export default Footer