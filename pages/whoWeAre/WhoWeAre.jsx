import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Grid, Mousewheel, Pagination } from "swiper";
import { Box, Typography } from "@mui/material";


const whoWeAreHeader = {
  height: "50vh !important",
  width: "100%", 
  padding: '5rem',
  display: 'flex', 
  flexDirection: "column", 
  alignItems: 'center', 
  justifyContent: 'center', 
  gap: '3rem',
  background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url("/images/web-design.jpg") center -100px / cover transparent',
}

const thirdBox = {
  border: '5vmin solid transparent',
  borderImageSlice: 1,
  borderImageSource: 'linear-gradient(var(0deg), #f64f59, #c471ed, #12c2e9)',
  boxShadow: '5px 5px 25px 0px rgba(225, 48, 139, 0.5)',
  padding: '0 !important'
}

const WhoWeAre = () => {
  return (
    <>
    <Box sx={whoWeAreHeader}>
          <Box sx={{textAlign: 'center'}}>
            <Typography variant='h4' color='#fff' mb='2rem'>About Elonatech</Typography>
            <Typography variant='h5' color='#fff' mb='1rem'>Excellence, Professionalism, Integrity & Convinient Service</Typography>
            <Typography variant='body1' color="#fff">Leading provider of innovative information technologies <br /> that improve the quality of lives</Typography>
          </Box>
    </Box>
    <Box>
      <Box sx={{margin: '2rem'}}>
      <Typography variant='h4' textAlign='center' color='#34548c' textTransform='capitalize'>INTRODUCTION</Typography>
      <hr className='m-auto my-3' style={{background: 'red', width: "50px", height: "2px"}} />
      </Box>
      <Swiper
      direction={"vertical"}
      slidesPerView={1}
      spaceBetween={30}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      modules={[Mousewheel, Pagination]}
      className="mySwiper"
      >
      <SwiperSlide>
        <Box sx={{display: 'flex', height: '450px'}}>
          <Box sx={{flex: 1, alignSelf: 'center', height: '450px'}}><img src="/images/heroImg/img1.jpg" alt="" style={{width: '100%', height: '100%', objectFit: 'cover'}} /></Box>
          <Box sx={{flex: 1}} padding='2rem'>
            <Typography variant="h5" fontWeight='700' textAlign='center' mb='1rem'>WHO WE ARE</Typography>
            <Typography variant="subtitle1" fontWeight='700'>
              Elonatech Nigeria Limited is a diversified company in pursuit of excellence in ‘IT’. Our company's logistical services are designed for the top-of-the-market corporate clientele; we serve to keep you above the turmoil of working in today's Nigeria. Our company is managed and structured to achieve effective results, even to the most challenging client requirement. This, we believe, forms the foundation for mutually beneficial, long-term partnerships and we ensure that we reach our goal of adding value to our client’s processes. We Endeavour to exceed our clients’ expectations with the solutions we provide, and aim at pricing our solutions and services competitively and deliver projects within budget while continuously striving to maintain premium quality and standard.
            </Typography>
          </Box>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box sx={{display: 'flex', height: '450px'}}>
          <Box sx={{flex: 1}} padding='2rem'>
            <Typography variant="subtitle1" fontWeight='700' textAlign='center' mb='1rem'>...who we are</Typography>
            <Typography variant="subtitle1" fontWeight='700'>
            We offer a comprehensive package which includes: Computer sales (Client and Servers) and Maintenance, hardware and software engineering, Network deployment and Server administration, internet solutions, Graphic design and Branding, Web design and Development, Digital Marketing, Video editing, Live Streaming and Video Conferencing, sales, repair and configuration of Smart Phones, CRMs & ERPs, Bulk SMS, and other ‘IT’ related services your organization needs.
            </Typography>
          </Box>
          <Box sx={{flex: 1, alignSelf: 'center', height: '450px'}}><img src="/images/heroImg/img1.jpg" alt="" style={{width: '100%', height: '100%', objectFit: 'cover'}} /></Box>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box sx={{display: 'flex', height: '450px'}}>
          <Box sx={{flex: 1, height: '450px'}}><img src="/images/heroImg/img1.jpg" alt="" style={{width: '100%', height: '100%', objectFit: 'cover'}} /></Box>
          <Box sx={{flex: 1}} padding='2rem'>
            <Typography variant="subtitle1" fontWeight='700' textAlign='center' mb='1rem'>...who we are</Typography>
            <Typography variant="subtitle1" fontWeight='700'>
            We are innovative in sustaining existing services while creating and maintaining new services to meet the needs of the increasingly sophisticated corporate clientele. We have continued to expand our range of services around their needs.
            The emphasis here is providing service facilities designed to suit client’s particular requirements, realizing that each client has his own unique corporate need.
            </Typography>
          </Box>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box sx={{display: 'flex', height: '450px'}}>
          <Box sx={{flex: 1}} padding='2rem'>
            <Box sx={thirdBox}>
              <Typography variant="h5" textAlign='center' mb='1rem'>OUR MISSION</Typography>
              <Typography variant="subtitle1" fontWeight='700'>To create a convenient communications services by delighting and satisfying our clients through the provision of innovative, quality, timely, relevant, accurate and affordable solutions to their needs.</Typography>
            </Box>
            <Box sx={thirdBox}>
              <Typography variant="h5" textAlign='center' mb='1rem'>OUR VISION</Typography>
              <Typography variant="subtitle1" fontWeight='700'>To be the leading provider of innovative information technologies that improve the quality of lives</Typography>
            </Box>
          </Box>
          <Box sx={{flex: 1, alignSelf: 'center', height: '450px'}}><img src="/images/heroImg/img1.jpg" alt="" style={{width: '100%', height: '100%', objectFit: 'cover'}} /></Box>
        </Box>
      </SwiperSlide>
    </Swiper>
    </Box>
    <Box sx={{marginTop: '8rem'}}>
    <div className="whoWeAreBanner">
      <div className="line">
        <span>Reach Out</span>
      </div>
    </div>
    <div className="whoWeAreBox">
        <div className="content">
    <img src="/logoAndIcons/logo2.png"  alt="Italy / Urban / Street / City" />
            <div className="text1"><b>Contact</b></div>
            <div className="text2"><b>Us Now</b></div>
        </div>
    </div>
    </Box>
    </>
  )
}

export default WhoWeAre