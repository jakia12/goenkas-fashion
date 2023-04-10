import Image from 'next/image'
import React from 'react'
import logo1 from '../../images/logo/logo1.png';
import logo2 from '../../images/logo/logo2.png';
import logo3 from '../../images/logo/logo3.png';
import logo4 from '../../images/logo/logo4.png';

const BrandLogo = () => {
    return (
        <div className="flex items-center justify-center gap-4 md:flex-nowrap flex-wrap">
            <div className="w-full sm:w-6/12 md:w-3/12">
                <Image src={logo1} className='w-full' />
            </div>
            <div className="w-full sm:w-6/12 md:w-3/12">
                <Image src={logo2} className='w-full' />
            </div>
            <div className="w-full sm:w-6/12 md:w-3/12">
                <Image src={logo3} className='w-full' />
            </div>
            <div className="w-full sm:w-6/12 md:w-3/12">
                <Image src={logo4} className='w-full' />
            </div>

        </div>
    )
}

export default BrandLogo