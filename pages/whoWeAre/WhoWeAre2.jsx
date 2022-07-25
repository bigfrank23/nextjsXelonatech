import { Box, Typography, Divider } from '@mui/material'
import styles from "../../styles/whoWeAre2.module.css";


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
  return (
    <>
    <Box sx={whoWeAreHeader}>
        <Box sx={{textAlign: 'center'}}>
        <Typography variant='h4' color='#fff' mb='2rem'>About Elonatech</Typography>
        <Typography variant='h5' color='#fff' mb='1rem'>Excellence, Professionalism, Integrity & Convinient Service</Typography>
        <Typography variant='body1' color="#fff">Leading provider of innovative information technologies <br /> that improve the quality of lives</Typography>
        </Box>
    </Box>
    <Box sx={{display: 'flex', padding: '5rem 10rem'}}>
        <Box sx={{flex: 1}}>
            <img src="https://www.tranter-it.com/wp-content/uploads/2021/12/devices2.png" alt="" />
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
        <div class={styles.boxContainer}>
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
                        <button className={styles.flipBoxButton}>Learn More</button>
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
                        <button className={styles.flipBoxButton}>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
            <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" style={{width: '100%'}}/>
        </Box>
    </Box>
    <Box></Box>
    </>
  )
}

export default WhoWeAre2