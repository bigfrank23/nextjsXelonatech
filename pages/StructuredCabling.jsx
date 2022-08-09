import { useState } from 'react';
import { Box, Typography } from '@mui/material'
import Head from 'next/head'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { v4 as uuidv4 } from "uuid";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";


const whoWeAreHeader = {
    height: "50vh !important",
    width: "100%", 
    padding: '5rem',
    display: 'flex', 
    flexDirection: "column", 
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: '3rem',
    background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url("/images/web-design.jpg") center 100% / cover transparent',
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

const projects = [
  {
    id: uuidv4(),
    img: '/images/StructuredCabling/ProjectPhase1/IMG-20130627-00055.jpg',
  },
  {
    id: uuidv4(),
    img: '/images/StructuredCabling/ProjectPhase1/IMG-20130627-00058.jpg',
  },
  {
    id: uuidv4(),
    img: '/images/StructuredCabling/ProjectPhase1/IMG-20130629-00070.jpg',
  },
  {
    id: uuidv4(),
    img: '/images/StructuredCabling/ProjectPhase1/IMG-20130910-00269.jpg',
  },
  {
    id: uuidv4(),
    img: '/images/StructuredCabling/ProjectPhase1/IMG-20130911-00204.jpg',
  },
  {
    id: uuidv4(),
    img: '/images/StructuredCabling/ProjectPhase1/IMG-20130911-00270.jpg',
  },
  {
    id: uuidv4(),
    img: '/images/StructuredCabling/ProjectPhase1/IMG-20130911-00272.jpg',
  },
  {
    id: uuidv4(),
    img: '/images/StructuredCabling/ProjectPhase1/IMG-20130923-00302.jpg',
  },
  {
    id: uuidv4(),
    img: '/images/StructuredCabling/ProjectPhase1/Lagos-20130908-00189.jpg',
  },
  {
    id: uuidv4(),
    img: '/images/StructuredCabling/ProjectPhase1/Lagos-20130908-00191.jpg',
  },
  {
    id: uuidv4(),
    img: '/images/StructuredCabling/ProjectPhase1/Lagos-20130911-00208.jpg',
  },
  {
    id: uuidv4(),
    img: '/images/StructuredCabling/ProjectPhase1/Lagos-20130911-00213.jpg',
  },
]

const project2 = [
  {
    id: uuidv4(),
    img: '/images/StructuredCabling/ProjectPhase2/DSC06900.JPG',
  },
  {
    id: uuidv4(),
    img: '/images/StructuredCabling/ProjectPhase2/DSC06909.JPG',
  },
  {
    id: uuidv4(),
    img: '/images/StructuredCabling/ProjectPhase2/DSC06935.JPG',
  },
  {
    id: uuidv4(),
    img: '/images/StructuredCabling/ProjectPhase2/DSC06940.JPG',
  },
  {
    id: uuidv4(),
    img: '/images/StructuredCabling/ProjectPhase2/DSC06947.JPG',
  },
  {
    id: uuidv4(),
    img: '/images/StructuredCabling/ProjectPhase2/DSC06949.JPG',
  },
  {
    id: uuidv4(),
    img: '/images/StructuredCabling/ProjectPhase2/DSC06951.JPG',
  },
  {
    id: uuidv4(),
    img: '/images/StructuredCabling/ProjectPhase2/DSC06953.JPG',
  },
  {
    id: uuidv4(),
    img: '/images/StructuredCabling/ProjectPhase2/DSC06958.JPG',
  },
  {
    id: uuidv4(),
    img: '/images/StructuredCabling/ProjectPhase2/DSC06963.JPG',
  },
  {
    id: uuidv4(),
    img: '/images/StructuredCabling/ProjectPhase2/DSC06969.JPG',
  },
  {
    id: uuidv4(),
    img: '/images/StructuredCabling/ProjectPhase2/DSC06972.JPG',
  },
  {
    id: uuidv4(),
    img: '/images/StructuredCabling/ProjectPhase2/DSC06977.JPG',
  },
  {
    id: uuidv4(),
    img: '/images/StructuredCabling/ProjectPhase2/DSC06978.JPG',
  },
  {
    id: uuidv4(),
    img: '/images/StructuredCabling/ProjectPhase2/DSC06986.JPG',
  },
  {
    id: uuidv4(),
    img: '/images/StructuredCabling/ProjectPhase2/IMG-20130908-00253.jpg',
  },
]

const StructuredCabling = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
  return (
    <>
    <Head>
      {/* <meta name="viewport" content="width=device-width,initial-scale=1"/> */}
        <title>Structured Cabling</title>
        <meta name="description" content="Elonatech Nigeria Limited - Structured Cabling Page" />
        <link rel="icon" href="/elona-icon.png" />
    </Head>
    <Box sx={whoWeAreHeader}>
        <Box sx={{textAlign: 'center'}}>
        <Typography variant='h4' color='#fff' mb='2rem'>Structured Cabling</Typography>
        <Typography variant='h5' color='#fff' mb='1rem'>Excellence, Professionalism, Integrity & Convinient Service</Typography>
        <Typography variant='body1' color="#fff">Leading provider of innovative information technologies <br /> that improve the quality of lives</Typography>
        </Box>
    </Box>
    <Box component='section' sx={{padding: '5rem 10rem 5rem 10rem', background: '#fff' }}>
      <Box sx={{ width: '50%', background: 'whitesmoke', margin: 'auto'}}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList justifyContent="space-around" onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="lorem Ipsium" value="1" wrapped />
              <Tab label="lorem Ipsium" value="2" />
              <Tab label="lorem Ipsium" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Box sx={{display: 'flex', gap: '1rem'}}>
              <Box sx={{width: '300px', height: '250px'}}>
                <img style={{width: '100%,', height: '100%'}} src="https://images.unsplash.com/photo-1629837093109-11325d6e7afd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
                 alt=""
                  />
              </Box>
              <Typography variant='body1' textAlign='justify'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Perferendis fugit soluta minus, harum tempore voluptatem itaque ullam 
                ipsa perspiciatis vero a molestiae impedit accusamus animi? Animi ipsam molestiae amet eveniet, 
                est sequi? Veritatis incidunt vitae voluptas repellat eaque. Corrupti obcaecati nihil at. 
                Aspernatur sint ducimus assumenda asperiores est? Ipsam, architecto.
              </Typography>
            </Box>
          </TabPanel>
          <TabPanel value="2">
            <Typography variant='body1'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Perferendis fugit soluta minus, harum tempore voluptatem itaque ullam 
              ipsa perspiciatis vero a molestiae impedit accusamus animi? Animi ipsam molestiae amet eveniet, 
              est sequi? Veritatis incidunt vitae voluptas repellat eaque. Corrupti obcaecati nihil at. 
              Aspernatur sint ducimus assumenda asperiores est? Ipsam, architecto.
            </Typography>
          </TabPanel>
          <TabPanel value="3">
            <Typography variant='body1'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Perferendis fugit soluta minus, harum tempore voluptatem itaque ullam 
              ipsa perspiciatis vero a molestiae impedit accusamus animi? Animi ipsam molestiae amet eveniet, 
              est sequi? Veritatis incidunt vitae voluptas repellat eaque. Corrupti obcaecati nihil at. 
              Aspernatur sint ducimus assumenda asperiores est? Ipsam, architecto.
            </Typography>
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
    <Box>
    <Typography variant='h4' textAlign='center' color='#34548c' textTransform='capitalize'>Some of our recent completed projects</Typography>
      <hr className='m-auto my-3' style={{background: 'red', width: "50px", height: "2px"}} />
      <Box sx={fancyBox2}>
        <Typography variant='subtitle1' fontWeight={700} textTransform='uppercase' maxWidth='80%' margin='auto' textAlign='center' marginBottom='1rem'>
        Sub-Contractor to Pine Height Systems on Networking/Structured Cabling of an 8 Floor Luxury flat Building (96 Points) LAN Setup for Samsung Electronics Nigeria Ltd. At Admiralty way, Lekki Phase 1. Project Phase 1
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
                rewind: true,
                speed: 1
              }
            }}
            extensions={{ AutoScroll }}
            // style={{padding: '0 5rem'}}
          >
              {projects.map((project)=> (
                <SplideSlide key={project.id}>
                    <img src={project.img} style={{width: '400px', height: '350px'}} alt="Image 1" />
                </SplideSlide>
              ))}
        </Splide>
        </Box>
      <Box mt={4} sx={fancyBox2}>
        <Typography variant='subtitle1' fontWeight={700} textTransform='uppercase' maxWidth='80%' margin='auto' textAlign='center' marginBottom='1rem'>
        Sub-Contractor to Pine Height Systems on Networking/Structured Cabling of an 8 Floor Luxury flat Building (96 Points) LAN Setup for Samsung Electronics Nigeria Ltd. At Admiralty way, Lekki Phase 1. Project Phase 1
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
                rewind: true,
                speed: 1
              }
            }}
            extensions={{ AutoScroll }}
            // style={{padding: '0 5rem'}}
          >
              {project2.map((project)=> (
                <SplideSlide key={project.id}>
                    <img src={project.img} style={{width: '400px', height: '350px'}} alt="Image 1" />
                </SplideSlide>
              ))}
        </Splide>
        </Box>
    </Box>
    </>
  )
}

export default StructuredCabling