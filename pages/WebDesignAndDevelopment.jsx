import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material'
import { v4 as uuidv4 } from "uuid";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import FAQ from '../components/faq/FAQ';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import "./styles.css";

// import required modules
import { EffectCards } from "swiper";


const whoWeAreHeader = {
    height: "55vh !important",
    width: "100%", 
    padding: '7rem 10rem 1rem 10rem',
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: '3rem',
    background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)),url("/images/Webdevpage5.jpg") center -100px / cover transparent',
  }

  const glassBox = {
    borderRadius: '.75rem',
    padding: '35px',
    backgroundColor: 'rgba(255, 255, 255, .45)',
    border: '1px solid rgba(255, 255, 255, .25)',
    boxShadow: '0 0 10px 1px rgba(0, 0, 0, .25)',
    // filter: 'drop-shadow(2px 5px 6px #E7EBF0)',
    transition: 'transform .25s ease',
    '&:hover': {
      transform: 'translateY(-20px)'
    }
  }
  const glassBox2 = {
    flex: 1,
    borderRadius: '.75rem',
    padding: '35px',
    backgroundColor: 'rgba(255, 255, 255, .45)',
    border: '1px solid rgba(255, 255, 255, .25)',
    boxShadow: '0 0 10px 1px rgba(0, 0, 0, .25)',
    padding: '2rem 4rem 4rem 4rem',
    // filter: 'drop-shadow(2px 5px 6px #E7EBF0)',
    transition: 'transform .25s ease',
    '&:hover': {
      transform: 'translateY(-20px)'
    }
  }

  const fancyBox2 = {
    color: "rgba(0, 0, 0, 0.87)",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    position: "relative",
    minWidth: "0px",
    overflowWrap: "break-word",
    backgroundClip: "border-box",
    border: "0px solid rgba(0, 0, 0, 0.125)",
    marginLeft: "24px",
    marginRight: "24px",
    borderRadius: "0.75rem",
    overflow: "visible",
    padding: "1rem 3rem",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "saturate(200%) blur(30px)",
    boxShadow: "rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem",
}

  const WebDesignAndDevelopment = () => {
    const items = [
        {
            id: uuidv4(),
            icon: 'fa fa-bolt',
            h3: 'Super Fast Loading In Less Than 3 Seconds',
            p: "Your Website Will Be Hosted On The World's Fastest Litespeed Web Server To Ensure A Smooth User Experience"
        },
        {
            id: uuidv4(),
            icon: 'fa fa-mobile',
            h3: 'Mobile, Tablet & Desktop Responsive Sites',
            p: "Your Customers/Clients Will Be Able To Easily Access Your Website From Desktop, Tablet And Mobile Devices"
        },
        {
            id: uuidv4(),
            icon: 'UI/UX',
            h3: 'UI/UX. Preview Your Project',
            p: "After all enquiries, the next step is to build a prototype by designing the User Interface (UI) and make the website have an excellent User Experience (UX), so the client can have a feel of exactly how the website will look. " 
        },
        {
            id: uuidv4(),
            icon: 'LayersIcon',
            h3: 'Premium Designs And Exclusive Branding',
            p: "Expect Nothing Less Than A Premium Website That Will Allow You Stand Out From Your Competitors" 
        },
        {
            id: uuidv4(),
            icon: 'LayersIcon',
            h3: 'Built For Conversions, Leads And Sales',
            p: "We Tailor All Our Design Elements And Functionalities To Help You achieve All Your Business Objectives" 
        },
        {
            id: uuidv4(),
            icon: 'LayersIcon',
            h3: 'Unlimited Custom Email For You & Your Staff',
            p: "We Tailor All Our Design Elements And Functionalities To Help You achieve All Your Business Objectives" 
        },
        {
            id: uuidv4(),
            icon: 'LayersIcon',
            h3: 'Built With The Most Advanced Technologies',
            p: "We Are Experts In All Major Web Technologies Like Laravel, codeigniter, WordPress, Magento, & Several Others" 
        },
        {
            id: uuidv4(),
            icon: 'LayersIcon',
            h3: 'Guaranteed Security With SSL Encryption',
            p: "Your Website Will be Secured With The World's Best SSL Encryption To Guarantee Constant Security" 
        },
        {
            id: uuidv4(),
            icon: 'LayersIcon',
            h3: 'Continues Maintenance, Updates & Back-ups',
            p: "Even After Project Completion, We Will Still Continue To Carry Out Regular Updates, Bug Fix & Monthly Back-Ups" 
        },
    ]

    const projects = [
        {
            id: uuidv4(),
            img: '/images/webProjects/ElonatechNigeria.png',
            web: '"https://elonatech.com.ng"'
        },
        
        {
            id: uuidv4(),
            img: '/images/webProjects/HyperthreadVentures.png',
            web: '"https://hyperthread.com.ng"'
        },
        {
            id: uuidv4(),
            img: '/images/webProjects/KappachemLaboratory.png',
            web: '"https://kappachemlabs.com"'
        },
        {
            id: uuidv4(),
            img: '/images/webProjects/PFNLagosState.png',
            web: '"https://pfnlagosstate.org"'
        },
        {
            id: uuidv4(),
            img: '/images/webProjects/RemabenScientific.png',
            web: '"https://https://remabenscientific.com/"'
        },
        {
            id: uuidv4(),
            img: '/images/webProjects/SafebrooksNigeria.png',
            web: '"https://https://www.safebrooks.com.ng/"'
        },
        {
            id: uuidv4(),
            img: '/images/webProjects/SupremeFamily.png',
            web: '"https://supremefamily.org"'
        },
        {
            id: uuidv4(),
            img: '/images/webProjects/TheHomeBuildersMinistries.png',
            web: '"https://thbcmi.org"'
        },

    ]

    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );

      const datas = [
        {
            id: uuidv4(),
            h1: 'Corporate Website',
            p: 'Design can humanize brands and help users discover, learn, experience, and enjoy with greater ease. We help larger organizations use the web to communicate their missions, drive sales-ready opportunities, demonstrate thought-leadership, and engage multiple constituencies.'
        },
        {
            id: uuidv4(),
            h1: 'Marketing Website ',
            p: 'Design a website to make people aware of your business as well as promote the company mission, products, and services offered. Quality web design marketing will promote user experience (UX), maintain consistent branding, and bring people back to your site again and again'
        },
        {
            id: uuidv4(),
            h1: 'Responsive Website',
            p: 'Responsive Web design is the approach that suggests that design and development should respond to the users behavior and environment based on screen size, platform, and orientation. In other words, the website should have the technology to automatically respond to the users preferences'
        },
        {
            id: uuidv4(),
            h1: 'Online School Management System',
            p: 'We design and create model software to manage all your school activities. The Online School management System is intellectual and user-friendly. It helps manage a huge administration task along with data and records of teachers, staff, students, and their parents.'
        },
        {
            id: uuidv4(),
            h1: 'e-Commerce Website',
            p: 'We design an e-commerce website, also known as electronic commerce or internet commerce, whereby your customers can buy your goods or services using the internet, and the transfer of money and data to execute these transactions'
        },
        {
            id: uuidv4(),
            h1: 'Portfolio website',
            p: 'A portfolio website allows creative professionals a place for showcasing their best work. This is perfect for artists, writers, designers, filmmakers, furniture builders—you name it. As you build a portfolio, there&lsquo;s no need to add every single project you&lsquo;ve ever worked on'
        },
      ]

  return (
    <>
    <Box component='div' sx={whoWeAreHeader}>
        <Box sx={{flex: 1}}>
        <Typography variant='h4' color='#fff'>Lets Build an Amazing Website <br /> for your Brand</Typography>
        <Typography variant='h6' color='#fff' my={2}>Excellence, Professionalism, Integrity & Convenient Service</Typography>
        {/* <Typography variant='body1' color="#fff" my={2}>Leading provider of innovative information technologies <br /> that improve the quality of lives</Typography> */}
        <Button color='primary' variant='contained'>Contact Us</Button>
        </Box>
        <Box sx={{textAlign: 'center', flex: 1, alignSelf: 'baseline'}}>
            <img src="/images/mockup.png" alt="" style={{width: '80%', height: '80%', objectFit: 'contain', marginLeft: '12rem'}}/>
        </Box>
    </Box>
    <Box component='div' sx={{display: 'flex', gap: '2rem', background: '#fff', padding: '5rem 10rem 5rem 10rem'}}>
        <Box sx={{flex: 1, textAlign: 'justify'}}>
        <Typography variant='h5' color='#34548c'>Need A Website For Your Brand?</Typography>
        <hr className='my-2' style={{background: 'red', width: "50px", height: "2px"}} />
        <Typography variant='body2' my={2}>
        Well, You Have Come To The Right Place, At Pejul Digital Agency, We Pride Ourselves To Be One Of Lagos' Leading Website Design & Development Company Whos Core Value is Transparency And Results
        </Typography>
        <Typography variant='body2' my={2}>
        We Design & Develop All Types Of Websites And Web Application At The Lowest Rate Possible. We  Also Provide Other Premium Services Like Business Software Development, Mobile App Development, Online Advertisments Like Google Ads, Youtube Ads, Display Ads And Even Consultation  & Training Services. 
        </Typography>
        <Typography variant='body2' my={2}>
        We won't just build you an ordinary website but also develop a marketing strategy that can utilize the website and your marketing channels to generate constant leads, sales, customers, and clients.
        </Typography>
        <Typography variant='body2' my={2}>
        If you are ready to become the best in your industry and also stand out from a sea of hungry competitors, then Pejul Digital Agency is the partner you need. Get in touch with us below, lets take your business to the next level
        </Typography>
        </Box>
        <Box sx={{textAlign: 'center', flex: 1}}>
            <img src="/images/devops.jpg" alt="" style={{width: '600px', height: '400px', border: '3px solid #34548c', borderRadius: '5px'}}/>
        </Box>
    </Box>
    <Box component='div' sx={{background: 'linear-gradient(90deg, #021048 0%, #1E38A3 100%)', padding: '5rem 10rem 5rem 10rem'}}>
    <Typography variant='h4' color='#fff' textAlign='center'>Benefits Of Working With Us</Typography>
        <hr className='m-auto my-2' style={{background: 'red', width: "50px", height: "2px"}} />
        <Grid container spacing={2}>
            {items.map((item, i)=> (
            <Grid item xs={12} sm={6} md={4} key={i}>
                <Box sx={glassBox}>
                    <Box sx={{background: '#fff', width: '50px', height: '50px', borderRadius: '50%', position: 'relative'}}>
                        <Box sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'red'}}>
                        <i className={item.icon} aria-hidden="true" />
                        </Box>
                    </Box>
                    <Typography variant='h6' fontWeight={600} my={2} color='#fff' textTransform='capitalize'>{item.h3}</Typography>
                    <Typography variant='body1' color='#fff'>{item.p}</Typography>
                    <Box sx={{width: '50px', height: '10px', background: '#fff', borderRadius: '5px', mt: 2}}></Box>
                </Box>
            </Grid>
            ))}
        </Grid>
    </Box>
    <Box component='div' sx={{background: '#fff', padding: '5rem 10rem 5rem 10rem'}}>
        <Typography variant='h4' color='#34548c' textAlign='center'>Our Work Process</Typography>
        <Typography variant='h6' textAlign='center'>For quality job done, we take the below algorithm</Typography>
        <hr className='m-auto mt-2 mb-4' style={{background: 'red', width: "50px", height: "2px"}} />
        <Box component='div' sx={{display: 'flex', gap: '4rem'}}>
            <Box sx={{flex: 1, width: '550px', height: '600px'}}>
                <img src="/images/Programming.jpg" alt="" style={{width: '100%', height: '100%', border: '2px solid grey', borderRadius: '15px'}} />
            </Box>
            <Box sx={{flex: 1, display: 'flex', gap: '2rem'}}>
            <Box sx={{borderLeft: '2px dotted #ccc', height: '600px', position: 'absolute', marginLeft: '2rem'}} />
            <Box sx={{m: 0, p: 0, listStyle: 'none', position: 'relative', zIndex: 1}} component='ul'>
                <Box component='li' sx={{display: 'flex', gap: '2rem'}}>
                    <Box component='div' sx={{background: '#EE3239', color: '#fffafa', minWidth: '65px', height: '65px', borderRadius: '1rem', border: '2px solid#dee2e6', fontSize: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: 'all .3s ease-in-out', '&:hover': {border: '2px solid #175cff'}}}> <i className="fa fa-check" aria-hidden="true"></i> </Box>
                    <Box component='div'>
                        <Typography variant='h6' fontWeight='500' marginBottom='6px' color='#175cff'>Step 1</Typography>
                        <Typography variant='h6' fontWeight='600' fontSize='20px' marginBottom='10px'>Project Enquiry</Typography>
                        <Typography component='p' variant='body1'>The first point of contact is all about inquiries and technical specifications, At this stage we get to know what your project is all about and how we can help you achieve your objectives.</Typography>
                    </Box>
                </Box>
                <Box component='li' sx={{display: 'flex', gap: '2rem', marginTop: '2rem'}}>
                    <Box component='div' sx={{background: '#EE3239', color: '#fffafa', minWidth: '65px', height: '65px', borderRadius: '1rem', border: '2px solid#dee2e6', fontSize: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: 'all .3s ease-in-out', '&:hover': {border: '2px solid #175cff'}}}> <i className="fa fa-check" aria-hidden="true"></i> </Box>
                    <Box component='div'>
                        <Typography variant='h6' fontWeight='500' marginBottom='6px' color='#175cff'>Step 2</Typography>
                        <Typography variant='h6' fontWeight='600' fontSize='20px' marginBottom='10px'>Prototyping (Designing the UI and UX)</Typography>
                        <Typography component='p' variant='body1'>After all enquiries, the next step is to build a prototype by designing the User Interface (UI) and make the website have an excellent User Experience (UX), so the client can have a feel of exactly how the website will look.</Typography>
                    </Box>
                </Box>
                <Box component='li' sx={{display: 'flex', gap: '2rem', marginTop: '2rem'}}>
                    <Box component='div' sx={{background: '#EE3239', color: '#fffafa', minWidth: '65px', height: '65px', borderRadius: '1rem', border: '2px solid#dee2e6', fontSize: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: 'all .3s ease-in-out', '&:hover': {border: '2px solid #175cff'}}}> <i className="fa fa-check" aria-hidden="true"></i> </Box>
                    <Box component='div'>
                        <Typography variant='h6' fontWeight='500' marginBottom='6px' color='#175cff'>Step 3</Typography>
                        <Typography variant='h6' fontWeight='600' fontSize='20px' marginBottom='10px'>Project Execution (The Development Phase)</Typography>
                        <Typography component='p' variant='body1'>Execution will commence immediately. In this stage , we will determine what programming language will best suite the website, then commence the coding  to bring about the aesthetics of the website.</Typography>
                    </Box>
                </Box>
                <Box component='li' sx={{display: 'flex', gap: '2rem', marginTop: '2rem'}}>
                    <Box component='div' sx={{background: '#EE3239', color: '#fffafa', minWidth: '65px', height: '65px', borderRadius: '1rem', border: '2px solid#dee2e6', fontSize: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: 'all .3s ease-in-out', '&:hover': {border: '2px solid #175cff'}}}> <i className="fa fa-check" aria-hidden="true"></i> </Box>
                    <Box component='div'>
                        <Typography variant='h6' fontWeight='500' marginBottom='6px' color='#175cff'>Step 4</Typography>
                        <Typography variant='h6' fontWeight='600' fontSize='20px' marginBottom='10px'>The Functionality Stage (Backend)</Typography>
                        <Typography component='p' variant='body1'>The server-side development commences. which focuses on databases, scripting, and website architecture. It consists of behind-the-scene activities that occur when performing any action on the website (account login, online store etc.).</Typography>
                    </Box>
                </Box>
            </Box>
            </Box>
        </Box>
    </Box>
    <Box sx={{background: 'linear-gradient(90deg, #021048 0%, #1E38A3 100%)', padding: '5rem 10rem 5rem 10rem', display: 'flex', justifyContent: 'center'}}>
        <Box sx={{maxWidth: '80%'}}>
            <Typography variant='h4' mb={3} textAlign='center' color='#fff'>Why You Should Work With Us</Typography>
            <Typography variant='h6' textAlign='center' color='#fff'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam reiciendis nemo ab neque corporis, recusandae sapiente mollitia corrupti consequatur earum quis optio saepe? Saepe cupiditate sapiente enim totam dolorum. Corrupti?</Typography>
            <Typography variant='h6' textAlign='center' color='#fff'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam reiciendis nemo ab neque corporis,</Typography>
        </Box>
    </Box>
    
    <Box sx={{background: '#021048', padding: '5rem 0rem 5rem 0rem'}}>
    <Typography variant='h4' color='#fff' textAlign='center'>Some Of Our Projects</Typography>
        <Typography variant='h6' color='#fff' textAlign='center'>Web Development/Web Design</Typography>
        <hr className='m-auto mt-2 mb-4' style={{background: 'red', width: "50px", height: "2px"}} />
        <Typography variant='h4'></Typography>
        <Typography></Typography>
    <Splide
        options={{
            type: "loop",
            drag: "free",
            arrows: true,
            pagination: false,
            perPage: 3,
            autoScroll: {
            pauseOnHover: true,
            pauseOnFocus: false,
            rewind: true,
            speed: 1
            }
        }}
        extensions={{ AutoScroll }}
        // style={{padding: '0 5rem'}}
    >
            {projects.map((project)=> (
            <SplideSlide key={project.id}>
                <Link href={project.web}>
                    <img src={project.img} style={{width: '90%', height: '400px'}} alt="Image 1" />
                </Link>
            </SplideSlide>
            ))}
    </Splide>
    </Box>
    <Box sx={{background: '#fff'}}>
            {/* <Box sx={{display: 'flex', marginBottom: '1rem', justifyContent: 'center'}}><img src="/logoAndIcons/whiteLogo.png" width={50} height={50} style={{filter: 'drop-shadow(2px 4px 6px)'}} alt="" /></Box>
            <Typography variant='h6' mb={3} textAlign='center' color='#b10000'>Get In Touch With us!</Typography>
            <Typography variant='h3' textAlign='center' mb={3} color='#fff'>Ready To Start Your Project?</Typography>
            <Typography variant='body2' component='p' textAlign='center' color='#fff'>If you are ready to become the best in your industry and also stand out from a sea of hungry competitors, then Pejul Digital Agency is the partner you need. Get in touch with us below, lets take your business to the next level</Typography>
            <Typography variant='body2' component='p' textAlign='center' color='#fff'>We Are Available For A Virtual Meeting Or Physical Meeting At Either Our Office Or Your Place Of Business Within Lagos State </Typography>
            <Typography variant='body2' component='p' textAlign='center' mb={3} color='#fff'>We Are Located At 679 Karimu Kotun St, Victoria Island, Lagos </Typography>

            <Box component='ul' sx={{m: 0, p: 0, listStyle: 'none', display: 'flex', gap: '2rem', justifyContent: 'center'}}>
                <Box component='li' sx={{display: 'flex', gap: '1rem', color: '#fff', fontSize: '1.2rem'}}>
                    <i className="fa fa-check-circle" aria-hidden="true" />
                    <Typography variant='body2' component='span'>Lorem, ipsum.</Typography>
                </Box>
                <Box component='li' sx={{display: 'flex', gap: '1rem', color: '#fff', fontSize: '1.2rem'}}>
                    <i className="fa fa-check-circle" aria-hidden="true" />
                    <Typography variant='body2' component='span'>Lorem, ipsum.</Typography>
                </Box>
                <Box component='li' sx={{display: 'flex', gap: '1rem', color: '#fff', fontSize: '1.2rem'}}>
                    <i className="fa fa-check-circle" aria-hidden="true" />
                    <Typography variant='body2' component='span'>Lorem, ipsum.</Typography>
                </Box>
            </Box>
            <Button variant='contained' color='primary' sx={{display: 'flex', margin: 'auto', marginTop: '2rem'}}>Contact Us Now</Button> */}
            <img src="/images/banner2.png" alt="" style={{width: '100%'}} />
        
    </Box>
    <Box sx={{background: '#ddd', padding: '2rem 10rem 5rem 10rem', display: 'flex', gap: '2rem'}}>
        <Box sx={{flex: 1, width: '50%'}}>
        <Typography variant='h5' color='#34548c' textAlign='center'>OUR WEB DESIGN AND DEVELOPMENT SERVICE COVERS</Typography>
        <hr className='m-auto mt-2 mb-4' style={{background: 'red', width: "50px", height: "2px"}} />
        <Box sx={glassBox2}>
            <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} swipeable={true} stopOnHover={true}>
            {datas.map((data)=> (
                <Box key={data.id}>
                    <img src="/logoAndIcons/blackLogo.png" alt="black-logo" style={{width: '30px', height: '30px'}} />
                    <Typography variant='h6' fontWeight={600} mb={2}>{data.h1}</Typography>
                    <Typography variant='subtitle1'>{data.p}</Typography>
                </Box>
            ))}
            </Carousel>
        </Box>
        </Box>
        <Box sx={{flex: 1, width: '550px'}}>
            <Box>
                <FAQ />
            </Box>
        </Box>
    </Box>
    </>
  )
}

export default WebDesignAndDevelopment