import { Backdrop, Box, Button, Card, CardActions, CardContent, CardMedia, Fade, Grid, Modal, Typography } from '@mui/material'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import {v4 as uuidv4} from 'uuid'
import Head from 'next/head'
import React, { useState } from 'react'


const whoWeAreHeader = {
    height: "50vh !important",
    width: "100%", 
    padding: '5rem',
    display: 'flex', 
    // flexDirection: "column", 
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: '3rem',
    background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url("/images/system-integration.jpg")',
    backgroundPosition: 'bottom',
    backgroundSize: '90% 100%',
  }

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: { xs: 'block', sm: 'block', md: 'flex' },
    flexDirection: 'column',
    gap: '3rem',
    // width: 400,
    height: '80vh',
    overflow: 'auto',
    bgcolor: 'background.paper',
    outline: 0,
    boxShadow: 24,
    p: 4,
  };

  const left = {
    flex: 2,
    width: {xs: "200px", sm: "200px", md: "350px", lg: "100%"}
  }
  
  const right = {
    flex: 1
  }
  

const SystemIntegration = () => {
    const [open, setOpen] = useState(false);
    const [modalData, setModalData] = useState("");

    const items = [
      {
        id: uuidv4(),
        img: '/images/infrastructure-card3.jpg',
        h6: 'Facilities',
        p: 'The physical data centers, housing IT equipment, and necessary power, cooling, and security components.'
      },
      {
        id: uuidv4(),
        img: '/images/infrastructure-card.jpg',
        h6: 'Network',
        p: 'Routers, switches, firewalls, and load balancers.'
      },
      {
        id: uuidv4(),
        img: '/images/infrastructure-card2.jpg',
        h6: 'Storage',
        p: 'Data storage systems, such as network-attached storage (NAS) and storage area networks (SAN).'
      },
      {
        id: uuidv4(),
        img: '/images/infrastructure-card4.png',
        h6: 'Servers',
        p: 'Physical and virtual servers for both on-site and virtual data centers.'
      },
    ]

    const handleOpen = (item) => {
        setOpen(true)
        setModalData(item)
      };
      const handleClose = () => setOpen(false);
  return (
    <>
    <Head>
      {/* <meta name="viewport" content="width=device-width,initial-scale=1"/> */}
        <title>Infrastructure & System Integration</title>
        <meta name="description" content="Elonatech Nigeria Limited - Infrastructure & System Integration Page" />
        <link rel="icon" href="/elona-icon.png" />
    </Head>
    <Box component='div' sx={whoWeAreHeader}>
        <Box sx={{flex: 1}}>
        <Typography variant='h4' color='#fff'>Infrastructure & System Integration</Typography>
        <Typography variant='h5' color='#fff' my={2}>Building intelligence system to better your business&apos; efficiency and profit</Typography>
        <Typography variant='body1' color='#fff' mb={2}>Integrating existing, and often disparate systems in a way that focuses on increasing values</Typography>
        {/* <Typography variant='body1' color="#fff" my={2}>Leading provider of innovative information technologies <br /> that improve the quality of lives</Typography> */}
        {/* <Button color='primary' variant='contained'>Contact Us</Button> */}
        </Box>
        <Box sx={{textAlign: 'center', flex: 1, alignSelf: 'baseline', display: 'flex'}}>
            <img src="/images/system-integration2.png" alt="" style={{width: '300px', height: '80%', objectFit: 'contain', marginLeft: '12rem'}}/>
            <img src="/images/system-integration3.png" alt="" style={{width: '300px', height: '80%', objectFit: 'contain'}}/>
        </Box>
    </Box>
    <Box
        component='main'
        sx={{
            bgcolor: '#fff',
            padding: '5rem 10rem 5rem 10rem',
          display: 'grid',
        //   gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 1,
        //   gridTemplateRows: 'auto',
          gridTemplateAreas: `
        "sidebar sidebar main main"
        "sidebar sidebar footer footer"`,
        }}
      >
        <Box component='section' sx={{ gridArea: 'sidebar', padding: '2rem 4rem 4rem 4rem', bgcolor: '#fff', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px', boxShadow: '-15px 10px 70px 10px #aaa' }}>
            <Box component='img' src='/images/infrastructure2.png' sx={{width: '100%'}} />
        </Box>
        <Box component='section' sx={{ gridArea: 'main', background: 'linear-gradient(90deg, rgba(52,84,140,1) 0%, rgba(52,84,140,1) 36%, rgba(195,195,195,1) 98%)', padding: '2rem', color: '#fff', borderTopRightRadius: '10px' }}>
          <Box display='flex' justifyContent='center'>
          <CircleOutlinedIcon />
          <CircleOutlinedIcon />
          <CircleOutlinedIcon />
          </Box>
            <Typography variant='body2'>Information technology (IT) Infrastructure is built upon both physical and virtual components. These components support the infrastructure’s operations, storage, processing of data, and data analysis.</Typography>
            <Typography variant='body2' my={1}>Infrastructure can be centralized in a data center or spread across multiple data centers. These decentralized data centers can be controlled by the organization (owner) or by a third-party, such as a cloud provider or a colocation facility.</Typography>
        </Box>
        <Box component='section' sx={{ gridArea: 'footer', background: 'linear-gradient(90deg, rgba(52,84,140,1) 0%, rgba(52,84,140,1) 36%, rgba(195,195,195,1) 98%)', padding: '2rem', color: '#fff', borderBottomRightRadius: '10px' }}>
            <Typography variant='body2'><b>System Integration</b> is the process of integrating all the physical and virtual components of an organization’s system. It therefore includes the process of linking together different computing systems and software applications physically or functionally, to act as a coordinated whole.</Typography>
            <Typography variant='body2' my={1}>The physical components consist of the various machine systems, computer hardware, inventory, etc. The virtual components consist of data stored in databases, software and applications.</Typography>
        </Box>
    </Box>
    <Box component='section' sx={{background: '#fff'}}>
    <Typography variant='h4' textAlign='center' color='#34548c' textTransform='capitalize'>Breakdown of an IT Infrastructure</Typography>
      <hr className='m-auto mt-2' style={{background: 'red', width: "50px", height: "2px"}} />
    </Box>
    <Box component='section' sx={{padding: '2rem 10rem 2rem 10rem', background: '#34548c'}}>
        <Grid container spacing={2}>
        {items.map((v, i)=> (
            <Grid item xs={12} sm={6} md={3} key={i}>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="245"
                image={v.img}
                alt=""
            />
            <CardContent>
                <Typography gutterBottom variant="h6" textAlign='center' textTransform='uppercase' component="div">
                    {v.h6}
                </Typography>
            </CardContent>
            <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
                {/* <Button size="small">Share</Button> */}
                <Button size="small" onClick={()=>handleOpen(v)}>Learn More</Button>
            </CardActions>
            </Card>
        </Grid>
        ))}
        </Grid>
        <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
            <Box component='div' sx={modalStyle}>
              <Card sx={left}>
              <CardMedia
               component='img'
               alt={modalData.name}
               image={modalData.img}
              />
              </Card>
              <Box sx={right}>
                <Typography id="spring-modal-title" variant="h6" component="h2">
                  {modalData.h6}
                </Typography>
                {/* <Typography id="spring-modal-title" variant="caption" color='red' component="h2">
                  Lorem, ipsum dolor.
                </Typography> */}
                <Typography id="spring-modal-description" variant='body2' sx={{ mt: 2 }}>
                    {modalData.p}
                </Typography>
              </Box>
            </Box>
        </Fade>
      </Modal>
    </Box>
    <Box component='section' sx={{padding: '2rem 10rem 2rem 10rem', color: '#fff', background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),url(/images/SystemsIntegrationBanner.jpg)'}}>
    <Typography variant='h4' textAlign='center' color='#fff' textTransform='capitalize'>
    Why You Need a System Integrator?
    </Typography>
      <hr className='m-auto mt-2' style={{background: 'red', width: "50px", height: "2px"}} />
      <Box sx={{display: 'flex', justifyContent: 'center', gap: '2rem', height: '420px'}}>
        <Box sx={{flex: 1, p: 2}}>
        <Box component='img' src='/images/si.jpg' sx={{width: '100%', height: '100%', objectFit: 'contain'}} />
        </Box>
        <Box sx={{maxWidth: '50%', mt: 5, flex: 1, p: 2}}>
          <Typography variant='h6' mb={4}>
          In this modern world connected by the Internet, the role of system integration engineers is important as more and more systems are designed to connect, both within the system under construction and to systems that are already deployed.
          </Typography>
          <Typography variant='h6'>
          System Integrators integrates discrete systems utilizing a variety of techniques such as computer networking, enterprise application integration, business process management or manual programming.
          </Typography>
        </Box>
      </Box>
    </Box>

    <Box sx={{display: 'flex', justifyContent: 'center', gap: '5rem', background: '#fff', color: '#34548c', padding: '2rem 10rem 2rem 10rem'}}>
      <Box sx={{flex: 2}}>
      <Typography variant='h6' fontWeight={600} mb={2} sx={{'&::first-letter': {fontSize: '30px'}, textAlign: 'center'}}>Our System Integration Scope:</Typography>
      <Box sx={{display: 'flex'}}>
        <Box component='ul' sx={{listStyle: 'none'}}>
          <Box component='li' sx={{display: 'flex', gap: '10px', border: '2px dotted red', p: 2}}>
            <RadioButtonCheckedIcon />
            <Typography>Analysis and design of IT platforms.</Typography>
          </Box>
          <Box component='li' sx={{display: 'flex', gap: '10px', border: '2px dotted red', p: 2}}>
            <RadioButtonCheckedIcon />
            <Typography>Implementation and migration of IT solutions.</Typography>
          </Box>
          <Box component='li' sx={{display: 'flex', gap: '10px', border: '2px dotted red', p: 2}}>
            <RadioButtonCheckedIcon />
            <Typography>Supply of equipment and software.</Typography>
          </Box>
          <Box component='li' sx={{display: 'flex', gap: '10px', border: '2px dotted red', p: 2}}>
            <RadioButtonCheckedIcon />
            <Typography>Virtualization of physical environments.</Typography>
          </Box>
          <Box component='li' sx={{display: 'flex', gap: '10px', border: '2px dotted red', p: 2}}>
            <RadioButtonCheckedIcon />
            <Typography>Consulting services in the field of business process integration.</Typography>
          </Box>
          <Box component='li' sx={{display: 'flex', gap: '10px', border: '2px dotted red', p: 2}}>
            <RadioButtonCheckedIcon />
            <Typography>Cloud Migration.</Typography>
          </Box>
        </Box>

        <Box component='ul' sx={{listStyle: 'none'}}>
        <Box component='li' sx={{display: 'flex', gap: '10px', border: '2px dotted red', p: 2}}>
        <RadioButtonCheckedIcon />
        <Typography>High Availability Solutions.</Typography>
        </Box>
        <Box component='li' sx={{display: 'flex', gap: '10px', border: '2px dotted red', p: 2}}>
          <RadioButtonCheckedIcon />
          <Typography>Building Data Lake.</Typography>
        </Box>
        <Box component='li' sx={{display: 'flex', gap: '10px', border: '2px dotted red', p: 2}}>
          <RadioButtonCheckedIcon />
          <Typography>Building Business Intelligence..</Typography>
        </Box>
        <Box component='li' sx={{display: 'flex', gap: '10px', border: '2px dotted red', p: 2}}>
          <RadioButtonCheckedIcon />
          <Typography>Incorporation solution with Artificial Intelligence Engine.</Typography>
        </Box>
        <Box component='li' sx={{display: 'flex', gap: '10px', border: '2px dotted red', p: 2}}>
          <RadioButtonCheckedIcon />
          <Typography>Implementation and post-implementation support.</Typography>
        </Box>
        </Box>
      </Box>
      </Box>

    <Box component='ul' sx={{listStyle: 'none', flex: 1}}>
    <Typography variant='h6' fontWeight={600} mb={2} sx={{'&::first-letter': {fontSize: '30px'}}}>
    Building an IT Infrastructure
    </Typography>
    <Typography variant='body1' mb={1}>
    With the expertise of our IT professionals, businesses can create a data center infrastructure by following a process that involves:
    </Typography>
      <Box component='li' sx={{display: 'flex', gap: '10px', border: '2px dotted red', p: 2}}>
        <RadioButtonCheckedIcon />
        <Typography>Analyzing the business' goals</Typography>
      </Box>
      <Box component='li' sx={{display: 'flex', gap: '10px', border: '2px dotted red', p: 2}}>
        <RadioButtonCheckedIcon />
        <Typography>Deciding on the architecture and design</Typography>
      </Box>
      <Box component='li' sx={{display: 'flex', gap: '10px', border: '2px dotted red', p: 2}}>
        <RadioButtonCheckedIcon />
        <Typography>The Infrastructure optimization and maintenance.</Typography>
      </Box>
    </Box>
    </Box>
    </>
  )
}

export default SystemIntegration