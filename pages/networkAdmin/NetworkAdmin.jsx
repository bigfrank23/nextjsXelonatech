import { Box, Grid, Paper, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import React from 'react'
import { v4 as uuidv4 } from "uuid";
import AnimatedText from 'react-animated-text-content';
import MovingComponent from 'react-moving-text'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import VerifiedTwoToneIcon from '@mui/icons-material/VerifiedTwoTone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
// import { EffectCube, Pagination } from "swiper";

const netAdminHeader = {
  height: "50vh !important",
  width: "100%", 
  padding: '5rem',
  display: 'flex', 
  flexDirection: "column", 
  alignItems: 'center', 
  justifyContent: 'center', 
  gap: '3rem',
  background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url("/images/networkServer.jpeg") center -100px / cover transparent',
}

const fancyBox = {
    color: "rgba(0, 0, 0, 0.87)",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    minWidth: "0px",
    overflowWrap: "break-word",
    backgroundClip: "border-box",
    border: "0px solid rgba(0, 0, 0, 0.125)",
    marginLeft: "24px",
    marginRight: "24px",
    borderRadius: "0.75rem",
    overflow: "visible",
    padding: "3rem",
    marginTop: "-64px",
    marginBottom: "32px",
    // backgroundColor: "rgba(255, 255, 255, 0.8)",
    backgroundColor: "#34548c",
    backdropFilter: "saturate(200%) blur(30px)",
    boxShadow: "rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem",
}

const fancyBox2 = {
    color: "rgba(0, 0, 0, 0.87)",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    position: "relative",
    minWidth: "0px",
    overflowWrap: "break-word",
    backgroundClip: "border-box",
    border: "0px solid rgba(0, 0, 0, 0.125)",
    marginLeft: "24px",
    marginRight: "24px",
    borderRadius: "0.75rem",
    overflow: "visible",
    padding: "1rem 3rem",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "saturate(200%) blur(30px)",
    boxShadow: "rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem",
}

const glassEffect = {
  borderRadius: '.75rem',
  padding: '35px',
  backgroundColor: 'rgba(255, 255, 255, .45)',
  border: '1px solid rgba(255, 255, 255, .25)',
  boxShadow: '0 0 10px 1px rgba(0, 0, 0, .25)',
  filter: 'drop-shadow(2px 5px 6px #E7EBF0)',
  transition: 'transform .25s ease',
  '&:hover': {
    transform: 'translateY(-20px)'
  }
}

const circle = {
  // margin: '-4px 20px 0px 0',
  width: '30px',
  height: '30px',
  padding: '1rem',
  backgroundColor: '#003366',
  borderRadius: '50%'
}
const stackBox = {
  position: 'relative',
  top: '15%',
}
const stackCard1 = {
  position: 'absolute',
  width: '600px',
  height: '400px',
  transition: 'transform .25s linear',
  transform: 'scale(.9) translateX(-9.2%) translateY(10px)',
  '&:hover' : {
    transform: 'scale(.9) translateX(-11.2%) translateY(20px)',
  }
}
const stackCard2 = {
  position: 'absolute',
  width: '600px',
  height: '400px',
  transform: 'translateY(-30px)',
  transition: 'transform .25s linear',
  '&:hover' : {
    transform: 'translateY(-60px)'
  }
  // transform: 'scale(.9) translateX(-9.2%)',
}

const data = [
  {
    id: uuidv4(),
    txt: 'Network Design, Installation, and Evaluation'
  },
  {
    id: uuidv4(),
    txt: 'Execution and Administration of Backups'
  },
  {
    id: uuidv4(),
    txt: 'Network Resource Authentication'
  },
  {
    id: uuidv4(),
    txt: 'Network Security, including intrusion detection'
  },
  {
    id: uuidv4(),
    txt: 'Network Hardware Configuration, e.g. routers, switches'
  },
  {
    id: uuidv4(),
    txt: 'Network Upgrade and Maintenance'
  },
  {
    id: uuidv4(),
    txt: 'Software Deployment and updating'
  },
  {
    id: uuidv4(),
    txt: 'Server Management'
  },
  {
    id: uuidv4(),
    txt: 'Cloud and Physical Network Storage Management'
  },
  {
    id: uuidv4(),
    txt: 'LAN and WAN Network setup'
  }
]

const projects = [
  {
    id: uuidv4(),
    img: '/images/networkAdministration/networkingProject1/IMG_2201.jpg',
  },
  {
    id: uuidv4(),
    img: '/images/networkAdministration/networkingProject1/IMG_2213.jpg',
  },
  {
    id: uuidv4(),
    img: '/images/networkAdministration/networkingProject1/IMG_2218.jpg',
  },
  {
    id: uuidv4(),
    img: '/images/networkAdministration/networkingProject1/IMG_2220.jpg',
  },
  {
    id: uuidv4(),
    img: '/images/networkAdministration/networkingProject1/IMG_2228.jpg',
  },
  {
    id: uuidv4(),
    img: '/images/networkAdministration/networkingProject1/WP_001143.jpg',
  },
  {
    id: uuidv4(),
    img: '/images/networkAdministration/networkingProject1/WP_001152.jpg',
  },
  {
    id: uuidv4(),
    img: '/images/networkAdministration/networkingProject1/WP_001155.jpg',
  },
  {
    id: uuidv4(),
    img: '/images/networkAdministration/networkingProject1/WP_001177.jpg',
  },
  {
    id: uuidv4(),
    img: '/images/networkAdministration/networkingProject1/WP_001179.jpg',
  },
]
const projects2 = [
  {
    id: uuidv4(),
    img: '/images/networkAdministration/networkingProject2/IMG_1933.jpg',
  },
  {
    id: uuidv4(),
    img: '/images/networkAdministration/networkingProject2/IMG_1938.jpg',
  },
  {
    id: uuidv4(),
    img: '/images/networkAdministration/networkingProject2/IMG_1940.jpg',
  },
  {
    id: uuidv4(),
    img: '/images/networkAdministration/networkingProject2/IMG_1941.jpg',
  },
  {
    id: uuidv4(),
    img: '/images/networkAdministration/networkingProject2/IMG_1943.jpg',
  },
  {
    id: uuidv4(),
    img: '/images/networkAdministration/networkingProject2/IMG_1944.jpg',
  },
  {
    id: uuidv4(),
    img: '/images/networkAdministration/networkingProject2/IMG_1950.jpg',
  },
  {
    id: uuidv4(),
    img: '/images/networkAdministration/networkingProject2/IMG_1952.jpg',
  },
  {
    id: uuidv4(),
    img: '/images/networkAdministration/networkingProject2/IMG_1959.jpg',
  },
  {
    id: uuidv4(),
    img: '/images/networkAdministration/networkingProject2/IMG_1962.jpg',
  },
  {
    id: uuidv4(),
    img: '/images/networkAdministration/networkingProject2/IMG_1966.jpg',
  },
]

const NetworkAdmin = () => {
  return (
    <>
        <Box sx={netAdminHeader}>
          <Box sx={{textAlign: 'center'}}>
            <Typography variant='h4' color='#fff' mb='2rem'>Network Administration / Implementation</Typography>
            <Typography variant='h5' color='#fff' mb='1rem'>Manage, Monitor, Maintain, Secure, and Service Networks</Typography>
            <Typography variant='body1' color="#fff">We&apos;re responsible for installing, implementing, <br /> and maintaining business applications for organizations</Typography>
          </Box>
        </Box>
        <Box sx={fancyBox}>
          <Box component='div' sx={{display: 'flex', gap: '2rem', padding: '2rem'}}>
            <Box sx={glassEffect}>
              <Typography variant='h5' mb='1rem' color='#34548c'>Implementation</Typography>
              <Typography variant='body1' mb='1rem'>
                Due to the demands of today&apos;s growing economy and virtual IT environments, Organizations are beginning to rely on scalable and reliable IT infrastructure. Elonatech helps clients determine  most effective technologies that will provide maximum productivity. Whether your business is looking to build a whole new network in an already existing area or to add on to your existing infrastructure, we will design it from conceptualization, with all of your needs in mind.
              </Typography>
              <Typography variant='body1'>
                We understand the importance of covering all your installation needs to make the implementation stage seamless. We install networks which includes deploying the hardware (routers, switches, firewalls, access points, servers, racks, etc.) as well as implementing the physical cabling infrastructure (Cat 5e, Cat 6 and Fiber cabling) and secure wireless setup to guarantee business protection.
              </Typography>
            </Box>
            <Box sx={glassEffect}>
              <Typography variant='h5' mb='1rem' color='#34548c'>Administration</Typography>
              <Typography variant='body1' mb='1rem'>
                Network administration aims to ensure a reliable, secure network conducive to business operations. Network administration primarily consists of, but isn&apos;t limited to, network monitoring, network management, and maintaining network quality and security.
              </Typography>
              <Typography variant='body1' mb='1rem'>
                Elonatech supports all the networks we implement and support existing ones. Any issues you have from desktops and laptops to servers, networking hardware and printers we will assess, investigate and proffer a solution. We offer backup consultation and configuration both onsite and offsite, hardware recommendations, upgrading existing installations and remote access consultation and configuration.
              </Typography>
              <Typography variant='body1'>
                Our trained and experienced professionals will manage all facets of the network needs. Through remote monitoring, problems are detected early and corrective action can be taken, reducing the risk of costly network problems and downtime.
              </Typography>
            </Box>
          </Box>
          <Box sx={{background: '#e6e9ec', borderRadius: '0.75rem'}}>
            <Box sx={{display: 'flex', gap: '4rem'}}>
              <Box component='div' sx={{flex: 1, padding: '2rem'}}>
                    {data.map((item)=> (
                  <Box key={item.id} sx={{display: 'flex', gap: '2rem', marginBottom: '1rem'}}>
                      <Box style={circle} />
                      <Typography color='#34548c' alignSelf='center'>
                        {item.txt}
                      </Typography>
                  </Box>
                    ))}
              </Box>
              <Box sx={{flex: '1'}}>
                <Box sx={stackBox}>
                    <Box sx={stackCard1}>
                      <img style={{width: '100%', height: '100%'}} src="/images/computer-network.webP" alt="" />
                    </Box>
                    <Box sx={stackCard2}>
                      <img style={{width: '100%', height: '100%'}} src="/images/q3.jpg" alt="" />
                    </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box mb={5}>
          <Box sx={{display: "flex", height: "350px"}}>
            <Box sx={{flex: 1, width: '500px'}}>
              <img src="/images/q4.jpg" alt="" style={{width: "100%", height: "100%"}} />
            </Box>
            <Box sx={{flex: 1, background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/images/q1.webP")', backgroundPosition: '100% -60%', backgroundAttachment: "fixed", display: 'grid', placeItems: 'center'}}>
            <Typography variant='h6' textAlign='center' mt= {4} color="#fff" fontWeight={700}>WHY DO I NEED A NETWORK ADMINISTRATOR?</Typography>
              <Typography variant='body1' color="#fff" p={6}>
              Every organization that uses more than one computer or software platform needs a network administrator to coordinate and connect all the different systems; Configure network hardware such as servers, routers, and switches; Upgrade, repair, and maintain computer networks; and troubleshoot various network issues.
              Sharing resources and information among different computer systems within departments and accessing information from a database is essential for fast and efficient running of a company’s business and day-to-day activities. At ELONATECH, we implement and design both complex and simple data/voice local area networks for all types of organizations/institutions.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{marginTop: '4rem'}}>
          <Typography variant='h4' textAlign='center' color='#34548c' textTransform='capitalize'>Some of our recent completed projects</Typography>
          <hr className='m-auto my-3' style={{background: 'red', width: "50px", height: "2px"}} />
          <Box sx={fancyBox2}>
            <Typography variant='subtitle1' fontWeight={700} textTransform='uppercase' maxWidth='80%' margin='auto' textAlign='center' marginBottom='1rem'>
            Re-Routing/Reconnection of Network LAN (Ports, Face Plate, Floor Boxes and Patch Panel) of a 6 Floor Office Building (216 points) for Kunech Building (New Site) at Osapa, Jakande, Lekki
            </Typography>
              <Splide
                options={{
                  type: "loop",
                  drag: "free",
                  arrows: true,
                  pagination: false,
                  perPage: 3,
                  autoScroll: {
                    pauseOnHover: true,
                    pauseOnFocus: false,
                    rewind: false,
                    speed: 1
                  }
                }}
                extensions={{ AutoScroll }}
                style={{padding: '0 5rem'}}
              >
                  {projects.map((project)=> (
                    <SplideSlide key={project.id}>
                        <img src={project.img} style={{width: '470px', height: '300px', objectFit: 'cover'}} alt="Image 1" />
                    </SplideSlide>
                  ))}
            </Splide>
            </Box>
          <Box sx={fancyBox2} margin='2rem 0'>
            <Typography variant='subtitle1' fontWeight={700} textTransform='uppercase' maxWidth='80%' margin='auto' textAlign='center' marginBottom='1rem'>
            Sub-Contractor to PINE HEIGHT SYSTEMS on Network Engineering of a 3 Floor office Building (48 Points) LAN Setup, Mounting of a 48u Rack, termination of Patch and installation of the various networking devices (routers, switches, etc.) on the rack for Samsung Heavy Industry at LADOL
            </Typography>
              <Splide
                options={{
                  type: "loop",
                  drag: "free",
                  arrows: true,
                  pagination: false,
                  perPage: 3,
                  autoScroll: {
                    pauseOnHover: true,
                    pauseOnFocus: false,
                    rewind: false,
                    speed: 1
                  }
                }}
                extensions={{ AutoScroll }}
                style={{padding: '0 5rem'}}
              >
                  {projects2.map((project)=> (
                    <SplideSlide key={project.id}>
                        <img src={project.img} style={{width: '470px', height: '300px', objectFit: 'cover'}} alt="Image 1" />
                    </SplideSlide>
                  ))}
            </Splide>
            </Box>
        </Box>
    </>
  )
}

export default NetworkAdmin