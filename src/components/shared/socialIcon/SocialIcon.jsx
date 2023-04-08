import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaPinterest } from 'react-icons/fa';

import { AiFillInstagram } from 'react-icons/ai';

const SocialIcon = () => {
    return (
        <div className='flex items-center gap-2'>
            <div className="w-7 h-7 rounded-full bg-white hover:bg-lightOrange text-textPrimary hover:text-white flex items-center justify-center">

                <span className='text-sm '><FaFacebookF /></span>
            </div>
            <div className="w-7 h-7 rounded-full bg-white hover:bg-lightOrange text-textPrimary hover:text-white flex items-center justify-center">

                <span className='text-sm '><FaLinkedinIn /></span>
            </div>
            <div className="w-7 h-7 rounded-full bg-white hover:bg-lightOrange text-textPrimary hover:text-white flex items-center justify-center">

                <span className='text-sm '><FaTwitter /></span>
            </div>

            <div className="w-7 h-7 rounded-full bg-white hover:bg-lightOrange text-textPrimary hover:text-white flex items-center justify-center">

                <span className='text-sm '><AiFillInstagram /></span>
            </div>




        </div>
    )
}

export default SocialIcon