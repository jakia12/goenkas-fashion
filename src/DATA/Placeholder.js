import slider1 from '../images/sliderImg/s1.jpg';
import slider2 from '../images/sliderImg/s2.jpg';
import slider3 from '../images/sliderImg/s3.jpg';

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
        backImg: slider1,
        title: "Find the boundaries",
        subTitle: "Summer Sale 70% off",
        startPrice: 199
    },
    {
        id: 2,
        backImg: slider2,
        title: "Over 200 product on discount",
        subTitle: "Great Deals",
        startPrice: 200
    },
    {
        id: 3,
        backImg: slider3,
        title: "Upto 70% off",
        subTitle: "New Arrivals",
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