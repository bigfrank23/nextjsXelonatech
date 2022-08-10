// import React, { useRef, useState } from "react";
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
  boxShadow: '5px 5px 25px 0px cornflowerblue',
  padding: '0 !important'
}

const CCTVinstallation = () => {
  return (
    <>
    
    <Box sx={whoWeAreHeader}>
          <Box sx={{textAlign: 'center'}}>
            <Typography variant='h4' color='#fff' mb='2rem'>CCTV Installation</Typography>
            <Typography variant='h5' color='#fff' mb='1rem'>Excellence, Professionalism, Integrity & Convinient Service</Typography>
            <Typography variant='body1' color="#fff">Leading provider of innovative information technologies <br /> that improve the quality of lives</Typography>
          </Box>
    </Box>
    <Box sx={{background: '#fff', padding: '5rem 10rem 5rem 10rem'}}>
      {/* <Box sx={{margin: '2rem'}}>
      <Typography variant='h4' textAlign='center' color='#34548c' textTransform='capitalize'>INTRODUCTION</Typography>
      <hr className='m-auto my-3' style={{background: 'red', width: "50px", height: "2px"}} />
      </Box> */}
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
          <Box sx={{flex: 1, alignSelf: 'center', height: '450px'}}><img src="https://images.unsplash.com/photo-1528312635006-8ea0bc49ec63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" alt="" style={{width: '100%', height: '100%', objectFit: 'cover', border: '2px solid lightblue'}} /></Box>
          <Box sx={{flex: 1, border: '5px double lightblue'}} padding='2rem'>
            <Typography variant="h5" fontWeight='700' textAlign='center' mb='1rem' color='#34548c'>CCTV 5.4</Typography>
            <Typography variant="subtitle1" fontWeight='700' color='#41464b'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore quisquam odit earum aperiam deserunt. Earum nobis, voluptas magnam consequuntur fugit facilis qui tenetur animi obcaecati vero? Rerum ullam nobis similique.
            </Typography>
            <Typography variant="subtitle1" fontWeight='700' color='#41464b'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore quisquam odit earum aperiam deserunt. Earum nobis, voluptas magnam consequuntur fugit facilis qui tenetur animi obcaecati vero? Rerum ullam nobis similique.
            </Typography>
          </Box>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box sx={{display: 'flex', height: '450px'}}>
          <Box sx={{flex: 1, border: '5px double red'}} padding='2rem'>
            <Typography variant="h5" fontWeight='700' textAlign='center' mb='1rem' color='#34548c'>CCTV v8</Typography>
            <Typography variant="subtitle1" fontWeight='700' color='#41464b'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aperiam adipisci fuga molestiae dicta? Alias, magnam doloremque dicta rem, qui quo amet harum voluptate sed consectetur dolore suscipit aliquam neque!
            </Typography>
            <Typography variant="subtitle1" fontWeight='700' color='#41464b'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aperiam adipisci fuga molestiae dicta? Alias, magnam doloremque dicta rem, qui quo amet harum voluptate sed consectetur dolore suscipit aliquam neque!
            </Typography>
          </Box>
          <Box sx={{flex: 1, alignSelf: 'center', height: '450px'}}><img src="https://images.unsplash.com/photo-1602481786904-f0c4b046b9f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" style={{width: '100%', height: '100%', objectFit: 'cover', border: '2px solid red'}} /></Box>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box sx={{display: 'flex', height: '450px'}}>
          <Box sx={{flex: 1, height: '450px'}}><img src="https://images.unsplash.com/photo-1589935447067-5531094415d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" style={{width: '100%', height: '100%', objectFit: 'cover', border: '2px solid purple'}} /></Box>
          <Box sx={{flex: 1, border: '5px double purple'}} padding='2rem'>
            <Typography variant="h5" fontWeight='700' textAlign='center' mb='1rem' color='#34548c'>CCTV 3.0</Typography>
            <Typography variant="subtitle1" fontWeight='700' color='#41464b'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ullam excepturi consequatur tempora, nulla ab velit reiciendis amet! Sunt at autem laborum? Rem unde iure doloribus nesciunt totam ducimus quaerat?
            </Typography>
            <Typography variant="subtitle1" fontWeight='700' color='#41464b'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ullam excepturi consequatur tempora, nulla ab velit reiciendis amet! Sunt at autem laborum? Rem unde iure doloribus nesciunt totam ducimus quaerat?
            </Typography>
          </Box>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box sx={{display: 'flex', height: '450px'}}>
          <Box sx={{flex: 1, border: '5px double #031b88'}} padding='2rem'>
            <Box sx={thirdBox}>
              <Typography variant="h5" textAlign='center' mb='1rem' fontWeight={700} color='#34548c'>CCTV v6</Typography>
              <Typography variant="subtitle1" fontWeight='700' color='#41464b'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ad numquam suscipit labore sequi voluptatum minus itaque, quos explicabo aut dolor, autem at a deserunt sed laborum impedit. Corporis, dicta.</Typography>
              <Typography variant="subtitle1" fontWeight='700' color='#41464b'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ad numquam suscipit labore sequi voluptatum minus itaque, quos explicabo aut dolor, autem at a deserunt sed laborum impedit. Corporis, dicta.</Typography>
            </Box>
          </Box>
          <Box sx={{flex: 1, alignSelf: 'center', height: '450px'}}><img src="https://images.unsplash.com/photo-1529265895721-65945a176cff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" style={{width: '100%', height: '100%', objectFit: 'cover', border: '2px solid #031b88'}} /></Box>
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
        <div className="content" style={{background: 'url("/images/banner.png")', backgroundSize: '100%', backgroundRepeat: 'no-repeat'}}>
    <img src="/logoAndIcons/logo2.png"  alt="Italy / Urban / Street / City" />
            <div className="text1"><b>Contact</b></div>
            <div className="text2"><b>Us Now</b></div>
        </div>
    </div>
    </Box>
    </>
  )
}

export default CCTVinstallation