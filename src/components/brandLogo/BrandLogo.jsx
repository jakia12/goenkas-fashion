import Image from 'next/image'

import logo1 from '../../images/logo/lg1.png';
import logo2 from '../../images/logo/lg2.png';
import logo3 from '../../images/logo/lg3.png';
import logo4 from '../../images/logo/lg4.png';

const BrandLogo = () => {
    return (
        <div className="flex items-center justify-center gap-4 md:flex-nowrap flex-wrap">
            <div className="w-full sm:w-6/12 md:w-3/12 text-center ">
                <Image src={logo1} className='w-[200px] h-[74] mb-3 md:mb-0' />
            </div>
            <div className="w-full sm:w-6/12 md:w-3/12 text-center">
                <Image src={logo2} className='w-[200px] h-[74] mb-3 md:mb-0 ' />
            </div>
            <div className="w-full sm:w-6/12 md:w-3/12 text-center">
                <Image src={logo3} className='w-[200px] h-[74] mb-3 md:mb-0' />
            </div>
            <div className="w-full sm:w-6/12 md:w-3/12 text-center">
                <Image src={logo4} className='w-[200px] h-[74] mb-3 md:mb-0' />
            </div>

        </div>
    )
}

export default BrandLogo