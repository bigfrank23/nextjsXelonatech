import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

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
const NetworkingEquipment = () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <>
    <Box component='div' sx={whoWeAreHeader}>
        <Box sx={{textAlign: 'center'}}>
        <Typography variant='h4' color='#fff' mb='2rem'>Networking Equipments</Typography>
        <Typography variant='h5' color='#fff' mb='1rem'>Excellence, Professionalism, Integrity & Convinient Service</Typography>
        <Typography variant='body1' color="#fff">Leading provider of innovative information technologies <br /> that improve the quality of lives</Typography>
        </Box>
    </Box>
    <Box component='div' px={6} bgcolor='#fff'>
        <Box sx={{margin: '2rem'}}>
        <Typography variant='h4' textAlign='center' color='#34548c' textTransform='capitalize'>TITLE</Typography>
            <Typography variant='h6' textAlign='center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, unde.</Typography>
        <hr className='m-auto my-3' style={{background: 'red', width: "50px", height: "2px"}} />
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'flex-end',background: 'url("https://i.dell.com/is/image/DellContent/content/dam/uwaem/production-design-assets/en/payment-solutions/payment-index/apex-module.jpg?wid=1600&fit=constrain")', minHeight: '340px', backgroundSize: 'cover'}}>
            <Box width='700px' padding='2rem' alignSelf='center'>
                <Typography color='#e6ac28' textTransform='uppercase'>Lorem ipsum dolor sit amet.</Typography>
                <Typography color='#fff' fontSize={34}>Lorem ipsum dolor sit amet.</Typography>
                <Typography color='#fff' py={2}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum earum architecto quia eveniet doloribus sapiente iure labore aliquid aperiam.</Typography>
                <Button variant='contained' sx={{background: '#fff !important', color: '#34548c !important'}}>Lorem.</Button>
            </Box>
        </Box>
    </Box>
    <Box component='div' px={6} bgcolor='#fff'>
        <Box sx={{margin: '2rem', paddingTop: '6rem'}}>
        <Typography variant='h4' textAlign='center' color='#34548c' textTransform='capitalize'>TITLE</Typography>
            <Typography variant='h6' textAlign='center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, unde.</Typography>
        <hr className='m-auto my-3' style={{background: 'red', width: "50px", height: "2px"}} />
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'flex-start', background: 'url("https://i.dell.com/is/image/DellContent/content/dam/web-resources/cross-project/images/lifestyle/intro-column-control-bg-1600x400.jpg?wid=1600&fit=constrain")', minHeight: '340px', backgroundSize: 'cover'}}>
            <Box width='700px' padding='2rem' alignSelf='center' marginLeft= '3rem'>
                <Typography color='#fff' fontSize={34}>Lorem ipsum dolor sit amet.</Typography>
                <Typography color='#fff' py={2}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum earum architecto quia eveniet doloribus sapiente iure labore aliquid aperiam.</Typography>
                <Button variant='contained' sx={{background: '#fff !important', color: '#34548c !important'}}>Lorem.</Button>
            </Box>
        </Box>
    </Box>
    <Box component='div' px={6} bgcolor='#fff'>
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
    </Box>
    </>
  )
}

export default NetworkingEquipment