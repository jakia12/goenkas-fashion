import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import BannerSlider from '@/components/bannerSlider/BannerSlider'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <BannerSlider />

    </Layout>
  )

}