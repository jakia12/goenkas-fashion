import React, { useEffect, useRef, useState } from 'react'
import { BiSearch } from 'react-icons/bi';

const SearchBar = () => {

    const wrapper = useRef();

    const [isOpen, setIsOpen] = useState(false);

    //handle search Open
    const handleSearchOpen = () => {
        isOpen === true ? setIsOpen(false) : setIsOpen(true)
    }
    useEffect(() => {


        const handleClickOutside = (event) => {
            if (isOpen &&
                wrapper.current &&
                !wrapper.current.contains(event.target)
            ) {
                setIsOpen(false);


            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        //return wrapper.current;

    }, [isOpen]);


    return (
        <div ref={wrapper} className="relative">
            <span
                className='w-8 h-8 z-[1000] cursor-pointer text-[#111] rounded-full border border-gray-900 text-xl flex justify-center items-center'
                onClick={handleSearchOpen}
            ><BiSearch /></span>

            <div className="absolute z-10 right-[5px] md:right-[40px] top-[40px] md:top-[-2px] min-w-[300px] md:w-[400px] bg-white shadow-lg shadow-gray-300 p-3 rounded-lg"
                style={{ display: isOpen === true ? "block" : "none" }}
            >

                <form className="flex items-center">
                    <label for="simple-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                    </div>
                    <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-lightOrange rounded-lg border  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <span className="sr-only">Search</span>
                    </button>
                </form>


            </div>
        </div>

    )
}

export default SearchBar