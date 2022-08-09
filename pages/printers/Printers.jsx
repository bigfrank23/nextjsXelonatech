import { Box, Typography } from '@mui/material'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from 'uuid';
import StarIcon from '@mui/icons-material/Star';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import "./styles.css";

// import required modules
import { EffectCards } from "swiper";

const whoWeAreHeader = {
  height: "50vh !important",
  width: "100%", 
  padding: '5rem',
  display: 'flex', 
  flexDirection: "column", 
  alignItems: 'center', 
  justifyContent: 'center', 
  gap: '3rem',
  background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url("/images/service-banner-26.jpg") center 80% / cover transparent',
}

const datas = [
  {
      id: uuidv4(),
      h1: 'Get Professional Printer Repair',
      p1: 'Many people like to tackle copier and printer repair on their own. After all, if you can do it yourself, you cut down your wait time and get back up to speed faster. However, some types of repairs are too complex for people who do not have special knowledge of these devices. If your printer is consistently getting jammed, has parts that need to be replaced, or is making any worrisome sounds or smells, it is time to get professional help.',
      p2: 'Elonatech can readily help you solve your printer repair problems quickly and affordably.'
  },
  // {
  //     id: uuidv4(),
  //     h1: 'Get Professional Printer Repair',
  //     p: 'Elonatech can readily help you solve your printer repair problems quickly and affordably. Our Printer Repair Technicians is highly skilled and proficient in the regular and routine repairs, including replacements, installation and configuration of new printers, maintaining and ensuring the proper functioning of standalone printers, scanners or Network Printers.'
  // },
  // {
  //     id: uuidv4(),
  //     h1: 'Repair and Maintenance Services for out of Warranty Print Products',
  //     p: 'Highly aware of your company’s business needs, Elonatech provides a portfolio of services that can be ordered as the occasion demands. Your printer, photocopier or scanner is down, and you are out of warranty, or your device is not even covered by a warranty. You can opt for our repair option which includes the repair service and part replacement that can be managed throughout the usage of the device.'
  // }
]
const Printers = () => {
  return (
    <>
    <Box sx={whoWeAreHeader}>
    <Box component='header' sx={{textAlign: 'center'}}>
        <Typography variant='h4' color='#fff' mb='2rem'>Printer Repair & Maintenance</Typography>
        <Typography variant='h5' color='#fff' mb='1rem'>Keeping Up with all Necessary Maintenance is The Best Way to Protect your Investment</Typography>
        <Typography variant='body1' color="#fff">A malfunctioning or out of service printer, copier or multifunction device can be disastrous for your business</Typography>
    </Box>
    </Box>
    <Box component='section' sx={{padding: '3rem 8rem 3rem 8rem', background: '#fff'}}>
          <Typography variant='h4' textAlign='center' color='#34548c' textTransform='capitalize'>Printers, Copiers and Scanners</Typography>
          <Typography variant='h6' textAlign='center'>
          Maintaining the printer and copier in your office is very important. Keeping up with all necessary printer repair and maintenance is the best way to protect your valuable investment. It also ensures that your business will remain productive and avoid frustrating delays due to printer malfunction.
          </Typography>
          <Typography variant='h6' mt={2} textAlign='center'>
          We offer a full range of printer repair services. Do you have issues with your printers or copiers? Is your printer or photocopier giving you a hard time? Your printing jobs should be more straight forward and seamless. Let&apos;s FIX IT!!
          </Typography>
          <hr className='m-auto my-3' style={{background: 'red', width: "50px", height: "2px"}} />
      <Box sx={{background: '#34548c', display: 'flex', justifyContent: 'center', gap: '1rem', padding: '2rem', borderRadius: '5px'}}>
        <Box sx={{p: 1.5, width: '540px', height: '360px', textAlign: 'center', background: 'white', boxShadow: '1px 1px 3px 4px darkgrey', borderRadius: '5px', transition: '.25s ease', '&:hover': {border: '2px solid red'}}}>
        <img src="https://img.icons8.com/external-photo3ideastudio-lineal-color-photo3ideastudio/64/000000/external-printer-home-office-photo3ideastudio-lineal-color-photo3ideastudio.png"/>
          <Typography variant='h6' fontWeight={700}>Repair and Maintenance Services for out of Warranty Print Products</Typography>
          <Typography variant='body2' component='span'>Highly aware of your company’s business needs, Elonatech provides a portfolio of services that can be ordered as the occasion demands. Your printer, photocopier or scanner is down, and you are out of warranty, or your device is not even covered by a warranty. You can opt for our repair option which includes the repair service and part replacement that can be managed throughout the usage of the device.</Typography>
        </Box>
        <Box sx={{width: '540px', height: '360px', textAlign: 'center', background: 'white', boxShadow: '1px 1px 3px 4px darkgrey', borderRadius: '5px', transition: '.25s ease', '&:hover': {border: '2px solid red'}}}>
        <img src="/images/printerImg.jpg" style={{width: '100%', height: '100%'}}/>
          {/* <Typography variant='h6' fontWeight={700}>Lorem, ipsum dolor.</Typography> */}
          {/* <Typography variant='body2' component='span'>Highly aware of your company’s business needs, Elonatech provides a portfolio of services that can be ordered as the occasion demands. Your printer, photocopier or scanner is down, and you are out of warranty, or your device is not even covered by a warranty. You can opt for our repair option which includes the repair service and part replacement that can be managed throughout the usage of the device.</Typography> */}
        </Box>
        <Box sx={{p: 1.5, width: '540px', height: '360px', textAlign: 'center', background: 'white', boxShadow: '1px 1px 3px 4px darkgrey', borderRadius: '5px', transition: '.25s ease', '&:hover': {border: '2px solid red'}}}>
        <img src="https://img.icons8.com/external-tulpahn-outline-color-tulpahn/64/000000/external-printer-printing-tulpahn-outline-color-tulpahn-1.png"/>
          <Typography variant='h6' sx={{margin: '1rem 0'}} fontWeight={700}>Printer installation and Configuration</Typography>
          <Typography variant='body2' component='span'>Our Printer Repair Technicians is highly skilled and proficient in the regular and routine repairs, including replacements, installation and configuration of new printers, maintaining and ensuring the proper functioning of standalone printers, scanners or Network Printers.</Typography>
        </Box>
      </Box>
    </Box>
    <Box component='section' sx={{display: 'flex', padding: '5rem 10rem 5rem 10rem', background: '#f4f5f7', gap: '8rem'}}>
      <Box sx={{width: '300px', alignSelf: 'flex-start', flex: 1}}>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img style={{height: '100%', width: '100%', objectFit: 'contain'}} src="/images/printer2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{height: '100%', width: '100%', objectFit: 'contain'}} src="/images/printer3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {/* <img style={{height: '100%', width: '100%', objectFit: 'contain'}} src="/images/printer4.png" alt="" /> */}
        </SwiperSlide>
        <SwiperSlide>
          <img style={{height: '100%', width: '100%', objectFit: 'contain'}} src="/images/printer5.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {/* <img style={{height: '100%', width: '100%', objectFit: 'contain'}} src="/images/printer6.png" alt="" /> */}
        </SwiperSlide>
      </Swiper>
      </Box>
      <Box sx={{flex: 1, border: '10px solid #34548c', padding: '2rem', width: '500px', boxShadow: '5px 5px 3px red'}}>
        <Box>
        {/* <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} swipeable={true} stopOnHover={true}> */}
            {datas.map((data)=> (
                <Box key={data.id}>
                    {/* <img src="/logoAndIcons/blackLogo.png" alt="black-logo" style={{width: '30px', height: '30px'}} /> */}
                    <Box sx={{display: 'flex', color:'darkorange', justifyContent: 'center'}}>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    </Box>
                    <Typography variant='h6' textAlign='center' fontWeight={600} mb={2}>{data.h1}</Typography>
                    <hr className='m-auto my-3' style={{background: 'red', width: "50px", height: "2px"}} />
                    <Typography variant='subtitle1'>{data.p1}</Typography>
                    <Typography variant='subtitle1'>{data.p2}</Typography>
                </Box>
            ))}
          {/* </Carousel> */}
        </Box>
      </Box>
    </Box>
    <Box sx={{display: 'flex', justifyContent: 'center', gap: '2rem', background: '#34548c', padding: '5rem 10rem 5rem 10rem'}}>
      <Box sx={{flex: 1, border: '5px solid #feffff', padding: '2rem'}}>
        <Typography variant='h5' color='#fff' mb={2}>Our Printer Specialists Work on The Following Top Brands:</Typography>
        <Box component='ul' sx={{m: 0, p: 0, listStyle: 'none'}}>
          <Box component='li' sx={{display: 'flex', gap: '1rem', color: '#fff'}}>
            <LocalPrintshopOutlinedIcon sx={{color: '#9d0000', alignSelf: 'center'}} /><Typography variant='h6'>Brother</Typography> 
          </Box>
          <Box component='li' sx={{display: 'flex', gap: '1rem', color: '#fff'}}><LocalPrintshopIcon sx={{color: '#9d0000', alignSelf: 'center'}} /><Typography variant='h6'>Canon</Typography> </Box>
          <Box component='li' sx={{display: 'flex', gap: '1rem', color: '#fff'}}><LocalPrintshopOutlinedIcon sx={{color: '#9d0000', alignSelf: 'center'}} /><Typography variant='h6'>Epson</Typography> </Box>
          <Box component='li' sx={{display: 'flex', gap: '1rem', color: '#fff'}}><LocalPrintshopIcon sx={{color: '#9d0000', alignSelf: 'center'}} /><Typography variant='h6'>HP (Hewlett Packard)</Typography> </Box>
          <Box component='li' sx={{display: 'flex', gap: '1rem', color: '#fff'}}><LocalPrintshopOutlinedIcon sx={{color: '#9d0000', alignSelf: 'center'}} /><Typography variant='h6'>Lexmark</Typography> </Box>
          <Box component='li' sx={{display: 'flex', gap: '1rem', color: '#fff'}}><LocalPrintshopIcon sx={{color: '#9d0000', alignSelf: 'center'}} /><Typography variant='h6'>Ricoh</Typography> </Box>
          <Box component='li' sx={{display: 'flex', gap: '1rem', color: '#fff'}}><LocalPrintshopOutlinedIcon sx={{color: '#9d0000', alignSelf: 'center'}} /><Typography variant='h6'>Samsung</Typography> </Box>
          <Box component='li' sx={{display: 'flex', gap: '1rem', color: '#fff'}}><LocalPrintshopIcon sx={{color: '#9d0000', alignSelf: 'center'}} /><Typography variant='h6'>Sharp</Typography> </Box>
          <Box component='li' sx={{display: 'flex', gap: '1rem', color: '#fff'}}><LocalPrintshopOutlinedIcon sx={{color: '#9d0000', alignSelf: 'center'}} /><Typography variant='h6'>Xerox</Typography> </Box>
        </Box>
      </Box>
      <Box sx={{flex: 1.5, display: 'flex', justifyContent: 'center', gap: '1rem', background: 'transparent', border: '5px solid #feffff'}}>
        <img src="/images/printersCombined.png" alt="" style={{width: '100%', objectFit: 'contain'}} />
        {/* <img src="/images/printer6.png" alt="" width={300} style={{objectFit: 'contain'}} />
        <img src="/images/printer4.png" alt="" width={300} /> */}
      </Box>
    </Box>
    </>
  )
}

export default Printers