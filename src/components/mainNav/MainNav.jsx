import React from 'react'
import { RxCaretDown } from 'react-icons/rx';
import SearchBar from '../searchBar/SearchBar';


const MainNav = () => {
    return (
        <div className="flex items-center justify-around py-6 border-b ">
            {/* brand logo */}
            <span className="text-2xl">
                <a href="">Goenkas fashion</a>
            </span>

            {/* main menu */}
            <div className="flex justify-center items-center">
                <ul className='flex justify-center items-center gap-4'>
                    <li className='text-sm text-textPrimary text-normal capitalize p-2'><a href="">Home</a></li>
                    <li className='text-sm text-textPrimary text-normal capitalize p-2'><a href="">About</a></li>
                    <li className='flex items-center relative dropDown_list text-sm text-textPrimary text-normal capitalize p-2'>
                        <a href="">Branches</a>
                        <span className='text-xl ml-1'><RxCaretDown /></span>
                        <ul className="absolute top-[30px] z-10 left-0 w-[200px] p-5 rounded shadow-lg shadow-gray-300 bg-[#fff]  mt-3 drop_down capitalize">
                            <li className='text-sm text-textPrimary text-normal capitalize p-2'><a href="">Aberden Bazar</a></li>
                            <li className='text-sm text-textPrimary text-normal capitalize p-2'><a href="">Bhtu Basti</a></li>
                            <li className='text-sm text-textPrimary text-normal capitalize p-2'><a href="">New Durga Market</a></li>
                            <li className='text-sm text-textPrimary text-normal capitalize p-2'><a href="">Bamboflat Jetty</a></li>
                        </ul>
                    </li>
                    <li className='flex items-center text-sm text-textPrimary text-normal capitalize p-2 dropDown_list'>
                        <a href="">Women's Clothing</a>
                        <span className='text-xl ml-1'><RxCaretDown /></span>
                        <ul className="absolute top-[30px] z-10 left-0 w-[200px] p-5 rounded shadow-lg shadow-gray-300 bg-[#fff]  mt-3 drop_down capitalize">
                            <li className='text-sm text-textPrimary text-normal capitalize p-2'><a href="">Aberden Bazar</a></li>
                            <li className='text-sm text-textPrimary text-normal capitalize p-2'><a href="">Bhtu Basti</a></li>
                            <li className='text-sm text-textPrimary text-normal capitalize p-2'><a href="">New Durga Market</a></li>
                            <li className='text-sm text-textPrimary text-normal capitalize p-2'><a href="">Bamboflat Jetty</a></li>
                        </ul>
                    </li>
                    <li className='text-sm text-textPrimary text-normal capitalize p-2'><a href="">Girls</a></li>
                    <li className='text-sm text-textPrimary text-normal capitalize p-2'><a href="">Mens</a></li>
                    <li className='text-sm text-textPrimary text-normal capitalize p-2'><a href="">Boys</a></li>
                    <li className='text-sm text-textPrimary text-normal capitalize p-2'><a href="">New Born</a></li>
                    <li className='text-sm text-textPrimary text-normal capitalize p-2'><a href="">Contact Us</a></li>
                </ul>
            </div>

            {/* search icon */}
            <SearchBar />

        </div >
    )
}

export default MainNav