import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import { Box, Container, Paper } from '@mui/material';
import { red } from '@mui/material/colors'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ShopIndex = () => {
    const color = red[500];
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1024 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 1024, min: 768 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 768, min: 640 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 640, min: 0 },
          items: 1,
        },
      };

      const data = [
        {
          id: 1,
          img: '/logoAndIcons/touch.svg',
          name: 'HP Notebook - 15-da2915nia',
          category: 'computer',
          desc: 'Orbit™ is an aggressive, unidirectional presentation laser bar code scanner. Lightweight and rugged, Orbit is small in size but BIG in performance. Orbit is Honeywell’s first point-of-sale bar code scanner to incorporate holographic technology',
          price: 'N450,000.00'
        }
      ]
      const items = [1,2,3,4,5,6,7,8,9]

  return (
    <div className="container">
        <Carousel
        // showDots={true}
        responsive={responsive}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="px-3"
        autoPlay
        infinite
        >
          {items.map((item, i)=> (
            <Card sx={{ maxWidth: 345 }} elevation={6}>
                <Paper sx={{textAlign: "right", padding: "3px"}}>
                    <img src='/logoAndIcons/touch.svg' width={20} />
                </Paper>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="/images/hp.jpg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        HP Notebook - 15-da2915nia
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Computers
                    </Typography>
                </CardContent>
                <CardActions sx={{display: "flex", justifyContent: "space-between"}}>
                    <Box color={'#ffdc12'}>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                    </Box>
                </CardActions>
                <CardActions sx={{display: "flex", justifyContent: "space-between"}}>
                    <Typography variant="body2" color={color}>N450,000.00</Typography>
                    <AddShoppingCartIcon />
                </CardActions>
            </Card>
          ))}
        {/* <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div> */}
        </Carousel>
    </div>
  )
}

export default ShopIndex