
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaPinterest } from 'react-icons/fa';

import { AiFillInstagram } from 'react-icons/ai';
import Link from 'next/link';

const SocialIcon = () => {
    return (
        <div className='flex items-center gap-3 '>
            <div className="w-7 h-7 rounded-full bg-white hover:bg-lightOrange text-textPrimary hover:text-white flex items-center justify-center">

                <Link href={''} className='text-sm '><FaFacebookF /></Link>
            </div>
            <div className="w-7 h-7 rounded-full bg-white hover:bg-lightOrange text-textPrimary hover:text-white flex items-center justify-center">

                <Link href={''} className='text-sm '><FaLinkedinIn /></Link>
            </div>
            <div className="w-7 h-7 rounded-full bg-white hover:bg-lightOrange text-textPrimary hover:text-white flex items-center justify-center">

                <Link href={''} className='text-sm '><FaTwitter /></Link>
            </div>

            <div className="w-7 h-7 rounded-full bg-white hover:bg-lightOrange text-textPrimary hover:text-white flex items-center justify-center">

                <Link href={''} className='text-sm '><AiFillInstagram /></Link>
            </div>




        </div>
    )
}

export default SocialIcon