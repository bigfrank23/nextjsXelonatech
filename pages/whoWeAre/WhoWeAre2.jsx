import { Box, Typography, Divider, Card, CardContent, IconButton, CardMedia, Button, Paper } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download';
import { useTheme } from '@mui/material/styles';
import styles from "../../styles/whoWeAre2.module.css";
import { keyframes } from '@mui/system';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

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
const WhoWeAre2 = () => {
    // const theme = useTheme();
    const handleDownload = () => {
        const link = document.createElement("a");
        link.download = `elonatech.pdf`;
        link.href = "/companyFolder/elonatech.pdf";
        link.click();
    };
  return (
    <>
    <Box sx={whoWeAreHeader}>
        <Box sx={{textAlign: 'center'}}>
        <Typography variant='h4' color='#fff' mb='2rem'>About Elonatech</Typography>
        <Typography variant='h5' color='#fff' mb='1rem'>Excellence, Professionalism, Integrity & Convinient Service</Typography>
        <Typography variant='body1' color="#fff">Leading provider of innovative information technologies <br /> that improve the quality of lives</Typography>
        </Box>
    </Box>
    <Box sx={{margin: '2rem'}}>
      <Typography variant='h4' textAlign='center' color='#34548c' textTransform='capitalize'>INTRODUCTION</Typography>
      <hr className='m-auto my-3' style={{background: 'red', width: "50px", height: "2px"}} />
      </Box>
    <Box sx={{display: 'flex', padding: '5rem 10rem', background: '#fff'}}>
        <Box sx={{flex: 1}}>
            <img src="https://www.tranter-it.com/wp-content/uploads/2021/12/devices2.png" alt="" />
            {/* <img src="https://tms.co.il/image/catalog/products/5MS29AA-desc/BZVMLnx5Iu.jpeg" alt="" /> */}
        </Box>
        <Box sx={{flex: 1}}>
            <Typography variant='subtitle1' fontWeight={700} color="#34548c">
                ABOUT US
            </Typography>
            <Typography variant='h4' fontWeight={900}>
                Innovative ideas, technology and services
            </Typography>
            <Box></Box>
            <Divider sx={{borderTopWidth: '2px', borderColor: 'red', background: 'red', height: '1px', width: '50%'}} />
            <hr style={{color: '#34548c', border: 0, background: '#34548c', height: '33px'}} />
            <Typography variant='h6' color='#444'>
                 Driven by Innovation, Tranter IT partners with top OEMs across the globe to deliver and develop solutions that solve business problems.
            </Typography>
            <Typography mt={2} variant='body1'>
                Tranter IT Infrastructure Services Limited (Tranter IT) is an ICT Services and Solutions company that provides unified technology solutions to business problems. We specialize in Industrial IoT (Internet of Things) and IoT Solutions, ICT Solutions and Services, Digital Oilfield Solutions, IT Infrastructure Management, Automation and Control, Outsourced Technology Management, and Support Services.
            </Typography>
            <Typography mt={2} variant='body1'>
                Tranter IT was founded in 2004 and has over 375 highly-skilled employees, including about 305 ICT and IIoT engineers.
            </Typography>
        </Box>
    </Box>
    <Box>
        <div className={styles.boxContainer}>
            <div className={styles.boxItem}>
                <div className={styles.flipBox}>
                    <div className={styles.flipBoxFront} style={{backgroundImage: "url('https://images.unsplash.com/photo-1658532865456-bd2c7723cc6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80')"}}>
                        <div className={styles.inner}>
                        <h3 className={styles.flipBoxHeader}>Our Mission</h3>
                        {/* <p>A short sentence describing this callout is.</p> */}
                        <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" className={styles.flipBoxImg} />
                        </div>
                    </div>
                    <div className={styles.flipBoxBack} style={{backgroundImage: "url('https://images.unsplash.com/photo-1658532865456-bd2c7723cc6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80')"}}>
                        <div className={styles.inner}>
                        <h3 className={styles.flipBoxHeader}>Our Mission</h3>
                        <p>To create a convenient communications services by delighting and satisfying our clients through the provision of innovative, quality, timely, relevant, accurate and affordable solutions to their needs.</p>
                        {/* <button className={styles.flipBoxButton}>Learn More</button> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.boxItem}>
                <div className={styles.flipBox}>
                    <div className={styles.flipBoxFront} style={{backgroundImage: "url('https://images.unsplash.com/photo-1658532865456-bd2c7723cc6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80')"}}>
                        <div className={styles.inner}>
                        <h3 className={styles.flipBoxHeader}>Our Vision</h3>
                        {/* <p>A short sentence describing this callout is.</p> */}
                        <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" className={styles.flipBoxImg} />
                        </div>
                    </div>
                    <div className={styles.flipBoxBack} style={{backgroundImage: "url('https://images.unsplash.com/photo-1658532865456-bd2c7723cc6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80')"}}>
                        <div className={styles.inner}>
                        <h3 className={styles.flipBoxHeader}>Our Vision</h3>
                        <p>To be the leading provider of innovative information technologies that improve the quality of lives</p>
                        {/* <button className={styles.flipBoxButton}>Learn More</button> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.boxItem}>
                <div className={styles.flipBox}>
                    <div className={styles.flipBoxFront} style={{backgroundImage: "url('https://images.unsplash.com/photo-1658532865456-bd2c7723cc6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80')"}}>
                        <div className={styles.inner}>
                        <h3 className={styles.flipBoxHeader}>Our Core Values</h3>
                        {/* <p>A short sentence describing this callout is.</p> */}
                        <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" className={styles.flipBoxImg} />
                        </div>
                    </div>
                    <div className={styles.flipBoxBack} style={{backgroundImage: "url('https://images.unsplash.com/photo-1658532865456-bd2c7723cc6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80')"}}>
                        <div className={styles.inner}>
                        <h3 className={styles.flipBoxHeader}>Our Core Values</h3>
                        <p>Excellence, Professionalism Integrity and Convenient service</p>
                        {/* <button className={styles.flipBoxButton}>Learn More</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Box>
    <Box>
        <Paper sx={{ display: 'flex', justifyContent: 'center', p: 2, }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
                Elonatech Nigeria
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
                Limited
            </Typography>
            <Typography color='#34548c'>Company's Profile</Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <Button variant='outlined' color='error' onClick={handleDownload} startIcon={<DownloadIcon />}>Download</Button>
            </Box>
        </Box>
        <CardMedia
            component="img"
            sx={{ width: 160, animation: `${spin} 5s infinite ease` }}
            image="/logoAndIcons/logo2.png"
            alt="elonatech"
        />
        </Paper>
    </Box>
    <Box sx={{display: 'flex', padding: '2rem 10rem', gap: '2rem', background: '#34548c'}}>
    <Box sx={{flex: 1}}>
            <Typography variant='subtitle1' fontWeight={700} color="#fff">
                ABOUT US
            </Typography>
            <Typography variant='h4' fontWeight={900} color="#fff">
                Innovative ideas, technology and services
            </Typography>
            <Box></Box>
            <Divider sx={{borderTopWidth: '2px', borderColor: 'red', background: 'red', height: '1px', width: '50%'}} />
            <Typography mt={2} variant='body1' color="#fff">
                Tranter IT Infrastructure Services Limited (Tranter IT) is an ICT Services and Solutions company that provides unified technology solutions to business problems. We specialize in Industrial IoT (Internet of Things) and IoT Solutions, ICT Solutions and Services, Digital Oilfield Solutions, IT Infrastructure Management, Automation and Control, Outsourced Technology Management, and Support Services.
            </Typography>
            <Typography mt={2} variant='body1' color="#fff">
                Tranter IT was founded in 2004 and has over 375 highly-skilled employees, including about 305 ICT and IIoT engineers.
            </Typography>
        </Box>
        <Box sx={{flex: 1}}>
            <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" style={{height: '100%', width: '100%', objectFit: 'cover'}}/>
        </Box>
    </Box>
    <Box></Box>
    </>
  )
}

export default WhoWeAre2