

const Footer = () => {
    return (
        <>
            <footer className="footer sm:grid-cols- md:grid-cols-4 p-20 bg-neutral text-neutral-content ">

                <div>
                    <span className="footer-title text-xl font-semibold text-white">ABERDEEN BAZAR</span>
                    <a className="link link-hover">MB 80, RK COMPLEX 1st FLOOR,</a>
                    <a className="link link-hover">BERDEEN BAZAR, PORT BLAIR,</a>
                    <a className="link link-hover">SOUTH ANDAMAN,</a>
                    <a className="link link-hover">ANDAMAN AND NICOBAR ISLAND</a>
                </div>
                <div>
                    <span className="footer-title text-xl font-semibold text-white">BHATU BASTI</span>
                    <a className="link link-hover">GROUND FLOOR,</a>
                    <a className="link link-hover">NEAR AXIS BANK, BHATU BASTI,</a>
                    <a className="link link-hover">PORT BLAIR, SOUTH ANDAMAN,</a>
                    <a className="link link-hover">ANDAMAN AND NICOBAR ISLAND,</a>
                </div>
                <div>
                    <span className="footer-title text-xl font-semibold text-white">AMBOOFLAT JETTY</span>
                    <a className="link link-hover">NEAR BAMBOOFLAT JETTY,</a>
                    <a className="link link-hover">BAMBOOFLAT,</a>
                    <a className="link link-hover">PORT BLAIR, SOUTH ANDAMAN,</a>
                </div>
                <div>
                    <span className="footer-title text-xl font-semibold text-white">DURGA MARKET</span>
                    <a className="link link-hover">1st FLOOR, NEW DURGA MARKET,</a>
                    <a className="link link-hover">MADHUPUR ROAD, DIGLIPUR,</a>
                    <a className="link link-hover">NORTH AND MIDDLE ANDAMAN</a>
                    <a className="link link-hover">ANDAMAN AND NICOBAR</a>
                </div>
            </footer>
            {/* bottom footer */}
            <div className="bg-darkSlate py-6 text-center">
                <span className="text-white text-base">
                    All rights reserved | goenkasfashion.com |
                </span>
            </div>
        </>


    )
}

export default Footer