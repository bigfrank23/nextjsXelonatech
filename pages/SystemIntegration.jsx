import { Backdrop, Box, Button, Card, CardActions, CardContent, CardMedia, Fade, Grid, Modal, Typography } from '@mui/material'
import Head from 'next/head'
import React, { useState } from 'react'


const whoWeAreHeader = {
    height: "50vh !important",
    width: "100%", 
    padding: '5rem',
    display: 'flex', 
    flexDirection: "column", 
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: '3rem',
    background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url("/images/web-design.jpg") center 100% / cover transparent',
  }

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: { xs: 'block', sm: 'block', md: 'flex' },
    flexDirection: 'column',
    gap: '3rem',
    // width: 400,
    height: '80vh',
    overflow: 'auto',
    bgcolor: 'background.paper',
    outline: 0,
    boxShadow: 24,
    p: 4,
  };

  const left = {
    flex: 2,
    width: {xs: "200px", sm: "200px", md: "350px", lg: "100%"}
  }
  
  const right = {
    flex: 1
  }
  

const SystemIntegration = () => {
    const [open, setOpen] = useState(false);
    const [modalData, setModalData] = useState("");

    const items = [1, 2, 3, 4]

    const handleOpen = (item) => {
        setOpen(true)
        setModalData(item)
      };
      const handleClose = () => setOpen(false);
  return (
    <>
    <Head>
      {/* <meta name="viewport" content="width=device-width,initial-scale=1"/> */}
        <title>System Integration</title>
        <meta name="description" content="Elonatech Nigeria Limited - System Integration Page" />
        <link rel="icon" href="/elona-icon.png" />
    </Head>
    <Box sx={whoWeAreHeader}>
        <Box sx={{textAlign: 'center'}}>
        <Typography variant='h4' color='#fff' mb='2rem'>System Integration</Typography>
        <Typography variant='h5' color='#fff' mb='1rem'>Excellence, Professionalism, Integrity & Convinient Service</Typography>
        <Typography variant='body1' color="#fff">Leading provider of innovative information technologies <br /> that improve the quality of lives</Typography>
        </Box>
    </Box>
    <Box
        component='main'
        sx={{
            bgcolor: '#fff',
            padding: '5rem 10rem 5rem 10rem',
          display: 'grid',
        //   gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 1,
        //   gridTemplateRows: 'auto',
          gridTemplateAreas: `
        "sidebar sidebar main main"
        "sidebar sidebar footer footer"`,
        }}
      >
        <Box component='section' sx={{ gridArea: 'sidebar', padding: '2rem 4rem 4rem 4rem', bgcolor: '#fff', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px', boxShadow: '-15px 10px 70px 10px #aaa' }}>
            <Typography variant='h6' mb={2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, vel!</Typography>
            <Typography variant='body2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, vel!</Typography>
            <Typography variant='body2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Reiciendis quos tempore, totam dolore architecto omnis repellat perferendis id ratione ab quo. 
                Temporibus cumque consectetur aspernatur quidem explicabo. 
                Nemo ullam quas in nisi pariatur! Quam quasi cupiditate error impedit tempore iure! 
                Facere pariatur deserunt possimus aut inventore accusamus culpa, quis autem.
            </Typography>
        </Box>
        <Box component='section' sx={{ gridArea: 'main', background: 'linear-gradient(90deg, rgba(156,39,176,1) 0%, rgba(156,39,176,1) 36%, rgba(195,195,195,1) 98%)', padding: '2rem', color: '#fff', borderTopRightRadius: '10px' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, repudiandae.
        </Box>
        <Box component='section' sx={{ gridArea: 'footer', background: 'linear-gradient(90deg, rgba(156,39,176,1) 0%, rgba(156,39,176,1) 36%, rgba(195,195,195,1) 98%)', padding: '2rem', color: '#fff', borderBottomRightRadius: '10px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, repudiandae.</Box>
    </Box>
    <Box component='section' sx={{background: '#fff'}}>
    <Typography variant='h4' textAlign='center' color='#34548c' textTransform='capitalize'>Lorem, ipsum.</Typography>
      <hr className='m-auto mt-2' style={{background: 'red', width: "50px", height: "2px"}} />
    </Box>
    <Box component='section' sx={{padding: '2rem 10rem 2rem 10rem', background: '#34548c'}}>
        <Grid container spacing={2}>
        {items.map((v, i)=> (
            <Grid item xs={12} sm={6} md={3} key={i}>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="245"
                image="https://images.unsplash.com/photo-1620013000843-31252842d370?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
            />
            <CardContent>
                <Typography gutterBottom variant="h6" textAlign='center' textTransform='uppercase' component="div">
                    Networking Equipment
                </Typography>
            </CardContent>
            <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
                {/* <Button size="small">Share</Button> */}
                <Button size="small" onClick={()=>handleOpen(v)}>Learn More</Button>
            </CardActions>
            </Card>
        </Grid>
        ))}
        </Grid>
        <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
            <Box component='div' sx={modalStyle}>
              <Card sx={left}>
              <CardMedia
               component='img'
               alt={modalData.name}
               image='https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              />
              </Card>
              <Box sx={right}>
                <Typography id="spring-modal-title" variant="h6" component="h2">
                  {/* {modalData.name} */}
                  Lorem, ipsum.
                </Typography>
                <Typography id="spring-modal-title" variant="caption" color='red' component="h2">
                  {/* {modalData.price} */}
                  Lorem, ipsum dolor.
                </Typography>
                <Typography id="spring-modal-description" variant='body2' sx={{ mt: 2 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eius officia illo veniam. Sunt qui neque iure nihil rem amet!
                </Typography>
                {/* <CardActions sx={{py: "1rem", pl: 0, display: { xs: 'block', sm: 'block'}}}>
                  <IconButton aria-label='Add to cart' sx={{p: 0, mb: {xs: "1rem", sm: '1rem', md: 0, lg: 0}}}>
                    <ButtonGroup color="secondary" aria-label="medium secondary button group">
                      {buttons}
                    </ButtonGroup>
                  </IconButton>
                  <Button variant='outlined' color='secondary'>Add to cart</Button>
                </CardActions>
                <Box sx={{cursor:'pointer', mt: '1rem', display: { xs: 'block', sm: 'block', md: 'flex', gap: '1rem', '&:hover': {gap: '5px', transition: 'gap .5s linear', color: 'red'} } }}>
                  <Typography component='a' variant='subtitle1'>Go to product page</Typography>
                  <ArrowForwardIcon />
                </Box> */}
              </Box>
            </Box>
        </Fade>
      </Modal>
    </Box>
    </>
  )
}

export default SystemIntegration