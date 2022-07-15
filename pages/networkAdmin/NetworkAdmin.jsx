import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { v4 as uuidv4 } from "uuid";
import AnimatedText from 'react-animated-text-content';
import MovingComponent from 'react-moving-text'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import VerifiedTwoToneIcon from '@mui/icons-material/VerifiedTwoTone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

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
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "saturate(200%) blur(30px)",
    boxShadow: "rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem",
}

const data = [
  {
    id: uuidv4(),
    img: "/logoAndIcons/internet.png",
    icon: "RadioButtonCheckedIcon",
    txt: 'Design, installation, and evaluation of the network'
  },
  {
    id: uuidv4(),
    img: "/logoAndIcons/internet.png",
    txt: 'Execution and administration of regular backups'
  },
  {
    id: uuidv4(),
    img: "/logoAndIcons/internet.png",
    txt: 'Creation of precise technical documentation, such as network diagrams, network cabling documents, etc.'
  },
  {
    id: uuidv4(),
    img: "/logoAndIcons/internet.png",
    txt: 'Provision for precise authentication to access network resources'
  },
  {
    id: uuidv4(),
    img: "/logoAndIcons/internet.png",
    txt: 'Provision for troubleshooting assistance'
  },
  {
    id: uuidv4(),
    img: "/logoAndIcons/internet.png",
    txt: 'Administration of network security, including intrusion detection'
  },
  {
    id: uuidv4(),
    img: "/logoAndIcons/internet.png",
    txt: 'Configuring network hardware like servers, routers, and switches'
  },
  {
    id: uuidv4(),
    img: "/logoAndIcons/internet.png",
    txt: 'Upgrading and repairing computer networks'
  },
  {
    id: uuidv4(),
    img: "/logoAndIcons/internet.png",
    txt: 'Troubleshooting network issues'
  },
  {
    id: uuidv4(),
    img: "/logoAndIcons/internet.png",
    txt: 'Assisting network architects with the design of network models'
  },
  {
    id: uuidv4(),
    img: "/logoAndIcons/internet.png",
    txt: 'Implementing security measures and basic testing'
  },
  {
    id: uuidv4(),
    img: "/logoAndIcons/internet.png",
    txt: 'Deploying and updating software'
  },
  {
    id: uuidv4(),
    img: "/logoAndIcons/internet.png",
    txt: 'Managing servers and their operating systems'
  },
  {
    id: uuidv4(),
    img: "/logoAndIcons/internet.png",
    txt: 'Managing cloud and physical network storage'
  },
  {
    id: uuidv4(),
    img: "/logoAndIcons/internet.png",
    txt: 'LAN and WAN network setup (Cable and Wireless).'
  },
  {
    id: uuidv4(),
    img: "/logoAndIcons/internet.png",
    txt: 'Configurations on managed switches and Cisco Routers'
  },
]

const NetworkAdmin = () => {
  return (
    <>
        <div style={{background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url("https://images.unsplash.com/photo-1655635643568-f30d5abc618a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80) center top / cover transparent', width: "100%", height: "75vh", display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center', gap: '3rem'}}>
          <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <LocationOnIcon sx={{fontSize:'2rem', color: 'red', alignSelf: 'center'}}/>
            <Typography variant='body1' color='#fff'>Network Administration / Implementation</Typography>
          </Box>
          <Box sx={{width: '50%'}}>
            <Typography variant='h4' color="#fff">This involves a wide array of operational tasks that help a network to run smoothly and efficiently.</Typography>
            <Typography variant='subtitle1' color="#fff" sx={{mt: '1rem'}}>It consists of operations ranging from the regulars such as the physical configuration of the computer systems network (wired/wireless), to structured cabling, infrastructure/system integration, and to the setup and installing of the servers, and the configuration of routers and switches.</Typography>
          </Box>
        </div>
        <Box sx={fancyBox}>
        <MovingComponent
        type="shadow"
        duration="1000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none">
          <Typography component='' variant='h4' mb={6} maxWidth={800} m='auto' color='#34548c'>
            The main tasks associated with network administration
            includes:
          </Typography>
      </MovingComponent>
          <Grid container rowGap={10} mt={5} paddingLeft={5} paddingRight={5}>
            {data.map((item)=> (
              <Grid item key={item.id} xs={12} sm={4} md={4}>
                <Box sx={{p: 2, height: '100px', textAlign: 'center', transition: 'color .5s ease', '&:hover': {color: "#34548c"}}}>
                  {/* <i class={item.icon} aria-hidden="true"></i> */}
                  {/* <RadioButtonCheckedIcon /> */}
                  <VerifiedTwoToneIcon sx={{fontSize: '2rem', '&:hover': {color: "blueviolet"}}} />
                  {/* <img src={item.img} width={50} alt="" /> */}
                <AnimatedText
                  type="words" // animate words or chars
                  animation={{
                    x: '200px',
                    y: '-20px',
                    scale: 1.1,
                    ease: 'ease-in-out',
                  }}
                  animationType="light"
                  interval={0.06}
                  duration={0.8}
                  tag="p"
                  className="animated-paragraph"
                  includeWhiteSpaces
                  threshold={0.1}
                  rootMargin="20%"
                  style={{padding: "1rem 2rem 2rem 2rem", fontSize: "1.2rem"}}
                >
                  {/* <Typography variant='body2'> */}
                    {item.txt}
                  {/* </Typography> */}
                </AnimatedText>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box mb={5}>
          <Box sx={{display: "flex", height: "350px"}}>
            <Box sx={{flex: 1, width: '500px'}}>
              <img src="https://images.unsplash.com/photo-1655635643617-72e0b62b9278?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="" style={{width: "100%", height: "100%"}} />
            </Box>
            <Box sx={{flex: 1, background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")', backgroundPosition: '100% -60%', backgroundAttachment: "fixed", display: 'grid', placeItems: 'center'}}>
            <Typography variant='h6' textAlign='center' mt= {4} color="#fff" fontWeight={700}>WHY DO I NEED A NETWORK ADMINISTRATOR?</Typography>
              <Typography variant='body1' color="#fff" p={6}>
              Every organization that uses more than one computer or software platform needs a network administrator to coordinate and connect all the different systems; Configure network hardware such as servers, routers, and switches; Upgrade, repair, and maintain computer networks; and troubleshoot various network issues.
              Sharing resources and information among different computer systems within departments and accessing information from a database is essential for fast and efficient running of a company’s business and day-to-day activities. At ELONATECH, we implement and design both complex and simple data/voice local area networks for all types of organizations/institutions.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box>
          <Typography variant='h4' textAlign='center'>Projects</Typography>
        </Box>
    </>
  )
}

export default NetworkAdmin