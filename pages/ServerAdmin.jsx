import { Box, Button, Typography } from '@mui/material'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {v4 as uuidv4} from 'uuid'


const whoWeAreHeader = {
    height: "55vh !important",
    width: "100%", 
    padding: '7rem 10rem 1rem 10rem',
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: '3rem',
    background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)),url("https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")',
    backgroundPosition: 'bottom'
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
            <Typography variant='h5' color='#fff' mb='1rem'>Excellence, Professionalism, Integrity & Convinient Service</Typography>
            <Typography variant='body1' color="#fff">Leading provider of innovative information technologies <br /> that improve the quality of lives</Typography>
        </Box>
    </Box>
    <Box sx={{padding: '5rem 10rem 5rem 10rem', background: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Box sx={{display: 'flex', boxShadow: '10px 10px 10px 10px #bbb'}}>
            <Box sx={{padding: '4rem', borderLeft: 'thin solid red'}}>
                <Typography variant='body2' component='span'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad doloremque tempore dolore illum quis numquam voluptates fuga sapiente ex suscipit repellat odio, repellendus eos, inventore aliquid obcaecati voluptatem aliquam deserunt!   
                </Typography>
            </Box>
            <Box sx={{padding: '3rem 4rem 4rem 4rem'}} bgcolor='#34548c'>
                <Box sx={{textAlign: 'center', color: '#fff'}}> <RadioButtonUncheckedIcon /> </Box>
                <Typography variant='body2' component='span' color='#fff'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad doloremque tempore dolore illum quis numquam voluptates fuga sapiente ex suscipit repellat odio, repellendus eos, inventore aliquid obcaecati voluptatem aliquam deserunt!   
                </Typography>
            </Box>
        </Box>
    </Box>
    <Box sx={{background: '#4a5568', padding: '5rem 10rem 5rem 10rem'}}>
      <Accordion sx={{p: 6, borderRadius: '1rem'}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <VerifiedOutlinedIcon sx={{color: '#34548c', mr: 1}} />
          <Typography fontWeight={600} color='#34548c' textTransform='uppercase'>Lorem ipsum dolor sit amet.</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{display: 'flex', gap: '32px'}}>
            <Box sx={{maxWidth: '500px', maxHeight: '400px'}}>
                <img loading='lazy' src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80" style={{width: '100%', borderRadius: '10px'}} alt="" />
            </Box>
            <Box>
                <Typography variant='body1' fontWeight={700} mb={1}>Lorem ipsum dolor sit.</Typography>
                <Typography color='#4a5568'>
                The choice of domain name depends on how you plan to use it. In most cases, 
                it makes sense to choose one that is easy to pronounce and spell if you will be telling people about it over the phone. 
                Above all, you should choose a name that is memorable and not confusing.
                </Typography>
            </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
        <Box sx={{padding: '5rem 10rem 5rem 10rem', background: '#fff'}}>
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
        </Box>
    </>
  )
}

export default ServerAdmin