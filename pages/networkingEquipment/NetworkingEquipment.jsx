import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const whoWeAreHeader = {
    height: "50vh !important",
    width: "100%", 
    padding: '5rem',
    display: 'flex', 
    flexDirection: "column", 
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: '3rem',
    background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url("/images/netMaintenance2.jpg")',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat'
  }
const NetworkingEquipment = () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <>
    <Box component='div' sx={whoWeAreHeader}>
        <Box sx={{textAlign: 'center'}}>
        <Typography variant='h4' color='#fff' mb='2rem'>Network Equipment Maintenance</Typography>
        <Typography variant='h5' color='#fff' mb='1rem'>Elonatech offers industry-leading network and wireless hardware repair services</Typography>
        <Typography variant='body1' color="#fff">With an expert staff of technicians and an advanced tech center, <br/> we are well suited to serve your repair needs.</Typography>
        </Box>
    </Box>
    <Box component='div' p={6} bgcolor='#fff'>
        {/* <Box sx={{margin: '2rem'}}>
        <Typography variant='h4' textAlign='center' color='#34548c' textTransform='capitalize'>TITLE</Typography>
            <Typography variant='h6' textAlign='center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, unde.</Typography>
        <hr className='m-auto my-3' style={{background: 'red', width: "50px", height: "2px"}} />
        </Box> */}
        <Box sx={{display: 'flex', justifyContent: 'flex-end', marginTop: '2rem', background: 'url("/images/bannerNet1.png")', minHeight: '340px', backgroundSize: 'cover'}}>
            <Box width='700px' padding='2rem' alignSelf='center'>
                {/* <Typography color='#fff' fontSize={34}>Lorem ipsum dolor sit amet.</Typography> */}
                <Typography color='#fff' py={2} sx={{'&::first-letter': {fontSize: '38px'}}}>
                Here at Elonatech, we understand that businesses can't afford to have their network compromised by faulty or poor equipment. 
                That’s why we offer a comprehensive repair service for all brands of network hardware, 
                including Cisco, Extreme Networks, Juniper, Ubiquity, TP-link, Linksys and many more.
                </Typography>
                <Typography color='#fff' py={2}>
                If your business is struggling with inadequate or malfunctioning network equipment, 
                we offer year-round maintenance to keep your hardware in good health, 
                maintaining productivity and security for your employees and your firm’s sensitive data.
                </Typography>
            </Box>
        </Box>
    </Box>
    <Box component='div' px={6} bgcolor='#fff'>
        <Box sx={{margin: '2rem'}}>
        <hr className='m-auto my-3' style={{background: 'red', width: "50px", height: "2px"}} />
        </Box>
        <Box sx={{padding: '2rem 4rem',background: 'url("https://i.dell.com/is/image/DellContent/content/dam/web-resources/cross-project/images/lifestyle/intro-column-control-bg-1600x400.jpg?wid=1600&fit=constrain")', minHeight: '340px', backgroundSize: 'cover'}}>
                    <Typography color='#eb0303' textAlign='center' fontSize={34}>Round-The-Clock Maintenance for All Network Equipment</Typography>
            <Box sx={{display: 'flex', gap: '2rem'}}>
                <Box sx={{flex: 1}}>
                    <Typography color='#fff' variant='h6' sx={{'&::first-letter': {fontSize: '38px'}}}>
                    we understand there are times when you need your network equipment up and running as soon as possible and can't afford to wait. 
                    Our engineers are very knowledgeable when it comes to network equipment. They also perform rigorous testing before returning your equipment.  
                    we also offer a special express repair service where our team will prioritize your job and have your equipment back up and running fast.
                    </Typography>
                </Box>
            <Box sx={{flex: 1}}>
                    <Typography color='#fff' variant='h6' sx={{'&::first-letter': {fontSize: '38px'}}}>
                    Our team provides round-the-clock maintenance and repair for a wide range of high-end network equipment. 
                    We check both software and hardware to ensure everything works orderly. In addition, we test and maintain routers, 
                    switches, firewalls, network chassis, modules, and power supplies. 
                    We thoroughly test all equipment after repairs to ensure that everything is in complete working order before returning it to you.
                    </Typography>
            </Box>
            </Box>
        </Box>
    </Box>
    <Box component='div' p={6} bgcolor='#fff'>
        <Box sx={{margin: '2rem'}}>
        <Typography variant='h4' textAlign='center' color='#34548c' textTransform='capitalize'>Reliable Network Support</Typography>
            {/* <Typography variant='h6' textAlign='center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, unde.</Typography> */}
        <hr className='m-auto my-3' style={{background: 'red', width: "50px", height: "2px"}} />
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'flex-end', marginTop: '2rem', background: 'url("/images/bannerNet1.png")', minHeight: '340px', backgroundSize: 'cover'}}>
            <Box width='700px' padding='2rem'>
                {/* <Typography color='#fff' fontSize={34}>Lorem ipsum dolor sit amet.</Typography> */}
                <Typography color='#fff' py={2} sx={{'&::first-letter': {fontSize: '38px'}}}>
                Here at Elonatech, we are committed to supplying you with the most reliable advice, 
                support and services at all times, wherever you are in Nigeria. 
                To find out more about how we can help you please get in touch with us today.
                </Typography>
            </Box>
        </Box>
    </Box>
    <Box component='div' p={6} bgcolor='#fff'>
        <Box sx={{margin: '2rem'}}>
        <Typography variant='h4' textAlign='center' color='#34548c' textTransform='capitalize'>Network & Wireless Network Equipment Repair</Typography>
            {/* <Typography variant='h6' textAlign='center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, unde.</Typography> */}
        <hr className='m-auto my-3' style={{background: 'red', width: "50px", height: "2px"}} />
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'flex-end', marginTop: '2rem', background: 'url("https://i.dell.com/is/image/DellContent/content/dam/uwaem/production-design-assets/en/payment-solutions/payment-index/apex-module.jpg?wid=1600&fit=constrain")', minHeight: '340px', backgroundSize: 'cover'}}>
            <Box width='700px' padding='2rem'>
                {/* <Typography color='#fff' fontSize={34}>Lorem ipsum dolor sit amet.</Typography> */}
                <Typography color='#fff' py={2} sx={{'&::first-letter': {fontSize: '38px'}}}>
                Buying new network or wireless equipment is an expensive proposition - especially when you’ve already made a significant investment in your network infrastructure. 
                While buying pre-owned equipment certainly reduces your cost, sometimes the best option is to repair the equipment you already own.
                </Typography>
                <Typography color='#fff' py={1}>
                That is why Elonatech offers industry-leading network and wireless hardware repair services. 
                With an expert staff of technicians and an advanced tech center, we are well suited to serve your repair needs.
                </Typography>
            </Box>
        </Box>
    </Box>
    <Box component='div' p={6} bgcolor='#fff'>
        <Box sx={{margin: '2rem'}}>
        <Typography variant='h4' textAlign='center' color='#34548c' textTransform='capitalize'>Common Network Devices We Maintain</Typography>
            {/* <Typography variant='h6' textAlign='center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, unde.</Typography> */}
        <hr className='m-auto my-3' style={{background: 'red', width: "50px", height: "2px"}} />
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'flex-end', marginTop: '2rem', background: 'url("https://i.dell.com/is/image/DellContent/content/dam/uwaem/production-design-assets/en/payment-solutions/payment-index/apex-module.jpg?wid=1600&fit=constrain")', minHeight: '340px', backgroundSize: 'cover'}}>
            <Box width='700px' padding='2rem'>
                <Typography color='#fff' sx={{'&::first-letter': {fontSize: '38px'}}}>With the capability to repair thousands of items by the major network manufacturers, Elonatech is positioned to be your repair partner.</Typography>
                <Box component='div' mt={2}>
                    <Typography component='span' variant='h6' color='#fff'>Some of the Devices We Repair:</Typography>
                    <Box component='ul' sx={{m: 0, p: 0, listStyle: 'none'}} color='#fff'>
                    <Typography component='li' variant='subtitle1' display='flex' gap="10px"> <ArrowCircleRightIcon /> Hubs</Typography>
                    <Typography component='li' variant='subtitle1' display='flex' gap="10px"> <ArrowCircleRightIcon /> Switches</Typography>
                    <Typography component='li' variant='subtitle1' display='flex' gap="10px"> <ArrowCircleRightIcon /> Routers</Typography>
                    <Typography component='li' variant='subtitle1' display='flex' gap="10px"> <ArrowCircleRightIcon /> Bridges</Typography>
                    <Typography component='li' variant='subtitle1' display='flex' gap="10px"> <ArrowCircleRightIcon /> Gateways</Typography>
                    <Typography component='li' variant='subtitle1' display='flex' gap="10px"> <ArrowCircleRightIcon /> Modems</Typography>
                    <Typography component='li' variant='subtitle1' display='flex' gap="10px"> <ArrowCircleRightIcon /> Repeaters</Typography>
                    <Typography component='li' variant='subtitle1' display='flex' gap="10px"> <ArrowCircleRightIcon /> Access Points</Typography>
                    <Typography component='li' variant='subtitle1' display='flex' gap="10px"> <ArrowCircleRightIcon /> Servers</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
    {/* <Box component='div' px={6} bgcolor='#fff'>
        <Box sx={{margin: '2rem'}}>
        <Typography variant='h4' textAlign='center' color='#34548c' textTransform='capitalize'>TITLE</Typography>
            <Typography variant='h6' textAlign='center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, unde.</Typography>
        <hr className='m-auto my-3' style={{background: 'red', width: "50px", height: "2px"}} />
        </Box>
        <Box component='section'>
            <Grid container spacing={2}>
            {items.map((v, i)=> (
                <Grid item xs={12} sm={6} md={3} key={i}>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://images.unsplash.com/photo-1605978542268-b49288706bfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Networking Equipment
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Laboriosam eveniet velit accusamus at aliquam fugit similique 
                    vero ea iure nesciunt repellendus deleniti a laborum suscipit, 
                    ducimus alias minus dolorum provident!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
                </Card>
            </Grid>
            ))}
            </Grid>
        </Box>
    </Box> */}
    </>
  )
}

export default NetworkingEquipment