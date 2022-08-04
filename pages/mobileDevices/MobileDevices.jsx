import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box, Typography } from '@mui/material'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AnimatedText from 'react-animated-text-content';



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
    background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url("/images/web-design.jpg") center -100px / cover transparent',
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
        <Typography variant='h4' color='#fff' mb='2rem'>Mobile Devices</Typography>
        <Typography variant='h5' color='#fff' mb='1rem'>Excellence, Professionalism, Integrity & Convinient Service</Typography>
        <Typography variant='body1' color="#fff">Leading provider of innovative information technologies <br /> that improve the quality of lives</Typography>
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
    <Box sx={{background: '#fff', position: 'relative', width: '100%', padding: '5rem'}}>
        <Typography variant='h4' color='#34548c'>Most Common Phone Repair Issues</Typography>
        <Typography variant='h6' color='#34548c'>Listed below</Typography>
        <hr className='my-2' style={{background: 'red', width: "50px", height: "2px"}} />
        <Box sx={{display: 'flex', mt: 4}}>
          <Box component='ul' sx={{m: 0, p: 0, listStyle: 'none', color: '#5a5a5a', fontWeight: 400, flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem'}}>
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
          <Box sx={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <img src="/images/phoneRepair.jpg" style={{width: '80%', borderRadius: '10px'}} alt="" />
          </Box>
        </Box>
    </Box>
    <Box>
          <img src="/images/phoneRepairBanner.png" alt="" style={{height: '450px'}} />
        </Box>
    </>
  )
}

export default MobileDevices