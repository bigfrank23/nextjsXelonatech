import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box, Typography } from '@mui/material'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import AnimatedText from 'react-animated-text-content';
import ContactBanner from '../../components/contactBanner/ContactBanner';



function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const whoWeAreHeader = {
    height: "50vh !important",
    width: "100%", 
    padding: '5rem',
    display: 'flex', 
    flexDirection: "column", 
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: '3rem',
    background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url("/images/mobileHeader2.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    /* background-size: 100% 100%; */
    backgroundPosition: '30% 100%'
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
    marginLeft: "20rem",
    marginRight: "20rem",
    borderRadius: "0.75rem",
    overflow: "visible",
    padding: "3rem",
    marginTop: "-64px",
    marginBottom: "32px",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "saturate(200%) blur(30px)",
    boxShadow: "rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem",
    zIndex: '1'
}
const MobileDevices = () => {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Box sx={whoWeAreHeader}>
    <Box sx={{textAlign: 'center'}}>
        <Typography variant='h4' color='#fff' mb='2rem'>Mobile Device Repair</Typography>
        <Typography variant='h5' color='#fff' mb='1rem'>Excellence, Professionalism, Integrity & Convenient Service</Typography>
        <Typography variant='body1' color="#fff">
        We assess mobile phones functionality, install and update phone software, troubleshoot wiring problems, <br /> and replace damaged parts
        </Typography>
    </Box>
    </Box>
    <Box sx={fancyBox}>
        <Box sx={{display: 'flex'}}>
            <img src="/images/shadow2.png" alt="" width={100} />
            <Box>
              <Typography variant='h6' textAlign='center' fontWeight={600}>Why Choose Elonatech for Phone Repair</Typography>
              <hr className='mb-2 m-auto' style={{background: 'red', width: "50px", height: "2px"}} />
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
                  style={{fontSize: '1.2rem', fontWeight: 400}}
                  >
                      {/* <Typography> */}
                      Elonatech provides customers with excellent phone repair 
                      services with well-trained team of repair technicians, 
                      top quality parts and timely customer care support.
                      {/* </Typography> */}
                  </AnimatedText>
            </Box>
        </Box>
    </Box>
    <Box sx={{background: '#fff', position: 'absolute', top: '50%', width: '100%', padding: '6rem'}} />
    <Box sx={{background: '#fff', position: 'relative', width: '100%', padding: '0 5rem 5rem 5rem'}}>
        <Box sx={{display: 'flex'}}>
          <Box>
            <Typography variant='h4' color='#34548c'>Most Common Phone Repair Issues</Typography>
            {/* <Typography variant='h6' color='#34548c'>Listed below</Typography> */}
            <hr className='my-2 mb-4' style={{background: 'red', width: "50px", height: "2px"}} />
            <Box component='ul' sx={{m: 0, p: 0, listStyle: 'none', color: '#5a5a5a', fontWeight: 400, flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem'}}>
              <Box component='li' sx={{display: 'flex', gap: '5px'}}>
                <PhoneIphoneIcon/>
                <Typography variant='body2' component='p' fontSize= '18px'> Broken Phone Screen</Typography>
              </Box>
              <Box component='li' sx={{display: 'flex', gap: '5px'}}>
                <PhoneIphoneIcon/>
                <Typography variant='body2' component='p' fontSize= '18px'>Charging Port Issue</Typography>
              </Box>
              <Box component='li' sx={{display: 'flex', gap: '5px'}}>
                <PhoneIphoneIcon/>
                <Typography variant='body2' component='p' fontSize= '18px'>Water Damage</Typography>
              </Box>
              <Box component='li' sx={{display: 'flex', gap: '5px'}}>
                <PhoneIphoneIcon/>
                <Typography variant='body2' component='p' fontSize= '18px'>Battery Draining Fast</Typography>
              </Box>
              <Box component='li' sx={{display: 'flex', gap: '5px'}}>
                <PhoneIphoneIcon/>
                <Typography variant='body2' component='p' fontSize= '18px'>Speaker Not Working</Typography>
              </Box>
              <Box component='li' sx={{display: 'flex', gap: '5px'}}>
                <PhoneIphoneIcon/>
                <Typography variant='body2' component='p' fontSize= '18px'>Frequent Hanging</Typography>
              </Box>
              <Box component='li' sx={{display: 'flex', gap: '5px'}}>
                <PhoneIphoneIcon/>
                <Typography variant='body2' component='p'>Phone Overheating</Typography>
              </Box>
              <Box component='li' sx={{display: 'flex', gap: '5px'}}>
                <PhoneIphoneIcon/>
                <Typography variant='body2' component='p' fontSize= '18px'>Internet Connection Issues</Typography>
              </Box>
              <Box component='li' sx={{display: 'flex', gap: '5px'}}>
                <PhoneIphoneIcon/>
                <Typography variant='body2' component='p' fontSize= '18px'>Buttons Not Working</Typography>
              </Box>
              <Box component='li' sx={{display: 'flex', gap: '5px'}}>
                <PhoneIphoneIcon/>
                <Typography variant='body2' component='p' fontSize= '18px'>App Crashes</Typography>
              </Box>
              <Box component='li' sx={{display: 'flex', gap: '5px'}}>
                <PhoneIphoneIcon/>
                <Typography variant='body2' component='p' fontSize= '18px'>Camera Not Working</Typography>
              </Box>
              <Box component='li' sx={{display: 'flex', gap: '5px'}}>
                <PhoneIphoneIcon/>
                <Typography variant='body2' component='p' fontSize= '18px'>Flashlight Not Working</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <img src="/images/phoneRepair.jpg" style={{width: '80%', borderRadius: '10px'}} alt="" />
          </Box>
        </Box>
    </Box>
    <Box sx={{background: '#fff'}}>
      <img src="/images/phoneRepairBanner.png" alt="" style={{height: '450px'}} />
    </Box>
    <Box sx={{background: 'linear-gradient(180deg, rgba(87,111,139,1) 0%, rgb(79 103 129) 36%, rgb(61 83 107) 98%)', padding: '0rem 0rem 0rem 10rem', display: 'flex', gap: '2rem'}}>
        <Box p={3}>
        <Typography variant='h5' color='#fff' textAlign='center' my={1}><BuildCircleIcon sx={{fontSize: '2rem'}} /></Typography>
          <Typography variant='h6' fontStyle='italic' color='#fff'>
          As technology advances, devices utilizing these technologies become smaller and smaller. 
          Today&apos;s cell phones have more computing power than past computers that took up an entire room of space. 
          Modern mobile devices allow users to hold the world, or at least all of its information, 
          maps, and games in their hands.
          </Typography>
          <Typography variant='h6' fontStyle='italic' mt={2} color='#fff'>
            We repair all types of gadgets ranging from phones to tabs, smart watches, cameras, Bluetooth speakers and many more.
            We offer pick up services, our seasoned and experienced Phone Repair Technicians are available, to proffer solution to different phone challenges.
          </Typography>
        </Box>
        <Box>
          <img src="/images/bannerFlipped2.png" alt="" style={{width: '100%', height: '100%'}} />
        </Box>
    </Box>
    <Box component='section' sx={{display: 'flex', padding: '0rem 0rem 0rem 10rem', height: '350px', background: '#fff'}}>
      <Box sx={{flex: 1}}>
        <img src="/images/mobileRight2.jpg" alt="" style={{width: '100%', height: '100%'}} />
      </Box>
      <Box sx={{flex: 1, p: 5}}>
        <Typography variant='h6'>
        Our mobile phone repair technicians run tests to assess the mobile phones&apos; functionality, 
        install and update phone software, troubleshoot wiring problems, and replace damaged parts and components such as batteries, LCD screens, keypads, buttons. They also advise their clients on warranty issues and recommend products based on their expertise.
        </Typography>
      </Box>
    </Box>
    <Box>
      <ContactBanner />
    </Box>
    </>
  )
}

export default MobileDevices