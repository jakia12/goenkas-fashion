import Link from "next/link"


const Footer = () => {
    return (
        <>
            <footer className="footer sm:grid-cols- md:grid-cols-4 p-20 bg-gray-200 text-neutral-content ">

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
                    <span className="footer-title text-xl font-semibold text-[#191919]">AMBOOFLAT JETTY</span>
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