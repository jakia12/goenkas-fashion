import Image from 'next/image';
import { useEffect, useState } from 'react'
import { RiShoppingBasket2Line } from 'react-icons/ri';
import { FiHeart } from 'react-icons/fi';
import { HiOutlineStar } from 'react-icons/hi';
import Link from 'next/link';

const ProductFilter = () => {

    const [products, setProducts] = useState([]);
    const [filteredproducts, setFilteredProducts] = useState([]);
    // const [categories, setCategories] = useState([]);
    const [catItem, setCatItem] = useState('');
    console.log(filteredproducts)
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                console.log(data, "category is ", data.category)
                const mappedCat = data.map((dt) => dt.category);
                console.log(mappedCat
                )
                setProducts(data);
                setFilteredProducts(data);
            })
            .catch(err => console.log(err))
    }, []);

    //remove repeated category from the array and push to the uniqueCategory array



    // useEffect(() => {


    // }, [products]);
    // console.log(categories)

    function removeDuplicates(products) {
        let uniqueCategories = [];
        products.forEach(element => {
            if (!uniqueCategories.includes(element.category)) {
                uniqueCategories.push(element.category);
            }
        });
        return uniqueCategories;
    }


    console.log(removeDuplicates(products))
    const categories = removeDuplicates(products);

    //filter product on category
    const handleProductFilter = (e) => {
        e.preventDefault;

        setCatItem(e.target.value);

        console.log(catItem)

    }

    useEffect(() => {
        const filterdProduct = products.filter((prod) => prod.category === catItem);
        console.log(filterdProduct)
        setFilteredProducts(filterdProduct);
    }, [catItem]);



    return (
        <div className='py-8'>
            {/* category button  */}
            <div className="flex items-center justify-center">
                {
                    categories.map((cat) => (
                        <div
                            className="w-[150px] cursor-pointer "

                        >

                            <button
                                className="text-smbg-white w-[140px] m-2 h-[70px] rounded text-textPrimay hover:text-white   hover:bg-textPrimary flex items-center justify-center shadow-md shadow-gray-200 bg-white"
                                key={cat.id}
                                value={cat}
                                onClick={handleProductFilter}

                            >{cat}</button>

                        </div>
                    ))
                }

            </div>

            {/* product gallery  */}
            <div className="flex justify-center items-centr flex-wrap my-10">
                {
                    filteredproducts.map((prod) => (
                        <div className="w-full sm:w-6/12 md:w-3/12">
                            <div className="relative gallery_card m-[5px] overflow-hidden">
                                <img src={prod.image} className='w-full rounded' alt='product image' />
                                <div className="flex items-center justify-center absolute rounded p-6 bg-[#111111c5] top-0 -left-[100%] w-full h-full overlay_gallery 
                            ">

                                    <div className="">
                                        {/* product name */}
                                        <h3 className="text-[17px] font-medium text-gray-200">
                                            {prod.title}
                                        </h3>
                                        {/* product rating */}
                                        <div className="flex items-center gap-3 mt-2">
                                            <span className='text-xl text-gray-200'> <HiOutlineStar /></span>
                                            {/* <span className="text-base text-gray-200">{prod.rating.rate}</span> */}
                                        </div>

                                        {/* product price */}
                                        <span className="text-base font-medium text-gray-200 block my-3">
                                            ${prod.price}
                                        </span>
                                        {/* cta button ,wishlist and card  */}
                                        <div className="flex items-center mt-10 mb-4 gap-4">
                                            <Link href={`/${prod.id}`} className=" text-gray-200 py-1 px-5 rounded  hover:bg-white  text-base  bg-transparent  border-2 border-gray-200 hover:text-textPrimary  " >
                                                Shop Now
                                            </Link>

                                            <span className="text-xl cursor-pointer text-gray-200">
                                                <FiHeart />
                                            </span>
                                            <span className="text-xl cursor-pointer text-gray-200"><RiShoppingBasket2Line /></span>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default ProductFilter