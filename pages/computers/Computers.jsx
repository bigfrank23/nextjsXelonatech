import { Box, Button, Typography } from "@mui/material"
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import AdjustIcon from '@mui/icons-material/Adjust';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import LaptopWindowsOutlinedIcon from '@mui/icons-material/LaptopWindowsOutlined';
import AnimatedText from 'react-animated-text-content';
import MovingComponent from 'react-moving-text'
import ContactBanner from "../../components/contactBanner/ContactBanner";


const whoWeAreHeader = {
    height: "50vh !important",
    width: "100%", 
    padding: '5rem',
    display: 'flex', 
    flexDirection: "column", 
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: '1rem',
    background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url("/images/computerHeader.jpg")',
    backgroundSize: '100% 130%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '100% 100%'
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
    <Box component='header' sx={whoWeAreHeader}>
        <Box sx={{textAlign: 'center'}}>
        <Typography variant='h4' color='#fff'>Computer Engineering</Typography>
        <Typography variant='h5' color='#fff'>Because your business works when your hardware works.</Typography>
        </Box>
        <Box>
            <Typography variant='body1' fontWeight={600} color="#fff"> While computer hardware configurations vary widely, we work on a broad range of hardware systems:  </Typography>
            <Box component='ul' color="#fff" sx={{m: 0, p: 0, listStyle: 'none', display: 'flex', gap: '2rem'}}>
                <Box component='li' color="#fff"> <AdjustIcon /> Client Computer Systems (Desktop & Laptop PCs)</Box>
                <Box component='li' color="#fff"> <AdjustIcon /> Servers & Workstations</Box>
            </Box>
        </Box>
    </Box>
    <Box component='section' sx={{display: 'flex', background: '#fff', padding: '4rem 2rem 2rem 2rem'}}>
        <Box sx={{flex: 1, display: 'flex', justifyContent: 'center'}}><img src="/images/computer-repair2.jpg" alt="" style={{width: '80%', borderRadius: '10px', boxShadow: '10px 2px 10px 8px blueviolet'}} /></Box>
        <Box  sx={{flex: 1, padding: '2rem'}}>
            <Typography variant="h6">
            For specialized hardware services, we have highly skilled full-time computer hardware techs who can fix all types of hardware problems including power jacks, keyboards, screens, fans, overheating issues, liquid spills, soldering jobs, loose cabling, and replacement of motherboards and discrete video cards.
            </Typography>
            <Box mt={1}>
            <Typography variant='h6'> While computer hardware configurations vary widely, we work on a broad range of hardware systems:  </Typography>
            <Box component='ul'  sx={{m: 0, p: 0, listStyle: 'none'}}>
                <Box component='li' sx={{display: 'flex'}}> <AdjustIcon sx={{alignSelf: 'center'}} /> <Typography variant="h6"> Client Computer Systems (Desktop & Laptop PCs)</Typography></Box>
                <Box component='li' sx={{display: 'flex'}}> <AdjustIcon sx={{alignSelf: 'center'}} /> <Typography variant="h6"> Servers & Workstations</Typography></Box>
            </Box>
        </Box>
        </Box>
    </Box>
    <Box component='section' sx={{display: 'flex', background: '#ccc', paddingLeft: '2rem', paddingRight: '2rem'}}>
        <Box sx={{flex: '1', p: 6}}>
            {/* <Typography variant="subtitle1" color='#fff'>Excellence, Professionalism, Integrity & Convinient Service</Typography> */}
            <Typography variant="h3" fontWeight={600} my={3}>Desktop and Laptop PCs</Typography>
            <Typography component='p' variant="h6" mb={2}>
            We offer all kinds of laptop, desktop and server repairs of all makes and models, including Windows, Mac and Linux computers.
            We do virus removal without reformatting so you don&apos;t lose your important files or photos. We repair both hardware and software. We have no queue so come any time and we&apos;ll start fixing your computer right away.
            </Typography>
            {/* <Typography variant="subtitle1">Lorem, ipsum.</Typography> */}
        </Box>
        <Box sx={{flex: '1', p: 6}}>
            <Box sx={{display: 'flex', justifyContent: 'end'}}><img style={{width: '50%', height: '50%'}} src="/images/desktop-cmputers.png" alt="" /></Box>
            <Box ><img style={{width: '50%', height: '50%'}} src="/images/best-laptop-small.jpg" alt="" /></Box>
        </Box>
    </Box>
    <Box component='div' sx={{display: 'flex', background: '#f3e2eff7', paddingLeft: '2rem', paddingRight: '2rem'}}>
        <Box sx={{flex: '1', p: 6}}>
            {/* <Box><img style={{width: '50%', height: '50%'}} src="https://images.unsplash.com/photo-1598986646512-9330bcc4c0dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" /></Box> */}
            <Box><img style={{width: '50%', height: '50%'}} src="/images/computer-repair.jpg" alt="" /></Box>
            <Box sx={{display: 'flex', justifyContent: 'end'}}><img style={{width: '50%', height: '50%'}} src="/images/computer-engineering.jpg" alt="" /></Box>
        </Box>
        <Box sx={{flex: '1', p: 6}}>
            {/* <Typography variant="subtitle1" color='#34548c'>Excellence, Professionalism, Integrity & Convinient Service</Typography> */}
            <Typography variant="h3" fontWeight={600} my={3}>We offer 4 Convenient Computer Repair Options
            </Typography>
            <Box component='ul' mb={2} sx={{m: 0, p: 0, listStyle: 'none'}}>
                <Box component='li' sx={{display: 'flex', gap: '1rem', '&:hover': {color: 'red'}}}> <CheckBoxOutlinedIcon /> <Typography variant="h6">Pick-up and Return</Typography></Box>
                <Box component='li' sx={{display: 'flex', gap: '1rem', '&:hover': {color: 'red'}}}> <CheckBoxOutlinedIcon /> <Typography variant="h6">Onsite Repair</Typography></Box>
                <Box component='li' sx={{display: 'flex', gap: '1rem', '&:hover': {color: 'red'}}}> <CheckBoxOutlinedIcon /> <Typography variant="h6">Walk-in and Repair</Typography></Box>
                <Box component='li' sx={{display: 'flex', gap: '1rem', '&:hover': {color: 'red'}}}> <CheckBoxOutlinedIcon /> <Typography variant="h6">Remote Support</Typography></Box>
            </Box>
            <Typography component='p' variant="h6" color='#34548c' fontWeight={600} mt={2}>If you require friendly, expert staff and to have your computer running better than ever, come to our computer repair workshop or give us a call.</Typography>
            {/* <Typography variant="subtitle1">Lorem, ipsum.</Typography> */}
        </Box>
    </Box>
    {/* <Box sx={{display: 'flex', justifyContent: 'center', alignItem: 'center', background: '#34548c', p: 3, mt: 3}}>
        <Box sx={{background: 'linear-gradient(30deg,rgba(255, 255, 255, .5),rgba(255, 255, 255, .5)),url("https://images.unsplash.com/photo-1515595967223-f9fa59af5a3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")', backgroundPosition: 'center', backgroundSize: 'cover', padding: '2rem 3rem', display: 'flex', flexDirection: 'column', borderRadius: '5px'}}>
            <img src="/logoAndIcons/blackLogo.png" width={30} alt="black-logo" style={{alignSelf: 'center'}} />
            <Typography variant="h6" component='span' fontWeight={600} my={2} color='#34548c'>Seeking For More Information?</Typography>
            <Button variant="contained" color="error" endIcon={<ContactPhoneOutlinedIcon/>}>Contact us now</Button>
        </Box>
    </Box> */}
    <Box component='section'>
        <ContactBanner />
    </Box>
    </>
  )
}

export default Computers