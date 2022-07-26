import { Grid, Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const items = [
    {
        id: 1,
        img: '/images/clientLogo/Diva-Cakes.png'
    },
    {
        id: 2,
        img: '/images/clientLogo/MTMSD-logo_3d.png'
    },
    {
        id: 3,
        img: '/images/clientLogo/eduxtra-1.png'
    },
    {
        id: 4,
        img: '/images/clientLogo/Friesland-Campina.png'
    },
    {
        id: 5,
        img: '/images/clientLogo/IRETI-logo-300x300-1.png'
    },
    {
        id: 6,
        img: '/images/clientLogo/Jigirinty_sewage-energy.png'
    },
    {
        id: 7,
        img: '/images/clientLogo/kosofe_local_govt.-removebg-preview.png'
    },
    {
        id: 8,
        img: '/images/clientLogo/okhma.jpg'
    },
    {
        id: 9,
        img: '/images/clientLogo/olajide.png'
    },
    {
        id: 10,
        img: '/images/clientLogo/PFN-Logo.png'
    },
    {
        id: 11,
        img: '/images/clientLogo/PineheightSystems-logo.png'
    },
    {
        id: 12,
        img: '/images/clientLogo/Remaben_Logo-removebg-preview.png'
    },
    {
        id: 13,
        img: '/images/clientLogo/domino.jpg'
    },
    {
        id: 14,
        img: '/images/clientLogo/Safebrooks-Logo-png.png'
    },
    {
        id: 15,
        img: '/images/clientLogo/samsung.jpg'
    },
    {
        id: 16,
        img: '/images/clientLogo/The-Home-Builders-Ministry-Logo.png'
    },
    {
        id: 17,
        img: '/images/clientLogo/TruCSR-logo.png'
    },
    {
        id: 18,
        img: '/images/clientLogo/Universal-Peace-Chaplains.png'
    },
    {
        id: 19,
        img: '/images/clientLogo/wrahp.png'
    },
]

const OurClients = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1024 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 1024, min: 768 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 768, min: 640 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 640, min: 0 },
          items: 1,
        },
      };
  return (
    <div className='container'>
        <h3 className="text-center" style={{color: '#34548c', textTransform: 'capitalize'}}>Some of our clients</h3>
        <hr className='m-auto my-3' style={{background: 'red', width: "50px", height: "2px"}} />
        <Box sx={{p: '3rem'}}>
            <Carousel
                // showDots={true}
                responsive={responsive}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass="px-3"
                // customTransition="all 5"
                // transitionDuration={500}
                autoPlay={true}
                autoPlaySpeed={2000}
                // showDots='false'
                rewindWithAnimation='true'
                arrows={false}
                infinite
            >
                    {items.map((item)=> (
                        // <Grid item>
                            <Box key={item.id} sx={{mb: '2rem'}}>
                                <img src={item.img} alt="client-logo" width={100} style={{background:'#fff'}} height='auto' />
                            </Box>
                        // </Grid>
                    ))}
            </Carousel>
        </Box>
    </div>
  )
}

export default OurClients