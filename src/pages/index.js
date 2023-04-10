import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import BannerSlider from '@/components/bannerSlider/BannerSlider'
import CategorySlider from '@/components/categorySlider/CategorySlider'
import FeaturedProduct from '@/components/featuredProduct/FeaturedProduct'
import CustomersReview from '@/components/customersReview/CustomersReview'
import MansCategorySlider from '@/components/mansCategorySlider/MansCategorySlider'





export default function Home() {
  return (
    <Layout>
      {/* banner slider */}
      <BannerSlider />
      {/* category section */}
      <section className="py-10">
        <div className="container mx-auto w-full lg:max-w-6xl">
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

      {/* featured product  */}
      <section className="py-10">
        <div className="container mx-auto w-full lg:max-w-6xl">
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

      {/* mans category */}
      <section className="py-10">
        <div className="container mx-auto w-full lg:max-w-6xl">
          <div className="py-5 text-center">
            <h2 className="text-[1.8rem] font-medium text-[#191919] capitalize ">
              Featured Products
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
        <div className="container mx-auto w-full lg:max-w-6xl">
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

    </Layout >
  )

}