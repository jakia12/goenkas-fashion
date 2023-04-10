import React from 'react'
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { FaWhatsappSquare } from 'react-icons/fa';
import SocialIcon from '../shared/socialIcon/SocialIcon';

const TopNav = () => {
    return (
        <div className='flex items-center justify-between bg-darkSlate py-2.5 px-10'>

            {/* left top nav info */}

            {/* inline item */}
            <div className='flex items-center gap-5'>
                <div className="flex items-center justify-center text-gray-300">
                    <span> <MdLocationOn /></span>
                    <div className="ml-2">
                        <span className="text-[13px]">
                            Support : +91-76950 72472
                        </span>
                    </div>

                </div>
                <div className="flex items-center justify-center text-gray-300">
                    <span> <MdEmail /></span>
                    <div className="ml-2">
                        <span className="text-[13px]">
                            info.goenkasfashion@gmail.com
                        </span>
                    </div>

                </div>
                <div className="flex items-center justify-center text-gray-300">
                    <span> <FaWhatsappSquare /></span>
                    <div className="ml-2">
                        <span className="text-[13px]">
                            Whatsapp : +91-9609058800

                        </span>
                    </div>

                </div>
            </div>

            {/* right social icon */}
            <SocialIcon />

        </div>
    )
}

export default TopNav