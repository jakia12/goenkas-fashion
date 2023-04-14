import { awardSliders } from '@/DATA/Placeholder';

//garment award image
import award1 from '../../images/award/aw1.png';
import award2 from '../../images/award/aw2.png'
import Image from 'next/image';

const AwardSlider = () => {

    return (
        <div>
            <div className="flex items-center justify-center gap-4">

                <div className="w-full md:w-6/12">
                    <Image src={award1} className="w-full rounded shadow-lg shadow-gray-400" />
                </div>
                <div className="w-full md:w-6/12">
                    <Image src={award2} className="w-full rounded shadow-lg shadow-gray-400" />
                </div>
            </div>

        </div>

    )
}

export default AwardSlider