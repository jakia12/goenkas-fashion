// slider image
import slb1 from '../images/sliderImg/sl1.png';
import slb2 from '../images/sliderImg/sl2.png';
import slb3 from '../images/sliderImg/sl3.png'
// category slider image
import western from '../images/western.png';
import skirt from '../images/skirt.png';
import tShirt from '../images/t-shirt.jpeg';
import sleeveless from '../images/sleeve.jpg';
import casual from '../images/casual.png';
import sweater from '../images/sweater.png';


//featured product image
import skirtProd from '../images/featured-products/pr1.png';
import printTop from '../images/featured-products/pr2.png';
import sleevelessProd from '../images/featured-products/pr3.png';
import partyDress from '../images/featured-products/pr4.png';
import whiteShirt from '../images/featured-products/pr5.png';
import blouse from '../images/featured-products/pr6.png';
import silkyTop from '../images/featured-products/pr7.png';




export const bannerSliders = [
    {
        id: 1,
        img: slb1,
        title: "Girl's Collections",
        subTitle: "New girls collectio is here.Plz check out our new girls collection",

    },
    {
        id: 2,
        img: slb2,
        title: "Women's Collections",
        subTitle: "New Man's collectio is here.Plz check out our new Man's collection",
        startPrice: 200
    },
    {
        id: 3,
        img: slb3,
        title: "Man's Collection",
        subTitle: "New kid's collectio is here.Plz check out our new kid's collection",
        startPrice: 299
    },

]


// category slider
export const categorySliders = [
    {
        id: 1,
        catImg: western,
        categoryName: "Western"
    },
    {
        id: 2,
        catImg: skirt,
        categoryName: "Skirt"
    },
    {
        id: 3,
        catImg: tShirt,
        categoryName: "T-shirt"
    },
    {
        id: 4,
        catImg: casual,
        categoryName: "Casual"
    },
    {
        id: 5,
        catImg: sleeveless,
        categoryName: "SleeveLess"
    },

    {
        id: 6,
        catImg: sweater,
        categoryName: "Sweater"
    },





]


//featured categories

export const featuredCategories = [
    {
        id: 1,
        productImg: skirtProd,
        category: 'Skirt',
        prodName: "Black Clochet",
        isHotDeal: true,
        isSale: false,
        rating: 5,
        price: 45
    }
    ,
    {
        id: 2,
        productImg: printTop,
        category: 'printed Top',
        prodName: "Multi dop top",
        isHotDeal: true,
        isSale: false,
        rating: 5,
        price: 69
    },
    {
        id: 3,
        productImg: sleevelessProd,
        category: 'Sleeveless',
        prodName: "Sleeveless Middi",
        isHotDeal: true,
        isSale: true,
        rating: 4,
        price: 37
    }
    ,
    {
        id: 4,
        productImg: partyDress,
        category: 'casual',
        prodName: "Casual wear cotton",
        isHotDeal: true,
        isSale: false,
        rating: 4.5,
        price: 63
    },

    {
        id: 5,
        productImg: whiteShirt,
        category: 'sweat Shirt',
        prodName: "Black Sweatshirt",
        isHotDeal: true,
        isSale: true,
        rating: 5,
        price: 48
    },
    {
        id: 6,
        productImg: blouse,
        category: 'crop Blouse',
        prodName: "Knitted Short Blouse",
        isHotDeal: true,
        isSale: false,
        rating: 4,
        price: 87
    },

]



//single product slider

import Sing1 from '../images/categorySlider/mens/formal/form1.png';
import Sing2 from '../images/categorySlider/mens/formal/form2.png';
import Sing3 from '../images/categorySlider/mens/partywear/party1.png';

export const singleSliders = [
    { id: 1, img: Sing1 },
    { id: 2, img: Sing2 },
    { id: 3, img: Sing3 }
]


//single product slider thumbnaill

export const sliderThumbs = [
    { id: 1, thumb: Sing1 },
    { id: 2, thumb: Sing2 },
    { id: 3, thumb: Sing3 },
]

//colors dot slider

export const colorDots = [
    { id: 1, color: "#8CA4E3" },
    { id: 2, color: "#181F2C" },
    { id: 3, color: "#B4B6C1" },
]






