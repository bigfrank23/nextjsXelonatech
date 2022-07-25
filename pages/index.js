import Head from 'next/head'
import BlogIndex from '../components/blogIndex/BlogIndex'
import CardIndex from '../components/card/CardIndex'
import CardIndex2 from '../components/card/CardIndex2'
import HeroBanner1 from '../components/heroBanner1/HeroBanner1'
// import Image from 'next/image'
import HeroSection from '../components/HeroSection'
import HeroSection1 from '../components/heroSection/HeroSection'
import ShopIndex from '../components/shopIndex/ShopIndex'
import Testimonial from '../components/testimonial/Testimonial'
import WhatWeDo from '../components/whatWeDo/WhatWeDo'
import WhatWeDoBest from '../components/whatWeDoBest/WhatWeDoBest'
import Script from 'next/script'
import OurClients from '../components/ourClients/OurClients'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="container-fluid p-0">
      <Head>
      {/* <meta name="viewport" content="width=device-width,initial-scale=1"/> */}
        <title>Elonatech Nigeria Limited</title>
        <meta name="description" content="Welcome to Elonatech Nigeria Limited Website" />
        <link rel="icon" href="/favicon.ico" />
        <Script src="https://code.jquery.com/jquery-3.5.1.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></Script>
        <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></Script>
      </Head>
      {/* <div className="container-fluid"> */}
        {/* <HeroSection/> */}
        <HeroSection1 />
        <CardIndex />
        <CardIndex2 />
        <HeroBanner1 />
        <WhatWeDoBest />
        <Testimonial />
        <BlogIndex />
        <ShopIndex />
        <OurClients />
      {/* </div> */}
    </div>
  )
}