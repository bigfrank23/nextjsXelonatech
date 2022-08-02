import { Box, Button, Typography } from "@mui/material"
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import LaptopWindowsOutlinedIcon from '@mui/icons-material/LaptopWindowsOutlined';
import AnimatedText from 'react-animated-text-content';
import MovingComponent from 'react-moving-text'

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

  const linearBorder = {
    padding: '2rem',
    background: '#eee',
    border: '2px solid transparent',
    mozBorderImage: '-moz-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%)',
    webkitBorderImage: '-webkit-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%)',
    borderImage: 'linear-gradient(to bottom, #3acfd5 0%, #3a4ed5 100%)',
    borderImageSlice: 1,
  }

const Computers = () => {
  return (
    <>
    <Box component='div' sx={whoWeAreHeader}>
        <Box sx={{textAlign: 'center'}}>
        <Typography variant='h4' color='#fff' mb='2rem'>Computers</Typography>
        <Typography variant='h5' color='#fff' mb='1rem'>Excellence, Professionalism, Integrity & Convinient Service</Typography>
        <Typography variant='body1' color="#fff">Leading provider of innovative information technologies <br /> that improve the quality of lives</Typography>
        </Box>
    </Box>
    <Box sx={{background:'#fff', p: 6}}>
        <MovingComponent
        type="swing"
        duration="1000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="infinite"
        fillMode="none">
        <Typography variant="h3" mb="3" color="#34548c" textAlign='center'>Computers</Typography>
        <hr className='m-auto my-3' style={{background: 'red', width: "50px", height: "2px"}} />
        </MovingComponent>
        <Box sx={{display: 'flex', gap: '1rem'}}>
            <Box sx={linearBorder}>
                <Typography variant="h5" textAlign='center' color='darkred'><ComputerOutlinedIcon/></Typography>
                <AnimatedText
                type="words" // animate words or chars
                animation={{
                    x: '200px',
                    y: '-20px',
                    scale: 1.1,
                    ease: 'ease-in-out',
                }}
                animationType="float"
                interval={0.06}
                duration={0.8}
                tag="p"
                className="animated-paragraph"
                includeWhiteSpaces
                threshold={0.1}
                rootMargin="20%"
                style={{fontSize: '1.2rem', fontWeight: 500}}
                >
                {/* <Typography> */}
                Computer malfunctions can range from a minor setting that is incorrect, to spyware, viruses, 
                and as far as replacing hardware and an entire operating system. We provide on-site services, 
                usually at an agreed rate and also provide services off-site, where the client can drop their 
                computers and other devices off at the repair shop. We also handle pickup and drop off services 
                for convenience. Our technicians may also take back old equipment for recycling.
                {/* </Typography> */}
                </AnimatedText>
            </Box>
            <Box sx={linearBorder}>
            <Typography variant="h5" textAlign='center' color='darkred'><LaptopMacIcon/></Typography>
            <AnimatedText
                type="words" // animate words or chars
                animation={{
                    x: '200px',
                    y: '-20px',
                    scale: 1.1,
                    ease: 'ease-in-out',
                }}
                animationType="float"
                interval={0.06}
                duration={0.8}
                tag="p"
                className="animated-paragraph"
                includeWhiteSpaces
                threshold={0.1}
                rootMargin="20%"
                style={{fontSize: '1.2rem', fontWeight: 500}}
                >
                    {/* <Typography> */}
                    We do all kinds of laptop, desktop and server repair of all makes and models, 
                    including Windows, Apples (Mac) and Linux computers. We do virus removal without 
                    reformatting so you don&apos;t lose your important files or photos. We repair both 
                    hardware and software. We have no queue so come any time and we&apos;ll start fixing 
                    your computer right away. We offer Pick-up, Walk-in, On-Premise, and Remote Support 
                    repair services.
                    {/* </Typography> */}
                </AnimatedText>
            </Box>
            <Box sx={linearBorder}>
            <Typography variant="h5" textAlign='center' color='darkred'><LaptopWindowsOutlinedIcon/></Typography>
            <AnimatedText
                type="words" // animate words or chars
                animation={{
                    x: '200px',
                    y: '-20px',
                    scale: 1.1,
                    ease: 'ease-in-out',
                }}
                animationType="float"
                interval={0.06}
                duration={0.8}
                tag="p"
                className="animated-paragraph"
                includeWhiteSpaces
                threshold={0.1}
                rootMargin="20%"
                style={{fontSize: '1.2rem', fontWeight: 500}}
                >
                    {/* <Typography> */}
                    If you require friendly, expert staff and to have your computer running better than ever, 
                    come to our computer repair lab at Elonatech or give us a call.
                    For specialized hardware services, we have highly skilled full-time computer hardware techs 
                    who can fix all types of hardware problems including power jacks, keyboards, screens, fans, 
                    overheating issues, liquid spills, soldering jobs, loose cabling, and, sometimes, if financially 
                    feasible, motherboards and discrete video cards.
                    {/* </Typography> */}
                </AnimatedText>
            </Box>

        </Box>
    </Box>
    <Box component='div' sx={{display: 'flex', background: '#f3e2eff7', paddingLeft: '2rem', paddingRight: '2rem'}}>
        <Box sx={{flex: '1', p: 6}}>
            <Box><img style={{width: '50%', height: '50%'}} src="https://images.unsplash.com/photo-1598986646512-9330bcc4c0dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" /></Box>
            <Box sx={{display: 'flex', justifyContent: 'end'}}><img style={{width: '50%', height: '50%'}} src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" /></Box>
        </Box>
        <Box sx={{flex: '1', p: 6}}>
            <Typography variant="subtitle1" color='#34548c'>Excellence, Professionalism, Integrity & Convinient Service</Typography>
            <Typography variant="h3" fontWeight={600} my={3}>Because your business works when your hardware works.</Typography>
            <Typography component='p' variant="h6" mb={2}>While computer hardware configurations vary widely, we work on five general categories of hardware; Client & Server Computer Systems (Desktops & Laptops); Printers, Scanners & Copiers; Smartphones & Tabs; Networking equipment; and Media devices/equipment</Typography>
            {/* <Typography variant="subtitle1">Lorem, ipsum.</Typography> */}
        </Box>
    </Box>
    <Box component='div' sx={{display: 'flex', background: '#ccc', paddingLeft: '2rem', paddingRight: '2rem'}}>
        <Box sx={{flex: '1', p: 6}}>
            <Typography variant="subtitle1" color='#fff'>Excellence, Professionalism, Integrity & Convinient Service</Typography>
            <Typography variant="h3" fontWeight={600} my={3}>Desktop and Laptop PCs</Typography>
            <Typography component='p' variant="h6" mb={2}>We offer a full range of system repair, data recovery, malware removal, software installation and configuration, help desk, and IT services for both residential and business clients. We work with all types of Apple and Windows laptops and desktops.</Typography>
            {/* <Typography variant="subtitle1">Lorem, ipsum.</Typography> */}
        </Box>
        <Box sx={{flex: '1', p: 6}}>
            <Box sx={{display: 'flex', justifyContent: 'end'}}><img style={{width: '50%', height: '50%'}} src="https://images.unsplash.com/photo-1597673030062-0a0f1a801a31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1296&q=80" alt="" /></Box>
            <Box ><img style={{width: '50%', height: '50%'}} src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" /></Box>
        </Box>
    </Box>
    <Box sx={{display: 'flex', justifyContent: 'center', alignItem: 'center', background: '#34548c', p: 3, mt: 3}}>
        <Box sx={{background: 'linear-gradient(30deg,rgba(255, 255, 255, .5),rgba(255, 255, 255, .5)),url("https://images.unsplash.com/photo-1515595967223-f9fa59af5a3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")', backgroundPosition: 'center', backgroundSize: 'cover', padding: '2rem 3rem', display: 'flex', flexDirection: 'column', borderRadius: '5px'}}>
            <img src="/logoAndIcons/blackLogo.png" width={30} alt="black-logo" style={{alignSelf: 'center'}} />
            <Typography variant="h6" component='span' fontWeight={600} my={2} color='#34548c'>Seeking For More Information?</Typography>
            <Button variant="contained" color="error" endIcon={<ContactPhoneOutlinedIcon/>}>Contact us now</Button>
        </Box>
    </Box>
    </>
  )
}

export default Computers