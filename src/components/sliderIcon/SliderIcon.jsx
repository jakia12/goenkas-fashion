import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaPinterest } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import Link from 'next/link';

const SliderIcon = () => {
    return (
        <div className=''>
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
    )
}

export default SliderIcon