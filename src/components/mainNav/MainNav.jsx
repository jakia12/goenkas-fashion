import React, { useEffect, useRef, useState } from 'react'
import { RxCaretDown } from 'react-icons/rx';
import SearchBar from '../searchBar/SearchBar';
import Image from 'next/image';
import brandLogo from '../../images/logo/brand-logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaBullseye } from 'react-icons/fa';

const MainNav = () => {

    //sticky nav
    const [stickyNav, setStickyNav] = useState(false);


    //mobile menu
    const [open, setOpen] = useState(false);

    //branch open
    const [isBranchOpen, setIsBranchOpen] = useState(false);

    //womens clothing

    const [isWomenOpen, setIsWomenOpen] = useState(false);


    //handle branch open
    const handleBranchOpen = (e) => {
        e.preventDefault();
        isBranchOpen === true ? setIsBranchOpen(false) : setIsBranchOpen(true)
    }

    //handle women open
    const handleWomenOpen = (e) => {
        e.preventDefault();
        isWomenOpen === true ? setIsWomenOpen(false) : setIsWomenOpen(true)
    }




    const navWrapper = useRef();

    //opon mobile menu onclickin on hamburger menu
    const handleToggle = () => {
        open === true ? setOpen(false) : setOpen(true);
    }

    useEffect(() => {


        const handleClickOutside = (event) => {
            if (open &&
                navWrapper.current &&
                !navWrapper.current.contains(event.target)
            ) {
                setOpen(false);



            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        //return wrapper.current;

    }, [open]);



    //sticky nav on scroll

    useEffect(() => {
        window.onscroll = () => {
            setStickyNav(window.pageYOffset === 0 ? false : true);
            return () => (window.onscroll = null);
        };
    }, []);

    return (

        <div className={` flex items-center justify-around pt-4 px-2 md:px-0 md:py-5  w-full top-0  z-[10] py-4 text-[#FFF] ${stickyNav ? 'bg-teal-400 fixed' : 'bg-bgOne'} }`}>
            {/* brand logo */}
            <span className="text-2xl">
                <a href="/"><Image src={brandLogo} /></a>
            </span>

            {/* main menu */}
            <div className="md:flex justify-center items-center hidden">
                <ul className='flex justify-center items-center gap-4'>
                    <li className='text-sm text-textPrimary hover:text-lightOrange text-normal capitalize p-2'><a href="">Home</a></li>
                    <li className='text-sm text-textPrimary hover:text-lightOrange text-normal capitalize p-2'><a href="">About</a></li>
                    <li className='flex items-center relative dropDown_list text-sm text-textPrimary text-normal capitalize p-2 hover:text-lightOrange'>
                        <a href="">Branches</a>
                        <span className='text-xl ml-1'><RxCaretDown /></span>
                        <ul className="absolute top-[30px] z-10 left-0 w-[200px] p-5 rounded shadow-lg shadow-gray-400 bg-[#fff]  mt-3 drop_down capitalize">
                            <li className='text-sm text-textPrimary text-normal capitalize p-2 hover:text-lightOrange'><a href="">Aberden Bazar</a></li>
                            <li className='text-sm text-textPrimary text-normal capitalize p-2 hover:text-lightOrange'><a href="">Bhtu Basti</a></li>
                            <li className='text-sm text-textPrimary text-normal capitalize p-2 hover:text-lightOrange'><a href="">New Durga Market</a></li>
                            <li className='text-sm text-textPrimary text-normal capitalize p-2 hover:text-lightOrange'><a href="">Bamboflat Jetty</a></li>
                        </ul>
                    </li>
                    <li className='flex items-center text-sm text-textPrimary hover:text-lightOrange text-normal capitalize p-2 dropDown_list'>
                        <a href="">Women's Clothing</a>
                        <span className='text-xl ml-1'><RxCaretDown /></span>
                        <ul className="absolute top-[30px] z-10 left-0 w-[200px] p-5 rounded shadow-lg shadow-gray-400 bg-[#fff]  mt-3 drop_down capitalize">
                            <li className='text-sm text-textPrimary text-normal capitalize p-2 hover:text-lightOrange'><a href="">Western</a></li>
                            <li className='text-sm text-textPrimary text-normal capitalize p-2 hover:text-lightOrange'><a href="">Indian</a></li>
                            <li className='text-sm text-textPrimary text-normal capitalize p-2 hover:text-lightOrange'><a href="">Ladies Under Garment</a></li>

                        </ul>
                    </li>
                    <li className='text-sm text-textPrimary text-normal capitalize p-2 hover:text-lightOrange'><a href="">Girls</a></li>
                    <li className='text-sm text-textPrimary text-normal capitalize p-2 hover:text-lightOrange'><a href="">Mens</a></li>
                    <li className='text-sm text-textPrimary text-normal capitalize p-2 hover:text-lightOrange'><a href="">Boys</a></li>
                    <li className='text-sm text-textPrimary text-normal capitalize p-2 hover:text-lightOrange'><a href="">New Born</a></li>
                    <li className='text-sm text-textPrimary text-normal capitalize p-2 hover:text-lightOrange'><a href="">Contact Us</a></li>
                </ul>
            </div>

            {/* search icon */}
            <div className="hidden md:block">
                <SearchBar />
            </div>

            <div className="flex items-center gap-4 md:hidden">
                <div ref={navWrapper} className="responsive_menu">

                    <span
                        onClick={handleToggle}
                        className='text-[#111] text-2xl cursor-pointer'

                    ><GiHamburgerMenu /></span>
                    <div

                        className={`side_nav ${open == true ? 'active' : ''}`}

                    >
                        <button
                            className="close_btn "
                            onClick={handleToggle}
                        >
                            <AiFillCloseCircle />
                        </button>
                        <ul className="mobile_menu">

                            <li>
                                <a
                                    href=""
                                    className=" list_item text-white px-3 py-2 me-2 rounded  text-capitalize "


                                >Home</a>
                            </li>
                            <li >
                                <a
                                    href=""
                                    className="list_item text-white px-3 py-2 me-2 rounded text-capitalize "



                                >About</a>
                            </li>
                            <li

                                className='relative  flex items-center justify-center'
                                onClick={handleBranchOpen}
                            >
                                <a

                                    className="list_item text-white px-3 py-2 me-2 rounded text-capitalize "



                                >Branches</a>
                                <span className='text-2xl   text-white'><RxCaretDown /></span>
                                <ul
                                    className="absolute top-[40px] left-[30px] w-[200px] p-3 hidden rounded shadow-lg shadow-gray-400 bg-[#fff]  mt-3  capitalize "
                                    style={{ display: isBranchOpen === true ? "block" : "none" }}
                                >
                                    <li className='text-sm text-textPrimary text-normal capitalize p-2'><a href="">Aberden Bazar</a></li>
                                    <li className='text-sm text-textPrimary text-normal capitalize p-2'><a href="">Bhtu Basti</a></li>
                                    <li className='text-sm text-textPrimary text-normal capitalize p-2'><a href="">New Durga Market</a></li>
                                    <li className='text-sm text-textPrimary text-normal capitalize p-2'><a href="">Bamboflat Jetty</a></li>
                                </ul>

                            </li>
                            <li

                                className='relative flex items-center justify-center cursor-pointer'
                                onClick={handleWomenOpen}

                            >
                                <a

                                    className=" list_item text-white px-3 py-2 me-2 rounded  text-capitalize "


                                >Women's Clothing</a>
                                <span className='text-2xl  text-white'><RxCaretDown /></span>
                                <ul
                                    className="absolute top-[40px] left-[30px] w-[200px] hidden p-5 rounded shadow-lg shadow-gray-400 bg-[#fff]  mt-3  capitalize "
                                    style={{ display: isWomenOpen === true ? "block" : "none" }}
                                >
                                    <li className='text-sm text-textPrimary text-normal capitalize p-2'><a href="">Western</a></li>
                                    <li className='text-sm text-textPrimary text-normal capitalize p-2'><a href="">Indian</a></li>
                                    <li className='text-sm text-textPrimary text-normal capitalize p-2'><a href="">Ladies Under Garment</a></li>

                                </ul>
                            </li>
                            <li >
                                <a
                                    href=""
                                    className="list_item text-white px-3 py-2 me-2 rounded text-capitalize "



                                >Girls</a>
                            </li>
                            <li >
                                <a
                                    href=""
                                    className="list_item text-white px-3 py-2 me-2 rounded text-capitalize "



                                >Mens</a>
                            </li>
                            <li>
                                <a
                                    href=""
                                    className=" list_item text-white px-3 py-2 me-2 rounded  text-capitalize "


                                >Boys</a>
                            </li>
                            <li>
                                <a
                                    href=""
                                    className=" list_item text-white px-3 py-2 me-2 rounded  text-capitalize "


                                >NewBorn</a>
                            </li>


                        </ul>
                    </div>
                </div>

                <SearchBar />

            </div>

        </div >
    )
}

export default MainNav