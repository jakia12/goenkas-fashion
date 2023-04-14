import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import BannerSlider from '@/components/bannerSlider/BannerSlider'
import CategorySlider from '@/components/categorySlider/CategorySlider'
import FeaturedProduct from '@/components/featuredProduct/FeaturedProduct'
import CustomersReview from '@/components/customersReview/CustomersReview'
import MansCategorySlider from '@/components/mansCategorySlider/MansCategorySlider'
import BrandLogo from '@/components/brandLogo/BrandLogo'
import Head from 'next/head'
import AwardSlider from '@/components/awardSlider/AwardSlider'
import ProductFilter from '@/components/productFilter/ProductFilter'
import ProductGallery from '@/components/productGallery/ProductGallery'





export default function Home() {
  return (
    <>
      <Head>
        <title>Goenka's Fashions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Meta description for the Home page" />
      </Head>
      <Layout>
        {/* banner slider */}

        <BannerSlider />
        {/* product filtering */}
        <section className="py-10 bg-bgOne">
          <div className="container mx-auto w-full lg:max-w-6xl">
            <div className="py-5 text-center">
              <h2 className="text-[1.8rem] font-medium text-[#191919] capitalize ">
                All Categories
              </h2>
              <div className="h-[3px] w-[80px] bg-lightOrange mx-auto mt-2 mb-3"></div>
              <p className="my-3 text-base text-gray-600">Find best quality products at Goenkas Fashion Stores</p>
            </div>
            <ProductFilter />
          </div>
        </section>
        {/* product gallery */}
        <section className="py-10">
          <div className="container mx-auto w-full lg:max-w-6xl px-4 md:px-0">
            <div className="py-5 text-center">
              <h2 className="text-[1.8rem] font-medium text-[#191919] capitalize ">
                Top Rated Products
              </h2>
              <div className="h-[3px] w-[80px] bg-lightOrange mx-auto mt-2 mb-3"></div>
              <p className="my-3 text-base text-gray-600">Find best quality products at Goenkas Fashion Stores</p>
            </div>
            <ProductGallery />
          </div>
        </section>
        {/* featured product  */}
        <section className="py-10 bg-[#f7f7f7]">
          <div className="container mx-auto w-full lg:max-w-6xl px-4 md:px-0" >
            <div className="py-5 text-center">
              <h2 className="text-[1.8rem] font-medium text-[#191919] capitalize ">
                Featured Products
              </h2>
              <div className="h-[3px] w-[80px] bg-lightOrange mx-auto mt-2 mb-3"></div>
              <p className="my-3 text-base text-gray-600">Find best quality products at Goenkas Fashion Stores</p>
            </div>

            {/* featured product card */}
            <div className="my-6">

            </div>
            <FeaturedProduct />

          </div>


        </section>
        {/* category section */}
        <section className="py-10">
          <div className="container mx-auto w-full lg:max-w-6xl px-4 md:px-0">
            {/* section title */}
            <div className="py-5 text-center">
              <h2 className="text-[1.8rem] font-medium text-[#191919] capitalize ">
                Ladies Product Category
              </h2>
              <div className="h-[3px] w-[80px] bg-lightOrange mx-auto mt-2 mb-3"></div>
              <p className="my-3 text-base text-gray-600">Find best quality products at Goenkas Fashion Stores</p>
            </div>
            <CategorySlider />

          </div>
        </section>


        {/* mans category */}
        <section className="py-10">
          <div className="container mx-auto w-full lg:max-w-6xl px-4 md:px-0">
            <div className="py-5 text-center">
              <h2 className="text-[1.8rem] font-medium text-[#191919] capitalize ">
                Man's Categories
              </h2>
              <div className="h-[3px] w-[80px] bg-lightOrange mx-auto mt-2 mb-3"></div>
              <p className="my-3 text-base text-gray-600">Find best quality products at Goenkas Fashion Stores</p>
            </div>

            {/* mans category slider */}
            <MansCategorySlider />
          </div>
        </section>

        {/* customers review */}
        <section className="pt-10 pb-24 bg-[#f7f7f7]">
          <div className="container mx-auto w-full lg:max-w-6xl px-4 md:px-0">
            <div className="py-5 text-center">
              <h2 className="text-[1.8rem] font-medium text-[#191919] capitalize ">
                Customers Review
              </h2>
              <div className="h-[3px] w-[80px] bg-lightOrange mx-auto mt-2 mb-3"></div>
              <p className="my-3 text-base text-gray-600">Find best quality products at Goenkas Fashion Stores</p>
            </div>

            {/* review slider */}
            <CustomersReview />



          </div>
        </section>

        {/* brands logo */}
        <section className="py-10">
          <div className="container mx-auto w-full md:max-w-6xl px-4 md:px-0">
            <BrandLogo />
          </div>
        </section>

        {/* award prize section */}
        <section className="py-10 bg-bgOne">
          <div className="container mx-auto w-full md:max-w-6xl px-4 md:px-0">
            <AwardSlider />
          </div>
        </section>


      </Layout >
    </>

  )

}