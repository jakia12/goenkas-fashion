import g1 from '../../images/masonry/g1.jpg';
import g2 from '../../images/masonry/g2.jpg';
import g3 from '../../images/masonry/g3.jpg';
import g4 from '../../images/masonry/g4.jpg';
import g5 from '../../images/masonry/g5.jpg';
import g6 from '../../images/masonry/g6.jpg';
import g7 from '../../images/masonry/g7.jpg';
import g8 from '../../images/masonry/g8.jpg';
import g9 from '../../images/masonry/g9.jpg';
import g10 from '../../images/masonry/g10.jpg';
import g11 from '../../images/masonry/g11.jpg';
import g12 from '../../images/masonry/g12.jpg';
import g13 from '../../images/masonry/g13.jpg';
import g14 from '../../images/masonry/g14.jpg';
import g15 from '../../images/masonry/g15.jpg';
import g16 from '../../images/masonry/g16.jpg';
import g17 from '../../images/masonry/g17.jpg';
import g18 from '../../images/masonry/g18.jpg';
import g19 from '../../images/masonry/g19.jpg';
import g20 from '../../images/masonry/g20.jpg';
import g21 from '../../images/masonry/g21.jpg';
import Image from 'next/image';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

<PhotoProvider>
    <PhotoView src="/1.jpg">

    </PhotoView>
</PhotoProvider>


const ProductGallery = () => {
    return (
        <div class="grid-wrapper">
            <div className="1">
                <PhotoProvider>
                    <PhotoView src={g1}>
                        <Image src={g1} alt="" />
                    </PhotoView>
                </PhotoProvider>

            </div>
            <div className="2">
                <PhotoProvider>
                    <PhotoView src={g2} >
                        <Image src={g2} alt="" />
                    </PhotoView>
                </PhotoProvider>

            </div>
            <div class="wide 3">
                <PhotoProvider>
                    <PhotoView src={g3}>
                        <Image src={g3} alt="" />
                    </PhotoView>
                </PhotoProvider>

            </div>
            <div className="4">
                <PhotoProvider>
                    <PhotoView src={g4}>
                        <Image src={g4} alt="" />
                    </PhotoView>
                </PhotoProvider>

            </div>
            <div className="5">
                <PhotoProvider>
                    <PhotoView src={g5}>
                        <Image src={g5} alt="" />
                    </PhotoView>
                </PhotoProvider>

            </div>

            <div className="tall 6">
                <PhotoProvider>
                    <PhotoView src={g6}>
                        <Image src={g6} alt="" />
                    </PhotoView>
                </PhotoProvider>


            </div>
            <div className="7">
                <PhotoProvider>
                    <PhotoView src={g7}>
                        <Image src={g7} alt="" />
                    </PhotoView>
                </PhotoProvider>

            </div>
            <div className="8 ">
                <PhotoProvider>
                    <PhotoView src={g8}>
                        <Image src={g8} alt="" />
                    </PhotoView>
                </PhotoProvider>

            </div>
            <div className="9 big">
                <PhotoProvider>
                    <PhotoView src={g9}>
                        <Image src={g9} alt="" />
                    </PhotoView>
                </PhotoProvider>

            </div>
            <div className="10 ">
                <PhotoProvider>
                    <PhotoView src={g10}>
                        <Image src={g10} alt="" />
                    </PhotoView>
                </PhotoProvider>

            </div>
            <div className="11">
                <PhotoProvider>
                    <PhotoView src={g11}>
                        <Image src={g11} alt="" />
                    </PhotoView>
                </PhotoProvider>

            </div>
            <div className=" 12">
                <PhotoProvider>
                    <PhotoView src={g12}>
                        <Image src={g12} alt="" />
                    </PhotoView>
                </PhotoProvider>

            </div>
            <div className="tall 13">
                <PhotoProvider>
                    <PhotoView src={g13}>
                        <Image src={g13} alt="" />
                    </PhotoView>
                </PhotoProvider>

            </div>
            <div class="big 14">
                <PhotoProvider>
                    <PhotoView src={g14}>
                        <Image src={g14} alt="" />
                    </PhotoView>
                </PhotoProvider>

            </div>
            <div class="big 15">
                <PhotoProvider>
                    <PhotoView src={g15}>
                        <Image src={g15} alt="" />
                    </PhotoView>
                </PhotoProvider>

            </div>
            <div className="16 ">
                <PhotoProvider>
                    <PhotoView src={g16}>
                        <Image src={g16} alt="" />
                    </PhotoView>
                </PhotoProvider>

            </div>
            <div className="17 ">
                <PhotoProvider>
                    <PhotoView src={g17}>
                        <Image src={g17} alt="" />
                    </PhotoView>
                </PhotoProvider>

            </div>
            <div className="18 tall">
                <PhotoProvider>
                    <PhotoView src={g18}>
                        <Image src={g18} alt="" />
                    </PhotoView>
                </PhotoProvider>

            </div>
            <div className="21 wide">
                <PhotoProvider>
                    <PhotoView src={g21}>
                        <Image src={g21} alt="" />
                    </PhotoView>
                </PhotoProvider>

            </div>
            <div className="19 ">
                <PhotoProvider>
                    <PhotoView src={g19}>
                        <Image src={g19} alt="" />
                    </PhotoView>
                </PhotoProvider>

            </div>
            <div class="20 sm_big">
                <PhotoProvider>
                    <PhotoView src={g20}>
                        <Image src={g20} alt="" />
                    </PhotoView>
                </PhotoProvider>

            </div>

            {/* <div className="22 wide">
                <Image src={g22} alt="" />
            </div> */}


        </div>
    )
}

export default ProductGallery