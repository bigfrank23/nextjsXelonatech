import { Box, Button, Grid, Typography } from '@mui/material'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import DnsIcon from '@mui/icons-material/Dns';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {v4 as uuidv4} from 'uuid'
import ContactBanner from '../components/contactBanner/ContactBanner';


const whoWeAreHeader = {
    height: "55vh !important",
    width: "100%", 
    padding: '7rem 10rem 1rem 10rem',
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: '3rem',
    background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url("/images/server-header.jpg")',
    backgroundPosition: 'center',
    backgroundSize: 'contain'
  }
  
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1rem', color: '#000' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    // flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(270deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    // borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));

  const items = [
    {
      id: uuidv4(),
      img: 'https://images.unsplash.com/photo-1506399309177-3b43e99fead2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1736&q=80',
      name: 'HP Notebook - 15-da2915nia',
      desc: 'Orbit™ is an aggressive, unidirectional presentation laser bar code scanner. Lightweight and rugged, Orbit is small in size but BIG in performance. Orbit is Honeywell’s first point-of-sale bar code scanner to incorporate holographic technology',
    },
    {
      id: uuidv4(),
      img: 'https://images.unsplash.com/photo-1597138804456-e7dca7f59d54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      name: 'HP Notebook - 15-da2915nia',
      desc: 'Orbit™ is an aggressive, unidirectional presentation laser bar code scanner. Lightweight and rugged, Orbit is small in size but BIG in performance. Orbit is Honeywell’s first point-of-sale bar code scanner to incorporate holographic technology',
    },
    {
      id: uuidv4(),
      img: 'https://images.unsplash.com/photo-1506399309177-3b43e99fead2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1736&q=80',
      name: 'HP Notebook - 15-da2915nia',
      desc: 'Orbit™ is an aggressive, unidirectional presentation laser bar code scanner. Lightweight and rugged, Orbit is small in size but BIG in performance. Orbit is Honeywell’s first point-of-sale bar code scanner to incorporate holographic technology',
    },
    {
      id: uuidv4(),
      img: 'https://images.unsplash.com/photo-1597138804456-e7dca7f59d54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      name: 'HP Notebook - 15-da2915nia',
      desc: 'Orbit™ is an aggressive, unidirectional presentation laser bar code scanner. Lightweight and rugged, Orbit is small in size but BIG in performance. Orbit is Honeywell’s first point-of-sale bar code scanner to incorporate holographic technology',
    },
    {
      id: uuidv4(),
      img: 'https://images.unsplash.com/photo-1506399309177-3b43e99fead2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1736&q=80',
      name: 'HP Notebook - 15-da2915nia',
      desc: 'Orbit™ is an aggressive, unidirectional presentation laser bar code scanner. Lightweight and rugged, Orbit is small in size but BIG in performance. Orbit is Honeywell’s first point-of-sale bar code scanner to incorporate holographic technology',
    },
    {
      id: uuidv4(),
      img: 'https://images.unsplash.com/photo-1597138804456-e7dca7f59d54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      name: 'HP Notebook - 15-da2915nia',
      desc: 'Orbit™ is an aggressive, unidirectional presentation laser bar code scanner. Lightweight and rugged, Orbit is small in size but BIG in performance. Orbit is Honeywell’s first point-of-sale bar code scanner to incorporate holographic technology',
    },
  ]

  const items2 = [
    {
      id: uuidv4(),
      p: 'While Server administrators work primarily with servers, our Server administrators also manage various other types of computing equipment that makes up part of the network. This includes Client PCs and Workstations, mobile devices and network appliances like routers and switches etc.'
    },
    {
      id: uuidv4(),
      p: 'In addition, our Server admins install, configure, and maintain various types of hardware and software, which often involves creating user accounts, carrying out backup and recovery functions, and monitoring the performance of servers at all times.'
    },
    {
      id: uuidv4(),
      p: 'They are primarily responsible for configuring, managing, and implementing operating systems.  Our Administrators are in charge of backups and retrieval of resources.  They administer and maintain system accounts through Active Directory and work with the IT team to design and deploy secure server processes.'
    },
    {
      id: uuidv4(),
      p: 'They take part in the design, architecture, implementation, and maintenance of technology projects. As IT equipment can sometimes malfunction, server administrators need to have the ability to troubleshoot hardware and software issues on servers and other related devices.'
    },
    {
      id: uuidv4(),
      p: "Our Server Administrators often work with other staff members in an organization to evaluate their technology needs, administer the network environment, set up workstations, create a database of the organization's IT policies and document them and help train staff on the use of new technologies."
    },
    {
      id: uuidv4(),
      p: "Elonatech's Server administrators have adequate knowledge of many types of server-based business applications. This includes tools made by some top names in the industry, such as VMWare and Oracle."
    },
    {
      id: uuidv4(),
      p: "As IT professionals, they also have to be on top of the latest developments in technology so that they can understand how to work with new hardware and software. They also recommend upgrades, modifications, and improvements."
    },
    {
      id: uuidv4(),
      p: "Although our Windows server administrators, Mac server administrators, and Unix/Linux server administrators, provide services for different operating systems, their tasks are very similar and related"
    },
  ]

const ServerAdmin = () => {
    const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
    <Box component='div' sx={whoWeAreHeader}>
        <Box sx={{textAlign: 'center'}}>
            <Typography variant='h4' color='#fff' mb='2rem'>Server Administration</Typography>
            <Typography variant='h5' color='#fff' mb='1rem'>Monitor, Configure and Maintain Servers to operate reliably and optimally</Typography>
            <Typography variant='body1' color="#fff">Minimizing downtimes while maximizing reliability in other to <br/> meet the needs of organizations over time.</Typography>
        </Box>
    </Box>
    <Box sx={{padding: '5rem 10rem 5rem 10rem', background: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Box sx={{display: 'flex', boxShadow: '10px 10px 10px 10px #bbb'}}>
            <Box sx={{padding: '1rem', border: '15 solid #34548c', flex: 1, background: '#34548c'}}>
                <img src="/images/server2.jpg" alt="" style={{width: '100%', height: '100%'}} />
            </Box>
            <Box sx={{padding: '3rem 4rem 4rem 4rem', flex: 1}} bgcolor='#34548c'>
                <Box sx={{textAlign: 'center', color: '#fff'}}> <RadioButtonUncheckedIcon /></Box>
                <Box sx={{textAlign: 'center', color: '#fff'}}>
                <Typography variant='h6' color='#fff'> Key Objectives of Server Administration </Typography>
                </Box>
                <Typography component='ul' sx={{m: 0, p: 0, listStyle: 'none', color: '#fff', marginTop: '1rem'}}>
                  <Typography component='li' sx={{display: 'flex', gap: '10px'}}> <DnsIcon sx={{alignSelf: 'start'}} /> <Typography>Minimize server slowdowns and downtime while maximizing reliability.</Typography></Typography>
                  <Typography component='li' sx={{display: 'flex', gap: '10px'}} my={2}> <DnsIcon sx={{alignSelf: 'start'}} /> <Typography>Secure and protect server environments.</Typography></Typography>
                  <Typography component='li' sx={{display: 'flex', gap: '10px'}}> <DnsIcon sx={{alignSelf: 'start'}} /> <Typography>Scale servers and related operations to meet the needs of the organization over time.</Typography></Typography>
                </Typography>
            </Box>
        </Box>
    </Box>

    
    <Box sx={{background: '#4a5568', padding: '5rem 10rem 5rem 10rem'}}>
      <Accordion sx={{p: 6, borderRadius: '1rem'}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          {
            expanded ? 
            <><VerifiedOutlinedIcon sx={{color: '#34548c', mr: 1}} />
            <Typography fontWeight={600} color='#34548c' textTransform='uppercase'>We ensure effective server Administration</Typography></>
             :
            <><VerifiedOutlinedIcon sx={{color: '#34548c', mr: 1}} />
            <Typography fontWeight={600} color='#34548c' textTransform='uppercase'>Great Reasons Why You Need a Server Administrator</Typography></>
          }
        </AccordionSummary>
        <AccordionDetails sx={{display: 'flex', gap: '32px'}}>
            <Box sx={{minWidth: '500px', minHeight: '400px', flex: 1, padding: '0 2rem'}}>
                <img loading='lazy' src="/images/serverAdmin1.jpg" style={{width: '100%', height: '90%', borderRadius: '10px'}} alt="" />
            </Box>
            <Box sx={{flex: 1}}>
                <Typography variant='h6' fontWeight={700} mb={1} textAlign='center'>Why You Need a Server Administrator</Typography>
              <Typography component='ul' sx={{listStyle: 'none', m: 0, p: 0}}>
                <Typography component='li' sx={{display: 'flex', gap: '10px', mb: 1}}>
                  <NetworkWifiIcon />
                  <Typography color='#4a5568' component='p' fontSize='14px'>
                  A Server Administrator is responsible for the computer servers of an organization. This individual ensures on a daily basis that they are running efficiently by performing upgrading and maintenance tasks on hardware and software, resolving technical problems, overseeing their activity levels, ensuring server security, and developing new system structures when necessary.
                  </Typography>
                </Typography>

                <Typography component='li' sx={{display: 'flex', gap: '10px', mb: 1}}>
                  <NetworkWifiIcon />
                  <Typography color='#4a5568' component='p' fontSize='14px'>
                  Also known as System Administrators, they manage both servers and networks to ensure their smooth functioning. They also keep track of data entering or exiting the organization to secure the networks. Because of the nature of this job, they need to be prepared to report to work round-the-clock.
                </Typography>
                </Typography>

                <Typography component='li' sx={{display: 'flex', gap: '10px', mb: 1}}>
                  <NetworkWifiIcon />
                  <Typography color='#4a5568' component='p' fontSize='14px'>
                  Administrators have excellent communication (written and oral) skills. They should be able to think analytically and be adept at problem-solving.
                  </Typography>
                </Typography>

                <Typography component='li' sx={{display: 'flex', gap: '10px'}}>
                  <NetworkWifiIcon />
                  <Typography color='#4a5568' component='p' fontSize='14px'>
                  Administrators are physically fit, as their job entails working outdoors, working at heights, lifting and relocating equipment, etc.  They are ready to work flexible hours.
                  </Typography>
                </Typography>

              </Typography>
            </Box>
        </AccordionDetails>
      </Accordion>
    </Box>

    <Box sx={{height: '450px', width: '100%'}}>
      <img src="/images/server-clip2.png" style={{width: '100%', height: '100%'}} alt="" />
    </Box>

    <Box sx={{padding: '5rem 10rem 5rem 10rem', background: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Box sx={{display: 'flex', boxShadow: '10px 10px 10px 10px #bbb'}}>
            <Box sx={{ border: '15px solid #34548c', flex: 1}} bgcolor='#34548c'>
                <img src="/images/server-clip.png" alt="" style={{width: '100%', height: '100%'}} />
            </Box>
            <Box sx={{padding: '4rem', borderRight: 'thin solid red', flex: 1, border: '15px solid #34548c'}}>
            <Box sx={{textAlign: 'center', color: '#555'}}> <RadioButtonUncheckedIcon /></Box>
                <Typography variant='body1' component='p' mb={1}>
                The overall impact of server management on IT is quite comprehensive, making its scope so broad that it covers nearly everything.
                </Typography>

                <Typography variant='body1' component='p'>
                Our Server Administration includes all of the monitoring and maintenance required for servers to operate 
                reliably and at optimal performance levels. Server administration also involves the management of hardware, software, security, and backups all in service of keeping the IT environment operational and efficient.
                </Typography>
            </Box>
        </Box>
    </Box>
    
    <Box component='section' sx={{padding: '2rem 10rem', background: '#fff'}}>
      <Box component='header'>
      <Typography variant='h4' textAlign='center' color='#34548c' textTransform='capitalize'>Why Choose Elonatech for your Server Administration</Typography>
      <hr className='m-auto my-3' style={{background: 'red', width: "50px", height: "2px"}} />
      </Box>
      {/* <Box component='main'> */}
        <Grid container spacing={2}>
            {items2.map((item, i)=> (
            <Grid item xs={12} sm={6} md={3} key={i}>
                <Box component='main' sx={{textAlign: 'left', boxShadow: '0px 5px 25px 0px dimgrey', padding: '1rem', height: 250, width: 'auto'}}>
                  <Box sx={{display: 'flex', justifyContent: 'center', mb: 1}}>
                    <img src='https://img.icons8.com/fluency/48/000000/server-shutdown.png' alt="" width={30} />
                  </Box>
                    <Typography variant='body1' fontSize='14px'>{item.p}</Typography>
                </Box>
            </Grid>
            ))}
        </Grid>
      {/* </Box> */}
    </Box>
    <Box sx={{display: 'flex', padding: '2rem 10rem 2rem 10rem', background: '#34548c'}}>
      <Box sx={{flex: 1, clipPath: '50% 10%, 79% 0, 100% 0, 100% 100%, 83% 100%, 50% 100%, 19% 100%, 0 100%, 0 0, 24% 0)'}}>
      <Box component='img' src="/images/server1.jpg" alt="" sx={{width: '100%', minHeight: '240px', transition: 'transform .25s ease', '&:hover': {transform: 'scale(1.1)'}}} />
      </Box>
      <Box sx={{flex: 1, clipPath: '50% 10%, 79% 0, 100% 0, 100% 100%, 83% 100%, 50% 100%, 19% 100%, 0 100%, 0 0, 24% 0)'}}>
      <Box component='img' src="/images/server-clip3.jpg" alt="" sx={{width: '100%', minHeight: '240px', transition: 'transform .25s ease', '&:hover': {transform: 'scale(1.1)'}}} />
      </Box>
      <Box sx={{flex: 1, clipPath: '50% 10%, 79% 0, 100% 0, 100% 100%, 83% 100%, 50% 100%, 19% 100%, 0 100%, 0 0, 24% 0)'}}>
        <Box component='img' src="/images/server-clip5.jpg" alt="" sx={{width: '100%', minHeight: '240px', transition: 'transform .25s ease', '&:hover': {transform: 'scale(1.1)'}}} />
      </Box>
    </Box>
        {/* <Box sx={{padding: '5rem 10rem 5rem 10rem', background: '#fff'}}>
        <Typography variant='h4' textAlign='center' color='#34548c' textTransform='capitalize'>Some of our recent completed projects</Typography>
          <hr className='m-auto my-3' style={{background: 'red', width: "50px", height: "2px"}} />
        <Carousel 
        responsive={responsive}
        containerClass="carousel-container"
        itemClass="px-3"
        autoPlay
        infinite
        autoPlaySpeed={3000}
        // customTransition="all .5"
        // transitionDuration={500}
        >
            {items.map((item)=> (
            <Box key={item.id}>
                <img src={item.img} width={400} alt="" />
            </Box>
            ))}
        </Carousel>;
        </Box> */}
        <Box>
          <ContactBanner />
        </Box>
    </>
  )
}

export default ServerAdmin